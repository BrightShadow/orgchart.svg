declare module 'orgchart-svg-module' {
	/**
	 * Set of connector types produced during chart rendering.
	 */
	export enum ConnectorType {
		up = 0,
		down = 1,
		left = 2,
		right = 3,
		leftDown = 4,
		rightUp = 5,
		leftUp = 6,
		horizontal = 7,
		horizontalTipOver = 8,
		horizontalSingleTipOver = 9,
	}
	/**
	 * A set of options for tip-over/stacking layout strategy.
	 */
	export interface TipOverOptions {
		/**
		 * Minimum amount of node children to start tipping-over.
		 */
		minChildrenCount: number;
		/**
		 * Maximum number of nodes in one stacked column.
		 */
		maxColumnHeight: number;
		/**
		 * NUmber of children determining that the parent node should use tipping-over strategy for all those children.
		 */
		tipOverChildrenCount: number;
	}
	/**
	 * Additional debugging options.
	 */
	export interface ConfigDebugOptions {
		showPlaceholderBoxes: boolean;
		placeholderBoxesColor: string;
	}
	/**
	 * A set of options describing settings for line connectors.
	 */
	export interface OrgChartConnectorOptions {
		strokeWidth: number;
		color: string;
	}
	/**
	 * Default orgchart node definition.
	 */
	export interface OrgChartNode {
		id: string;
		parentId: string;
		data: any;
		tipOverChildren?: boolean;
		children: OrgChartNode[];
		childrenCollapsed?: boolean;
	}
	/**
	 * Provides information about rendering environment.
	 */
	export interface RenderEventArgs {
		/**
		 * A Snap.svg Paper object giving an access to the current underlying SVG paper.
		 */
		paper: any;
		/**
		 * A configuration settings actual used.
		 */
		config: OrgChartConfig_Instance;
	}
	/**
	 * Provides additional information about currently rendered node box.
	 */
	export interface RenderBoxEventArgs extends RenderEventArgs {
		/**
		 * Position X of the left upper corner of the node box.
		 */
		x: number;
		/**
		 * Position Y of the left upper corner of the node box.
		 */
		y: number;
		/**
		 * Width of the node box. The box cannot exceed this width.
		 */
		width: number;
		/**
		 * Height of the node box. The box cannot exceed this height.
		 */
		height: number;
		/**
		 * The node associated with currently rendered box.
		 */
		node: RenderedChartNode;
	}
	/**
	 * Represents a rendered node with additional information about render.
	 */
	export interface RenderedChartNode extends OrgChartNode {
		isPlaceholder: boolean;
		rowIndex: number;
		columnIndex: number;
	}
	/**
	 * Box click event arguments.
	 */
	export interface BoxClickEventArgs {
		/**
		 * A native mouse event details.
		 */
		event: MouseEvent;
		/**
		 * The node associated with currently rendered box.
		 */
		node: RenderedChartNode;
	}
	/**
	 * Toggle node visibility (expand/collapse) event arguments.
	 */
	export interface NodeToggleEventArgs extends BoxClickEventArgs {
		/**
		 * Determines if the corresponding node's children was collapsed (true) or not (false).
		 */
		isCollapsed: boolean;
	}
	/**
	 * Defines a set of options describing node boxes.
	 */
	export interface NodeOptions {
		width: number;
		height: number;
		gapH: number;
		gapV: number;
		margin: NodeMargin;
		background: string;
		textColor: string;
		nodeClass: string;
		clickableBoxClass: string;
		collapseButtonClass: string;
		nodeAttribute: string;
		collapsible: boolean;
	}
	/**
	 * Defines a margin for node.
	 */
	export interface NodeMargin {
		top:number;
		right:number;
		bottom:number;
		left:number;

		new(all?:number): NodeMargin;
	}

	interface OrgChartConfig_Static {
		new() : OrgChartConfig_Instance;

		/**
		 * Provides a default configuration - good as a starter for any custom changes.
		 */
		defaultConfig():OrgChartConfig_Instance;
	}

	interface OrgChartConfig_Instance {
		selector:string;
		nodes:OrgChartNode;
		nodeOptions:NodeOptions;
		connectorOptions:OrgChartConnectorOptions;
		tipOverOptions:TipOverOptions;
		debugOptions:ConfigDebugOptions;
		/**
		 * Duration of expand/collapse animation in milliseconds. Default set to 300ms.
		 */
		collapsingDuration:number;
		/**
		 * An event handler called each time the node box is drawn to the SVG canvas.
		 * The handler can return a string containing a valid SVG fragment. If so, the fragment
		 * will be used as a template and will be rendered to the SVG.
		 */
		onBoxRender:(args:RenderBoxEventArgs) => string;
		/**
		 * An event handler called before nodes are drawn to the SVG canvas.
		 * The handler can return a string containing a valid SVG fragment. If so, the fragment
		 * will be used as a template and will be rendered to the SVG before everything else.
		 *
		 * NOTE: Use this method to add defs to the SVG, to render some background effects etc.
		 */
		onBeforeRender:(args:RenderEventArgs) => string;
		/**
		 * An event handler called when a node box SVG tag was clicked.
		 * NOTE: Remember that only boxes with a class set in config.clickableBoxClass are used.
		 * So if you are using custom template remember to add this class to the clickable area.
		 */
		onBoxClick:(args:BoxClickEventArgs) => void;
		/**
		 * An event handler called when a collapse button was clicked and the node is beaing collapsed.
		 * NOTE: Remember that only boxes with a class set in config.collapseButtonClass are used.
		 * So if you are using custom template remember to add this class to the clickable area.
		 */
		onNodeToggle:(args:NodeToggleEventArgs) => void;
	}

	/**
	 * A general orgchart.svg configuration.
	 */
	export var OrgChartConfig: OrgChartConfig_Static;

	export interface OrgChartSvg {
		new(config?:OrgChartConfig_Instance): OrgChartSvg;
	}
}

declare module 'orgchart.svg' {
	export * from 'orgchart-svg-module';
}
