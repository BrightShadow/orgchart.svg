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
            this.config.nodeOptions.gapH = 10;
            this.config.connectorOptions = {};
            this.config.connectorOptions.strokeWidth = 1;
            this.config.connectorOptions.color = 'red';
            this.config.tipOverOptions = {
                minChildrenCount: 3,
                maxColumnHeight: 12
            };
            this.config.debugOptions = {
                showPlaceholderBoxes: true,
                placeholderBoxesColor: 'rgba(0,0,0,0.05)'
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
                                    },
                                    {
                                        id: '14',
                                        parentId: '6',
                                        data: { text: "child X8" },
                                        children: []
                                    },
                                    {
                                        id: '15',
                                        parentId: '6',
                                        data: { text: "child X9" },
                                        children: []
                                    },
                                    {
                                        id: '16',
                                        parentId: '6',
                                        data: { text: "child X10" },
                                        children: []
                                    },
                                    {
                                        id: '17',
                                        parentId: '6',
                                        data: { text: "child X11" },
                                        children: []
                                    },
                                    {
                                        id: '18',
                                        parentId: '6',
                                        data: { text: "child X12" },
                                        children: []
                                    },
                                    {
                                        id: '19',
                                        parentId: '6',
                                        data: { text: "child X13" },
                                        children: []
                                    },
                                    {
                                        id: '20',
                                        parentId: '6',
                                        data: { text: "child X14" },
                                        children: []
                                    },
                                    {
                                        id: '21',
                                        parentId: '6',
                                        data: { text: "child X15" },
                                        children: []
                                    },
                                    {
                                        id: '22',
                                        parentId: '6',
                                        data: { text: "child X16" },
                                        children: []
                                    },
                                    {
                                        id: '23',
                                        parentId: '6',
                                        data: { text: "child X17" },
                                        children: []
                                    },
                                    {
                                        id: '24',
                                        parentId: '6',
                                        data: { text: "child X18" },
                                        children: []
                                    },
                                    {
                                        id: '25',
                                        parentId: '6',
                                        data: { text: "child X19" },
                                        children: []
                                    },
                                    {
                                        id: '26',
                                        parentId: '6',
                                        data: { text: "child X20" },
                                        children: []
                                    },
                                    {
                                        id: '7',
                                        parentId: '6',
                                        data: { text: "child X21" },
                                        children: []
                                    },
                                    {
                                        id: '8',
                                        parentId: '6',
                                        data: { text: "child X22" },
                                        children: []
                                    },
                                    {
                                        id: '9',
                                        parentId: '6',
                                        data: { text: "child X23" },
                                        children: []
                                    },
                                    {
                                        id: '10',
                                        parentId: '6',
                                        data: { text: "child X24" },
                                        children: []
                                    },
                                    {
                                        id: '11',
                                        parentId: '6',
                                        data: { text: "child X25" },
                                        children: []
                                    },
                                    {
                                        id: '12',
                                        parentId: '6',
                                        data: { text: "child X26" },
                                        children: []
                                    },
                                    {
                                        id: '13',
                                        parentId: '6',
                                        data: { text: "child X27" },
                                        children: []
                                    },
                                    {
                                        id: '14',
                                        parentId: '6',
                                        data: { text: "child X28" },
                                        children: []
                                    },
                                    {
                                        id: '15',
                                        parentId: '6',
                                        data: { text: "child X29" },
                                        children: []
                                    },
                                    {
                                        id: '16',
                                        parentId: '6',
                                        data: { text: "child X30" },
                                        children: []
                                    },
                                    {
                                        id: '17',
                                        parentId: '6',
                                        data: { text: "child X31" },
                                        children: []
                                    },
                                    {
                                        id: '18',
                                        parentId: '6',
                                        data: { text: "child X32" },
                                        children: []
                                    },
                                    {
                                        id: '19',
                                        parentId: '6',
                                        data: { text: "child X33" },
                                        children: []
                                    },
                                    {
                                        id: '20',
                                        parentId: '6',
                                        data: { text: "child X34" },
                                        children: []
                                    },
                                    {
                                        id: '21',
                                        parentId: '6',
                                        data: { text: "child X35" },
                                        children: []
                                    },
                                    {
                                        id: '22',
                                        parentId: '6',
                                        data: { text: "child X36" },
                                        children: []
                                    },
                                    {
                                        id: '23',
                                        parentId: '6',
                                        data: { text: "child X37" },
                                        children: []
                                    },
                                    {
                                        id: '24',
                                        parentId: '6',
                                        data: { text: "child X38" },
                                        children: []
                                    },
                                    {
                                        id: '25',
                                        parentId: '6',
                                        data: { text: "child X39" },
                                        children: []
                                    },
                                    {
                                        id: '26',
                                        parentId: '6',
                                        data: { text: "child X40" },
                                        children: []
                                    },
                                    {
                                        id: '7',
                                        parentId: '6',
                                        data: { text: "child X41" },
                                        children: []
                                    },
                                    {
                                        id: '8',
                                        parentId: '6',
                                        data: { text: "child X42" },
                                        children: []
                                    },
                                    {
                                        id: '9',
                                        parentId: '6',
                                        data: { text: "child X43" },
                                        children: []
                                    },
                                    {
                                        id: '10',
                                        parentId: '6',
                                        data: { text: "child X44" },
                                        children: []
                                    },
                                    {
                                        id: '11',
                                        parentId: '6',
                                        data: { text: "child X45" },
                                        children: []
                                    },
                                    {
                                        id: '12',
                                        parentId: '6',
                                        data: { text: "child X46" },
                                        children: []
                                    },
                                    {
                                        id: '13',
                                        parentId: '6',
                                        data: { text: "child X47" },
                                        children: []
                                    },
                                    {
                                        id: '14',
                                        parentId: '6',
                                        data: { text: "child X48" },
                                        children: []
                                    },
                                    {
                                        id: '15',
                                        parentId: '6',
                                        data: { text: "child X49" },
                                        children: []
                                    },
                                    {
                                        id: '16',
                                        parentId: '6',
                                        data: { text: "child X50" },
                                        children: []
                                    },
                                    {
                                        id: '17',
                                        parentId: '6',
                                        data: { text: "child X51" },
                                        children: []
                                    },
                                    {
                                        id: '18',
                                        parentId: '6',
                                        data: { text: "child X52" },
                                        children: []
                                    },
                                    {
                                        id: '19',
                                        parentId: '6',
                                        data: { text: "child X53" },
                                        children: []
                                    },
                                    {
                                        id: '20',
                                        parentId: '6',
                                        data: { text: "child X54" },
                                        children: []
                                    },
                                    {
                                        id: '21',
                                        parentId: '6',
                                        data: { text: "child X55" },
                                        children: []
                                    },
                                    {
                                        id: '22',
                                        parentId: '6',
                                        data: { text: "child X56" },
                                        children: []
                                    },
                                    {
                                        id: '23',
                                        parentId: '6',
                                        data: { text: "child X57" },
                                        children: []
                                    },
                                    {
                                        id: '24',
                                        parentId: '6',
                                        data: { text: "child X58" },
                                        children: []
                                    },
                                    {
                                        id: '25',
                                        parentId: '6',
                                        data: { text: "child X59" },
                                        children: []
                                    },
                                    {
                                        id: '26',
                                        parentId: '6',
                                        data: { text: "child X60" },
                                        children: []
                                    },
                                    {
                                        id: '7',
                                        parentId: '6',
                                        data: { text: "child X61" },
                                        children: []
                                    },
                                    {
                                        id: '8',
                                        parentId: '6',
                                        data: { text: "child X62" },
                                        children: []
                                    },
                                    {
                                        id: '9',
                                        parentId: '6',
                                        data: { text: "child X63" },
                                        children: []
                                    },
                                    {
                                        id: '10',
                                        parentId: '6',
                                        data: { text: "child X64" },
                                        children: []
                                    },
                                    {
                                        id: '11',
                                        parentId: '6',
                                        data: { text: "child X65" },
                                        children: []
                                    },
                                    {
                                        id: '12',
                                        parentId: '6',
                                        data: { text: "child X66" },
                                        children: []
                                    },
                                    {
                                        id: '13',
                                        parentId: '6',
                                        data: { text: "child X67" },
                                        children: []
                                    },
                                    {
                                        id: '14',
                                        parentId: '6',
                                        data: { text: "child X68" },
                                        children: []
                                    },
                                    {
                                        id: '15',
                                        parentId: '6',
                                        data: { text: "child X69" },
                                        children: []
                                    },
                                    {
                                        id: '16',
                                        parentId: '6',
                                        data: { text: "child X70" },
                                        children: []
                                    },
                                    {
                                        id: '17',
                                        parentId: '6',
                                        data: { text: "child X71" },
                                        children: []
                                    },
                                    {
                                        id: '18',
                                        parentId: '6',
                                        data: { text: "child X72" },
                                        children: []
                                    },
                                    {
                                        id: '19',
                                        parentId: '6',
                                        data: { text: "child X73" },
                                        children: []
                                    },
                                    {
                                        id: '20',
                                        parentId: '6',
                                        data: { text: "child X74" },
                                        children: []
                                    },
                                    {
                                        id: '21',
                                        parentId: '6',
                                        data: { text: "child X75" },
                                        children: []
                                    },
                                    {
                                        id: '22',
                                        parentId: '6',
                                        data: { text: "child X76" },
                                        children: []
                                    },
                                    {
                                        id: '23',
                                        parentId: '6',
                                        data: { text: "child X77" },
                                        children: []
                                    },
                                    {
                                        id: '24',
                                        parentId: '6',
                                        data: { text: "child X78" },
                                        children: []
                                    },
                                    {
                                        id: '25',
                                        parentId: '6',
                                        data: { text: "child X79" },
                                        children: []
                                    },
                                    {
                                        id: '26',
                                        parentId: '6',
                                        data: { text: "child X80" },
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
                    }
                }
            }
        };
        OrgChartSvg.prototype.calcTipOverChildren = function (node, level, parentNode) {
            if (level === void 0) { level = 0; }
            if (parentNode === void 0) { parentNode = null; }
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
                levelNode.parentNode = parentNode;
                for (var i = 0; i < node.children.length; i++) {
                    var childLevelNode = this.buildLevelNode(node.children[childIndex], level, true);
                    childLevelNode.tipOverChild = true;
                    childLevelNode.tipOverColumns = columns;
                    childLevelNode.tipOverColumnIndex = columnIndex;
                    childLevelNode.tipOverLineIndex = lineIndex;
                    childLevelNode.tipOverLinesCount = linesCount;
                    childLevelNode.tipOverLastChild = i === node.children.length - 1;
                    childLevelNode.tipOverFirstChild = i === 0;
                    childLevelNode.parentNode = levelNode;
                    childLevelNode.tipOverHasNodeBelow = i < (node.children.length - columns);
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
                levelNode.tipOverParentLastColumnWidth = columnWidths[columnWidths.length - 1];
                containerWidth = this.getTipOverTreeWidth(columnWidths);
            }
            else {
                containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
                this.createLevelIfNotExists(level);
                this.placeholdersParents.push(levelNode);
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
                    levelNode.nodeIndexInLevel = this.levels[level].nodes.length;
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
            return (columnsCount - 1) * 2 + 2;
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
        OrgChartSvg.prototype.calcChildren = function (node, level, parentNode) {
            if (level === void 0) { level = 0; }
            if (parentNode === void 0) { parentNode = null; }
            var containerWidth = 0, levelNode;
            if (node.tipOverChildren) {
                return this.calcTipOverChildren(node, level, parentNode);
            }
            levelNode = this.buildLevelNode(node, level, true);
            levelNode.parentNode = parentNode;
            level++;
            if (node.children !== null && node.children.length > 0) {
                for (var i = 0; i < node.children.length; i++) {
                    containerWidth += this.calcChildren(node.children[i], level, levelNode);
                }
            }
            else {
                containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
                this.createLevelIfNotExists(level);
                this.placeholdersParents.push(levelNode);
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
            var hLineX1, hLineX2, hLineY, hLineNodes = 0, nextParent = null, currentNodeParentId = null, firstNodeParentId = null;
            var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;
            for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
                var level = this.levels[levelIdx];
                var lastLevel = levelIdx === this.levels.length - 1;
                nextParent = null;
                currentNodeParentId = null;
                firstNodeParentId = null;
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
                            firstNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;
                        }
                        currentNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;
                        hLineX2 = x + node.width / 2;
                        if (i + 1 < level.nodes.length) {
                            nextParent = level.nodes[i + 1];
                        }
                        else {
                            nextParent = null;
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
                            if (this.config.debugOptions.showPlaceholderBoxes) {
                                this.snap.rect(x, y, node.width, node.height).attr({ fill: this.config.debugOptions.placeholderBoxesColor });
                            }
                        }
                        if (levelIdx > 0) {
                            if (hLineNodes > 1) {
                                if ((nextParent === null || node.parentId !== nextParent.id)) {
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
                        if (node.tipOverFirstChild && node.tipOverColumns > 2) {
                            var x1 = x + node.width + gapX - halfLineWidth;
                            var x2 = x + node.parentNode.containerWidth - node.parentNode.tipOverParentLastColumnWidth - gapX * 3 + halfLineWidth;
                            var lineY = y - gapY / 2;
                            this.snap.line(x1, lineY, x2, lineY).attr({
                                strokeWidth: this.config.connectorOptions.strokeWidth,
                                stroke: this.config.connectorOptions.color
                            });
                        }
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
                            }
                            if (node.tipOverLastChild && node.tipOverLinesCount > 1 && !evenColumn && node.tipOverColumns > 1
                                && node.tipOverColumnIndex < node.tipOverColumns - 1) {
                                this.snap.line(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y - gapY).attr({
                                    strokeWidth: this.config.connectorOptions.strokeWidth,
                                    stroke: this.config.connectorOptions.color
                                });
                            }
                            if (node.tipOverHasNodeBelow) {
                                if ((!lastColumn && !evenColumn)) {
                                    this.snap.line(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y + node.height).attr({
                                        strokeWidth: this.config.connectorOptions.strokeWidth,
                                        stroke: this.config.connectorOptions.color
                                    });
                                }
                                else if (lastColumn && node.tipOverColumns % 2 === 1) {
                                    this.snap.line(x - gapX, y + node.height / 2, x - gapX, y + node.height).attr({
                                        strokeWidth: this.config.connectorOptions.strokeWidth,
                                        stroke: this.config.connectorOptions.color
                                    });
                                }
                            }
                            this.snap.text(x + 3, y + 16, [node.data.text]).attr({ fill: 'white' });
                        }
                        else {
                            if (this.config.debugOptions.showPlaceholderBoxes) {
                                this.snap.rect(x, y, node.width, node.height).attr({ fill: this.config.debugOptions.placeholderBoxesColor });
                            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnY2hhcnQuc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbIm9yZ2NoYXJ0LnN2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQVdBO1FBT0kscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBTG5DLFVBQUssR0FBa0MsRUFBRSxDQUFDO1lBQzdDLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1lBRTlCLHdCQUFtQixHQUFxQixFQUFFLENBQUM7WUFHbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFSSx1Q0FBaUIsR0FBekI7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFtQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFxQixFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBbUI7Z0JBQzVDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLGVBQWUsRUFBRSxFQUFFO2FBQ25CLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBdUI7Z0JBQzlDLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLHFCQUFxQixFQUFFLGtCQUFrQjthQUN6QyxDQUFDO1lBR0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUc7Z0JBQ25CLEVBQUUsRUFBRSxHQUFHO2dCQUNQLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Z0JBQ3RCLFFBQVEsRUFBRTtvQkFDVDt3QkFDQyxFQUFFLEVBQUUsR0FBRzt3QkFDUCxRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixRQUFRLEVBQUU7NEJBQ1Q7Z0NBQ0MsRUFBRSxFQUFFLElBQUk7Z0NBQ1IsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQ0FDMUIsUUFBUSxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0Q7Z0NBQ0MsRUFBRSxFQUFFLElBQUk7Z0NBQ1IsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQ0FnRTFCLFFBQVEsRUFBRSxFQUFFOzZCQUNaO3lCQUNEO3FCQUNEO29CQUNEO3dCQUNDLEVBQUUsRUFBRSxHQUFHO3dCQUNQLFFBQVEsRUFBRSxHQUFHO3dCQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQ3pCLFFBQVEsRUFBRTs0QkFDVDtnQ0FDQyxFQUFFLEVBQUUsR0FBRztnQ0FDUCxRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dDQUN6QixRQUFRLEVBQUUsRUFBRTs2QkFDWjs0QkFDRDtnQ0FDQyxFQUFFLEVBQUUsR0FBRztnQ0FDUCxRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dDQUN6QixlQUFlLEVBQUUsSUFBSTtnQ0FDckIsUUFBUSxFQUFFO29DQUNUO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQVdEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7d0NBQzNCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQXFCRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FXRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsSUFBSTt3Q0FDUixRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dDQUMzQixRQUFRLEVBQUUsRUFBRTtxQ0FD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
