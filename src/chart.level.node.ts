import {ChartNode} from "./chart.node";

export interface ChartLevelNode extends ChartNode{
	level: number;
	isPlaceholder: boolean;
	containerWidth: number;
	width: number;
	height: number;
	parentNode: ChartLevelNode;
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
	leftMargin: number;
}
