export interface ChartNode {
	id: string;
	parentId: string;
	data: any;
	children: ChartNode[];
}
