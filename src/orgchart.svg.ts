/// <reference path="../typings/browser.d.ts" />
import 'snapsvg';
import {OrgChartConfig} from "./org.chart.config";
import {ChartNode} from "./chart.node";
import {NodeOptions} from "./node.options";
import {ChartLevelNode} from "./chart.level.node";
import {ChartLevelInfo} from "./chart.level.info";
import {ConnectorOptions} from "./connector.options";
import {TipOverOptions} from "./tip.over.options";
import {ConfigDebugOptions} from "./config.debug.options";
import {RenderBoxEventArgs} from "./chart.events";
import {RenderedChartNode} from "./chart.events";

export class OrgChartSvg {
    private nodesSpacing: number;
    private nodes: { [id: string] : ChartNode; } = {};
	private levels: ChartLevelInfo[] = [];
	private snap: Snap.Paper;
	private placeholdersParents: ChartLevelNode[] = [];

    constructor(private config?: OrgChartConfig) {
		if (!config) {
			this.initDefaultConfig();
		}

		this.snap = Snap('#orgChartSvg');

		this.analyzeTreeLevels(this.config.nodes); // create all levels for tree
        this.calcPositions();
        this.render();
    }

	private initDefaultConfig() {
		this.config = OrgChartConfig.defaultConfig();
	}

	private clear() {
		// clear SVG content
	}

	private analyzeTreeLevels(node: ChartNode, level: number = 0) {
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
	private isNodeTipOver(node: ChartNode) : boolean {
		return node.tipOverChildren;
	}

    private calcPositions() {
		// 1. Prepare levels info
		this.calcChildren(this.config.nodes);
		console.log(this.levels);
		console.log(this.placeholdersParents);
    }

	private createPlaceholder(levelNode: ChartLevelNode, level: number): ChartLevelNode {
		var placeholderNode = <ChartLevelNode>{};
		placeholderNode.width = levelNode.width;
		placeholderNode.height = this.config.nodeOptions.height; // TODO: use probably 0 as height
		placeholderNode.containerWidth = levelNode.containerWidth;
		placeholderNode.isPlaceholder = true;
		placeholderNode.leftMargin = 0;
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
	private calcTipOverChildren(node: ChartNode, level: number = 0, parentNode: ChartLevelNode = null, justAnalyze: boolean = false) : number {
		var containerWidth = 0;
		var nodeIndexInLevel = 0;
		var levelNode: ChartLevelNode = null;

		if (!justAnalyze) {
			// add current node
			levelNode = this.buildLevelNode(node, level, true);
		}

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			// calculate number of columns
			var columnWidths: number[] = [];
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
					var width = this.getSingleNodeWidth(childLevelNode) + childLevelNode.leftMargin;
					columnWidths[columnIndex] = Math.max(columnWidths[columnIndex], width);
					childLevelNode.containerWidth = width + this.config.nodeOptions.gapH * 2;


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
		else
		{
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
	 * Builds new level node record using existing node and level.
	 * @param node A ChartNode record
	 * @param level A level to be used to assign with the node
	 * @param addNode Determines if new level node should be added to levels after creation.
	 * @returns {ChartLevelNode} New level node with 0 containerWidth.
     */
	private buildLevelNode(node: ChartNode, level: number, addNode: boolean = false): ChartLevelNode {
		var levelNode:ChartLevelNode = <ChartLevelNode>node;
		levelNode.width = this.getSingleNodeWidth(levelNode);
		levelNode.height = this.getSingleNodeHeight(levelNode);
		levelNode.containerWidth = 0;
		levelNode.leftMargin = 0;
		levelNode.level = level;

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

	private getTipOverTreeWidth(columns: number[]) : number {
		var containerWidth = 0,
			gapsWidth: number = this.config.nodeOptions.gapH * this.getGapsCountForTipOverColumns(columns.length);

		for (var c = 0; c < columns.length; c++) {
			containerWidth += columns[c];
		}

		return containerWidth + gapsWidth;
	}

	/**
	 * Calculates a special number of gaps used to position the tip-over columns.
	 * @param columnsCount A count of columns.
	 * @returns {number} Value which multiplied by gapH will result in the width of all gaps.
     */
	private getGapsCountForTipOverColumns(columnsCount: number): number {
		// n:		1	2	3	4	5	6	7	8	9	10	11	12...
		// result:	1	2	4	5	7	8	10	11	13	14	16	17...
		//return columnsCount + (Math.ceil(columnsCount/2) - 1) + 2;

		return (columnsCount - 1) * 2 + 2;
	}

	private createLevelIfNotExists(level: number) {
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
	private calcChildren(node: ChartNode, level: number = 0, parentNode: ChartLevelNode = null) : number {
		var containerWidth = 0,
			levelNode: ChartLevelNode;

		if (this.isNodeTipOver(node)) {
			return this.calcTipOverChildren(node, level, parentNode);
		}

		// add current node
		levelNode = this.buildLevelNode(node, level, true);
		levelNode.parentNode = parentNode; // assign parent reference

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
	private generateNodePlaceholders(levelNode: ChartLevelNode): number {
		var iterations = this.levels.length - levelNode.level - 1;
		for (var i = 1; i <= iterations; i++) {
			var currentLevel = levelNode.level + i;
			var placeholderNode = this.createPlaceholder(levelNode, currentLevel);
			this.levels[currentLevel].nodes.push(placeholderNode);
		}
		return iterations;
	}

	private generatePlaceholdersForTipOverTree(level: number, count: number, columnsCount: number) {
		if (count > 0) {
			// first add missing placeholders inside a tip-over tree
			var prevLevelNodes = this.levels[level - 1].nodes;
			for (var i = 0; i < count; i++) {
				var levelNodeAbove:ChartLevelNode = prevLevelNodes[prevLevelNodes.length - count + i];
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
					var levelNodeAbove:ChartLevelNode = this.levels[level].nodes[x];
					var placeholderNode = this.createPlaceholder(levelNodeAbove, i);
					this.levels[level].nodes.push(placeholderNode);
				}
			}

	}

	private getSingleNodeWidth(node: ChartNode) : number {
		/*
			TODO: add handling node options overriding here, to override e.g. width of the node using
		 	node specific styling etc.
		*/
		return this.config.nodeOptions.width;
	}

	private getSingleNodeHeight(node: ChartNode) : number {
		/*
		 TODO: add handling node options overriding here, to override e.g. width of the node using
		 node specific styling etc.
		 */
		return this.config.nodeOptions.height;
	}

    private render() {
		var left = 10;
		var top = 10;
		var gapX = this.config.nodeOptions.gapH;
		var gapY = this.config.nodeOptions.gapV;
		var hLineX1: number,
			hLineX2: number,
			hLineY: number,
			hLineNodes: number = 0,  // number of nodes processed for the current horizontal line
			nextParent: ChartLevelNode = null,
			currentNodeParentId: string = null, // actual node parent id, to check if the h line should be drawn
			firstNodeParentId: string = null; // parent id of first node of the current h line, needed to determine if h line should be drawn
		var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;

		for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
			var level = this.levels[levelIdx];
			var lastLevel = levelIdx === this.levels.length - 1;
			nextParent = null;
			currentNodeParentId = null;
			firstNodeParentId = null;
			hLineNodes = 0;

			top = levelIdx * (this.config.nodeOptions.height  + gapY) + 10;
			left = 10;

			for (var i = 0; i < level.nodes.length; i++) {
				var node = level.nodes[i];
				var marginLeft = (node.containerWidth - node.width) / 2 + node.leftMargin;
				var x = left + marginLeft;
				var y = top;

				var onRenderBoxArgs = <RenderBoxEventArgs>{};
				onRenderBoxArgs.x = x;
				onRenderBoxArgs.y = y;
				onRenderBoxArgs.width = node.width;
				onRenderBoxArgs.height = node.height;
				onRenderBoxArgs.node = <RenderedChartNode>{};
				onRenderBoxArgs.node.id = node.id;
				onRenderBoxArgs.node.parentId = node.parentId;
				onRenderBoxArgs.node.data = node.data;
				onRenderBoxArgs.node.tipOverChildren = node.tipOverChildren;
				onRenderBoxArgs.node.children = node.children;
				onRenderBoxArgs.node.isPlaceholder = node.isPlaceholder;
				onRenderBoxArgs.paper = this.snap;
				onRenderBoxArgs.config = this.config;

				if (!node.tipOverChild) {
					if (hLineNodes === 0) {
						hLineX1 = x + node.width / 2;
						hLineY = y - gapY / 2;
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

						if (this.config.onBoxRender) this.config.onBoxRender(onRenderBoxArgs);

						if (levelIdx !== 0) {
							// top line
							this.snap.line(x + node.width / 2, y, x + node.width / 2, y - gapY / 2).attr({
								strokeWidth: this.config.connectorOptions.strokeWidth,
								stroke: this.config.connectorOptions.color
							});
						}

						if (node.children !== null && node.children.length > 0) {
							this.snap.line(x + node.width / 2, y + node.height, x + node.width / 2, y + node.height + gapY / 2).attr({
								strokeWidth: this.config.connectorOptions.strokeWidth,
								stroke: this.config.connectorOptions.color
							});
						}

						// draw horizontal lines
						if (levelIdx > 0) {
							if (hLineNodes > 1) {
								// && currentNodeParentId === firstNodeParentId
								if ((nextParent === null || (node.parentId !== nextParent.parentId))  ) {
									// parent was changed, lets draw line
									this.snap.line(hLineX1 - halfLineWidth, hLineY, hLineX2 + halfLineWidth, hLineY).attr({
										strokeWidth: this.config.connectorOptions.strokeWidth,
										stroke: this.config.connectorOptions.color
									});

									hLineNodes = 0;
								}
							}
						}
					}
					else {
						hLineNodes = 0;
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							if (this.config.onBoxRender) this.config.onBoxRender(onRenderBoxArgs);
							//this.snap.rect(x, y, node.width, node.height).attr({fill: this.config.debugOptions.placeholderBoxesColor});
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
						var x2 = x + node.parentNode.containerWidth - node.parentNode.tipOverParentLastColumnWidth - gapX*3 + halfLineWidth;
						var lineY = y - gapY / 2;
						// parent was changed, lets draw line
						this.snap.line(x1, lineY, x2, lineY).attr({
							strokeWidth: this.config.connectorOptions.strokeWidth,
							stroke: this.config.connectorOptions.color
						});
					}
					else if (node.tipOverFirstChild && node.tipOverColumns === 1) {
						// one single column
						var x1 = x - gapX - halfLineWidth;
						var x2 = x + node.parentNode.width / 2 + halfLineWidth;
						var lineY = y - gapY / 2;
						// parent was changed, lets draw line
						this.snap.line(x1, lineY, x2, lineY).attr({
							strokeWidth: this.config.connectorOptions.strokeWidth,
							stroke: this.config.connectorOptions.color
						});
					}

					left += node.containerWidth;

					if (!node.isPlaceholder) {
						hLineNodes++; // one node more

						if (this.config.onBoxRender) this.config.onBoxRender(onRenderBoxArgs);

						if (levelIdx !== 0 && !lastColumn && !evenColumn) {
							// right line
							this.snap.line(x + node.width, y + node.height / 2, x + node.width + gapX + halfLineWidth, y + node.height / 2).attr({
								strokeWidth: this.config.connectorOptions.strokeWidth,
								stroke: this.config.connectorOptions.color
							});
						}

						if ((node.tipOverColumnIndex > 0 && evenColumn) || lastColumn) {
							// left line
							this.snap.line(x, y + node.height / 2, x - gapX - halfLineWidth, y + node.height / 2).attr({
								strokeWidth: this.config.connectorOptions.strokeWidth,
								stroke: this.config.connectorOptions.color
							});

							if (firstLine) {
								// up line
								this.snap.line(x - gapX, y + node.height / 2, x - gapX, y - gapY / 2).attr({
									strokeWidth: this.config.connectorOptions.strokeWidth,
									stroke: this.config.connectorOptions.color
								});
							}
							else {
								// up line to cross
								this.snap.line(x - gapX, y + node.height / 2, x - gapX, y - gapY).attr({
									strokeWidth: this.config.connectorOptions.strokeWidth,
									stroke: this.config.connectorOptions.color
								});
							}
						}

						if (node.tipOverLastChild && node.tipOverLinesCount > 1 && !evenColumn && node.tipOverColumns > 1
							&& node.tipOverColumnIndex < node.tipOverColumns - 1) {
							// up line to cross
							this.snap.line(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y - gapY).attr({
								strokeWidth: this.config.connectorOptions.strokeWidth,
								stroke: this.config.connectorOptions.color
							});
						}

						if (node.tipOverHasNodeBelow) {
							if ((!lastColumn && !evenColumn)) {
								// down line (on the right box site)
								this.snap.line(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y + node.height).attr({
									strokeWidth: this.config.connectorOptions.strokeWidth,
									stroke: this.config.connectorOptions.color
								});

							}
							else if (lastColumn && node.tipOverColumns % 2 === 1) {
								// down line (on the left box site)
								this.snap.line(x - gapX, y + node.height / 2, x - gapX, y + node.height).attr({
									strokeWidth: this.config.connectorOptions.strokeWidth,
									stroke: this.config.connectorOptions.color
								});
							}
						}


						//this.snap.text(x + 20, y + 26, [node.data.text]).attr({fill: this.config.nodeOptions.textColor});
					}
					else {
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							if (this.config.onBoxRender) this.config.onBoxRender(onRenderBoxArgs);
							//this.snap.rect(x, y, node.width, node.height).attr({fill: this.config.debugOptions.placeholderBoxesColor});
						}
					}
				}
			}
		}
    }

	public setNodes(root: ChartNode) {
		this.nodes = {};
		this.config.nodes = root;

		this.clear();
		this.calcPositions();
		this.render();
	}
}
