define(["require", "exports", 'snapsvg'], function (require, exports) {
    "use strict";
    var OrgChartSvg = (function () {
        function OrgChartSvg(config) {
            this.config = config;
            this.nodes = {};
            this.levels = [];
            this.placeholdersParents = [];
            if (!config) {
                this.initDefaultConfig();
            }
            this.snap = Snap('#orgChartSvg');
            this.calcPositions();
            this.render();
        }
        OrgChartSvg.prototype.initDefaultConfig = function () {
            this.config = {};
            this.config.selector = '#orgChartSvg';
            this.config.nodeOptions = {};
            this.config.nodeOptions.width = 150;
            this.config.nodeOptions.height = 50;
            this.config.nodeOptions.gapV = 60;
            this.config.nodeOptions.gapH = 2;
            this.config.connectorOptions = {};
            this.config.connectorOptions.strokeWidth = 1;
            this.config.connectorOptions.color = 'red';
            this.config.tipOverOptions = {
                minChildrenCount: 3,
                maxColumnHeight: 6
            };
            this.config.nodes = {
                id: '1',
                parentId: null,
                data: { text: "root" },
                children: [
                    {
                        id: '2',
                        parentId: '1',
                        data: { text: "child 1" },
                        children: [
                            {
                                id: '50',
                                parentId: '2',
                                data: { text: "child Y1" },
                                children: []
                            },
                            {
                                id: '51',
                                parentId: '2',
                                data: { text: "child Y2" },
                                children: []
                            }
                        ]
                    },
                    {
                        id: '3',
                        parentId: '1',
                        data: { text: "child 2" },
                        children: [
                            {
                                id: '5',
                                parentId: '3',
                                data: { text: "child 4" },
                                children: []
                            },
                            {
                                id: '6',
                                parentId: '3',
                                data: { text: "child 5" },
                                tipOverChildren: true,
                                children: [
                                    {
                                        id: '7',
                                        parentId: '6',
                                        data: { text: "child X1" },
                                        children: []
                                    },
                                    {
                                        id: '8',
                                        parentId: '6',
                                        data: { text: "child X2" },
                                        children: []
                                    },
                                    {
                                        id: '9',
                                        parentId: '6',
                                        data: { text: "child X3" },
                                        children: []
                                    },
                                    {
                                        id: '10',
                                        parentId: '6',
                                        data: { text: "child X4" },
                                        children: []
                                    },
                                    {
                                        id: '11',
                                        parentId: '6',
                                        data: { text: "child X5" },
                                        children: []
                                    },
                                    {
                                        id: '12',
                                        parentId: '6',
                                        data: { text: "child X6" },
                                        children: []
                                    },
                                    {
                                        id: '13',
                                        parentId: '6',
                                        data: { text: "child X7" },
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '4',
                        parentId: '1',
                        data: { text: "child 3" },
                        children: []
                    }
                ]
            };
        };
        OrgChartSvg.prototype.clear = function () {
        };
        OrgChartSvg.prototype.calcPositions = function () {
            this.calcChildren(this.config.nodes);
            if (this.levels[this.levels.length - 1].nodes.length === 0) {
                this.levels.splice(this.levels.length - 1);
            }
            this.generatedPlaceholders();
            console.log(this.levels);
            console.log(this.placeholdersParents);
        };
        OrgChartSvg.prototype.generatedPlaceholders = function () {
            for (var i = 0; i < this.placeholdersParents.length; i++) {
                var levelNode = this.placeholdersParents[i];
                if (levelNode.level < this.levels.length - 1) {
                    for (var level = levelNode.level + 1; level < this.levels.length; level++) {
                        var placeholderNode = {};
                        placeholderNode.width = levelNode.width;
                        placeholderNode.height = this.config.nodeOptions.height;
                        placeholderNode.containerWidth = levelNode.containerWidth;
                        placeholderNode.isPlaceholder = true;
                        this.levels[level].nodes.unshift(placeholderNode);
                    }
                }
            }
        };
        OrgChartSvg.prototype.calcTipOverChildren = function (node, level) {
            if (level === void 0) { level = 0; }
            var containerWidth = 0;
            var nodeIndexInLevel = 0;
            if (this.levels.length < level + 1) {
                this.levels.push({
                    nodes: [],
                    tipOver: false,
                    level: level
                });
            }
            var levelNode = node;
            levelNode.width = this.getSingleNodeWidth(levelNode);
            levelNode.height = this.getSingleNodeHeight(levelNode);
            levelNode.containerWidth = 0;
            levelNode.level = level;
            this.levels[level].nodes.push(levelNode);
            level++;
            if (node.children !== null && node.children.length > 0) {
                var columnWidths = [];
                var childIndex = 0;
                var columnIndex = 0;
                var columns = Math.floor(node.children.length / this.config.tipOverOptions.maxColumnHeight);
                columns += node.children.length % this.config.tipOverOptions.maxColumnHeight > 0 ? 1 : 0;
                for (var c = 0; c < columns; c++) {
                    columnWidths[c] = 0;
                }
                levelNode.tipOver = true;
                levelNode.tipOverColumns = columns;
                for (var i = 0; i < node.children.length; i++) {
                    var childLevelNode = node.children[childIndex];
                    var width = this.getSingleNodeWidth(childLevelNode);
                    columnWidths[columnIndex] = Math.max(columnWidths[columnIndex], width);
                    this.createLevelIfNotExists(level);
                    childLevelNode.width = this.getSingleNodeWidth(childLevelNode);
                    childLevelNode.height = this.getSingleNodeHeight(childLevelNode);
                    childLevelNode.containerWidth = width + this.config.nodeOptions.gapH * 2;
                    childLevelNode.level = level;
                    this.levels[level].nodes.push(childLevelNode);
                    childIndex++;
                    columnIndex++;
                    if (columnIndex == columns) {
                        columnIndex = 0;
                        level++;
                    }
                }
                containerWidth = this.getTipOverTreeWidth(columnWidths);
            }
            else {
                containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
                this.createLevelIfNotExists(level);
                if (this.levels[level].nodes.length === 0) {
                    this.placeholdersParents.push(levelNode);
                }
            }
            levelNode.containerWidth = containerWidth;
            return containerWidth;
        };
        OrgChartSvg.prototype.getTipOverTreeWidth = function (columns) {
            var containerWidth = 0, gapsWidth = this.config.nodeOptions.gapH * this.getGapsCountForTipOverColumns(columns.length);
            for (var c = 0; c < columns.length; c++) {
                containerWidth += columns[c];
            }
            return containerWidth + gapsWidth;
        };
        OrgChartSvg.prototype.getGapsCountForTipOverColumns = function (columnsCount) {
            return columnsCount + (Math.ceil(columnsCount / 2) - 1) + 2;
        };
        OrgChartSvg.prototype.createLevelIfNotExists = function (level) {
            if (this.levels.length < level + 1) {
                this.levels.push({
                    nodes: [],
                    tipOver: false,
                    level: level
                });
            }
        };
        OrgChartSvg.prototype.calcChildren = function (node, level) {
            if (level === void 0) { level = 0; }
            if (node.tipOverChildren) {
                return this.calcTipOverChildren(node, level);
            }
            var containerWidth = 0;
            var nodeIndexInLevel = 0;
            if (this.levels.length < level + 1) {
                this.levels.push({
                    nodes: [],
                    tipOver: false,
                    level: level
                });
            }
            var levelNode = node;
            levelNode.width = this.getSingleNodeWidth(levelNode);
            levelNode.height = this.getSingleNodeHeight(levelNode);
            levelNode.containerWidth = 0;
            levelNode.level = level;
            this.levels[level].nodes.push(levelNode);
            level++;
            if (node.children !== null && node.children.length > 0) {
                for (var i = 0; i < node.children.length; i++) {
                    containerWidth += this.calcChildren(node.children[i], level);
                }
            }
            else {
                containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
                if (this.levels.length < level + 1) {
                    this.levels.push({
                        nodes: [],
                        tipOver: false,
                        level: level
                    });
                }
                if (this.levels[level].nodes.length === 0) {
                    this.placeholdersParents.push(levelNode);
                }
            }
            levelNode.containerWidth = containerWidth;
            return containerWidth;
        };
        OrgChartSvg.prototype.getSingleNodeWidth = function (node) {
            return this.config.nodeOptions.width;
        };
        OrgChartSvg.prototype.getSingleNodeHeight = function (node) {
            return this.config.nodeOptions.height;
        };
        OrgChartSvg.prototype.render = function () {
            var left = 10;
            var top = 10;
            var gapX = this.config.nodeOptions.gapH;
            var gapY = this.config.nodeOptions.gapV;
            var hLineX1, hLineX2, hLineY, hLineNodes = 0, nextParentId = null;
            for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
                var level = this.levels[levelIdx];
                var lastLevel = levelIdx === this.levels.length - 1;
                nextParentId = null;
                hLineNodes = 0;
                top = levelIdx * (this.config.nodeOptions.height + gapY) + 10;
                left = 10;
                for (var i = 0; i < level.nodes.length; i++) {
                    var node = level.nodes[i];
                    var marginLeft = (node.containerWidth - node.width) / 2;
                    var x = left + marginLeft;
                    var y = top;
                    if (hLineNodes === 0) {
                        hLineX1 = x + node.width / 2;
                        hLineY = y - gapY / 2;
                    }
                    hLineX2 = x + node.width / 2;
                    if (i + 1 < level.nodes.length) {
                        nextParentId = level.nodes[i + 1].parentId;
                    }
                    else {
                        nextParentId = null;
                    }
                    if (!node.isPlaceholder) {
                        hLineNodes++;
                        this.snap.rect(x, y, node.width, node.height);
                        if (levelIdx !== 0) {
                            this.snap.line(x + node.width / 2, y, x + node.width / 2, y - gapY / 2).attr({
                                strokeWidth: this.config.connectorOptions.strokeWidth,
                                stroke: this.config.connectorOptions.color
                            });
                        }
                        if (node.children !== null && node.children.length > 0) {
                            this.snap.line(x + node.width / 2, y + node.height, x + node.width / 2, y + node.height + gapY / 2).attr({
                                strokeWidth: this.config.connectorOptions.strokeWidth,
                                stroke: this.config.connectorOptions.color
                            });
                        }
                        this.snap.text(x + 3, y + 16, [node.data.text]).attr({ fill: 'white' });
                    }
                    else {
                        this.snap.rect(x, y, node.width, node.height).attr({ fill: 'red' });
                    }
                    if (levelIdx > 0) {
                        if (hLineNodes > 1) {
                            if (node.parentId !== nextParentId || nextParentId === null) {
                                var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;
                                this.snap.line(hLineX1 - halfLineWidth, hLineY, hLineX2 + halfLineWidth, hLineY).attr({
                                    strokeWidth: this.config.connectorOptions.strokeWidth,
                                    stroke: this.config.connectorOptions.color
                                });
                                hLineNodes = 0;
                            }
                        }
                    }
                    left += node.containerWidth;
                }
            }
        };
        OrgChartSvg.prototype.setNodes = function (root) {
            this.nodes = {};
            this.config.nodes = root;
            this.clear();
            this.calcPositions();
            this.render();
        };
        return OrgChartSvg;
    }());
    exports.OrgChartSvg = OrgChartSvg;
});
//# sourceMappingURL=orgchart.svg.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnY2hhcnQuc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbIm9yZ2NoYXJ0LnN2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQVVBO1FBT0kscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBTG5DLFVBQUssR0FBa0MsRUFBRSxDQUFDO1lBQzdDLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1lBRTlCLHdCQUFtQixHQUFxQixFQUFFLENBQUM7WUFHbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFSSx1Q0FBaUIsR0FBekI7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFtQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFxQixFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0s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
