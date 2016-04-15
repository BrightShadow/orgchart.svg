import {NodeOptions} from "./node.options";
import {ChartNode} from "./chart.node";

export interface OrgChartConfig {
    selector: string;
    nodes: ChartNode;
    nodeOptions: NodeOptions;
    gapH: number;
    gapV: number;
}
