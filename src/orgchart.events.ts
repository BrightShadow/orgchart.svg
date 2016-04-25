import {OrgChartNode} from "./orgchart.node";
import {OrgChartConfig} from "./org.chart.config";

/**
 * Provides additional information about currently rendered node box.
 */
export interface RenderBoxEventArgs {
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

	/**
	 * A Snap.svg Paper object giving an access to the current underlying SVG paper.
	 */
	paper: Snap.Paper;

	/**
	 * A configuration settings actual used.
	 */
	config: OrgChartConfig;
}

export interface RenderedChartNode extends OrgChartNode {
	isPlaceholder: boolean;
}
