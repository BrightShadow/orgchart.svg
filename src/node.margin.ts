export class NodeMargin {
	top: number = 0;
	right: number = 0;
	bottom: number = 0;
	left: number = 0;

	constructor (all: number = 0) {
		this.top = all;
		this.right = all;
		this.bottom = all;
		this.left = all;
	}
}
