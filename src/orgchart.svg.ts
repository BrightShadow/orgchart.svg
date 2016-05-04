/// <reference path="../typings/browser.d.ts" />
import 'snapsvg';
import 'snap.svg.zpd';
import {OrgChartConfig} from "./org.chart.config";
import {OrgChartNode} from "./orgchart.node";
import {NodeOptions} from "./node.options";
import {OrgChartLevelNode} from "./orgchart.level.node";
import {ChartLevelInfo} from "./orgchart.level.info";
import {OrgChartConnectorOptions} from "./orghcart.connector.options";
import {TipOverOptions} from "./tip.over.options";
import {ConfigDebugOptions} from "./config.debug.options";
import {RenderBoxEventArgs} from "./orgchart.events";
import {RenderedChartNode} from "./orgchart.events";
import {RenderEventArgs} from "./orgchart.events";
import {BoxClickEventArgs} from "./orgchart.events";
import {ConnectorType} from "./connector.type";
import {NodeToggleEventArgs} from "./orgchart.events";

export class OrgChartSvg {
	private levels:ChartLevelInfo[] = [];
	private snap:Snap.Paper;
	private lineGroups:{[id: string] : Snap.Element} = {};
	private linesGroupIdPrefix:string = 'orgchartLinesGroup';
	private lineParentIdAttribute:string = 'orgchart-line-parent-id';
	private lineToAttr:string = 'orgchart-line-to';
	private lineHorizontal:string = 'orgchart-line-horizontal';
	private nodesGroupIdPrefix:string = 'orgchartGroup';
	private nodeIdPrefix:string = 'orgchartNode';
	private rootNodePosition:{
		x: number,
		y: number,
		width: number,
		height: number
	};

	constructor(private config?:OrgChartConfig) {
		var self = this;
		if (!config) {
			this.initDefaultConfig();
		}
		//
		this.snap = Snap('#orgChartSvg');
		this.analyzeTreeLevels(this.config.nodes); // create all levels for tree
		this.calcChildren(this.config.nodes);
		this.render();
		(<any>this.snap).zpd({
			zoom: true,
			pan: true,
			zoomScale: 0.3,
			zoomThreshold: [
				0.3,
				3
			]
		});

		//var matrix: any = (<any>this.snap).zpd('save');
		//var id = '#snapsvg-zpd-'+ (<any>this.snap).id;
		//var canvas: Snap.Element = Snap.select(id);
		//
		//
		//
		//canvas.attr({
		//	transform: "matrix(1,0,0,1," + (-this.rootNodePosition.x) + "," + (-this.rootNodePosition.y) + ")"
		//});
	}

	private initDefaultConfig() {
		this.config = OrgChartConfig.defaultConfig();
	}

	private clear() {
		// clear SVG content
	}

	private analyzeTreeLevels(node:OrgChartNode, level:number = 0) {
		this.createLevelIfNotExists(level);
		level++;

		if (this.isNodeTipOver(node)) {
			return this.calcTipOverChildren(node, level, null, true);
		}

		if (node.children !== null && node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				this.analyzeTreeLevels(node.children[i], level);
			}
		}
	}

	/**
	 * Checks  the node children should be stack in tip-over convention.
	 * @param node An input node to check.
	 * @returns {boolean} Returns true or false regarding it is a candidate to tip-over children or not.
	 */
	private isNodeTipOver(node:OrgChartNode):boolean {
		return node.tipOverChildren || node.children.length >= this.config.tipOverOptions.tipOverChildrenCount;
	}

	private createPlaceholder(levelNode:OrgChartLevelNode, level:number):OrgChartLevelNode {
		var placeholderNode = <OrgChartLevelNode>{};
		placeholderNode.width = levelNode.width;
		placeholderNode.height = this.config.nodeOptions.height; // TODO: use probably 0 as height
		placeholderNode.containerWidth = levelNode.containerWidth;
		placeholderNode.isPlaceholder = true;
		placeholderNode.level = level;
		return placeholderNode;
	}

	/**
	 * The same method as calcChildren but calculate a tip-over subtree, not a default subtree tree.
	 * Traverses across the three through the children to calculate the widths of nodes and their containers.
	 * Method adds also all node level info records to levels. It is a source info for render method.
	 * @param node A parent node to check.
	 * @param level Current level for the parent node.
	 * @returns {number} A total container width for the node.
	 */
	private calcTipOverChildren(node:OrgChartNode, level:number = 0, parentNode:OrgChartLevelNode = null, justAnalyze:boolean = false):number {
		var containerWidth = 0;
		var nodeIndexInLevel = 0;
		var levelNode:OrgChartLevelNode = null;

		if (!justAnalyze) {
			// add current node
			levelNode = this.buildLevelNode(node, level, true);
			if (parentNode && parentNode !== null) {
				parentNode.childNodes.push(levelNode); // add level node child
			}
		}

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			// calculate number of columns
			var columnWidths:number[] = [];
			var childIndex = 0;
			var columnIndex = 0;
			var lineIndex = 0;
			var linesCount;
			var tipOverPlaceholdersCount;
			var columns = Math.floor(node.children.length / this.config.tipOverOptions.maxColumnHeight);
			columns += node.children.length % this.config.tipOverOptions.maxColumnHeight > 0 ? 1 : 0;
			linesCount = Math.ceil(node.children.length / columns);
			tipOverPlaceholdersCount = columns * linesCount - node.children.length;

			if (justAnalyze) {
				for (var i = 0; i < linesCount; i++) {
					this.createLevelIfNotExists(level);
					level++;
				}
			}
			else {
				for (var c = 0; c < columns; c++) {
					columnWidths[c] = 0;
				}

				levelNode.tipOverParent = true;
				levelNode.tipOverColumns = columns;
				levelNode.parentNode = parentNode;

				for (var i = 0; i < node.children.length; i++) {
					var childLevelNode = this.buildLevelNode(node.children[childIndex], level, true);
					childLevelNode.tipOverChild = true;
					childLevelNode.tipOverColumns = columns;
					childLevelNode.tipOverColumnIndex = columnIndex;
					childLevelNode.tipOverLineIndex = lineIndex;
					childLevelNode.tipOverLinesCount = linesCount;
					childLevelNode.tipOverLastChild = i === node.children.length - 1;
					childLevelNode.tipOverFirstChild = i === 0;
					childLevelNode.parentNode = levelNode;

					// there is a regularity that always a number of last children
					// equal number of columns hasn't box below
					childLevelNode.tipOverHasNodeBelow = i < (node.children.length - columns);

					// TODO: Calc subtrees of children, here now we assume that stacked children do not have own children
					var width = this.getSingleNodeWidth(childLevelNode);
					columnWidths[columnIndex] = Math.max(columnWidths[columnIndex], width);
					childLevelNode.containerWidth = width + this.config.nodeOptions.gapH * 2;

					levelNode.childNodes.push(childLevelNode); // add level node child

					childIndex++;
					columnIndex++;
					if (columnIndex == columns) {
						columnIndex = 0;
						level++;
						lineIndex++;
					}
				}

				// generate missing placeholders
				this.generatePlaceholdersForTipOverTree(level, tipOverPlaceholdersCount, columns);

				levelNode.tipOverParentLastColumnWidth = columnWidths[columnWidths.length - 1];
				containerWidth = this.getTipOverTreeWidth(columnWidths);
				levelNode.containerWidth = containerWidth;
			}
		}
		else {
			if (justAnalyze) {
				this.createLevelIfNotExists(level);
			}
			else {
				containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
				levelNode.containerWidth = containerWidth;
				this.generateNodePlaceholders(levelNode);
			}
		}

		return containerWidth;
	}

	/**
	 * Builds new level node record using existing node and level,
	 * creates also level if it is needed to create a level node.
	 * @param node A ChartNode record
	 * @param level A level to be used to assign with the node
	 * @param addNode Determines if new level node should be added to levels after creation.
	 * @returns {OrgChartLevelNode} New level node with 0 containerWidth.
	 */
	private buildLevelNode(node:OrgChartNode, level:number, addNode:boolean = false):OrgChartLevelNode {
		var levelNode = <OrgChartLevelNode>node;
		levelNode.width = this.getSingleNodeWidth(levelNode);
		levelNode.height = this.getSingleNodeHeight(levelNode);
		levelNode.containerWidth = 0;
		levelNode.level = level;
		levelNode.childNodes = [];

		if (addNode) {
			try {
				this.createLevelIfNotExists(level);
				levelNode.nodeIndexInLevel = this.levels[level].nodes.length;
				this.levels[level].nodes.push(levelNode);
			}
			catch (e) {
				console.error('Level ' + level + ' doesn\'t exist yet.\n' + e);
			}
		}

		return levelNode;
	}

	private getTipOverTreeWidth(columns:number[]):number {
		var containerWidth = 0,
			gapsWidth:number = this.config.nodeOptions.gapH * this.getGapsCountForTipOverColumns(columns.length);

		for (var c = 0; c < columns.length; c++) {
			containerWidth += columns[c];
		}

		return containerWidth + gapsWidth;
	}

	/**
	 * Calculates a special number of gaps used to position the tip-over columns.
	 * @param columnsCount A number of columns.
	 * @returns {number} Value which multiplied by gapH will result in the width of all column gaps.
	 */
	private getGapsCountForTipOverColumns(columnsCount:number):number {
		// n:		1	2	3	4	5	6	7	8	9	10	11	12...
		// result:	1	2	4	5	7	8	10	11	13	14	16	17...
		//return columnsCount + (Math.ceil(columnsCount/2) - 1) + 2;

		return (columnsCount - 1) * 2 + 2;
	}

	/**
	 * Creates new level of nodes in a set, if not exists.
	 * @param level A level index which is required to exist.
	 */
	private createLevelIfNotExists(level:number) {
		if (this.levels.length < level + 1) {
			this.levels.push(<ChartLevelInfo>{
				nodes: [],
				tipOver: false,
				level: level
			}); // create level record if missing
		}
	}

	/**
	 * Traverses into the three through the children to calculate the widths of nodes and their containers.
	 * Method adds also all node level info records to levels. It is a source info for render method.
	 * @param node A parent node to check.
	 * @param level Current level for the parent node.
	 * @returns {number} A total container width for the node.
	 */
	private calcChildren(node:OrgChartNode, level:number = 0, parentNode:OrgChartLevelNode = null):number {
		var containerWidth = 0,
			levelNode:OrgChartLevelNode;

		if (this.isNodeTipOver(node)) {

			return this.calcTipOverChildren(node, level, parentNode);
		}

		// add current node
		levelNode = this.buildLevelNode(node, level, true);
		levelNode.parentNode = parentNode; // assign parent reference
		if (parentNode && parentNode !== null) {
			parentNode.childNodes.push(levelNode); // add level node child
		}

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				containerWidth += this.calcChildren(node.children[i], level, levelNode);
			}
			levelNode.containerWidth = containerWidth;
		}
		else {
			containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
			levelNode.containerWidth = containerWidth;
			this.generateNodePlaceholders(levelNode);
		}
		return containerWidth;
	}

	/**
	 * Generates a placeholder nodes below the node down to
	 * last level. The node musn't have children.
	 * @param levelNode The node to be processed.
	 * @returns {number} A number of placeholders added below the given level node.
	 */
	private generateNodePlaceholders(levelNode:OrgChartLevelNode):number {
		var iterations = this.levels.length - levelNode.level - 1;
		for (var i = 1; i <= iterations; i++) {
			var currentLevel = levelNode.level + i;
			var placeholderNode = this.createPlaceholder(levelNode, currentLevel);
			this.levels[currentLevel].nodes.push(placeholderNode);
		}
		return iterations;
	}

	private generatePlaceholdersForTipOverTree(level:number, count:number, columnsCount:number) {
		if (count > 0) {
			// first add missing placeholders inside a tip-over tree
			var prevLevelNodes = this.levels[level - 1].nodes;
			for (var i = 0; i < count; i++) {
				var levelNodeAbove:OrgChartLevelNode = prevLevelNodes[prevLevelNodes.length - count + i];
				var placeholderNode = this.createPlaceholder(levelNodeAbove, level);
				this.levels[level].nodes.push(placeholderNode);
			}
		}
		else {
			level--; // decrease level by one because it denotes the next below tip-over tree
		}

		// missing placeholders below the tree
		var levels = this.levels.length - level - 1;
		for (var i = 1; i <= levels; i++) {
			level++;
			for (var x = 0; x < columnsCount; x++) {
				var levelNodeAbove:OrgChartLevelNode = this.levels[level].nodes[x];
				var placeholderNode = this.createPlaceholder(levelNodeAbove, i);
				this.levels[level].nodes.push(placeholderNode);
			}
		}

	}

	private getSingleNodeWidth(node:OrgChartNode):number {
		/*
		 TODO: add handling node options overriding here, to override e.g. width of the node using
		 node specific styling etc.
		 */
		return this.config.nodeOptions.width;
	}

	private getSingleNodeHeight(node:OrgChartNode):number {
		/*
		 TODO: add handling node options overriding here, to override e.g. width of the node using
		 node specific styling etc.
		 */
		return this.config.nodeOptions.height;
	}

	private render() {
		var margin = this.config.nodeOptions.margin;
		var templatesFragment:string = '';
		var parsedFragment:any;
		var left = 10;
		var top = 10;
		var gapX = this.config.nodeOptions.gapH;
		var gapY = this.config.nodeOptions.gapV;
		var hLineX1:number,
			hLineX2:number,
			hLineY:number,
			hLineNodes:number = 0,  // number of nodes processed for the current horizontal line
			nextParent:OrgChartLevelNode = null,
			currentNodeParentId:string = null, // actual node parent id, to check if the h line should be drawn
			firstNodeParentId:string = null; // parent id of first node of the current h line, needed to determine if h line should be drawn
		var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;
		var horizontalLineStartId = '';

		// BEFORE RENDER EVENT
		templatesFragment = this.fireEventBeforeRender(templatesFragment);

		for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
			var level = this.levels[levelIdx];
			var lastLevel = levelIdx === this.levels.length - 1;
			nextParent = null;
			currentNodeParentId = null;
			firstNodeParentId = null;
			hLineNodes = 0;

			top = levelIdx * (this.config.nodeOptions.height + gapY) + 10;
			left = 10;

			for (var i = 0; i < level.nodes.length; i++) {
				var node = level.nodes[i];
				var marginLeft = (node.containerWidth - node.width) / 2;
				var x = left + marginLeft;
				var y = top;

				if (i === 0 && levelIdx === 0) {
					// root
					this.rootNodePosition = {
						x: x,
						y: y,
						width: node.containerWidth,
						height: node.height
					};
				}

				var onRenderBoxArgs = <RenderBoxEventArgs>{};
				onRenderBoxArgs.x = x;
				onRenderBoxArgs.y = y;
				onRenderBoxArgs.width = node.width;
				onRenderBoxArgs.height = node.height;
				onRenderBoxArgs.node = this.buildRenderedChartNode(node, levelIdx, i);
				onRenderBoxArgs.paper = this.snap;
				onRenderBoxArgs.config = this.config;

				if (!node.tipOverChild) {
					if (i > 0 && level.nodes[i - 1].tipOverChild) {
						hLineNodes = 0;
					}

					if (hLineNodes === 0) {
						hLineX1 = x + node.width / 2;
						hLineY = y - gapY / 2;
						horizontalLineStartId = node.id;
						firstNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;
					}

					currentNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;

					hLineX2 = x + node.width / 2;
					if (i + 1 < level.nodes.length) {
						nextParent = level.nodes[i + 1];
					}
					else {
						nextParent = null;
					}

					if (!node.isPlaceholder) {
						hLineNodes++; // one node more

						this.fireEventBoxRender(onRenderBoxArgs, node);

						if (levelIdx !== 0) {
							// top line
							this.renderConnectorLine(x + node.width / 2, y - gapY / 2, x + node.width / 2, y - margin.top, node, ConnectorType.up);
						}

						if (node.children !== null && node.children.length > 0) {
							// bottom line
							this.renderConnectorLine(x + node.width / 2, y + node.height + gapY / 2, x + node.width / 2, y + node.height + margin.bottom, node, ConnectorType.down);
						}

						// draw horizontal lines
						if (levelIdx > 0) {
							if (hLineNodes > 1) {
								// && currentNodeParentId === firstNodeParentId
								if ((nextParent === null || (node.parentId !== nextParent.parentId))) {
									// parent was changed, lets draw line
									// horizontal line - default
									var hInfo = '';
									if (horizontalLineStartId !== '') {
										hInfo = horizontalLineStartId + '-' + node.id;
									}

									this.renderConnectorLine(hLineX1 - halfLineWidth, hLineY, hLineX2 + halfLineWidth, hLineY, node, ConnectorType.horizontal, hInfo);
									hLineNodes = 0;
								}
							}
						}
					}
					else {
						hLineNodes = 0;
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							this.fireEventBoxRender(onRenderBoxArgs, node);
						}
					}

					left += node.containerWidth;
				}
				else {
					// tip over child
					var evenColumn = (node.tipOverColumnIndex + 1) % 2 === 0;
					var lastColumn = node.tipOverColumnIndex === node.tipOverColumns - 1;
					var firstLine = node.tipOverLineIndex === 0;
					var lastLine = node.tipOverLineIndex === node.tipOverLinesCount - 1;


					// draw top horizontal line for the tip-over group
					if (node.tipOverFirstChild && node.tipOverColumns > 2) {
						var x1 = x + node.width + gapX - halfLineWidth;
						var x2 = x + node.parentNode.containerWidth - node.parentNode.tipOverParentLastColumnWidth - gapX * 3 + halfLineWidth;
						var lineY = y - gapY / 2;
						// parent was changed, lets draw line
						// horizontal line - tip-over
						this.renderConnectorLine(x1, lineY, x2, lineY, node, ConnectorType.horizontalTipOver);
					}
					else if (node.tipOverFirstChild && node.tipOverColumns === 1) {
						// one single column
						var x1 = x - gapX - halfLineWidth;
						var x2 = x + node.parentNode.width / 2 + halfLineWidth;
						var lineY = y - gapY / 2;
						// parent was changed, lets draw line
						// horizontal line - tip-over
						this.renderConnectorLine(x1, lineY, x2, lineY, node, ConnectorType.horizontalSingleTipOver);
					}

					left += node.containerWidth;

					if (!node.isPlaceholder) {
						hLineNodes++; // one node more
						this.fireEventBoxRender(onRenderBoxArgs, node);

						if (levelIdx !== 0 && !lastColumn && !evenColumn) {
							// right line
							this.renderConnectorLine(x + node.width + gapX + halfLineWidth, y + node.height / 2, x + node.width + margin.right, y + node.height / 2, node, ConnectorType.right);
						}

						if ((node.tipOverColumnIndex > 0 && evenColumn) || lastColumn) {
							// left line
							this.renderConnectorLine(x - gapX - halfLineWidth, y + node.height / 2, x - margin.left, y + node.height / 2, node, ConnectorType.left);

							if (firstLine) {
								// up line
								this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y - gapY / 2, node, ConnectorType.leftUp);
							}
							else {
								// up line to cross
								this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y - gapY, node, ConnectorType.leftUp);
							}
						}

						if (node.tipOverLastChild && node.tipOverLinesCount > 1 && !evenColumn && node.tipOverColumns > 1
							&& node.tipOverColumnIndex < node.tipOverColumns - 1) {
							// up line to cross
							this.renderConnectorLine(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y - gapY, node, ConnectorType.rightUp);
						}

						if (node.tipOverHasNodeBelow) {
							if ((!lastColumn && !evenColumn)) {
								// down line (on the right box site)
								this.renderConnectorLine(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y + node.height, node, ConnectorType.rightUp);
							}
							else if (lastColumn && node.tipOverColumns % 2 === 1) {
								// down line (on the left box site)
								this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y + node.height, node, ConnectorType.leftDown);								//
							}
						}
					}
					else {
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							this.fireEventBoxRender(onRenderBoxArgs, node);
						}
					}
				}
			}
		}

		// render all boxes
		if (this.levels.length > 0 && this.levels[0].nodes.length > 0) {
			var str = this.joinTemplatesFragments(this.levels[0].nodes[0], templatesFragment);
			parsedFragment = Snap.parse(str);
			this.snap.append(parsedFragment);

			this.attachOrgChartEvents();
		}
	}

	private renderConnectorLine(x:number, y:number, x2:number, y2:number, node:OrgChartLevelNode, connectorType:ConnectorType, fromToHorizontal:string = null) {
		var params = {
			strokeWidth: this.config.connectorOptions.strokeWidth,
			stroke: this.config.connectorOptions.color,
		};

		params[this.lineParentIdAttribute] = node.parentId;
		params[this.lineToAttr] = '';
		params['orgchart-line-type'] = ConnectorType[connectorType];

		if (connectorType === ConnectorType.horizontal) {
			params[this.lineHorizontal] = fromToHorizontal;
		}

		if (connectorType === ConnectorType.left ||
		    connectorType === ConnectorType.right ||
			connectorType === ConnectorType.up) {
			params[this.lineToAttr] = node.id;
		}


		var line = this.snap.line(x, y, x2, y2).attr(params);
		var id, parentId;
		var group:Snap.Element;

		if (connectorType === ConnectorType.down) {
			id = node.id;
			parentId = node.parentId ? node.parentId : null;
		}
		else {
			id = node.parentId;
			parentId = node.parentNode && node.parentNode.parentId ? node.parentNode.parentId : null;
		}

		group = this.lineGroups[id];
		if (!group) {
			group = this.snap.group().attr({
				id: this.linesGroupIdPrefix + id
			});
			this.lineGroups[id] = group;

			if (parentId !== null) {
				this.lineGroups[parentId].add(group);
			}
		}

		group.add(line);
	}

	private buildRenderedChartNode(node:OrgChartLevelNode, level:number, index:number):RenderedChartNode {
		var renderedNode = <RenderedChartNode>{};
		renderedNode.id = node.id;
		renderedNode.parentId = node.parentId;
		renderedNode.data = node.data;
		renderedNode.tipOverChildren = node.tipOverChildren;
		renderedNode.children = node.children;
		renderedNode.isPlaceholder = node.isPlaceholder;
		renderedNode.rowIndex = level;
		renderedNode.columnIndex = index;
		return renderedNode;
	}

	/**
	 * Joins all node templates and fragments into one single string ready to render.
	 * Nodes are joined wrapping them in SVG groups, to allow further tree manipulation after render.
	 * @param rootNode A root node of the whole tree.
	 * @param fragment An initial fragment which will be concatenated with other fragments.
	 * @returns {string} A final fragment ready to render.
	 */
	private joinTemplatesFragments(rootNode:OrgChartLevelNode, fragment:string = ''):string {
		var childrenFragment = '';
		if (rootNode.childNodes !== null && rootNode.childNodes.length > 0) {
			for (var i = 0; i < rootNode.childNodes.length; i++) {
				childrenFragment = this.joinTemplatesFragments(rootNode.childNodes[i], childrenFragment);
			}

			childrenFragment = this.surroundWithColumnGroup(childrenFragment, rootNode);
		}

		return fragment + rootNode.representationString + childrenFragment;
	}

	/**
	 * Wraps template of node box in group tag with additional information about the node,
	 * e.g. the x,y coordinates and width,height of the node box.
	 * Note: The information is used in collapse/expand behavior and to position the box in the diagram.
	 * @param template The template of the node - filled in with data.
	 * @param args Arguments used to extract information for attributes.
	 * @returns {string} Wrapped template string ready to add to the SVG DOM.
	 */
	private wrapTemplateInfoGroup(template:string, args:RenderBoxEventArgs):string {
		var nodeInfo:Array<number> = [
			args.x,
			args.y,
			args.width,
			args.height,
			args.node.columnIndex,
			args.node.rowIndex
		];

		var group = '<g ' +
			'id="' + this.nodeIdPrefix + args.node.id + '"' +
			'class="' + this.config.nodeOptions.nodeClass + '" width="' + args.width + '" ' +
			'height="' + args.height + '" ' +
			'transform="translate(' + args.x + ', ' + args.y + ')" ' +
			this.config.nodeOptions.nodeAttribute + '="' + JSON.stringify(nodeInfo) + '" ' +
			'>' + template + '</g>';

		return group;
	}

	private surroundWithColumnGroup(fragment:string, parent:OrgChartLevelNode):string {
		var prefix = '',
			suffix = '';
		prefix = '<g id="' + this.nodesGroupIdPrefix + parent.id + '">';
		suffix = '</g>';

		return prefix + fragment + suffix;
	}

	private fireEventBeforeRender(templatesFragment:string):string {
		if (this.config.onBeforeRender) {
			var onRenderArgs = <RenderEventArgs>{};
			onRenderArgs.paper = this.snap;
			onRenderArgs.config = this.config;

			var tpl = this.config.onBeforeRender(onRenderArgs);

			if (tpl && tpl !== null) {
				templatesFragment += tpl;
			}
		}

		return templatesFragment;
	}

	private fireEventBoxRender(onRenderBoxArgs:RenderBoxEventArgs, node:OrgChartLevelNode) {
		if (this.config.onBoxRender) {

			var tpl = this.config.onBoxRender(onRenderBoxArgs);

			if (tpl !== undefined && tpl !== null) {
				// save representation string for future use in render
				node.representationString = this.wrapTemplateInfoGroup(tpl, onRenderBoxArgs);
			}
		}
	};

	/**
	 * A post render event attacher. Attaches all events handled by the chart, called
	 * user interaction events.
	 */
	private attachOrgChartEvents() {
		if (this.config.onBoxClick) {
			var self = this;
			var nodesSet:Snap.Element[] = <any>this.snap.selectAll('.' + this.config.nodeOptions.nodeClass + ' .' + this.config.nodeOptions.clickableBoxClass);
			for (var i = 0; i < nodesSet.length; i++) {
				nodesSet[i].click((event:MouseEvent) => {
					var args = <BoxClickEventArgs>{};
					var element = <HTMLElement>event.currentTarget;
					var tagName = element.tagName.toUpperCase();

					// find parent wrapping group for node box
					while (tagName !== 'BODY' && !element.hasAttribute(self.config.nodeOptions.nodeAttribute)) {
						element = element.parentElement;
					}

					var info:Array<number> = JSON.parse(element.getAttribute(self.config.nodeOptions.nodeAttribute));
					// [0] = x
					// [1] = y
					// [2] = width
					// [3] = height
					// [4] = index
					// [5] = level
					var level = info[5],
						index = info[4],
						levelNode = self.levels[level].nodes[index];

					args.node = this.buildRenderedChartNode(levelNode, level, index);
					args.event = event;

					if (self.config.onBoxClick) {
						self.config.onBoxClick(args);
					}
				});
			}
		}

		if (this.config.onNodeToggle || this.config.nodeOptions.collapsible) {
			var self = this;
			var nodesSet:Snap.Element[] = <any>this.snap.selectAll('.' + this.config.nodeOptions.nodeClass + ' .' + this.config.nodeOptions.collapseButtonClass);
			for (var i = 0; i < nodesSet.length; i++) {
				nodesSet[i].click((event:MouseEvent) => {
					var args = <NodeToggleEventArgs>{};
					var element = <HTMLElement>event.currentTarget;
					var tagName = element.tagName.toUpperCase();

					// find parent wrapping group for node box
					while (tagName !== 'BODY' && !element.hasAttribute(self.config.nodeOptions.nodeAttribute)) {
						element = element.parentElement;
					}

					var info:Array<number> = JSON.parse(element.getAttribute(self.config.nodeOptions.nodeAttribute));
					// [0] = x
					// [1] = y
					// [2] = width
					// [3] = height
					// [4] = index
					// [5] = level
					var level = info[5],
						index = info[4],
						levelNode = self.levels[level].nodes[index];

					args.node = this.buildRenderedChartNode(levelNode, level, index);
					args.event = event;
					args.isCollapsed = levelNode.childNodes && levelNode.childNodes !== null && levelNode.childNodes.length > 0 ? !levelNode.childrenCollapsed : false;

					if (self.config.onNodeToggle) {
						self.config.onNodeToggle(args);
					}

					if (self.config.nodeOptions.collapsible) {
						self.toggleNodeCollapse(levelNode, info);
					}
				});
			}
		}
	}

	/**
	 * Performs a toggle collapse/expand behavior.
	 * @param levelNode A node which will be treated as central node.
	 * @param infoRecord Additional information record for node - it is saved in the node element attribute.
     */
	private toggleNodeCollapse(levelNode:OrgChartLevelNode, infoRecord:number[]) {
		levelNode.childrenCollapsed = !levelNode.childrenCollapsed;

		if (!this.collapseCentralNode(levelNode, infoRecord)) return; // cancel

		// transforming neighbors
		var widthDelta = levelNode.containerWidth - levelNode.width;
		var moveDelta = widthDelta / 2; // half of total delta for each neighbor
		var isCollapsed = levelNode.childrenCollapsed;

		// adjust all siblings of center node and its parents
		while (levelNode !== null) {
			var siblings = this.getNodeSiblings(levelNode);
			this.adjustSiblingNodesByDelta(levelNode, isCollapsed, moveDelta, siblings);

			levelNode = levelNode.parentNode;
		}
	}

	/**
	 * Founds all siblings for the given central node.
	 * @param levelNode A central node whom siblings are searched for.
	 * @returns {SiblingNodesSet} A set of siblings on the left and right side.
     */
	private getNodeSiblings(levelNode: OrgChartLevelNode): SiblingNodesSet{
		var result = <SiblingNodesSet>{
			left: [],
			right: []
		};

		if (levelNode.parentNode && levelNode.parentNode !== null) {
			var left = true;
			for (var i = 0; i < levelNode.parentNode.childNodes.length; i++) {
				var child = levelNode.parentNode.childNodes[i];
				if (child.id === levelNode.id) {
					left = false;
				}
				else {
					if (left) {
						result.left.push(child);
					} else {
						result.right.push(child);
					}
				}
			}
		}

		return result;
	}

	/**
	 * Collapses given node, by collapsing all its children - using animation.
	 * @param levelNode A central node whom children will be collapsed/expanded.
	 * @param infoRecord An additional record information.
	 * @returns {boolean} True if the operation succeeded or false when not or when was canceled.
     */
	private collapseCentralNode(levelNode: OrgChartLevelNode, infoRecord:number[]) : boolean {
		// [0] = x
		// [1] = y
		// [2] = width
		// [3] = height
		// [4] = index
		// [5] = level
		var x = infoRecord[0],
			y = infoRecord[1],
			width = infoRecord[2],
			height = infoRecord[3];
		var groupNode: Snap.Element;
		var groupMatrix = new Snap.Matrix();
		var lineMatrix = new Snap.Matrix();
		var groupNodeMatrix:Snap.Matrix;
		var animDuration = this.config.collapsingDuration;

		groupNode = this.findNodesGroupByParentId(levelNode.id);// this.snap.select(selector);

		if (!groupNode || groupNode === null) return false;

		groupNodeMatrix = groupNode.transform().localMatrix;
		var levelNodeElement = this.findNodeById(levelNode.id);
		var groupNodeDeltaX = parseFloat(levelNodeElement.attr('delta-x') ? levelNodeElement.attr('delta-x') : '0');
		var lineGroupNode = this.findLinesGroupById(levelNode.id);
		var lineNodeMatrix = lineGroupNode.transform().localMatrix;

		if (levelNode.childrenCollapsed) {
			groupMatrix = groupNodeMatrix.scale(0, 0, x + width / 2, y + height / 2);
			lineMatrix = lineNodeMatrix.scale(0, 0, x + width / 2, y + height / 2);
			groupNode.animate({transform: groupMatrix}, animDuration, mina.easein, () => {
				groupNode.attr({opacity: 0});
				groupNode.transform('s1,1');
			});

			lineGroupNode.animate({transform: lineMatrix}, animDuration, mina.easein, () => {
				lineGroupNode.attr({opacity: 0});
				lineGroupNode.transform('s1,1');
			});
		} else {
			groupNode.animate({transform: new Snap.Matrix().translate(groupNodeDeltaX, 0).scale(0, 0, x + width / 2, y + height / 2)}, 0, mina.easein, () => {
				groupNode.attr({opacity: 1});
				groupMatrix.scale(1, 1).translate(groupNodeDeltaX, 0);
				groupNode.animate({transform: groupMatrix}, animDuration);
			});

			lineGroupNode.animate({transform: new Snap.Matrix().translate(groupNodeDeltaX, 0).scale(0, 0, x + width / 2, y + height / 2)}, 0, mina.easein, () => {
				lineGroupNode.attr({opacity: 1});
				lineMatrix.scale(1, 1).translate(groupNodeDeltaX, 0);
				lineGroupNode.animate({transform: lineMatrix}, animDuration);
			});
		}

		return true;
	}

	/**
	 * Moves closer for collapse, further for expand, all sibling nodes - groups.
	 * @param levelNode A central node - expanded or collapsed.
	 * @param moveDelta A width by whom the sibling nodes are moved.
	 * @param siblings A collection of siblings found for levelNode.
     */
	private adjustSiblingNodesByDelta(levelNode: OrgChartLevelNode, isCollapsed: boolean, moveDelta: number, siblings: SiblingNodesSet) {
		var animDuration = this.config.collapsingDuration;
		var neighbors = siblings;
		var startNode = neighbors.left.length > 0 ? neighbors.left[0] : levelNode,
			endNode = neighbors.right.length > 0 ? neighbors.right[neighbors.right.length - 1] : levelNode;

		if (!isCollapsed) {
			moveDelta = -moveDelta;
		}

		// collapse horizontal line
		if (startNode.id != endNode.id) {
			var line = this.snap.select('['+this.lineHorizontal+'="' + startNode.id + '-' + endNode.id + '"]');
			if (line !== null) {
				var attrs: any = {};

				if (startNode.id !== levelNode.id) { //
					attrs.x1 = parseFloat(line.attr('x1')) + moveDelta;
				}

				if (endNode.id !== levelNode.id) { //
					attrs.x2 = parseFloat(line.attr('x2')) - moveDelta;
				}

				line.animate(attrs, animDuration);
			}
		}

		// nodes on left
		for (var i = 0; i < neighbors.left.length; i++) {
			var id = neighbors.left[i].id;
			var node = this.findNodeById(id);
			node.animate({
				transform: node.transform().localMatrix.translate(moveDelta, 0)
			}, animDuration);

			var childNodesGroup = this.findNodesGroupByParentId(id);
			if (childNodesGroup !== null) {
				childNodesGroup.animate({
					transform: childNodesGroup.transform().localMatrix.translate(moveDelta, 0)
				}, animDuration);
			}

			var childLinesGroup = this.findLinesGroupById(id);
			if (childLinesGroup && childLinesGroup !== null) {
				childLinesGroup.animate({
					transform: childLinesGroup.transform().localMatrix.translate(moveDelta, 0)
				}, animDuration);
			}

			var filter = new FindLinesFilter();
			filter.lineTo = id;
			var topLines = this.findLinesByFilter(filter);
			if (topLines && topLines !== null) {
				for (var c = 0; c < topLines.length; c++) {
					topLines[c].animate({
						transform: topLines[c].transform().localMatrix.translate(moveDelta, 0)
					}, animDuration);
				}
			}

			if (node.attr('delta-x')) {
				var delta = parseFloat(node.attr('delta-x'));
				node.attr({
					'delta-x': delta + moveDelta
				});
			}
			else {
				node.attr({
					'delta-x': moveDelta
				});
			}
		}

		// nodes on right
		for (var i = 0; i < neighbors.right.length; i++) {
			var id = neighbors.right[i].id;
			var node = this.findNodeById(id);
			var matrix = node.transform().localMatrix.translate(-moveDelta, 0);
			node.animate({
				transform: matrix
			}, animDuration);

			var childNodesGroup = this.findNodesGroupByParentId(id);
			if (childNodesGroup !== null) {
				matrix = childNodesGroup.transform().localMatrix.translate(-moveDelta, 0);
				childNodesGroup.animate({
					transform: matrix
				}, animDuration);
			}

			var childLinesGroup = this.findLinesGroupById(id);
			if (childLinesGroup && childLinesGroup !== null) {
				childLinesGroup.animate({
					transform: childLinesGroup.transform().localMatrix.translate(-moveDelta, 0)
				}, animDuration);
			}

			var filter = new FindLinesFilter();
			filter.lineTo = id;
			var topLines = this.findLinesByFilter(filter);
			if (topLines && topLines !== null) {
				for (var c = 0; c < topLines.length; c++) {
					topLines[c].animate({
						transform: topLines[c].transform().localMatrix.translate(-moveDelta, 0)
					}, animDuration);
				}
			}

			if (node.attr('delta-x')) {
				var delta = parseFloat(node.attr('delta-x'));
				node.attr({
					'delta-x': delta - moveDelta
				});
			}
			else {
				node.attr({
					'delta-x': -moveDelta
				});
			}
		}
	}

	/**
	 * Finds all line elements matching the given filter.
	 * @param filter One of the filters in this object must used.
	 * @returns {Snap.Element[]}  A set of line elements.
     */
	private findLinesByFilter(filter: FindLinesFilter) : Snap.Element[] {
		var typeSelector = '',
			fromToSelector = '',
			parentIdSelector = '',
			selector;

		if (filter.connectorType && filter.connectorType !== null) {
			typeSelector = '[orgchart-line-type="' + ConnectorType[filter.connectorType] + '"]';
		}

		if (filter.lineTo && filter.lineTo !== null) {
			fromToSelector = '[' + this.lineToAttr + '="' + filter.lineTo + '"]';
		}

		if (filter.parentNodeId && filter.parentNodeId !== null) {
			parentIdSelector = '[' + this.lineParentIdAttribute + '="' + filter.parentNodeId + '"]';
		}

		selector = parentIdSelector + typeSelector + fromToSelector;
		if (selector === '') {
			return null;
		}

		return <any>this.snap.selectAll(selector);
	}

	/**
	 * Searches a group of lines for given parent node id.
	 * @param parentNodeId An id of node which is a parent of all nodes connected by those lines.
	 * @returns {Snap.Element} A nodes group element.
     */
	private findLinesGroupById(parentNodeId: string) : Snap.Element {
		return <any>this.snap.select('#' + this.linesGroupIdPrefix + parentNodeId);
	}

	/**
	* Searches a group of nodes for given parent node id.
	* @param parentNodeId An id of node which is a parent of all child nodes below the.
	* @returns {Snap.Element} A nodes group element.
	*/
	private findNodesGroupByParentId(parentNodeId: string) : Snap.Element {
		return <any>this.snap.select('#' + this.nodesGroupIdPrefix + parentNodeId);
	}

	/**
	 * Searches a single node element by its id.
	 * @param nodeId An id of node to find.
	 * @returns {Snap.Element} An element of the node.
     */
	private findNodeById(nodeId: string) : Snap.Element {
		return <any>this.snap.select('#' + this.nodeIdPrefix + nodeId);
	}
}

interface SiblingNodesSet {
	left: OrgChartLevelNode[];
	right: OrgChartLevelNode[];
}

class FindLinesFilter {
	public parentNodeId: string = null;
	public connectorType: ConnectorType = null;
	public lineTo: string = null;
}
