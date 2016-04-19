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
            this.config.nodeOptions.gapH = 5;
            this.config.connectorOptions = {};
            this.config.connectorOptions.strokeWidth = 1;
            this.config.connectorOptions.color = 'red';
            this.config.tipOverOptions = {
                minChildrenCount: 3,
                maxColumnHeight: 3
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
                        placeholderNode.leftMargin = 0;
                        this.levels[level].nodes.unshift(placeholderNode);
                    }
                }
            }
        };
        OrgChartSvg.prototype.calcTipOverChildren = function (node, level) {
            if (level === void 0) { level = 0; }
            var containerWidth = 0;
            var nodeIndexInLevel = 0;
            var levelNode = this.buildLevelNode(node, level, true);
            level++;
            if (node.children !== null && node.children.length > 0) {
                var columnWidths = [];
                var childIndex = 0;
                var columnIndex = 0;
                var lineIndex = 0;
                var linesCount = 0;
                var columns = Math.floor(node.children.length / this.config.tipOverOptions.maxColumnHeight);
                columns += node.children.length % this.config.tipOverOptions.maxColumnHeight > 0 ? 1 : 0;
                linesCount = Math.ceil(node.children.length / columns);
                for (var c = 0; c < columns; c++) {
                    columnWidths[c] = 0;
                }
                levelNode.tipOverParent = true;
                levelNode.tipOverColumns = columns;
                for (var i = 0; i < node.children.length; i++) {
                    var childLevelNode = this.buildLevelNode(node.children[childIndex], level, true);
                    childLevelNode.tipOverChild = true;
                    childLevelNode.tipOverColumns = columns;
                    childLevelNode.tipOverColumnIndex = columnIndex;
                    childLevelNode.tipOverLineIndex = lineIndex;
                    childLevelNode.tipOverLinesCount = linesCount;
                    childLevelNode.tipOverLastChild = i === node.children.length - 1;
                    if (!childLevelNode.tipOverLastChild && lineIndex < linesCount - 1) {
                        var emptyPlaces = linesCount * columns - node.children.length;
                        childLevelNode.tipOverHasNodeBelow = columnIndex < (columns - emptyPlaces);
                    }
                    else {
                        childLevelNode.tipOverHasNodeBelow = false;
                    }
                    var width = this.getSingleNodeWidth(childLevelNode) + childLevelNode.leftMargin;
                    columnWidths[columnIndex] = Math.max(columnWidths[columnIndex], width);
                    childLevelNode.containerWidth = width + this.config.nodeOptions.gapH * 2;
                    childIndex++;
                    columnIndex++;
                    if (columnIndex == columns) {
                        columnIndex = 0;
                        level++;
                        lineIndex++;
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
        OrgChartSvg.prototype.buildLevelNode = function (node, level, addNode) {
            if (addNode === void 0) { addNode = false; }
            var levelNode = node;
            levelNode.width = this.getSingleNodeWidth(levelNode);
            levelNode.height = this.getSingleNodeHeight(levelNode);
            levelNode.containerWidth = 0;
            levelNode.leftMargin = 0;
            levelNode.level = level;
            if (addNode) {
                try {
                    this.createLevelIfNotExists(level);
                    this.levels[level].nodes.push(levelNode);
                }
                catch (e) {
                    console.error('Level ' + level + ' doesn\'t exist yet.\n' + e);
                }
            }
            return levelNode;
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
            var containerWidth = 0, levelNode;
            if (node.tipOverChildren) {
                return this.calcTipOverChildren(node, level);
            }
            levelNode = this.buildLevelNode(node, level, true);
            level++;
            if (node.children !== null && node.children.length > 0) {
                for (var i = 0; i < node.children.length; i++) {
                    containerWidth += this.calcChildren(node.children[i], level);
                }
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
            var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;
            for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
                var level = this.levels[levelIdx];
                var lastLevel = levelIdx === this.levels.length - 1;
                nextParentId = null;
                hLineNodes = 0;
                top = levelIdx * (this.config.nodeOptions.height + gapY) + 10;
                left = 10;
                for (var i = 0; i < level.nodes.length; i++) {
                    var node = level.nodes[i];
                    var marginLeft = (node.containerWidth - node.width) / 2 + node.leftMargin;
                    var x = left + marginLeft;
                    var y = top;
                    if (!node.tipOverChild) {
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
                    else {
                        var evenColumn = (node.tipOverColumnIndex + 1) % 2 === 0;
                        var lastColumn = node.tipOverColumnIndex === node.tipOverColumns - 1;
                        var firstLine = node.tipOverLineIndex === 0;
                        var lastLine = node.tipOverLineIndex === node.tipOverLinesCount - 1;
                        left += node.containerWidth;
                        if (!node.isPlaceholder) {
                            hLineNodes++;
                            this.snap.rect(x, y, node.width, node.height);
                            if (levelIdx !== 0 && !lastColumn && !evenColumn) {
                                this.snap.line(x + node.width, y + node.height / 2, x + node.width + gapX + halfLineWidth, y + node.height / 2).attr({
                                    strokeWidth: this.config.connectorOptions.strokeWidth,
                                    stroke: this.config.connectorOptions.color
                                });
                            }
                            if ((node.tipOverColumnIndex > 0 && evenColumn) || lastColumn) {
                                this.snap.line(x, y + node.height / 2, x - gapX - halfLineWidth, y + node.height / 2).attr({
                                    strokeWidth: this.config.connectorOptions.strokeWidth,
                                    stroke: this.config.connectorOptions.color
                                });
                                if (firstLine) {
                                    this.snap.line(x - gapX, y + node.height / 2, x - gapX, y - gapY / 2).attr({
                                        strokeWidth: this.config.connectorOptions.strokeWidth,
                                        stroke: this.config.connectorOptions.color
                                    });
                                }
                                else {
                                    this.snap.line(x - gapX, y + node.height / 2, x - gapX, y - gapY).attr({
                                        strokeWidth: this.config.connectorOptions.strokeWidth,
                                        stroke: this.config.connectorOptions.color
                                    });
                                }
                                if (node.tipOverHasNodeBelow) {
                                    this.snap.line(x - gapX, y + node.height / 2, x - gapX, y + node.height).attr({
                                        strokeWidth: this.config.connectorOptions.strokeWidth,
                                        stroke: this.config.connectorOptions.color
                                    });
                                }
                            }
                            this.snap.text(x + 3, y + 16, [node.data.text]).attr({ fill: 'white' });
                        }
                        else {
                            this.snap.rect(x, y, node.width, node.height).attr({ fill: 'red' });
                        }
                    }
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
