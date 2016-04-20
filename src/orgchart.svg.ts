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

        this.calcPositions();
        this.render();
    }

	private initDefaultConfig() {
		this.config = <OrgChartConfig>{};
		this.config.selector = '#orgChartSvg';
		this.config.nodeOptions = <NodeOptions>{};
		this.config.nodeOptions.width = 150;
		this.config.nodeOptions.height = 50;
		this.config.nodeOptions.gapV = 60;
		this.config.nodeOptions.gapH = 10;
		this.config.connectorOptions = <ConnectorOptions>{};
		this.config.connectorOptions.strokeWidth = 1;
		this.config.connectorOptions.color = 'red';
		this.config.tipOverOptions = <TipOverOptions>{
			minChildrenCount: 3,
			maxColumnHeight: 12
		};
		this.config.debugOptions = <ConfigDebugOptions>{
			showPlaceholderBoxes: true,
			placeholderBoxesColor: 'rgba(0,0,0,0.05)'
		};


		this.config.nodes = {
			id: '1',
			parentId: null,
			data: { text: "root" },
			children: [
				{
					id: '2',
					parentId: '1',
					data: { text: "child 1" },
					children: [
						{
							id: '50',
							parentId: '2',
							data: { text: "child Y1" },
							children: []
						},
						{
							id: '51',
							parentId: '2',
							data: { text: "child Y2" },
							//tipOverChildren: true,
							//children: [
							//	{
							//		id: '7',
							//		parentId: '2',
							//		data: { text: "child X1" },
							//		children: []
							//	},
							//	{
							//		id: '8',
							//		parentId: '2',
							//		data: { text: "child X2" },
							//		children: []
							//	},
							//	{
							//		id: '9',
							//		parentId: '2',
							//		data: { text: "child X3" },
							//		children: []
							//	},
							//	{
							//		id: '10',
							//		parentId: '2',
							//		data: { text: "child X4" },
							//		children: []
							//	},
							//	{
							//		id: '11',
							//		parentId: '2',
							//		data: { text: "child X5" },
							//		children: []
							//	},
							//	{
							//		id: '12',
							//		parentId: '2',
							//		data: { text: "child X6" },
							//		children: []
							//	},
							//	{
							//		id: '13',
							//		parentId: '2',
							//		data: { text: "child X7" },
							//		children: []
							//	},
							//	{
							//		id: '14',
							//		parentId: '2',
							//		data: { text: "child X8" },
							//		children: []
							//	},
							//	{
							//		id: '15',
							//		parentId: '2',
							//		data: { text: "child X9" },
							//		children: []
							//	},
							//	{
							//		id: '16',
							//		parentId: '2',
							//		data: { text: "child X10" },
							//		children: []
							//	},
							//]
							children: []
						}
					]
				},
				{
					id: '3',
					parentId: '1',
					data: { text: "child 2" },
					children: [
						{
							id: '5',
							parentId: '3',
							data: { text: "child 4" },
							children: []
						},
						{
							id: '6',
							parentId: '3',
							data: { text: "child 5" },
							tipOverChildren: true,
							children: [
								{
									id: '7',
									parentId: '6',
									data: { text: "child X1" },
									children: []
								},
								{
									id: '8',
									parentId: '6',
									data: { text: "child X2" },
									children: []
								},
								{
									id: '9',
									parentId: '6',
									data: { text: "child X3" },
									children: []
								},
								{
									id: '10',
									parentId: '6',
									data: { text: "child X4" },
									children: []
								},
								{
									id: '11',
									parentId: '6',
									data: { text: "child X5" },
									children: []
								},
								{
									id: '12',
									parentId: '6',
									data: { text: "child X6" },
									children: []
								},
								{
									id: '13',
									parentId: '6',
									data: { text: "child X7" },
									children: []
								},
								{
									id: '14',
									parentId: '6',
									data: { text: "child X8" },
									children: []
								},
								{
									id: '15',
									parentId: '6',
									data: { text: "child X9" },
									children: []
								},
								{
									id: '16',
									parentId: '6',
									data: { text: "child X10" },
									children: []
								},
								{
									id: '17',
									parentId: '6',
									data: { text: "child X11" },
									children: []
								},
								{
									id: '18',
									parentId: '6',
									data: { text: "child X12" },
									children: []
								},
								{
									id: '19',
									parentId: '6',
									data: { text: "child X13" },
									children: []
								},
								{
									id: '20',
									parentId: '6',
									data: { text: "child X14" },
									children: []
								},
								{
									id: '21',
									parentId: '6',
									data: { text: "child X15" },
									children: []
								},
								{
									id: '22',
									parentId: '6',
									data: { text: "child X16" },
									children: []
								},
								{
									id: '23',
									parentId: '6',
									data: { text: "child X17" },
									children: []
								},
								{
									id: '24',
									parentId: '6',
									data: { text: "child X18" },
									children: []
								},
								{
									id: '25',
									parentId: '6',
									data: { text: "child X19" },
									children: []
								},
								{
									id: '26',
									parentId: '6',
									data: { text: "child X20" },
									children: []
								},










								{
									id: '7',
									parentId: '6',
									data: { text: "child X21" },
									children: []
								},
								{
									id: '8',
									parentId: '6',
									data: { text: "child X22" },
									children: []
								},
								{
									id: '9',
									parentId: '6',
									data: { text: "child X23" },
									children: []
								},
								{
									id: '10',
									parentId: '6',
									data: { text: "child X24" },
									children: []
								},
								{
									id: '11',
									parentId: '6',
									data: { text: "child X25" },
									children: []
								},
								{
									id: '12',
									parentId: '6',
									data: { text: "child X26" },
									children: []
								},
								{
									id: '13',
									parentId: '6',
									data: { text: "child X27" },
									children: []
								},
								{
									id: '14',
									parentId: '6',
									data: { text: "child X28" },
									children: []
								},
								{
									id: '15',
									parentId: '6',
									data: { text: "child X29" },
									children: []
								},
								{
									id: '16',
									parentId: '6',
									data: { text: "child X30" },
									children: []
								},
								{
									id: '17',
									parentId: '6',
									data: { text: "child X31" },
									children: []
								},
								{
									id: '18',
									parentId: '6',
									data: { text: "child X32" },
									children: []
								},
								{
									id: '19',
									parentId: '6',
									data: { text: "child X33" },
									children: []
								},
								{
									id: '20',
									parentId: '6',
									data: { text: "child X34" },
									children: []
								},
								{
									id: '21',
									parentId: '6',
									data: { text: "child X35" },
									children: []
								},
								{
									id: '22',
									parentId: '6',
									data: { text: "child X36" },
									children: []
								},
								{
									id: '23',
									parentId: '6',
									data: { text: "child X37" },
									children: []
								},
								{
									id: '24',
									parentId: '6',
									data: { text: "child X38" },
									children: []
								},
								{
									id: '25',
									parentId: '6',
									data: { text: "child X39" },
									children: []
								},
								{
									id: '26',
									parentId: '6',
									data: { text: "child X40" },
									children: []
								},




















								{
									id: '7',
									parentId: '6',
									data: { text: "child X41" },
									children: []
								},
								{
									id: '8',
									parentId: '6',
									data: { text: "child X42" },
									children: []
								},
								{
									id: '9',
									parentId: '6',
									data: { text: "child X43" },
									children: []
								},
								{
									id: '10',
									parentId: '6',
									data: { text: "child X44" },
									children: []
								},
								{
									id: '11',
									parentId: '6',
									data: { text: "child X45" },
									children: []
								},
								{
									id: '12',
									parentId: '6',
									data: { text: "child X46" },
									children: []
								},
								{
									id: '13',
									parentId: '6',
									data: { text: "child X47" },
									children: []
								},
								{
									id: '14',
									parentId: '6',
									data: { text: "child X48" },
									children: []
								},
								{
									id: '15',
									parentId: '6',
									data: { text: "child X49" },
									children: []
								},
								{
									id: '16',
									parentId: '6',
									data: { text: "child X50" },
									children: []
								},
								{
									id: '17',
									parentId: '6',
									data: { text: "child X51" },
									children: []
								},
								{
									id: '18',
									parentId: '6',
									data: { text: "child X52" },
									children: []
								},
								{
									id: '19',
									parentId: '6',
									data: { text: "child X53" },
									children: []
								},
								{
									id: '20',
									parentId: '6',
									data: { text: "child X54" },
									children: []
								},
								{
									id: '21',
									parentId: '6',
									data: { text: "child X55" },
									children: []
								},
								{
									id: '22',
									parentId: '6',
									data: { text: "child X56" },
									children: []
								},
								{
									id: '23',
									parentId: '6',
									data: { text: "child X57" },
									children: []
								},
								{
									id: '24',
									parentId: '6',
									data: { text: "child X58" },
									children: []
								},
								{
									id: '25',
									parentId: '6',
									data: { text: "child X59" },
									children: []
								},
								{
									id: '26',
									parentId: '6',
									data: { text: "child X60" },
									children: []
								},










								{
									id: '7',
									parentId: '6',
									data: { text: "child X61" },
									children: []
								},
								{
									id: '8',
									parentId: '6',
									data: { text: "child X62" },
									children: []
								},
								{
									id: '9',
									parentId: '6',
									data: { text: "child X63" },
									children: []
								},
								{
									id: '10',
									parentId: '6',
									data: { text: "child X64" },
									children: []
								},
								{
									id: '11',
									parentId: '6',
									data: { text: "child X65" },
									children: []
								},
								{
									id: '12',
									parentId: '6',
									data: { text: "child X66" },
									children: []
								},
								{
									id: '13',
									parentId: '6',
									data: { text: "child X67" },
									children: []
								},
								{
									id: '14',
									parentId: '6',
									data: { text: "child X68" },
									children: []
								},
								{
									id: '15',
									parentId: '6',
									data: { text: "child X69" },
									children: []
								},
								{
									id: '16',
									parentId: '6',
									data: { text: "child X70" },
									children: []
								},
								{
									id: '17',
									parentId: '6',
									data: { text: "child X71" },
									children: []
								},
								{
									id: '18',
									parentId: '6',
									data: { text: "child X72" },
									children: []
								},
								{
									id: '19',
									parentId: '6',
									data: { text: "child X73" },
									children: []
								},
								{
									id: '20',
									parentId: '6',
									data: { text: "child X74" },
									children: []
								},
								{
									id: '21',
									parentId: '6',
									data: { text: "child X75" },
									children: []
								},
								{
									id: '22',
									parentId: '6',
									data: { text: "child X76" },
									children: []
								},
								{
									id: '23',
									parentId: '6',
									data: { text: "child X77" },
									children: []
								},
								{
									id: '24',
									parentId: '6',
									data: { text: "child X78" },
									children: []
								},
								{
									id: '25',
									parentId: '6',
									data: { text: "child X79" },
									children: []
								},
								{
									id: '26',
									parentId: '6',
									data: { text: "child X80" },
									children: []
								}
							]
						}
					]
				},
				{
					id: '4',
					parentId: '1',
					data: { text: "child 3" },
					children: []
				}
			]
		};

		//this.config.nodes = {
		//	id: '0',
		//	parentId: '',
		//	data: { text: "root" },
		//	children: [
		//		{
		//			id: '1',
		//			parentId: '0',
		//			data: { text: "child X1" },
		//			children: [
		//				{
		//					id: '10',
		//					parentId: '1',
		//					data: { text: "child X1" },
		//					children: [
		//						{
		//							id: '14',
		//							parentId: '10',
		//							data: { text: "child X1" },
		//							children: [
		//								{
		//								id: '16',
		//								parentId: '14',
		//								data: { text: "child X1" },
		//								children: [
		//									{
		//									id: '17',
		//									parentId: '16',
		//									data: { text: "child X1" },
		//									children: [
		//										{
		//										id: '18',
		//										parentId: '17',
		//										data: { text: "child X1" },
		//										children: []
		//									},]
		//								},]
		//							},]
		//						}
		//					]
		//				},
		//				{
		//					id: '11',
		//					parentId: '1',
		//					data: { text: "child X1" },
		//					children: []
		//				}
		//			]
		//		},
		//		{
		//			id: '2',
		//			parentId: '0',
		//			data: { text: "child X2" },
		//			children: [
		//				{
		//					id: '100',
		//					parentId: '2',
		//					data: { text: "child X1" },
		//					children: [
		//						{
		//							id: '140',
		//							parentId: '100',
		//							data: { text: "child X1" },
		//							children: [
		//								{
		//									id: '160',
		//									parentId: '140',
		//									data: { text: "child X1" },
		//									children: [
		//										{
		//											id: '170',
		//											parentId: '160',
		//											data: { text: "child X1" },
		//											children: [
		//												{
		//													id: '180',
		//													parentId: '170',
		//													data: { text: "child X1" },
		//													children: []
		//												},]
		//										},]
		//								},]
		//						}
		//					]
		//				}
		//			]
		//		},
		//	]
		//};
	}

	private clear() {
		// clear SVG content
	}

    private calcPositions() {
		// 1. Prepare levels info
		this.calcChildren(this.config.nodes);

		// trim empty row if exists
		if (this.levels[this.levels.length - 1].nodes.length === 0) {
			this.levels.splice(this.levels.length - 1);
		}

		this.generatedPlaceholders();

		console.log(this.levels);
		console.log(this.placeholdersParents);
    }

	private generatedPlaceholders() {
		for (var i = 0; i < this.placeholdersParents.length; i++) {
			var levelNode = this.placeholdersParents[i];

			if (levelNode.level < this.levels.length - 1) {
				for (var level = levelNode.level + 1; level < this.levels.length; level++) {
					// add placeholder node
					var placeholderNode = <ChartLevelNode>{};
					placeholderNode.width = levelNode.width;
					placeholderNode.height = this.config.nodeOptions.height; // TODO: use probably 0 as height
					placeholderNode.containerWidth = levelNode.containerWidth;
					placeholderNode.isPlaceholder = true;
					placeholderNode.leftMargin = 0;
					this.levels[level].nodes.unshift(placeholderNode);
				}
			}
		}
	}

	/**
	 * The same method as calcChildren but calculate a tip-over subtree, not a default subtree tree.
	 * Traverses across the three through the children to calculate the widths of nodes and their containers.
	 * Method adds also all node level info records to levels. It is a source info for render method.
	 * @param node A parent node to check.
	 * @param level Current level for the parent node.
	 * @returns {number} A total container width for the node.
     */
	private calcTipOverChildren(node: ChartNode, level: number = 0) : number {
		var containerWidth = 0;
		var nodeIndexInLevel = 0;

		// add current node
		var levelNode = this.buildLevelNode(node, level, true);

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			// calculate number of columns
			var columnWidths: number[] = [];
			var childIndex = 0;
			var columnIndex = 0;
			var lineIndex = 0;
			var linesCount = 0;
			var columns = Math.floor(node.children.length / this.config.tipOverOptions.maxColumnHeight);
			columns += node.children.length % this.config.tipOverOptions.maxColumnHeight > 0 ? 1 : 0;

			linesCount = Math.ceil(node.children.length / columns);

			for (var c = 0; c < columns; c++) {
				columnWidths[c] = 0;
			}

			levelNode.tipOverParent = true;
			levelNode.tipOverColumns = columns;

			for (var i = 0; i < node.children.length; i++) {
				var childLevelNode = this.buildLevelNode(node.children[childIndex], level, true);
				childLevelNode.tipOverChild = true;
				childLevelNode.tipOverColumns = columns;
				childLevelNode.tipOverColumnIndex = columnIndex;
				childLevelNode.tipOverLineIndex = lineIndex;
				childLevelNode.tipOverLinesCount = linesCount;
				childLevelNode.tipOverLastChild = i === node.children.length - 1;
				childLevelNode.tipOverFirstChild = i === 0;

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

			levelNode.tipOverParentLastColumnWidth = columnWidths[columnWidths.length - 1];
			containerWidth = this.getTipOverTreeWidth(columnWidths);
		}
		else
		{
			containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
			this.createLevelIfNotExists(level);

			if (this.levels[level].nodes.length === 0) {
				this.placeholdersParents.push(levelNode);
			}
		}

		levelNode.containerWidth = containerWidth;
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

	//private isTipOverColumnCenter(columnIndex: number): boolean {
	//	columnIndex++;
	//	if (columnIndex % 2 === 0) {
	//		return true; // for last always true
	//	}
    //
	//	return false;
	//}

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
	private calcChildren(node: ChartNode, level: number = 0) : number {
		var containerWidth = 0,
			levelNode: ChartLevelNode;

		if (node.tipOverChildren) {
			return this.calcTipOverChildren(node, level);
		}

		// add current node
		levelNode = this.buildLevelNode(node, level, true);

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				containerWidth += this.calcChildren(node.children[i], level);
			}
		}
		else {
			containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
			this.createLevelIfNotExists(level);

			if (this.levels[level].nodes.length === 0) {
				this.placeholdersParents.push(levelNode);
			}
		}

		levelNode.containerWidth = containerWidth;
		return containerWidth;
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
			hLineNodes: number = 0,
			nextParentId = null; // number of nodes processed for the current line
		var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;

		for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
			var level = this.levels[levelIdx];
			var lastLevel = levelIdx === this.levels.length - 1;
			nextParentId = null;
			hLineNodes = 0;

			top = levelIdx * (this.config.nodeOptions.height  + gapY) + 10;
			left = 10;

			for (var i = 0; i < level.nodes.length; i++) {
				var node = level.nodes[i];
				var marginLeft = (node.containerWidth - node.width) / 2 + node.leftMargin;
				var x = left + marginLeft;
				var y = top;

				if (!node.tipOverChild) {
					if (hLineNodes === 0) {
						hLineX1 = x + node.width / 2;
						hLineY = y - gapY / 2;
					}

					hLineX2 = x + node.width / 2;
					if (i + 1 < level.nodes.length) {
						nextParentId = level.nodes[i + 1].parentId;
					}
					else {
						nextParentId = null;
					}

					if (!node.isPlaceholder) {
						hLineNodes++; // one node more
						this.snap.rect(x, y, node.width, node.height);

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


						this.snap.text(x + 3, y + 16, [node.data.text]).attr({fill: 'white'});
					}
					else {
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							this.snap.rect(x, y, node.width, node.height).attr({fill: this.config.debugOptions.placeholderBoxesColor});
						}
					}

					// draw horizontal lines
					if (levelIdx > 0) {
						if (hLineNodes > 1) {
							if (node.parentId !== nextParentId || nextParentId === null) {
								// parent was changed, lets draw line
								this.snap.line(hLineX1 - halfLineWidth, hLineY, hLineX2 + halfLineWidth, hLineY).attr({
									strokeWidth: this.config.connectorOptions.strokeWidth,
									stroke: this.config.connectorOptions.color
								});

								hLineNodes = 0;
							}
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

					left += node.containerWidth;

					if (!node.isPlaceholder) {
						hLineNodes++; // one node more
						this.snap.rect(x, y, node.width, node.height);

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


						this.snap.text(x + 3, y + 16, [node.data.text]).attr({fill: 'white'});
					}
					else {
						// placeholder
						if (this.config.debugOptions.showPlaceholderBoxes) {
							this.snap.rect(x, y, node.width, node.height).attr({fill: this.config.debugOptions.placeholderBoxesColor});
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
