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
            this.config.nodeOptions.gapV = 20;
            this.config.nodeOptions.gapH = 20;
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
                                id: '5',
                                parentId: '3',
                                data: { text: "child X1" },
                                children: []
                            },
                            {
                                id: '5',
                                parentId: '3',
                                data: { text: "child X1" },
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
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
                                        children: []
                                    },
                                    {
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
                                        children: []
                                    },
                                    {
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
                                        children: [
                                            {
                                                id: '5',
                                                parentId: '3',
                                                data: { text: "child X1" },
                                                children: []
                                            },
                                            {
                                                id: '5',
                                                parentId: '3',
                                                data: { text: "child X1" },
                                                children: []
                                            },
                                        ]
                                    },
                                    {
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
                                        children: []
                                    },
                                    {
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
                                        children: []
                                    },
                                    {
                                        id: '5',
                                        parentId: '3',
                                        data: { text: "child X1" },
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
                                strokeWidth: 1,
                                stroke: 'red'
                            });
                        }
                        if (node.children !== null && node.children.length > 0) {
                            this.snap.line(x + node.width / 2, y + node.height, x + node.width / 2, y + node.height + gapY / 2).attr({
                                strokeWidth: 1,
                                stroke: 'red'
                            });
                        }
                        this.snap.text(x + 3, y + 16, [node.data.text]).attr({ fill: 'white' });
                    }
                    else {
                    }
                    if (levelIdx > 0) {
                        if (hLineNodes > 1) {
                            if (node.parentId !== nextParentId || nextParentId === null) {
                                this.snap.line(hLineX1, hLineY, hLineX2, hLineY).attr({
                                    strokeWidth: 1,
                                    stroke: 'red'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnY2hhcnQuc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbIm9yZ2NoYXJ0LnN2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQVNBO1FBT0kscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBTG5DLFVBQUssR0FBa0MsRUFBRSxDQUFDO1lBQzdDLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1lBRTlCLHdCQUFtQixHQUFxQixFQUFFLENBQUM7WUFHbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFSSx1Q0FBaUIsR0FBekI7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFtQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRztnQkFDbkIsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtnQkFDdEIsUUFBUSxFQUFFO29CQUNUO3dCQUNDLEVBQUUsRUFBRSxHQUFHO3dCQUNQLFFBQVEsRUFBRSxHQUFHO3dCQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQ3pCLFFBQVEsRUFBRTs0QkFDVDtnQ0FDQyxFQUFFLEVBQUUsR0FBRztnQ0FDUCxRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dDQUMxQixRQUFRLEVBQUUsRUFBRTs2QkFDWjs0QkFDRDtnQ0FDQyxFQUFFLEVBQUUsR0FBRztnQ0FDUCxRQUFRLEVBQUUsR0FBRztnQ0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dDQUMxQixRQUFRLEVBQUUsRUFBRTs2QkFDWjt5QkFDRDtxQkFDRDtvQkFDRDt3QkFDQyxFQUFFLEVBQUUsR0FBRzt3QkFDUCxRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixRQUFRLEVBQUU7NEJBQ1Q7Z0NBQ0MsRUFBRSxFQUFFLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQ0FDekIsUUFBUSxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0Q7Z0NBQ0MsRUFBRSxFQUFFLEdBQUc7Z0NBQ1AsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQ0FDekIsUUFBUSxFQUFFO29DQUNUO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRSxFQUFFO3FDQUNaO29DQUNEO3dDQUNDLEVBQUUsRUFBRSxHQUFHO3dDQUNQLFFBQVEsRUFBRSxHQUFHO3dDQUNiLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7d0NBQzFCLFFBQVEsRUFBRTs0Q0FDVDtnREFDQyxFQUFFLEVBQUUsR0FBRztnREFDUCxRQUFRLEVBQUUsR0FBRztnREFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dEQUMxQixRQUFRLEVBQUUsRUFBRTs2Q0FDWjs0Q0FDRDtnREFDQyxFQUFFLEVBQUUsR0FBRztnREFDUCxRQUFRLEVBQUUsR0FBRztnREFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dEQUMxQixRQUFRLEVBQUUsRUFBRTs2Q0FDWjt5Q0FDRDtxQ0FDRDtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dDQUMxQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dDQUMxQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtvQ0FDRDt3Q0FDQyxFQUFFLEVBQUUsR0FBRzt3Q0FDUCxRQUFRLEVBQUUsR0FBRzt3Q0FDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dDQUMxQixRQUFRLEVBQUUsRUFBRTtxQ0FDWjtpQ0FDRDs2QkFDRDt5QkFDRDtxQkFDRDtvQkFDRDt3QkFDQyxFQUFFLEVBQUUsR0FBRzt3QkFDUCxRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dC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
