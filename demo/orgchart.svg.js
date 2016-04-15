define(["require", "exports", "d3", "d3"], function (require, exports, d3) {
    "use strict";
    var OrgChartSvg = (function () {
        function OrgChartSvg(config) {
            this.config = config;
            this.nodes = {};
            if (!config) {
                this.initDefaultConfig();
            }
            this.calcPositions();
            this.render();
        }
        OrgChartSvg.prototype.initDefaultConfig = function () {
            this.config = {};
            this.config.gapH = 60;
            this.config.gapV = 60;
            this.config.selector = '#orgChartSvg';
            this.config.nodeOptions = {};
            this.config.nodeOptions.width = 350;
            this.config.nodeOptions.height = 70;
            this.config.nodes = [
                { id: '1', parentId: null, data: { text: "root" } },
                { id: '2', parentId: '1', data: { text: "node 1" } },
                { id: '3', parentId: '1', data: { text: "node 2" } },
                { id: '4', parentId: '3', data: { text: "node 3" } },
            ];
        };
        OrgChartSvg.prototype.clear = function () {
        };
        OrgChartSvg.prototype.calcPositions = function () {
        };
        OrgChartSvg.prototype.render = function () {
            var svgContainer = d3.select("body")
                .append("svg")
                .append('rect')
                .attr("x", 10)
                .attr("y", 10)
                .attr("width", 50)
                .attr("height", 100);
        };
        OrgChartSvg.prototype.setNodes = function (nodes) {
            this.nodes = {};
            this.config.nodes = nodes;
            this.clear();
            this.calcPositions();
            this.render();
        };
        return OrgChartSvg;
    }());
    exports.OrgChartSvg = OrgChartSvg;
});
//# sourceMappingURL=orgchart.svg.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnY2hhcnQuc3ZnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbIm9yZ2NoYXJ0LnN2Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQVNBO1FBSUkscUJBQW9CLE1BQXVCO1lBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBRm5DLFVBQUssR0FBa0MsRUFBRSxDQUFDO1lBR3BELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBRUssSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUksdUNBQWlCLEdBQXpCO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBbUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFnQixFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHO2dCQUNuQixFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUM7Z0JBQ2pELEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBQztnQkFDbEQsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFDO2dCQUNsRCxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUM7YUFDbEQsQ0FBQztRQUNILENBQUM7UUFFTywyQkFBSyxHQUFiO1FBRUEsQ0FBQztRQUVVLG1DQUFhLEdBQXJCO1FBS0EsQ0FBQztRQUVPLDRCQUFNLEdBQWQ7WUFDRixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDYixNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNkLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2lCQUNiLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2lCQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2lCQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFFRyw4QkFBUSxHQUFmLFVBQWdCLEtBQWdCO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUUxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUNGLGtCQUFDO0lBQUQsQ0FBQyxBQTNERCxJQTJEQztJQTNEWSxtQkFBVyxjQTJEdkIsQ0FBQSJ9
