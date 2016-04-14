import {NodeSvg} from "./node.svg";
import {OrgChartSvgConfig} from "./org.chart.svg.config";
import {ChartNode} from "./chart.node";

export class OrgChartSvg {
    private nodesSpacing: number;
    private nodes: { [id: string] : ChartNode; } = {};

    constructor(private config: OrgChartSvgConfig) {
        this.calcPositions();
        this.render();
    }

    private calcPositions() {
        this.config.nodes.forEach((node: NodeSvg, index: number) => {

        });
    }



    private render() {

    }
}