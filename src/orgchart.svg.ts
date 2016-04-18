/// <reference path="../typings/browser.d.ts" />
import 'snapsvg';
import {NodeSvg} from "./node.svg";
import {OrgChartConfig} from "./org.chart.config";
import {ChartNode} from "./chart.node";
import {NodeOptions} from "./node.options";
import {ChartLevelNode} from "./chart.level.node";
import {ChartLevelInfo} from "./chart.level.info";

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
		this.config.nodeOptions.gapV = 20;
		this.config.nodeOptions.gapH = 20;

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
							id: '5',
							parentId: '3',
							data: { text: "child X1" },
							children: []
						},
						{
							id: '5',
							parentId: '3',
							data: { text: "child X1" },
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
							children: [
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: []
								},
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: []
								},
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: [
										{
											id: '5',
											parentId: '3',
											data: { text: "child X1" },
											children: []
										},
										{
											id: '5',
											parentId: '3',
											data: { text: "child X1" },
											children: []
										},
									]
								},
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: []
								},
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: []
								},
								{
									id: '5',
									parentId: '3',
									data: { text: "child X1" },
									children: []
								},
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
					this.levels[level].nodes.unshift(placeholderNode);
				}
			}
		}
	}

	private calcChildren(node: ChartNode, level: number = 0) : number {
		var containerWidth = 0;
		var nodeIndexInLevel = 0;

		if (this.levels.length < level + 1) {
			this.levels.push({
				nodes: [],
				tipOver: false,
				level: level
			}); // create level record if missing
		}

		// add current node
		var levelNode:ChartLevelNode = <ChartLevelNode>node;
		levelNode.width = this.getSingleNodeWidth(levelNode);
		levelNode.height = this.getSingleNodeHeight(levelNode);
		levelNode.containerWidth = 0;
		levelNode.level = level;
		this.levels[level].nodes.push(levelNode);

		level++; // next level - children
		if (node.children !== null && node.children.length > 0) {
			for (var i = 0; i < node.children.length; i++) {
				containerWidth += this.calcChildren(node.children[i], level);
			}
		}
		else {
			containerWidth = levelNode.width + this.config.nodeOptions.gapH * 2;

			if (this.levels.length < level + 1) {
				this.levels.push({
					nodes: [],
					tipOver: false,
					level: level
				}); // create level record if missing
			}

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

		for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
			var level = this.levels[levelIdx];
			var lastLevel = levelIdx === this.levels.length - 1;
			nextParentId = null;
			hLineNodes = 0;

			top = levelIdx * (this.config.nodeOptions.height  + gapY) + 10;
			left = 10;

			for (var i = 0; i < level.nodes.length; i++) {
				var node = level.nodes[i];
				var marginLeft = (node.containerWidth - node.width) / 2;
				var x = left + marginLeft;
				var y = top;

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
							strokeWidth: 1,
							stroke: 'red'
						});
					}

					if (node.children !== null && node.children.length > 0) {
						this.snap.line(x + node.width / 2, y + node.height, x + node.width / 2, y+ node.height + gapY / 2).attr({
							strokeWidth: 1,
							stroke: 'red'
						});
					}


					this.snap.text(x + 3, y + 16, [node.data.text]).attr({fill: 'white'});
				}
				else {
					// placeholder
					//this.snap.rect(x, y, node.width, node.height).attr({fill: 'red'});
				}

				// draw horizontal lines
				if (levelIdx > 0) {
					if (hLineNodes > 1) {
						if (node.parentId !== nextParentId || nextParentId === null) {
							// parent was changed, lets draw line
							this.snap.line(hLineX1, hLineY, hLineX2, hLineY).attr({
								strokeWidth: 1,
								stroke: 'red'
							});

							hLineNodes = 0;
						}
					}
				}

				left += node.containerWidth;
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
