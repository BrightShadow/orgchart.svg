/**
 * 		OrgChart.svg DEMO v1.0.0-beta.2
 */
import {OrgChartSvg} from "orgchart.svg";
import {OrgChartConfig} from "org.chart.config";
import {NodeMargin} from "./node.options";
import {RenderEventArgs} from "./orgchart.events";
import {RenderBoxEventArgs} from "./orgchart.events";
import {BoxClickEventArgs} from "./orgchart.events";
import {NodeToggleEventArgs} from "./orgchart.events";

let config = OrgChartConfig.defaultConfig();
config.nodes = {
	id: '1',
	parentId: null,
	data: { text: "Simon Cadence", desc: "The company owner", mobile: "+44.9008982211", mail: "sc@company.com" },
	children: [
		{
			id: '2',
			parentId: '1',
			data: { text: "Merry Cadence", desc: "The company owner assistant", mobile: "+44.9008982211", mail: "mc@company.com" },
			children: [
				{
					id: '50',
					parentId: '2',
					data: { text: "Mikey Cadence", desc: "The company owner assistant", mobile: "+44.200982211", mail: "mc@company.com" },
					//tipOverChildren: true,
					children: [
						{
							id: '1117',
							parentId: '50',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '1118',
							parentId: '50',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '1119',
							parentId: '50',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '11110',
							parentId: '50',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '11111',
							parentId: '50',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						//{
						//	id: '11112',
						//	parentId: '50',
						//	data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
						//	children: []
						//},
						//{
						//	id: '11113',
						//	parentId: '50',
						//	data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
						//	children: []
						//},
						//{
						//	id: '11114',
						//	parentId: '50',
						//	data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
						//	children: []
						//}
					]
				},
				{
					id: '51',
					parentId: '2',
					data: { text: "Jerry Cadence", desc: "The company owner assistant", mobile: "---", mail: "mc@company.com" },
					children: []
				}
			]
		},
		{
			id: '3',
			parentId: '1',
			data: { text: "Joshua Fox", desc: "The company owner assistant", mobile: "+44.400400400", mail: "jfox@company.com" },
			children: [
				{
					id: '5',
					parentId: '3',
					data: { text: "Jim Kortney", desc: "Company project manager", mobile: "+44.900900900", mail: "jkort@company.com" },
					children: []
				},
				{
					id: '6',
					parentId: '3',
					data: { text: "Johnas Smith", desc: "Line manager", mobile: "+44.7770900", mail: "smithj@company.com" },
					tipOverChildren: true,
					children: [
						{
							id: '7',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '8',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '9',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '10',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '11',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '12',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '13',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '14',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '15',
							parentId: '6',
							data: {text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '16',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '17',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '18',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '19',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '20',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com"},
							children: []
						},
						{
							id: '21',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com"},
							children: []
						},
						{
							id: '22',
							parentId: '6',
							data: {text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '23',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '24',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '25',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '26',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '7',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '8',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '9',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '10',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '11',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						},
						{
							id: '12',
							parentId: '6',
							data: { text: "Regular employee", desc: "The company regular employee", mobile: "---", mail: "support@company.com" },
							children: []
						}
					]
				}
			]
		},
		{
			id: '4',
			parentId: '1',
			data: { text: "Mike Jonson", desc: "The side director", mobile: "---", mail: "director@company.com" },
			children: []
		},
		{
			id: '4000',
			parentId: '1',
			data: {  text: "Megan Curtney", desc: "The marketing department director", mobile: "+44.2111232", mail: "marketing@company.com" },
			children: [
				{
					id: '4001',
					parentId: '4000',
					data: {  text: "Jim Jonson", desc: "Marketing central designer", mobile: "---", mail: "design@company.com" },
					children: [
						{
							id: '5000',
							parentId: '4001',
							data: { text: "Jimmy Simpson", desc: "Marketing designer", mobile: "---", mail: "design@company.com" },
							children: [
								{
									id: '50000',
									parentId: '5000',
									data: { text: "Jimmy Simpson", desc: "Marketing designer", mobile: "---", mail: "design@company.com" },
									children: []
								},
								{
									id: '50001',
									parentId: '5000',
									data: { text: "Jimmy Simpson", desc: "Marketing designer", mobile: "---", mail: "design@company.com" },
									children: []
								},
								{
									id: '50002',
									parentId: '5000',
									data: { text: "Jimmy Simpson", desc: "Marketing designer", mobile: "---", mail: "design@company.com" },
									children: []
								}
							]
						},
						{
							id: '4002',
							parentId: '4001',
							data: { text: "Jimmy Watson", desc: "Marketing designer", mobile: "---", mail: "design@company.com" },
							children: [
								{
									id: '4003',
									parentId: '4002',
									data: { text: "Jimmy Simpson", desc: "Marketing design creator Head", mobile: "---", mail: "simj@company.com" },
									children: [
										{
											id: '4004',
											parentId: '4003',
											data: { text: "John Simpson", desc: "Marketing design creator Head", mobile: "---", mail: "sims@company.com" },
											children: [
												{
													id: '4005',
													parentId: '4004',
													data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
													children: [
														{
															id: '4006',
															parentId: '4005',
															data: { text: "Mike Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
															children: [
																{
																	id: '4007',
																	parentId: '4006',
																	data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																	children: [
																		{
																			id: '4008',
																			parentId: '4007',
																			data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																			children: [
																				{
																					id: '4009',
																					parentId: '4008',
																					data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																					children: [
																						{
																							id: '4010',
																							parentId: '4009',
																							data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																							children: [
																								{
																									id: '4011',
																									parentId: '4010',
																									data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																									children: [
																										{
																											id: '4012',
																											parentId: '4011',
																											data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																											children: [
																											]
																										}
																									]
																								}
																							]
																						}
																					]
																				}
																			]
																		}
																	]
																},
																{
																	id: '6007',
																	parentId: '4006',
																	data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																	children: [

																	]
																},
																{
																	id: '7007',
																	parentId: '4006',
																	data: { text: "Merry Clementine", desc: "Designer", mobile: "---", mail: "clemm@company.com" },
																	children: [

																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
};
let x = `<g class="nodeBox">
	<image width="416" height="230" transform="scale(0.48 0.48)"
		   xlink:href="data:image/png;base64,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"
		   style="opacity:0.75;mix-blend-mode:multiply"/>
	<rect x="15.16" y="14.8" width="169.25" height="80" style="fill:#30303a"/>
	<rect x="15.16" y="23.8" width="6" height="62" style="fill:#f7941e"/>
	<rect x="178.41" y="23.8" width="6" height="62" style="fill:#f7941e"/>
	<rect x="41.16" y="54.05" width="6" height="6" transform="translate(-12.89 101.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.7"/>
	<rect x="47.16" y="54.05" width="6" height="6" transform="translate(-6.89 107.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.5"/>
	<rect x="41.16" y="66.05" width="6" height="6" transform="translate(-24.89 113.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.5"/>
	<rect x="53.16" y="54.05" width="6" height="6" transform="translate(-0.89 113.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.4"/>
	<rect x="29.16" y="60.05" width="6" height="6" transform="translate(-30.89 95.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.2"/>
	<rect x="53.16" y="48.05" width="6" height="6" transform="translate(5.11 107.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.1"/>
	<rect x="47.16" y="48.05" width="6" height="6" transform="translate(-0.89 101.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.05"/>
	<rect x="47.16" y="42.05" width="6" height="6" transform="translate(5.11 95.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.15"/>
	<rect x="35.16" y="42.05" width="6" height="6" transform="translate(-6.89 83.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.15"/>
	<rect x="35.16" y="72.12" width="6" height="6" transform="translate(-36.96 113.28) rotate(-90)"
		  style="fill:#f7941e;opacity:0.15"/>
	<rect x="47.16" y="60.05" width="6" height="6" transform="translate(-12.89 113.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.15"/>
	<rect x="53.16" y="66.05" width="6" height="6" transform="translate(-12.89 125.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.15"/>
	<rect x="41.16" y="48.05" width="6" height="6" transform="translate(-6.89 95.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.1"/>
	<rect x="35.16" y="54.05" width="6" height="6" transform="translate(-18.89 95.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.1"/>
	<rect x="35.16" y="60.05" width="6" height="6" transform="translate(-24.89 101.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.8"/>
	<rect x="53.16" y="60.05" width="6" height="6" transform="translate(-6.89 119.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.8"/>
	<rect x="29.16" y="48.05" width="6" height="6" transform="translate(-18.89 83.21) rotate(-90)"
		  style="fill:#f7941e;opacity:0.9"/>
	<text transform="translate(29.16 33.8)" style="font-size:12px;fill:#fff;font-family:Roboto">##text##</text>
	<path d="M80,44.8h-6.5A1.17,1.17,0,0,0,72.33,46V56.63a1.17,1.17,0,0,0,1.17,1.17H80a1.17,1.17,0,0,0,1.17-1.17V46A1.17,1.17,0,0,0,80,44.8ZM76.74,57.22a0.58,0.58,0,1,1,.58-0.58A0.58,0.58,0,0,1,76.74,57.22Zm3.17-2.33H73.58v-9h6.33v9Z"
		  style="fill:#f7941e"/>
	<text transform="translate(71.83 70.97)" style="font-size:12px;fill:#f7941e;font-family:Roboto">@</text>
	<text transform="translate(88.41 52.55)" style="font-size:7px;fill:#fff;font-family:Roboto">##mobile##
	</text>
	<text transform="translate(88.41 69.79)" style="font-size:7px;fill:#fff;font-family:Roboto">##email##
	</text>
	<rect x="15.16" y="85.8" width="169.25" height="9" style="fill:#f7941e;opacity:0.2"/>
	<text transform="translate(52.09 92.3)" style="font-size:6px;fill:#fbb040;font-family:Roboto">##desc##</text>
	<rect class="orgchart-box orgchart-collapse-btn" x="15.16" y="14.8" width="169.25" height="80" style="fill:#30303a;opacity:0"/>
</g>`;


let defs = '<clipPath id="a"><circle cx="45.17" cy="46.33" r="23.5" fill="none"/></clipPath>';
config.nodeOptions.width = 200;
config.nodeOptions.height = 110;
config.connectorOptions.color = '#444';
config.nodeOptions.collapsible = true;
config.tipOverOptions.tipOverChildrenCount = 10;
config.tipOverOptions.maxColumnHeight = 6;
config.nodeOptions.margin = new NodeMargin(-10); // the template has background shadow and we need to make connectors a little bit longer

// add definitions
config.onBeforeRender = (args: RenderEventArgs) => {
	args.paper.append(<any>Snap.parse(defs));
	args.paper.select('#a').toDefs();
	return null;
};

// use SVG string template for each box render
config.onBoxRender = (args: RenderBoxEventArgs) => {
	var tpl = '';
	tpl = x.replace('##desc##', args.node.data.desc)
		.replace('##mobile##', args.node.data.mobile)
		.replace('##email##', args.node.data.mail)
		.replace('##text##', args.node.data.text);
	return tpl;
};

// Initialize OrgChart.svg and start rendering process
new OrgChartSvg(config);


