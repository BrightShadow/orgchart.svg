import {OrgChartSvg} from "orgchart.svg";
import {OrgChartConfig} from "org.chart.config";



let config = OrgChartConfig.defaultConfig();
config.nodes = {
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

//this.config.nodes = {
//	id: '0',
//	parentId: '',
//	data: { text: "root" },
//	children: [
//		{
//			id: '1',
//			parentId: '0',
//			data: { text: "child X1" },
//			children: [
//				{
//					id: '10',
//					parentId: '1',
//					data: { text: "child X1" },
//					children: [
//						{
//							id: '14',
//							parentId: '10',
//							data: { text: "child X1" },
//							children: [
//								{
//								id: '16',
//								parentId: '14',
//								data: { text: "child X1" },
//								children: [
//									{
//									id: '17',
//									parentId: '16',
//									data: { text: "child X1" },
//									children: [
//										{
//										id: '18',
//										parentId: '17',
//										data: { text: "child X1" },
//										children: []
//									},]
//								},]
//							},]
//						}
//					]
//				},
//				{
//					id: '11',
//					parentId: '1',
//					data: { text: "child X1" },
//					children: []
//				}
//			]
//		},
//		{
//			id: '2',
//			parentId: '0',
//			data: { text: "child X2" },
//			children: [
//				{
//					id: '100',
//					parentId: '2',
//					data: { text: "child X1" },
//					children: [
//						{
//							id: '140',
//							parentId: '100',
//							data: { text: "child X1" },
//							children: [
//								{
//									id: '160',
//									parentId: '140',
//									data: { text: "child X1" },
//									children: [
//										{
//											id: '170',
//											parentId: '160',
//											data: { text: "child X1" },
//											children: [
//												{
//													id: '180',
//													parentId: '170',
//													data: { text: "child X1" },
//													children: []
//												},]
//										},]
//								},]
//						}
//					]
//				}
//			]
//		},
//	]
//};

let ocs = new OrgChartSvg(config);

