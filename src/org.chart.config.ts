import {NodeOptions} from "./node.options";
import {ChartNode} from "./chart.node";
import {ConnectorOptions} from "./connector.options";
import {TipOverOptions} from "./tip.over.options";
import {ConfigDebugOptions} from "./config.debug.options";
import {RenderBoxEventArgs} from "./chart.events";

export class OrgChartConfig {
	selector:string;
	nodes:ChartNode;
	nodeOptions:NodeOptions;
	connectorOptions:ConnectorOptions;
	tipOverOptions:TipOverOptions;
	debugOptions:ConfigDebugOptions;
	onBoxRender: (args: RenderBoxEventArgs) => void;

	public static defaultConfig():OrgChartConfig {
		var config = <OrgChartConfig>{};
		config.selector = '#orgChartSvg';
		config.nodeOptions = <NodeOptions>{
			width: 150,
			height: 50,
			gapV: 60,
			gapH: 10,
			background: 'rgba(10,30,200,0.5)',
			textColor: 'white'
		};
		config.connectorOptions = <ConnectorOptions>{};
		config.connectorOptions.strokeWidth = 1;
		config.connectorOptions.color = 'rgba(10,30,200,0.2)';
		config.tipOverOptions = <TipOverOptions>{
			minChildrenCount: 3,
			maxColumnHeight: 12
		};
		config.debugOptions = <ConfigDebugOptions>{
			showPlaceholderBoxes: false,
			placeholderBoxesColor: 'rgba(0,0,0,0.05)'
		};
		config.nodes = {
			id: '1',
			parentId: null,
			data: {text: "Root"},
			children: []
		};

		config.onBoxRender = (args: RenderBoxEventArgs) => {
			if (args.node.isPlaceholder) {
				args.paper.rect(args.x, args.y, args.width, args.height).attr({fill: args.config.debugOptions.placeholderBoxesColor});
			}
			else {
				args.paper.rect(args.x, args.y, args.width, args.height).attr({fill: args.config.nodeOptions.background});
				args.paper.text(args.x + 20, args.y + 26, [args.node.data.text]).attr({fill: args.config.nodeOptions.textColor});
			}
		};

		return config;
	}
}
