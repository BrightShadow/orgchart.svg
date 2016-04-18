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

		console.log(this.levels);
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
    }

	public setNodes(root: ChartNode) {
		this.nodes = {};
		this.config.nodes = root;

		this.clear();
		this.calcPositions();
		this.render();
	}
}
