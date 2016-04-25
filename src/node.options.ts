export interface NodeOptions {
    width: number;
    height: number;
	gapH: number;
	gapV: number;
	margin: NodeMargin;
	background: string;
	textColor: string;
}

export interface NodeMargin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}
