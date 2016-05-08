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
					data: { text: "child Y1", sex: 'M' },
					children: []
				},
				{
					id: '51',
					parentId: '2',
					data: { text: "child Y2", sex: 'M' },
					children: []
				}
			]
		},
		{
			id: '3',
			parentId: '1',
			data: { text: "child 2", sex: 'F' },
			children: [
				{
					id: '5',
					parentId: '3',
					data: { text: "child 4", sex: 'M' },
					children: []
				},
				{
					id: '6',
					parentId: '3',
					data: { text: "child 5", sex: 'F' },
					children: [
						{
							id: '7',
							parentId: '6',
							data: { text: "child X1", sex: 'F' },
							children: []
						},
						{
							id: '8',
							parentId: '6',
							data: { text: "child X2", sex: 'F' },
							children: []
						},
						{
							id: '9',
							parentId: '6',
							data: { text: "child X3", sex: 'F' },
							children: []
						},
						{
							id: '10',
							parentId: '6',
							data: { text: "child X4", sex: 'F' },
							children: []
						},
						{
							id: '11',
							parentId: '6',
							data: { text: "child X5", sex: 'F' },
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
							data: { text: "child X11", sex: 'M' },
							children: []
						},
						{
							id: '18',
							parentId: '6',
							data: { text: "child X12", sex: 'F' },
							children: []
						},
						{
							id: '19',
							parentId: '6',
							data: { text: "child X13", sex: 'F' },
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
							data: { text: "child X50", sex: 'F' },
							children: []
						},
						{
							id: '17',
							parentId: '6',
							data: { text: "child X51", sex: 'F' },
							children: []
						},
						{
							id: '18',
							parentId: '6',
							data: { text: "child X52", sex: 'F' },
							children: []
						},
						{
							id: '19',
							parentId: '6',
							data: { text: "child X53", sex: 'F' },
							children: []
						},
						{
							id: '20',
							parentId: '6',
							data: { text: "child X54", sex: 'F' },
							children: []
						},
						{
							id: '21',
							parentId: '6',
							data: { text: "child X55", sex: 'F' },
							children: []
						},
						{
							id: '22',
							parentId: '6',
							data: { text: "child X56", sex: 'F' },
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
							data: { text: "child X70", sex: 'F' },
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
							data: { text: "child X73", sex: 'F' },
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
							data: { text: "child X75", sex: 'F' },
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
		},
		{
			id: '4000',
			parentId: '1',
			data: { text: "child 4" },
			children: [
				{
					id: '4001',
					parentId: '4000',
					data: { text: "sub child 3a" },
					children: [
						{
							id: '5000',
							parentId: '4001',
							data: { text: "sub child a3" },
							children: []
						},
						{
							id: '4002',
							parentId: '4001',
							data: { text: "sub child 3b", sex: 'F' },
							children: [
								{
									id: '4003',
									parentId: '4002',
									data: { text: "child 4" },
									children: [
										{
											id: '4004',
											parentId: '4003',
											data: { text: "sub child 3a", sex: 'F' },
											children: [
												{
													id: '4005',
													parentId: '4004',
													data: { text: "sub child 3b" },
													children: [
														{
															id: '4006',
															parentId: '4005',
															data: { text: "sub child 3a" },
															children: [
																{
																	id: '4007',
																	parentId: '4006',
																	data: { text: "sub child 3b" },
																	children: [
																		{
																			id: '4008',
																			parentId: '4007',
																			data: { text: "child 4", sex: 'F' },
																			children: [
																				{
																					id: '4009',
																					parentId: '4008',
																					data: { text: "sub child 3a" },
																					children: [
																						{
																							id: '4010',
																							parentId: '4009',
																							data: { text: "sub child 3b", sex: 'F' },
																							children: [
																								{
																									id: '4011',
																									parentId: '4010',
																									data: { text: "child 4" },
																									children: [
																										{
																											id: '4012',
																											parentId: '4011',
																											data: { text: "sub child 3a", sex: 'F' },
																											children: [
																												//{
																												//	id: '4013',
																												//	parentId: '4012',
																												//	data: { text: "sub child 3b" },
																												//	children: [
																												//		//{
																												//		//	id: '4014',
																												//		//	parentId: '4013',
																												//		//	data: { text: "sub child 3b" },
																												//		//	children: []
																												//		//}
																												//	]
																												//}
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
/*
config.nodes = {
	id: '0',
	parentId: '',
	data: { text: "root" },
	children: [
		{
			id: '1',
			parentId: '0',
			data: { text: "child X1" },
			children: [
				{
					id: '10',
					parentId: '1',
					data: { text: "child X1" },
					children: [
						{
							id: '14',
							parentId: '10',
							data: { text: "child X1" },
							children: [
								{
								id: '16',
								parentId: '14',
								data: { text: "child X1" },
								children: [
									{
									id: '17',
									parentId: '16',
									data: { text: "child X1" },
									children: [
										{
										id: '18',
										parentId: '17',
										data: { text: "child X1" },
										children: []
									},]
								},]
							},]
						}
					]
				},
				{
					id: '11',
					parentId: '1',
					data: { text: "child X1" },
					children: []
				}
			]
		},
		{
			id: '2',
			parentId: '0',
			data: { text: "child X2" },
			children: [
				{
					id: '100',
					parentId: '2',
					data: { text: "child X1" },
					children: [
						{
							id: '140',
							parentId: '100',
							data: { text: "child X1" },
							children: [
								{
									id: '160',
									parentId: '140',
									data: { text: "child X1" },
									children: [
										{
											id: '170',
											parentId: '160',
											data: { text: "child X1" },
											children: [
												{
													id: '180',
													parentId: '170',
													data: { text: "child X1" },
													children: []
												},]
										},]
								},]
						}
					]
				}
			]
		},
	]
};
*/
//
let templateFront = `
	<g>
			<image width="402" height="210" transform="translate(4.52 4.55) scale(0.48)" opacity="0.5"
				   xlink:href="data:image/png;base64,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"
				   style="mix-blend-mode:multiply"/>
			<rect x="13.52" y="13.55" width="174.54" height="82.5" fill="#8dc63f"/>
			<text transform="translate(63.06 58.94)" font-size="13" fill="#fff" font-family="Roboto">MARC COHN</text>
			<rect x="16.16" y="85.8" width="169.25" height="9" fill="#8dc63f" opacity="0.6"/>
			<image width="359" height="38" transform="translate(14.82 72) scale(0.48)" opacity="0.18"
				   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAAAoCAYAAAA4/dsOAAAACXBIWXMAABcRAAAXEQHKJvM/AAADKUlEQVR4Xu3dPU4bURRA4ecgsGILiSbCiktXFOlSWEFsgQWQLkXYAHugp4jYRTZAFdFlCalQKNNFNFGIc4/nWVj4fzwWHukUX4X9nOro6r5oJg0GgyRJ2m7z/5hSI3slSdqIYWdLxTo9BXon7IZmeD2mJUkqZbyltJXG0tphuJeOdXoK9V5oh4PwJnTC29CVJK2FltJU2kpjaS3NnRnsabEehXo/HIZeeBfeh374EI4lSaXQUFpKU2krjaW1NHcY7IWxTsVUzTjezl8+CifhNHwMn8LncC5JKoWG0lKaSltpLK2lubSXBk9M19Nizf6EsbyXDzkLF+EyXIUv4VqSVAoNpaU0lbbSWFpLc2kvDV4Ya1YgzVTsURjPT/NhHP413IRv4VaSVAoNpaU0lbbSWFpLc2kvDZ5YhUyLNTeUnVTsUxjTL/Oh38OPcBd+hntJ0kpoJw2lpTSVttJYWktzaS8NXjrW3FT2U7FXYVy/yYf/Cr/DgySpFBpKS2kqbaWxtJbm0t6VYt1NxY0li3DGdMb2u/wjf8Lf8ChJWgntpKG0lKbSVhpLa2ku7V061q38Bf6LCTeXLMRvUzG+P+Qf+xcGkqSV0E4aSktpKm2lsbSW5tJeGrxWrO/zDzwu8Q+SJE1HQ2kpTTXWkrSljLUk1YCxlqQaMNaSVAPGWpJqwFhLUg0Ya0mqAWMtSTVgrCWpBoy1JNWAsZakGjDWklQDG4+1T92TpPVU+tQ9n2ctSZtR6fOsfVOMJG1OpW+K6STfwShJVav0HYzN5NvNJWlTKnm7eSPshoPQCyfhLB9G/a/y4deSpFJoKC2lqbSVxtJamkt7aXBjmVjvhHY4DEf5EKrPmM5ehUX4uSSpFBpKS2kqbaWxtJbm0l4aPD/WY6uQvbCfv0ztGc/Zp/RTcWN5LEkqhYbSUppKW2ksraW5tHdiBTIr1kzXo2BTecZy9iidVNxUdiVJa6GlNJW20lhaOwx1mjJVT431s2AzjrM/aabihnKkJUkqZbyltJXG0tqZoZ4Z62fRHoVbklS9YWfntXhhrCVJ22HhByRJL2/hByRJL2/hByRJL+8/AsAWbWVD8/MAAAAASUVORK5CYII="
				   style="mix-blend-mode:multiply"/>
			<rect x="17.82" y="75" width="165.93" height="11.8" fill="#fff"/>
			<text transform="translate(52.33 83.3)" font-size="6" fill="#8dc63f" font-family="Roboto" font-weight="700">
				Additional company
				<tspan x="55.24" y="0">r</tspan>
				<tspan x="57.32" y="0">ole description</tspan>
			</text>
			<path d="M100.79,22.75a7.81,7.81,0,1,0,7.81,7.81A7.82,7.82,0,0,0,100.79,22.75Zm6.87,7.35h-1.07A9.18,9.18,0,0,0,104.9,25,6.88,6.88,0,0,1,107.65,30.1Zm-4.89,0H98.81c0.08-3.93,1.19-6.43,2-6.43S102.68,26.17,102.76,30.1Zm-3.69-6a14.44,14.44,0,0,0-1.19,6h-2C96,27.35,97.32,25,99.07,24.11ZM97.88,31a14.44,14.44,0,0,0,1.19,6c-1.76-.93-3-3.24-3.17-6h2Zm0.93,0h3.95c-0.08,3.93-1.19,6.43-2,6.43S98.89,35,98.81,31Zm3.69,6a14.44,14.44,0,0,0,1.19-6h2C105.53,33.77,104.25,36.08,102.5,37Zm1.19-6.91a14.44,14.44,0,0,0-1.19-6c1.76,0.93,3,3.24,3.17,6h-2Zm-7-5.06A9.18,9.18,0,0,0,95,30.1H93.92A6.88,6.88,0,0,1,96.67,25Zm-2.76,6H95a9.18,9.18,0,0,0,1.69,5.06A6.88,6.88,0,0,1,93.92,31Zm11,5.06A9.18,9.18,0,0,0,106.58,31h1.07A6.88,6.88,0,0,1,104.9,36.08Z"
				  fill="#fff"/>
			<image width="44" height="44" transform="translate(165.7 15.49) scale(0.48)" opacity="0.18"
				   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAABcRAAAXEQHKJvM/AAAB6UlEQVRoQ+2ZPU4CURRGnxolYkxsiAZLKws7C4NxCy5AOgvdgHugtzDugg1YETqXQGWgtCM0RsTv4GecKD+jYSIvecWpmLnfmbnvTsJ7YTQahRiZe8GyMv2HEFbM6j8xzs8tHr5k18S6KInNDOWCyGaUnI3D+CFmiocv6Q2xJXZEReyJqtgvmKqzKs7GAZcf8t/FP6W3xa44EEfiWJyImjgtiJozjp1JNg64jOUnioePt01rtnzDoTgT56IuLsWVuC6IK2fUnUk2DrjghNvKNHHWFS068I0X4kY0xK24E/cFceeMhjPJxgEXnHCbKM4yYShYX7Tq3AUo2BQPoiXaBdFyRtOZZOOAC064rU4TZ6IZDtYZLWu40KPoiCfRFb0F03XtjrOazsYBF5xwmynOZDMkrDda9+CCz6IvBgXRd0bHmWTjgAtOc8X5LDHhDAsto4VPLvwiXsVwwby6dt9ZLWfjgAtOM8XLvojPE5PO0LD+aOXAAW9itGDeXHvgrLazccAFJ9x+Ld5z0WEOib8ydEYvJPEknsST+CJI4kk8J0k8ieckiSfxnCTxJJ6TJJ4VX/o/y9FuT0S9IbQXItyCK4UINz2j3WaOc2M/s1ziOkrJvPVP+XgOr77Jx3NcOOEB4jmgjYW5Fywr77Ipd03p19m5AAAAAElFTkSuQmCC"
				   style="mix-blend-mode:multiply"/>
			<rect x="168.7" y="18.49" width="15.05" height="15.05" fill="#fff"/>
			<path d="M175.36,27.68c0-.18,0-0.36,0-0.54s0-.14-0.13-0.13a3.31,3.31,0,0,0-2.43,1,0.51,0.51,0,0,0-.13.37,2.31,2.31,0,0,0,.79,1.77c0.23,0.2.46,0.41,0.68,0.62a1.16,1.16,0,0,1,.33.5,0.55,0.55,0,0,1-.1.57,0.46,0.46,0,0,1-.53.05,3.24,3.24,0,0,1-1.57-1.12,6.16,6.16,0,0,1-.78-6.55A4.06,4.06,0,0,1,175,21.89c0.39,0,.39,0,0.39-0.44,0-.24,0-0.48,0-0.72a0.59,0.59,0,0,1,.36-0.57,0.65,0.65,0,0,1,.72,0l1.42,1.06L181,23.61a0.94,0.94,0,0,1,0,1.67l-4.52,3.36a0.73,0.73,0,0,1-.82.09,0.62,0.62,0,0,1-.35-0.67c0-.13,0-0.25,0-0.38h0Z"
				  fill="#8dc63f"/>
			<rect class="orgchart-box orgchart-collapse-btn" x="13.52" y="13.55" width="174.54" height="82.5" fill="#8dc63f" opacity="0"/>
		</g>`;

let templateBack = `
	<g>
			<image width="402" height="210" transform="translate(4.52 5.05) scale(0.48)" opacity="0.5"
				   xlink:href="data:image/png;base64,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0NGpUaHHq40KPX/AjQr/RbJrY/mo3BaOiiS1tpZRocP9UaHT9PpfflR4KaeOSv2Qvj8qU39ESdKS4ajQ1Toq9PbfYlR4OcdRkaSNmzUqdNZRiek/oCRpiaMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMSjookteKohKMiSa04KuGoSFIrjko4KpLUiqMS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"
				   style="mix-blend-mode:multiply"/>
			<rect x="13.52" y="14.05" width="174.54" height="82.5" fill="#8dc63f"/>
			<rect x="13.52" y="14.05" width="83.23" height="82.5" fill="#fff"/>
			<image width="44" height="44" transform="translate(165.7 15.99) scale(0.48)" opacity="0.18"
				   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAACXBIWXMAABcRAAAXEQHKJvM/AAAB8UlEQVRoQ+2ZMUoDURRFv4oGI4KNKLG0srCzEMUtuADtLHQD7iG9hbiLbMAqpHMJqcSUdiGNGOM98YqDJplRMjgffnGq/Hn3zLz/BvInjEajECO5C6pK7oKqMv2HEBbM4j8xzi8sHr5kl8SyqInVDPWSyGbUnI3D+CZmiocv6RWxJjbEptgWDbFTMg1nbTobB1x+yH8X/5ReF1tiV+yLA3EojsRxSRw548CZZOOAy1h+onj4eNq0Zs0X7IkTcSrOxYW4FFclcemMc2eSjQMuOOG2ME2cfUWLdn3hmbgWTXEjbsVdSdw6o+lMsnHABSfcJoqzTRgK9hetOnUBCrbEvWiLTkm0ndFyJtk44IITbovTxJlohoN9RsuaLvQguuJRPInenHly7a6zWs7GAReccJspzmQzJOw3Wnfvgs+iLwYl0XdG15lk44ALTrnivJaYcIaFltHCRxd+Ea9iOGdeXbvvrLazccAFp5nidS/i9cSkMzTsP1o5cMCbGM2ZN9ceOKvjbBxwwQm3X4v3XHRYQOKvDJ3RC0k8iSfxJD4PkngSL0gST+IFSeJJvCBJPIkXJIlnxSv/Zzna44moD4S2Q4RHcLUQ4aFntMfMcR7sZ7ZLXJ9SMk/9Uz6ej1ff5OP5XDjhBuL5QBsLuQuqSu6CqvIOvKWKSKw19qcAAAAASUVORK5CYII="
				   style="mix-blend-mode:multiply"/>
			<rect x="168.7" y="18.99" width="15.05" height="15.05" fill="#fff"/>
			<path d="M177.09,24.86c0,0.18,0,.36,0,0.54s0,0.14.13,0.13a3.31,3.31,0,0,0,2.43-1,0.51,0.51,0,0,0,.13-0.37,2.31,2.31,0,0,0-.79-1.77c-0.23-.2-0.46-0.41-0.68-0.62a1.16,1.16,0,0,1-.33-0.5,0.55,0.55,0,0,1,.1-0.57,0.46,0.46,0,0,1,.53-0.05,3.24,3.24,0,0,1,1.57,1.12A6.16,6.16,0,0,1,181,28.3a4.06,4.06,0,0,1-3.47,2.35c-0.39,0-.39,0-0.39.44,0,0.24,0,.48,0,0.72a0.59,0.59,0,0,1-.36.57,0.65,0.65,0,0,1-.72,0l-1.42-1.06-3.19-2.37a0.94,0.94,0,0,1,0-1.67l4.52-3.36a0.73,0.73,0,0,1,.82-0.09,0.62,0.62,0,0,1,.35.67c0,0.13,0,.25,0,0.38h0Z"
				  fill="#8dc63f"/>
			<g clip-path="url(#clip-path)">
				<image width="256" height="256" transform="translate(25.32 26.59) scale(0.23)"
					   xlink:href="data:image/jpeg;base64,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RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAABaOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANJAAAABgAAAAAAAAAAAAABAAAAAQAAAAAKAFUAbgB0AGkAdABsAGUAZAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAEAAAAAAFJnaHRsb25nAAABAAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBl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L2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxNi0wNS0wN1QxMjoxMjo0OSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNi0wNS0wN1QxMjoxMjo0OSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDUtMDdUMTI6MTI6NDkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTMxODRlYy1kZjllLWNkNGQtYTNmZC01NGIzYWM2NzAyZjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MGUzMTg0ZWMtZGY5ZS1jZDRkLWEzZmQtNTRiM2FjNjcwMmYzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGUzMTg0ZWMtZGY5ZS1jZDRkLWEzZmQtNTRiM2FjNjcwMmYzIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBlMzE4NGVjLWRmOWUtY2Q0ZC1hM2ZkLTU0YjNhYzY3MDJmMyIgc3RFdnQ6d2hlbj0iMjAxNi0wNS0wN1QxMjoxMjo0OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVzYwAAAYQAAABsd3RwdAAAAfAAAAAUYmtwdAAAAgQAAAAUclhZWgAAAhgAAAAUZ1hZWgAAAiwAAAAUYlhZWgAAAkAAAAAUZG1uZAAAAlQAAABwZG1kZAAAAsQAAACIdnVlZAAAA0wAAACGdmlldwAAA9QAAAAkbHVtaQAAA/gAAAAUbWVhcwAABAwAAAAkdGVjaAAABDAAAAAMclRSQwAABDwAAAgMZ1RSQwAABDwAAAgMYlRSQwAABDwAAAgMdGV4dAAAAABDb3B5cmlnaHQgKGMpIDE5OTggSGV3bGV0dC1QYWNrYXJkIENvbXBhbnkAAGRlc2MAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UA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"/>
			</g>
			<text transform="translate(113.04 87.41)" font-size="6" fill="#fff" font-family="Roboto">+48.1001001001
			</text>
			<text transform="translate(113.04 74.91)" font-size="6" fill="#fff" font-family="Roboto">than@company.com
			</text>
			<text transform="translate(113.04 61.39)" font-size="7" fill="#fff" font-family="Roboto">ww
				<tspan x="10.52" y="0">w</tspan>
				<tspan x="15.36" y="0">.company.com</tspan>
			</text>
			<path d="M109.18,81.41h-4.51a0.81,0.81,0,0,0-.81.81v7.4a0.81,0.81,0,0,0,.81.81h4.51a0.81,0.81,0,0,0,.81-0.81v-7.4A0.81,0.81,0,0,0,109.18,81.41ZM106.93,90a0.4,0.4,0,1,1,.4-0.4A0.4,0.4,0,0,1,106.93,90Zm2.2-1.62h-4.39V82.16h4.39V88.4Z"
				  fill="#fff"/>
			<path d="M110.41,73.05a2.81,2.81,0,0,1-.57,1.69,1.71,1.71,0,0,1-1.38.62,1.08,1.08,0,0,1-1.15-.74,1.76,1.76,0,0,1-.59.56,1.4,1.4,0,0,1-.69.18,1.16,1.16,0,0,1-1-.51,2.12,2.12,0,0,1-.26-1.42,3.67,3.67,0,0,1,.36-1.31,2.43,2.43,0,0,1,.75-0.9,1.62,1.62,0,0,1,1-.33,2.34,2.34,0,0,1,.69.1,2.45,2.45,0,0,1,.69.37l-0.25,2.46q-0.09,1,.61,1a1,1,0,0,0,.88-0.5,2.43,2.43,0,0,0,.36-1.29,3.6,3.6,0,0,0-.69-2.63,3,3,0,0,0-2.38-.9A3.3,3.3,0,0,0,105,70a3.08,3.08,0,0,0-1.18,1.27,4.63,4.63,0,0,0-.48,1.92,4.26,4.26,0,0,0,.29,1.91,2.59,2.59,0,0,0,1.05,1.24,3.23,3.23,0,0,0,1.71.43,3.92,3.92,0,0,0,.86-0.1,2.84,2.84,0,0,0,.72-0.25l0.18,0.51a2.81,2.81,0,0,1-.79.28,4.5,4.5,0,0,1-1,.11,4,4,0,0,1-2.06-.5A3.11,3.11,0,0,1,103,75.35a4.7,4.7,0,0,1-.37-2.19,5,5,0,0,1,.59-2.19,3.81,3.81,0,0,1,1.44-1.5,4.35,4.35,0,0,1,4.1,0A3,3,0,0,1,110,70.86,4.79,4.79,0,0,1,110.41,73.05Zm-4.91.38a1.61,1.61,0,0,0,.13,1,0.66,0.66,0,0,0,.62.34,0.85,0.85,0,0,0,.55-0.23,1.65,1.65,0,0,0,.44-0.65v0l0.22-2.23a1.31,1.31,0,0,0-.57-0.13A1.09,1.09,0,0,0,106,72,3,3,0,0,0,105.49,73.43Z"
				  fill="#fff"/>
			<path d="M106.93,55.62a3.88,3.88,0,1,0,3.88,3.88A3.89,3.89,0,0,0,106.93,55.62Zm3.42,3.66h-0.53a4.57,4.57,0,0,0-.84-2.52A3.42,3.42,0,0,1,110.34,59.28Zm-2.43,0h-2c0-2,.59-3.2,1-3.2S107.87,57.32,107.91,59.28Zm-1.83-3a7.18,7.18,0,0,0-.59,3h-1A3.51,3.51,0,0,1,106.08,56.3Zm-0.59,3.44a7.18,7.18,0,0,0,.59,3,3.51,3.51,0,0,1-1.58-3h1Zm0.46,0h2c0,2-.59,3.2-1,3.2S106,61.69,105.95,59.73Zm1.83,3a7.18,7.18,0,0,0,.59-3h1A3.51,3.51,0,0,1,107.78,62.71Zm0.59-3.44a7.18,7.18,0,0,0-.59-3,3.51,3.51,0,0,1,1.58,3h-1Zm-3.49-2.52a4.57,4.57,0,0,0-.84,2.52h-0.53A3.42,3.42,0,0,1,104.88,56.76Zm-1.37,3H104a4.57,4.57,0,0,0,.84,2.52A3.42,3.42,0,0,1,103.51,59.73ZM109,62.25a4.57,4.57,0,0,0,.84-2.52h0.53A3.42,3.42,0,0,1,109,62.25Z"
				  fill="#fff"/>
			<text transform="translate(102.87 40.44)" font-size="7" fill="#fff" font-family="Roboto">MARC</text>
			<text transform="translate(102.87 49.44)" font-size="7" fill="#fff" font-family="Roboto">COHN</text>
			<rect class="orgchart-box orgchart-collapse-btn" x="13.52" y="14.05" width="174.54" height="82.5" fill="#8dc63f" opacity="0"/>
		</g>`;

let defs = '<clipPath id="clip-path"><rect x="25.32" y="26.59" width="59.34" height="59.34" fill="none"/></clipPath>';

config.nodeOptions.width = 192.96;
config.nodeOptions.height = 100.8;
config.nodeOptions.collapsible = true;
config.tipOverOptions.tipOverChildrenCount = 10;
//config.nodeOptions.margin = new NodeMargin(-10); // the template has background shadow and we need to make connectors a little bit longer
//config.tipOverOptions.tipOverChildrenCount = 10000;


// add definitions
config.onBeforeRender = (args: RenderEventArgs) => {
	args.paper.append(<any>Snap.parse(defs));
	args.paper.select('#clip-path').toDefs();
	return null;
};

//// use SVG string template
//config.onBoxRender = (args: RenderBoxEventArgs) => {
//	var tpl = '';
//
//	if (args.node.data.gender && args.node.data.gender === 1) {
//		tpl = nodeTemplateMale;
//	}
//	else {
//		tpl = nodeTemplateFemale;
//	}
//
//	tpl = tpl.replace('##info##', '[ ' + args.node.columnIndex + ', ' + args.node.rowIndex + ' ]')
//				.replace('##name##', args.node.data.displayName);
//	// .replace('##x##', args.x + '').replace('##y##', args.y + '')
//	return tpl;
//};


// use SVG string template
config.onBoxRender = (args: RenderBoxEventArgs) => {
	var tpl = '';

	if (args.node.data.sex && args.node.data.sex === 'F') {
		tpl = templateFront;
	}
	else {
		tpl = templateBack;
	}

	tpl = tpl.replace('##info##', 'parentId: ' + args.node.parentId +'  id: ' + args.node.id)
		.replace('##name##', args.node.data.text);
	// .replace('##x##', args.x + '').replace('##y##', args.y + '')
	return tpl;
};

config.onAfterRender = (args: RenderBoxEventArgs) => {
	args.paper.selectAll('')
};

config.onNodeToggle = (args: NodeToggleEventArgs) => {
	console.log(args);
};

//config.onBoxRender = (args: RenderBoxEventArgs) => {
//	var tpl = '';
//
//	if (!args.node.isPlaceholder) {
//		tpl = '<rect x="0" y="0" class="orgchart-box" width="'+args.width+'" height="'+args.height+'" fill="'+args.config.nodeOptions.background+'"/><text x="0" y="50" font-size="45" fill="black">'+args.node.data.text+'</text>';
//	}
//	else {
//		//tpl = '<rect x="0" y="0" width="'+args.width+'" height="'+args.height+'" fill="'+args.config.debugOptions.placeholderBoxesColor+'"/>';
//	}
//	return tpl;
//};

new OrgChartSvg(config);

