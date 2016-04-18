/// <reference path="../typings/browser.d.ts" />

import 'snapsvg';
import {NodeSvg} from "./node.svg";
import {OrgChartConfig} from "./org.chart.config";
import {ChartNode} from "./chart.node";
import {NodeOptions} from "./node.options";
import {ChartLevelNode} from "./chart.level.node";

export class OrgChartSvg {
    private nodesSpacing: number;
    private nodes: { [id: string] : ChartNode; } = {};
	private levels: Array<Array<ChartLevelNode>> = new Array<Array<ChartLevelNode>>();

    constructor(private config?: OrgChartConfig) {
		if (!config) {
			this.initDefaultConfig();
		}

        this.calcPositions();
        this.render();
    }

	private initDefaultConfig() {
		this.config = <OrgChartConfig>{};
		this.config.gapH = 60;
		this.config.gapV = 60;
		this.config.selector = '#orgChartSvg';
		this.config.nodeOptions = <NodeOptions>{};
		this.config.nodeOptions.width = 350;
		this.config.nodeOptions.height = 70;

		this.config.nodes = {
			id: '1',
			parentId: null,
			data: { text: "root" },
			children: [
				{
					id: '2',
					parentId: null,
					data: { text: "child 1" },
					children: []
				},
				{
					id: '3',
					parentId: null,
					data: { text: "child 2" },
					children: []
				},
				{
					id: '4',
					parentId: null,
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
        //this.config.nodes.forEach((node: NodeSvg, index: number) => {
        //
        //});
		d3.layout.tree()
    }

    private render() {
		var svgContainer = d3.select("body")
			.append("svg")
			.append('rect')
			.attr("x", 10)
			.attr("y", 10)
			.attr("width", 50)
			.attr("height", 100);
    }

	public setNodes(nodes: NodeSvg) {
		this.nodes = {};
		this.config.nodes = nodes;

		this.clear();
		this.calcPositions();
		this.render();
	}
}
