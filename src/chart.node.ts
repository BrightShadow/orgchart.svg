export interface ChartNode {
	id: string;
	parentId: string;
	data: any;
	tipOverChildren?: boolean;
	children: ChartNode[];
}
