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
                        if (this.levels[level].nodes.length > 0) {
                            this.levels[level].nodes.unshift(placeholderNode);
                        }
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
            for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
                var level = this.levels[levelIdx];
                top = levelIdx * (this.config.nodeOptions.height + gapY);
                left = 10;
                for (var i = 0; i < level.nodes.length; i++) {
                    var node = level.nodes[i];
                    var marginLeft = (node.containerWidth - node.width) / 2;
                    var x = left + marginLeft;
                    var y = top;
                    if (!node.isPlaceholder) {
                        this.snap.rect(x, y, node.width, node.height);
                        this.snap.text(x + 3, y + 16, [node.data.text]).attr({ fill: 'white' });
                    }
                    else {
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
