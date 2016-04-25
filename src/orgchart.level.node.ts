import {OrgChartNode} from "./orgchart.node";

export interface OrgChartLevelNode extends OrgChartNode{
	level: number;
	isPlaceholder: boolean;
	nodeIndexInLevel: number;
	containerWidth: number;
	width: number;
	height: number;
	parentNode: OrgChartLevelNode;
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
