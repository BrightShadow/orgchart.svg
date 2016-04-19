import {NodeOptions} from "./node.options";
import {ChartNode} from "./chart.node";
import {ConnectorOptions} from "./connector.options";
import {TipOverOptions} from "./tip.over.options";

export interface OrgChartConfig {
    selector: string;
    nodes: ChartNode;
    nodeOptions: NodeOptions;
	connectorOptions: ConnectorOptions;
	tipOverOptions: TipOverOptions;
}
