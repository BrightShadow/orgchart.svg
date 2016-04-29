export interface OrgChartNode {
	id: string;
	parentId: string;
	data: any;
	tipOverChildren?: boolean;
	children: OrgChartNode[];
	childrenCollapsed?: boolean;
}
