export interface TipOverOptions {
	/**
	 * Minimum amount of node children to start tipping-over.
	 */
	minChildrenCount: number;

	/**
	 * Maximum number of nodes in one stacked column.
	 */
	maxColumnHeight: number;

	/**
	 * NUmber of children determining that the parent node should use tipping-over strategy for all those children.
	 */
	tipOverChildrenCount: number;
}
