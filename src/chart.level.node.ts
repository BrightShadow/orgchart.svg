import {ChartNode} from "./chart.node";

export interface ChartLevelNode extends ChartNode{
	level: number;
	isPlaceholder: boolean;
	containerWidth: number;
	width: number;
	height: number;
	parentNode: ChartLevelNode;
	tipOver: boolean;
	tipOverColumns: number;
}
