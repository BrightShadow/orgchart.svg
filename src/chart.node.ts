import {NodeSvg} from "./node.svg";

export interface ChartNode {
	id: string;
	parentId: string;
	data: any;
	children: ChartNode[];
}
