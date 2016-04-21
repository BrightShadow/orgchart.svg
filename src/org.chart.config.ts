import {NodeOptions} from "./node.options";
import {ChartNode} from "./chart.node";
import {ConnectorOptions} from "./connector.options";
import {TipOverOptions} from "./tip.over.options";
import {ConfigDebugOptions} from "./config.debug.options";

export class OrgChartConfig {
    selector: string;
    nodes: ChartNode;
    nodeOptions: NodeOptions;
	connectorOptions: ConnectorOptions;
	tipOverOptions: TipOverOptions;
	debugOptions: ConfigDebugOptions;

	public static defaultConfig(): OrgChartConfig {
		var config = <OrgChartConfig>{};
		config.selector = '#orgChartSvg';
		config.nodeOptions = <NodeOptions>{};
		config.nodeOptions.width = 150;
		config.nodeOptions.height = 50;
		config.nodeOptions.gapV = 60;
		config.nodeOptions.gapH = 10;
		config.connectorOptions = <ConnectorOptions>{};
		config.connectorOptions.strokeWidth = 1;
		config.connectorOptions.color = 'red';
		config.tipOverOptions = <TipOverOptions>{
			minChildrenCount: 3,
			maxColumnHeight: 12
		};
		config.debugOptions = <ConfigDebugOptions>{
			showPlaceholderBoxes: true,
			placeholderBoxesColor: 'rgba(0,0,0,0.05)'
		};
		config.nodes = {
			id: '1',
			parentId: null,
			data: {text: "Root"},
			children: []
		};

		return config;
	}
}
