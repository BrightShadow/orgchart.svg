import {ChartNode} from "./chart.node";
import {ChartLevelNode} from "./chart.level.node";

export class ChartLevelInfo {
    level: number;
    tipOver: boolean;
    nodes: ChartLevelNode[];
}