import {NodeSvg} from "./node.svg";
import {NodeOptions} from "./node.options";

export class OrgChartSvgConfig {
    public svgId: string;
    public nodes: NodeSvg[];
    public nodeOptions: NodeOptions;
    public gapH: number = 60;
    public gapV: number = 60;

    constructor() {
        this.nodes = [];
        this.nodeOptions = new NodeOptions();
        this.nodeOptions.width = 300;
        this.nodeOptions.width = 60;
    }
}