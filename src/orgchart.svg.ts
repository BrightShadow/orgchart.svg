import "d3";
import {NodeSvg} from "./node.svg";
import {OrgChartConfig} from "./org.chart.config";
import {ChartNode} from "./chart.node";
import {NodeOptions} from "./node.options";

export class OrgChartSvg {
    private nodesSpacing: number;
    private nodes: { [id: string] : ChartNode; } = {};

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

		this.config.nodes = [
			{id: '1', parentId: null, data: { text: "root" }},
			{id: '2', parentId: '1', data: { text: "node 1" }},
			{id: '3', parentId: '1', data: { text: "node 2" }},
			{id: '4', parentId: '3', data: { text: "node 3" }},
		];
	}

	private clear() {
		// clear SVG content
	}

    private calcPositions() {
        //this.config.nodes.forEach((node: NodeSvg, index: number) => {
        //
        //});
    }

    private render() {
		//var svgContainer = d3.select("body").append("svg")
    }

	public setNodes(nodes: NodeSvg[]) {
		this.nodes = {};
		this.config.nodes = nodes;

		this.clear();
		this.calcPositions();
		this.render();
	}
}
