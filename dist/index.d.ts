declare module "config.debug.options" {
    export interface ConfigDebugOptions {
        showPlaceholderBoxes: boolean;
        placeholderBoxesColor: string;
    }
}
declare module "connector.type" {
    export enum ConnectorType {
        up = 0,
        down = 1,
        left = 2,
        right = 3,
        leftDown = 4,
        rightUp = 5,
        leftUp = 6,
        horizontal = 7,
        horizontalTipOver = 8,
        horizontalSingleTipOver = 9,
    }
}
declare module "node.options" {
    export interface NodeOptions {
        width: number;
        height: number;
        gapH: number;
        gapV: number;
        margin: NodeMargin;
        background: string;
        textColor: string;
        nodeClass: string;
        clickableBoxClass: string;
        collapseButtonClass: string;
        nodeAttribute: string;
        collapsible: boolean;
    }
    export class NodeMargin {
        top: number;
        right: number;
        bottom: number;
        left: number;
        constructor(all?: number);
    }
}
declare module "org.chart.config" {
    import { NodeOptions } from "node.options";
    import { OrgChartNode } from "orgchart.node";
    import { OrgChartConnectorOptions } from "orghcart.connector.options";
    import { TipOverOptions } from "tip.over.options";
    import { ConfigDebugOptions } from "config.debug.options";
    import { RenderBoxEventArgs } from "orgchart.events";
    import { RenderEventArgs } from "orgchart.events";
    import { BoxClickEventArgs } from "orgchart.events";
    import { NodeToggleEventArgs } from "orgchart.events";
    import { CustomClickEventArgs } from "orgchart.events";
    export class OrgChartConfig {
        /**
         * An ID of the SVG element where the chart will be rendered.
         */
        svgId: string;
        nodes: OrgChartNode;
        nodeOptions: NodeOptions;
        connectorOptions: OrgChartConnectorOptions;
        tipOverOptions: TipOverOptions;
        debugOptions: ConfigDebugOptions;
        /**
         * Duration of expand/collapse animation in milliseconds. Default set to 300ms.
         */
        collapsingDuration: number;
        /**
         * Name of the attribute added to the template element which will invoke custom click events.
         */
        customClickEventAttr: string;
        /**
         * An event handler called each time the node box is drawn to the SVG canvas.
         * The handler can return a string containing a valid SVG fragment. If so, the fragment
         * will be used as a template and will be rendered to the SVG.
         */
        onBoxRender: (args: RenderBoxEventArgs) => string;
        /**
         * An event handler called before nodes are drawn to the SVG canvas.
         * The handler can return a string containing a valid SVG fragment. If so, the fragment
         * will be used as a template and will be rendered to the SVG before everything else.
         *
         * NOTE: Use this method to add defs to the SVG, to render some background effects etc.
         */
        onBeforeRender: (args: RenderEventArgs) => string;
        /**
         * An event handler called after nodes are drawn to the SVG canvas.
         *
         * NOTE: Use this method to add event handlers to already existing nodes.
         */
        onAfterRender: (args: RenderEventArgs) => void;
        /**
         * An event handler called when a node box SVG tag was clicked.
         * NOTE: Remember that only boxes with a class set in config.clickableBoxClass are used.
         * So if you are using custom template remember to add this class to the clickable area.
         */
        onBoxClick: (args: BoxClickEventArgs) => void;
        /**
         * An event handler called when a custom part of node box template was clicked.
         */
        onCustomClick: (args: CustomClickEventArgs) => void;
        /**
         * An event handler called when a collapse button was clicked and the node is beaing collapsed.
         * NOTE: Remember that only boxes with a class set in config.collapseButtonClass are used.
         * So if you are using custom template remember to add this class to the clickable area.
         */
        onNodeToggle: (args: NodeToggleEventArgs) => void;
        static defaultConfig(): OrgChartConfig;
        static getFullNodeSelectorId(node: OrgChartNode): string;
    }
}
declare module "orgchart.events" {
    import { OrgChartNode } from "orgchart.node";
    import { OrgChartConfig } from "org.chart.config";
    /**
     * Provides information about rendering environment.
     */
    export interface RenderEventArgs {
        /**
         * A Snap.svg Paper object giving an access to the current underlying SVG paper.
         */
        paper: Snap.Paper;
        /**
         * A configuration settings actual used.
         */
        config: OrgChartConfig;
    }
    /**
     * Provides additional information about currently rendered node box.
     */
    export interface RenderBoxEventArgs extends RenderEventArgs {
        /**
         * Position X of the left upper corner of the node box.
         */
        x: number;
        /**
         * Position Y of the left upper corner of the node box.
         */
        y: number;
        /**
         * Width of the node box. The box cannot exceed this width.
         */
        width: number;
        /**
         * Height of the node box. The box cannot exceed this height.
         */
        height: number;
        /**
         * The node associated with currently rendered box.
         */
        node: RenderedChartNode;
    }
    export interface RenderedChartNode extends OrgChartNode {
        isPlaceholder: boolean;
        rowIndex: number;
        columnIndex: number;
    }
    export interface BoxClickEventArgs {
        /**
         * A native mouse event details.
         */
        event: MouseEvent;
        /**
         * The node associated with currently rendered box.
         */
        node: RenderedChartNode;
    }
    export interface NodeToggleEventArgs extends BoxClickEventArgs {
        /**
         * Determines if the corresponding node's children was collapsed (true) or not (false).
         */
        isCollapsed: boolean;
    }
    export interface CustomClickEventArgs extends BoxClickEventArgs {
        /**
         * Contains a custom click event attribute value set in template.
         */
        customName: string;
    }
}
declare module "orgchart.level.info" {
    import { OrgChartLevelNode } from "orgchart.level.node";
    export class ChartLevelInfo {
        level: number;
        nodes: OrgChartLevelNode[];
    }
}
declare module "orgchart.level.node" {
    import { OrgChartNode } from "orgchart.node";
    export interface OrgChartLevelNode extends OrgChartNode {
        level: number;
        isPlaceholder: boolean;
        isFirstChildOfParent: boolean;
        nodeIndexInLevel: number;
        containerWidth: number;
        width: number;
        height: number;
        parentNode: OrgChartLevelNode;
        childNodes: OrgChartLevelNode[];
        tipOverParent: boolean;
        tipOverParentLastColumnWidth: number;
        tipOverChild: boolean;
        tipOverColumnIndex: number;
        tipOverColumns: number;
        tipOverLineIndex: number;
        tipOverLinesCount: number;
        tipOverHasNodeBelow: boolean;
        tipOverLastChild: boolean;
        tipOverFirstChild: boolean;
        /**
         * The value is filled in with ready SVG fragment to add
         * to the SVG DOM, just after the renderBox event.
         */
        representationString: string;
    }
}
declare module "orgchart.node" {
    export interface OrgChartNode {
        id: string;
        parentId: string;
        data: any;
        tipOverChildren?: boolean;
        children: OrgChartNode[];
        childrenCollapsed?: boolean;
    }
}
declare module "orgchart.svg" {
    import 'snapsvg';
    import 'snap.svg.zpd';
    import { OrgChartConfig } from "org.chart.config";
    export class OrgChartSvg {
        private config;
        private levels;
        private snap;
        private lineGroups;
        private linesGroupIdPrefix;
        private lineParentIdAttribute;
        private lineToAttr;
        private lineHorizontal;
        private nodesGroupIdPrefix;
        private nodeIdPrefix;
        private overlayElement;
        private rootNodePosition;
        constructor(config?: OrgChartConfig);
        private initDefaultConfig();
        private clear();
        private analyzeTreeLevels(node, level?);
        /**
         * Checks  the node children should be stack in tip-over convention.
         * @param node An input node to check.
         * @returns {boolean} Returns true or false regarding it is a candidate to tip-over children or not.
         */
        private isNodeTipOver(node);
        private createPlaceholder(levelNode, level);
        /**
         * The same method as calcChildren but calculate a tip-over subtree, not a default subtree tree.
         * Traverses across the three through the children to calculate the widths of nodes and their containers.
         * Method adds also all node level info records to levels. It is a source info for render method.
         * @param node A parent node to check.
         * @param level Current level for the parent node.
         * @returns {number} A total container width for the node.
         */
        private calcTipOverChildren(node, level?, parentNode?, justAnalyze?);
        /**
         * Builds new level node record using existing node and level,
         * creates also level if it is needed to create a level node.
         * @param node A ChartNode record
         * @param level A level to be used to assign with the node
         * @param addNode Determines if new level node should be added to levels after creation.
         * @returns {OrgChartLevelNode} New level node with 0 containerWidth.
         */
        private buildLevelNode(node, level, addNode?);
        private getTipOverTreeWidth(columns);
        /**
         * Calculates a special number of gaps used to position the tip-over columns.
         * @param columnsCount A number of columns.
         * @returns {number} Value which multiplied by gapH will result in the width of all column gaps.
         */
        private getGapsCountForTipOverColumns(columnsCount);
        /**
         * Creates new level of nodes in a set, if not exists.
         * @param level A level index which is required to exist.
         */
        private createLevelIfNotExists(level);
        /**
         * Traverses into the three through the children to calculate the widths of nodes and their containers.
         * Method adds also all node level info records to levels. It is a source info for render method.
         * @param node A parent node to check.
         * @param level Current level for the parent node.
         * @returns {number} A total container width for the node.
         */
        private calcChildren(node, level?, parentNode?);
        /**
         * Generates a placeholder nodes below the node down to
         * last level. The node musn't have children.
         * @param levelNode The node to be processed.
         * @returns {number} A number of placeholders added below the given level node.
         */
        private generateNodePlaceholders(levelNode);
        private generatePlaceholdersForTipOverTree(level, count, columnsCount);
        private getSingleNodeWidth(node);
        private getSingleNodeHeight(node);
        private render();
        private renderConnectorLine(x, y, x2, y2, node, connectorType, fromToHorizontal?);
        private buildRenderedChartNode(node, level, index);
        /**
         * Creates an overlay element in the DOM using internal template.
         */
        private createOverlayElement();
        private showOverlay();
        private hideOverlay();
        /**
         * Joins all node templates and fragments into one single string ready to render.
         * Nodes are joined wrapping them in SVG groups, to allow further tree manipulation after render.
         * @param rootNode A root node of the whole tree.
         * @param fragment An initial fragment which will be concatenated with other fragments.
         * @returns {string} A final fragment ready to render.
         */
        private joinTemplatesFragments(rootNode, fragment?);
        /**
         * Wraps template of node box in group tag with additional information about the node,
         * e.g. the x,y coordinates and width,height of the node box.
         * Note: The information is used in collapse/expand behavior and to position the box in the diagram.
         * @param template The template of the node - filled in with data.
         * @param args Arguments used to extract information for attributes.
         * @returns {string} Wrapped template string ready to add to the SVG DOM.
         */
        private wrapTemplateInfoGroup(template, args);
        private surroundWithColumnGroup(fragment, parent);
        private fireEventBeforeRender(templatesFragment);
        private fireEventAfterRender();
        private fireEventBoxRender(onRenderBoxArgs, node);
        /**
         * A post render event attacher. Attaches all events handled by the chart, called
         * user interaction events.
         */
        private attachOrgChartEvents();
        /**
         * Performs a toggle collapse/expand behavior.
         * @param levelNode A node which will be treated as central node.
         * @param infoRecord Additional information record for node - it is saved in the node element attribute.
         */
        private toggleNodeCollapse(levelNode, infoRecord);
        /**
         * Founds all siblings for the given central node.
         * @param levelNode A central node whom siblings are searched for.
         * @returns {SiblingNodesSet} A set of siblings on the left and right side.
         */
        private getNodeSiblings(levelNode);
        /**
         * Collapses given node, by collapsing all its children - using animation.
         * @param levelNode A central node whom children will be collapsed/expanded.
         * @param infoRecord An additional record information.
         * @returns {boolean} True if the operation succeeded or false when not or when was canceled.
         */
        private collapseCentralNode(levelNode, infoRecord);
        /**
         * Moves closer for collapse, further for expand, all sibling nodes - groups.
         * @param levelNode A central node - expanded or collapsed.
         * @param moveDelta A width by whom the sibling nodes are moved.
         * @param siblings A collection of siblings found for levelNode.
         */
        private adjustSiblingNodesByDelta(levelNode, isCollapsed, moveDelta, siblings);
        /**
         * Finds all line elements matching the given filter.
         * @param filter One of the filters in this object must used.
         * @returns {Snap.Element[]}  A set of line elements.
         */
        private findLinesByFilter(filter);
        /**
         * Searches a group of lines for given parent node id.
         * @param parentNodeId An id of node which is a parent of all nodes connected by those lines.
         * @returns {Snap.Element} A nodes group element.
         */
        private findLinesGroupById(parentNodeId);
        /**
        * Searches a group of nodes for given parent node id.
        * @param parentNodeId An id of node which is a parent of all child nodes below the.
        * @returns {Snap.Element} A nodes group element.
        */
        private findNodesGroupByParentId(parentNodeId);
        /**
         * Searches a single node element by its id.
         * @param nodeId An id of node to find.
         * @returns {Snap.Element} An element of the node.
         */
        private findNodeById(nodeId);
    }
}
declare module "orgchart.template" {
    import { RenderBoxEventArgs } from "orgchart.events";
    export class OrgChartTemplate {
        private snap;
        fragment: string;
        nodeTemplate: string;
        rightConnectorTemplate: string;
        leftConnectorTemplate: string;
        topConnectorTemplate: string;
        bottomConnectorTemplate: string;
        horizontalConnectorTemplate: string;
        definitions: string;
        constructor(snap: Snap.Paper);
        private replaceAll(target, search, replacement);
        collect(args: RenderBoxEventArgs): void;
        getTemplateFragment(): any;
    }
}
declare module "orghcart.connector.options" {
    export interface OrgChartConnectorOptions {
        strokeWidth: number;
        color: string;
    }
}
declare module "tip.over.options" {
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
}
