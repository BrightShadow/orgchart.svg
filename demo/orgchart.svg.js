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
                maxColumnHeight: 7
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
                                        children: [
                                            {
                                                id: '5',
                                                parentId: '9',
                                                data: { text: "child G1" },
                                                children: []
                                            },
                                            {
                                                id: '5',
                                                parentId: '9',
                                                data: { text: "child G2" },
                                                children: []
                                            },
                                        ]
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
        OrgChartSvg.prototype.calcChildren = function (node, level) {
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
                for (var i = 0; i < node.children.length; i++) {
                    containerWidth += this.calcChildren(node.children[i], level);
                }
            }
            else {
                containerWidth = levelNode.width + this.config.nodeOptions.gapH * 2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnY2hhcnQuc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbIm9yZ2NoYXJ0LnN2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQVVBO1FBT0kscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBTG5DLFVBQUssR0FBa0MsRUFBRSxDQUFDO1lBQzdDLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1lBRTlCLHdCQUFtQixHQUFxQixFQUFFLENBQUM7WUFHbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFSSx1Q0FBaUIsR0FBekI7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFtQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFxQixFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBbUI7Z0JBQzVDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ25CLGVBQWUsRUFBRSxDQUFDO2FBQ2xCLENBQUM7WUFHRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRztnQkFDbkIsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtnQkFDdEIsUUFBUSxFQUFFO29CQUNUO3dCQUNDLEVBQUUsRUFBRSxHQUFHO3dCQUNQLFFBQVEsRUFBRSxHQUFHO3dCQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQ3pCLFFBQVEsRUFBRTs0QkFDVDtnQ0FDQyxFQUFFLEVBQUUsSUFBSTtnQ0FDUixRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dDQUMxQixRQUFRLEVBQUUsRUFBRTs2QkFDWjs0QkFDRDtnQ0FDQyxFQUFFLEVBQUUsSUFBSTtnQ0FDUixRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dDQUMxQixRQUFRLEVBQUUsRUFBRTs2QkFDWjt5QkFDRDtxQkFDRDtvQkFDRDt3QkFDQyxFQUFFLEVBQUUsR0FBRzt3QkFDUCxRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixRQUFRLEVBQUU7NEJBQ1Q7Z0NBQ0MsRUFBRSxFQUFFLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQ0FDekIsUUFBUSxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0Q7Z0NBQ0MsRUFBRSxFQUFFLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQ0FDekIsUUFBUSxFQUFFO29DQUNUO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxJQUFJO3dDQUNSLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NB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
