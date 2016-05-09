import {OrgChartNode} from "./orgchart.node";

export interface LevelNode extends OrgChartNode{
	level: number;
	isPlaceholder: boolean;
	isFirstChildOfParent: boolean;
	nodeIndexInLevel: number;
	containerWidth: number;
	width: number;
	height: number;
	parentNode: LevelNode;
	childNodes: LevelNode[];

	tipOverParent: boolean;
	tipOverParentLastColumnWidth: number;
	tipOverChild: boolean;
	tipOverColumnIndex: number;
	tipOverColumns: number;
	tipOverLineIndex: number;
	tipOverLinesCount: number;
	tipOverHasNodeBelow: boolean;
	tipOverLastChild: boolean;
	tipOverFirstChild: boolean;

	/**
	 * The value is filled in with ready SVG fragment to add
	 * to the SVG DOM, just after the renderBox event.
	 */
	representationString: string;
}
