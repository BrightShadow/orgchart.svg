import {OrgChartLevelNode} from "./orgchart.level.node";

/**
 * Describes an OrgChart column group of nodes.
 */
export interface OrgChartNodesColumn {
	/**
	 * Column id equal to the column root node id (rootNode.id).
	 */
	id: string;

	/**
	 * Reference to the group element of this nodes column.
	 */
	svgReference: Snap.Element;

	/**
	 * A column root node.
	 */
	rootNode: OrgChartLevelNode;
}
