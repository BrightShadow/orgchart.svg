import {NodeSvg} from "./node.svg";
import {NodeOptions} from "./node.options";

export interface OrgChartConfig {
    selector: string;
    nodes: NodeSvg[];
    nodeOptions: NodeOptions;
    gapH: number;
    gapV: number;
}
