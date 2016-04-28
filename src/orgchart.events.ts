import {OrgChartNode} from "./orgchart.node";
import {OrgChartConfig} from "./org.chart.config";

/**
 * Provides information about rendering environment.
 */
export interface RenderEventArgs {
	/**
	 * A Snap.svg Paper object giving an access to the current underlying SVG paper.
	 */
	paper: Snap.Paper;

	/**
	 * A configuration settings actual used.
	 */
	config: OrgChartConfig;
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
	 * An index of level in which the node is located.
	 */
	level: number;

	/**
	 * An index of node in the level.
	 */
	index: number;

	/**
	 * The node associated with currently rendered box.
	 */
	node: RenderedChartNode;
}

export interface RenderedChartNode extends OrgChartNode {
	isPlaceholder: boolean;
}

export interface BoxClickEventArgs {
	/**
	 * The node associated with currently rendered box.
	 */
	node: RenderedChartNode;
}
