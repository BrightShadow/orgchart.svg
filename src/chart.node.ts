import {NodeSvg} from "./node.svg";

export interface ChartNode {
    svgNode: NodeSvg;
    parentNode: NodeSvg;
    x: number;
    y: number;
    width: number;
    height: number;
}
