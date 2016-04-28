import {NodeOptions} from "./node.options";
import {OrgChartNode} from "./orgchart.node";
import {OrgChartConnectorOptions} from "./orghcart.connector.options";
import {TipOverOptions} from "./tip.over.options";
import {ConfigDebugOptions} from "./config.debug.options";
import {RenderBoxEventArgs} from "./orgchart.events";
import {RenderEventArgs} from "./orgchart.events";
import {NodeMargin} from "./node.options";
import {BoxClickEventArgs} from "./orgchart.events";

export class OrgChartConfig {
	selector:string;
	nodes:OrgChartNode;
	nodeOptions:NodeOptions;
	connectorOptions:OrgChartConnectorOptions;
	tipOverOptions:TipOverOptions;
	debugOptions:ConfigDebugOptions;

	/**
	 * An event handler called each time the node box is drawn to the SVG canvas.
	 * The handler can return a string containing a valid SVG fragment. If so, the fragment
	 * will be used as a template and will be rendered to the SVG.
	 */
	onBoxRender: (args: RenderBoxEventArgs) => string;

	/**
	 * An event handler called before nodes are drawn to the SVG canvas.
	 * The handler can return a string containing a valid SVG fragment. If so, the fragment
	 * will be used as a template and will be rendered to the SVG before everything else.
	 *
	 * NOTE: Use this method to add defs to the SVG, to render some background effects etc.
	 */
	onBeforeRender: (args: RenderEventArgs) => string;

	/**
	 * An event handler called when a node box SVG tag was clicked.
	 * NOTE: Remember that only boxes with a class "orgchart-box" defined are used.
	 * So if you are using custom template remember to add this class to the clickable area.
	 */
	onBoxClick: (args: BoxClickEventArgs) => void;

	public static defaultConfig():OrgChartConfig {
		var config = <OrgChartConfig>{};
		config.selector = '#orgChartSvg';
		config.nodeOptions = <NodeOptions>{
			width: 150,
			height: 45,
			gapV: 40,
			gapH: 10,
			margin: new NodeMargin(),
			background: 'rgba(10,30,200,0.5)',
			textColor: 'white',
			nodeClass: 'orgchart-node',
			clickableBoxClass: 'orgchart-box'
		};
		config.connectorOptions = <OrgChartConnectorOptions>{};
		config.connectorOptions.strokeWidth = 1;
		config.connectorOptions.color = '#bcbec0';
		config.tipOverOptions = <TipOverOptions>{
			minChildrenCount: 3,
			maxColumnHeight: 12,
			tipOverChildrenCount: 30
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

			return null; // ignore templating, draw rectangles by myself
		};

		return config;
	}
}
