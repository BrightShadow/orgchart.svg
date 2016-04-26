import {OrgChartSvg} from "orgchart.svg";
import {OrgChartConfig} from "org.chart.config";
import {NodeMargin} from "./node.options";
import {RenderEventArgs} from "./orgchart.events";
import {RenderBoxEventArgs} from "./orgchart.events";



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
							parentId: '4000',
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
let nodeTemplateFemale = `
	<g>
      <image width="457" height="194" transform="scale(0.48 0.48)" opacity="0.2" xlink:href="data:image/png;base64,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" style="mix-blend-mode: multiply"/>
      <path d="M205,73.92A5.07,5.07,0,0,1,200,79H20a5.07,5.07,0,0,1-5-5.08V20.08A5.07,5.07,0,0,1,20,15H200a5.07,5.07,0,0,1,5,5.08V73.92Z" fill="#fff"/>
      <rect x="49.96" y="46" width="52.75" height="1" transform="translate(29.83 122.83) rotate(-90)" fill="#bcbec0"/>
      <text transform="translate(84 45)" font-size="12" fill="#d61f26" font-family="Roboto">Dorothy Example</text>
      <rect x="76" y="53" width="119" height="1" fill="#bcbec0"/>
      <image width="117" height="117" transform="translate(17.5 18.33) scale(0.48)" opacity="0.7" xlink:href="data:image/png;base64,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" style="mix-blend-mode: multiply"/>
      <path d="M45.17,71.33a25,25,0,1,1,25-25A25,25,0,0,1,45.17,71.33Z" fill="#fff"/>
      <text transform="translate(84.67 65.9)" font-size="10" fill="#939598" font-family="Roboto">Company employee</text>
      <g clip-path="url(#a)">
        <path d="M63.45,49.6c-3,.1-2.9-3.79-2.9-3.79V42.15a15.68,15.68,0,1,0-31.37,0v3.66c0,2.73-1.74,2.66-1.74,2.66A2.13,2.13,0,0,0,29.9,49.6s-1.64,3-1.48,4.75,2.1,2.87,1.21,4.24a1.19,1.19,0,0,1-1.91.41c0.14,2-.41,6.35,17.12,6.35s17.38-6.22,17.38-6.22c-2.32.27-3.83-2.6-2.66-4s1-4.78,1-4.78C62.08,51.48,63.45,49.6,63.45,49.6Z" fill="#fbb050"/>
        <path d="M57,41h0a12.11,12.11,0,0,0-24.2,0H32.66a2.07,2.07,0,1,0,.66,4,12.13,12.13,0,0,0,8.39,8.16V69.81h6.1V53.25A12.13,12.13,0,0,0,56.49,45,2.07,2.07,0,1,0,57,41Z" fill="#e6e7e8"/>
        <path d="M44.91,29.25C33,29.25,32.66,41,32.66,41q1.44,0.21,2.87.38c0.2,0,1.66-6.38,1.66-6.38s-0.73,6.49-.57,6.5c2.1,0.21,4.19.35,6.27,0.4l1.29,0c2.25,0,4.49-.05,6.75-0.22l1.36-.11L54,41.38q1.55-.17,3.12-0.41S56.84,29.25,44.91,29.25Z" fill="#fbb050"/>
        <path d="M61.31,70.9V63.28a6.53,6.53,0,0,0-6.53-6.53h-7l-2.94,5.69L41.7,56.74H35a6.53,6.53,0,0,0-6.53,6.53V70.9H61.31Z" fill="#ec5756"/>
        <path d="M63.45,49.6c-3,.1-2.9-3.79-2.9-3.79V42.15A15.68,15.68,0,0,0,44.86,26.47H44.68V41.89c2.08,0,4.16-.07,6.25-0.22l1.36-.11L54,41.38q1.53-.17,3.09-0.4A2.07,2.07,0,1,1,56.49,45a12.13,12.13,0,0,1-8.69,8.21v3.49h7A6.53,6.53,0,0,1,61,61.44a3.56,3.56,0,0,0,1.18-2.31c-2.32.27-3.83-2.6-2.66-4s1-4.78,1-4.78C62.08,51.48,63.45,49.6,63.45,49.6Z" fill="#fbb050" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M57.12,41q-1.55.23-3.09,0.4l-1.75.18-1.36.11c-2.09.16-4.17,0.23-6.25,0.22V62.11l0.18,0.32,2.94-5.69h0V53.25A12.13,12.13,0,0,0,56.49,45,2.07,2.07,0,1,0,57.12,41Z" fill="#e5e5e5" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M61,61.44a6.53,6.53,0,0,0-6.27-4.7h-7l-2.94,5.69-0.18-.32V70.9H61.31V63.28A6.52,6.52,0,0,0,61,61.44Z" fill="#f27ba9" style="mix-blend-mode: multiply"/>
      </g>
    </g>`;

let nodeTemplateMale = `
	<g>
      <image width="457" height="194" transform="scale(0.48 0.48)" opacity="0.2" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcsAAADCCAYAAAAmeuk7AAAACXBIWXMAABcRAAAXEQHKJvM/AAAgAElEQVR4Xu2de7iuVVW3R5Z4IjyjqdACQpGCRAVLkDaKKagoipqKulFARVPwgIqVG1BTVMQTlqksTEjJELLwkOUG81hihpqnclWaaVqmldX3lc3b8Qye8c71HN73XcfN/n3Xdf/3frmeObl+9xxjjufZ9oMf/MCEEEII0c/oD4QQQoidndEfCCGEEDs7oz8QQgghdnZGf7CZKP/vR4QQQuzYjGX9ZmT0BxvB2EILIYS47jHmho1k9Afrxdgi9nA9IYQQm56xLN/04hz9wVoxtlCJsU0QQgix4zLmgE0hz9EfrCZji2HTyfFHhRBC7LCMZfyYIzZEnKM/WA1GHnxWIf6YEEKIHZZZRboppDn6g5Uw8JDTyLFvoa8/B7sIIYRYdcayt4tZJDqVOMdctBqM/mAe+h7IhgU5jRS7NusGQgghNi3TSnZMnhsqzdEfzErPQ/RJsk+OQzK8YQc3EkIIsenoyushmfbJc2ppjjlqXkZ/MC1df7SNS7JLkF1SzIt/4w5uMgO7CiGEmJuxjM105XWfTGt5dolzw6Q5+oNp6PhDp5VknyBrMXaJ7sd72E0IIcSG0ZfNXcKtBTomzpmkOeauWRj9weD/5+FqckySXYLMcqylGBtx08TNOri5EEKIDaMrl3Nu11LNAs3y7BLnNNJckypz9AczyrIW5ZgkuwSZ5ZiFGBtxi4ZbJm7Vw62FEEKsOX0ZnHM6sruWagg0y7NLnNNIc80qzNEfrJIoc7s1S3JIkCHGLMTYmN0bbpO4bQc/IYQQYs3pyt+cz5HZWa5ZoiHPIXH2SXNdhDn6g1US5ZAk+wQZcgwpZvndruH2DXdI7DHAnkIIIVbMUM7mPI6MjszOcg2JZnn2ibNPmusmzNEfTCHLWUVZS7IWZC3HkGKIMDbrJwsLDXsl9h5gHyGEECtmKGdzHi80kNdZtCHSEGiWZy3OWppzC3PMbasqSxsXZX0/eUObrCZzJRmSjAoyBJnlGFIMEbJRP9Wwb+GODXdK7DfAnYUQQszNUL7mHI5sJqcjs0O0IVLyPcszxJkrzlqaucqshRnSXHVhjv5gRlF2VZQhyqgmo90akowqkhNGLciQY0gxRMiG7V/46YafKRyQOLCHnxVCCLFi+jI25zC5HBlNXodoQ6TkeshzwSbFiQ+i2sQTUWnij6gyc1t2zSvM0R+MyHIWUd7U2moy2q1ZkpTnC+YLF1UjixpiDCGG9O5SOKhw14a7Fe6eOLiHQ4QQQsxNX7bm/CWPI5vJafI6JBsiDYGS81F9hjjxQZbm7ra8yqzbsmPCXB9Z2nJRhiynFWVdTUa7tZZkCDIqRhaXhQ4hhvDuUfi5ws833LNwaOKwDu4lhBBixXTla85f8jiymZwmr0O0IVJynXyPCjSLs5YmvshV5qzCXHF1OfqDAVnW95TTijKqyT3My+5akrUgOaWwyCx4CJHNOrzwC4UthSMK9264T+LIDu4rhBBibrpyNeduZDG5vMU8p8lrcjtESp6T6+R7Lc6QZlSa0Z7NVWafMLuGflaluhz9QY8oc1V5fZtOlDwgD5qrSfrV9K6zJCnZQ5CcSkKOLDiLHxJk0+5XuH/hqIajCw9oeGAPDxJCCDE3fdka2UsORyaTz+T0L1orVXKcPA95kvMhTvKfdm1IEz/giQVzb+CPPmH2Df2sSnU5+oMeWXZVlfF6yDSi3MvaapK+dZYk5TonjxAkJxQWmcVm4dmIkN6DCw8pHFt4aMPDCsclHi6EEGLNyHlL/kYWk8vkMzkdkiW/yfGQJ/ke4iT3yf+QJl6gPRtVJt6YRph4KIS5atXl+A+mryr5A+M9yph6za3XECVl9b7mU1GcHjhF0MPmZBGS3GJ+AmFBOZ1wWjnGfOHZBDblEYVHFn6p8KjCowuPKRzf8NiGxwkhhFgzImsje8lh8phcJp/JafKa3Ca/yXHynFwn38l58n6LtdLEB3ghqkx8gTfwx57WLcz8WknX/eWKqsvxH4xXlbn9mkXJ1FKfKCmvDzDvU3OKoH/NBTEnjJAkJxBOIywspxUWm4VnE9gQNmlr4YTCEwpPLJxYOKnh5IYnjfBkIYQQvYxlaGRtZC85TB6Ty+TzVvO8JrfJb3KcPCfXyXdynrynXRvSxAd4AT/gCXyBN7qEiWfyayX1/eWqVJfjP5i+qqzbr4z5Mr3EpSwPRgmdRUmZfbB5v5rTBH1s7iE5abB4lPCcRFhYTiohRzaBDQnRnVJ4auFphV8uPL3wjIZTOzhNCCHE3HTlamQu+UsOk8fkMvn8FPO8JrfJ763meU6uk+/k/LHWSpNiifbs4eZ+wBMH2aQwoyWLX/BMvFZSt2NHq8sxB04lS7O5q8q4p2TclymmBfOe8342KUrKbRaEheFUQVnOSSMkyUnk8eYLzMmFRWcD2Aw2ho17VuHZhecUTi88t/C8wvMrzujhBUIIIXrpy846Y8ld8pccJo/JZfL5meZCRaTkNzlOnpPr5Ds5H9Ik/7nbvL95lUm3EU9kYeIRfLJg7hc809WOXdXqch5ZjlWVdfuVsd99zC9p6T1TUmdRsiAsDKcK+tmU54+xVpKcSFhgFho5sgFsBhvDhv1K4VcLv1bY1nBm4ayGsyteJIQQYm7qTI2sJXe3NbzQPJfJZ3KavCa3yW9yPMRJvoc0yX3uN/EAPqDLeKRNChN/4BF8glfwC+9h5nbstNXlmsiyrwVbV5VYHbvn9iv9ZcZ/mXrlspYeNKV1FiWXvfSvOV1wUUyvm5MHJTwVJCcTFprTC4vPRrAxbNSLCy8pvLTwssI5hZc3vCLxyg7OFUIIMUpXfuZ8jcwlf8lh8vjXzfOZnCavyW3ymxwnz6k6yXekSd6T++Q/HsAHx9ikMPEG/sAjTMnilbi/zO3Yrupyxa3YWWQ51ILtqiqx/YJ5uUyf+UDz6SYubbmjpPWaRcnkFH3sE83L9KdbK0lOJlSOLDgnGzaBTWGT2MjzCq8uvKbw2sLrCq9vOL/iDUIIIeamztTIWnKX/CWHyWNymXwmp8nrkCc5Tp6T6+Q7OU/ek/vkPx7AB1mYFFYUWPgDj+ATvIJfFmz66jJkOXN1OY0op23B5rvKXFVG+5V+M+PATDkdYX5HSakdoqQM5wKYapL+Nj1vTiAsKiU+1SMnFk40bAIbwgaxeb9ReGPhtwpvKry58JaGCxKLU3KhEELshCxOSc7VyFpyl/wlh8ljcpl8JqfJa3Kb/Eac5Dm5HtIk78l98h8P4IMQJp6gsKLAwh94BJ9EOzZXl3F3GZOx+b3LFbViVyLLrhYsJXBfVUn5TN+Zcvq+5sM89KYpuTlJsECU4/SzOW1Qrp9pfhJBkpxQOK2w8GwCG8LmsFls8lsLbytcVLi48DsNb694xxRcIoQQOyFj2Qh1pkbWkrvkLzn82+a5TD6T0+Q1uU1+k+Pk+TnWVprkPblP/uMBfIAX8AOeYOiHKdkt5h6Jduz+5tOxC9ZWl2vSip1Gll33lX0t2DwBW1eV9zBvv1JOU1Yz9cQwDz1qSu9TzBfqueYXw5w6KNsp4UOSv2m+8Ivmm8HGsEls4O8W3ln4vcKlhXcVLktcXvH7QgghpqbO0Jyv5O2lDeQweRxiJafJ60Xz/CbHQ5pUmtxvkvfkPvmPB/ABXsAPjzT3xdHm/sAj+KSruozJ2FtY24oNWdZTsSuXpbWizFVlyHKoBXsbaydgu6rKLeanA8pqxoSZfuJSl141JTgnCxaMC2EWkNMHPXBOJJT3i+anFgTJKQgxskls3LsLf1C4ovCehvc2vK/i/UIIIWamztLI2Mhc8pccJo/JZfKZnCavESf5TcWJNMl18p2cp3tI7pP/eAAf4AX8gCfwBfeXXN9tsba6zHeXeAf/4KFoxa7aVOwssqxbsPyPD7VgKY2ZWGLUlx5zVJWcDo41L6/pSzMFxeUuPWtKcU4YIUoujDmFUMpzMkGSnFjYAE46bAobFAL8QOGPC39S+GBhe+LKxFVCCCFmJufo9gR5S+6Sv+TwH5nnMvlMTpPX5Db5HdIk199onvOvMhfmWeYewAd4gVdLtpr7Am90VZcxGbuXzdeKXXNZ3rj5I/IUbFcL9q7mI7/cVeaqkhdRn2hebj/TfJiH3jWt1xAlC7loXsZzMqHEZ9E5vbARbAgbtN18Iz9U+NPCRxo+2vCxxMeFEELMTc7TyNjI3A+b5zB5vN08n0Oc5Db5TY6T5+T6orXCJPcplPDAGeZe4P6Sdiy+4KPt+AOP4BO8wmTsAba8FZunYtdFltez8fvKegqWUngfm2zBHmo+yXSUee85qkpODbxnQ9nNVBSXvdxRUppTUS6aLyinEfrinFAo+Tm5cJJhQ5BjCPEThT8r/Hnhk4WrE59K/IUQQoiZyTma85W8JXfJX3I4REo+k9PkNblNfpPjl5nnOkNBi+bCJPe5w2RSFh9wf4kfcnX5EHOP4BO8wocKGPTBN9GKxUN5KnZV7i3nleWNrP++csG8BcuU0l2sbcEeaT4ByygwPWiqSk4NnB44RVB+v8z80pdeNiV6FuUfmrdaOamw+JxgQpAhRjbz04W/LFxT+EzDZxOfE0IIMTc5TyNjr2kgf8nhEGiIk7wmt8lvcpw8D2GS8+Q9uU/+MyWLD/jUHh8uwBP4Am/gDyZj8Undio2p2Li3pBUbssz3lhsiy677SvrG9I+jBctLpNGC5YL2EeYjwXFXebr5KYLTBGU4U1IM83BHSakeoqSU53RCic+JhRMMm8HGIEc2jI38q8LnC18ofDHxpcSXhRBCzEzO0Zyv5C25S/6Sw+QxuUw+k9PkNblNfpPj5HkIk5znDpOhn/PNPRDVJX7AE/gCb+APPBKtWPyCZ/DN0L3l6svSWlF2yXIXa2WZh3u67ivpI9NPZmrpCPOXSimhKaW3mk86MSIcd5VRVUb7lWEeetuU7JxEWGBKek4plPu0AdgMTjdsEJsVIvzrwt8UvtKwlPhbIYQQc7OUiIwlb8ndECp5TC6Tz+Q0eU1uk9/kOHlOrpPv5DxDPxea5/9rrK0u8QOewBdbrW3F4pMjzP1S31viobi3zEM+IUs81ilLGxDmNLKcZbiHy1XuK/czv6+kn0xfOaZgH2r+75lFC/bZ5pNPLzLvVVNVcrrglEF5zmUwPW5Kd04kLHRUk5xcQpJsUMiRzfy7wt83fLXhaxX/IIQQYmrqDI1sjawld8nfkCe5HNIkr6PKJMfJc3KdwR9ynnczo7rEA/iAGRb8gCeiFYs/8EhMxR5m7hl8g3fwz5oM+ayWLHe39hN3XLJy2cql6yHW3lfSZ44p2JPM/5ktSuwXmk/Anmfes140ryoZM77C/FKYXjclPCeTECUlPycYTjNL1goyRPj1hn9s+EbFN4UQQkxNnaGRrZG1IdQQ55J5PpPT5HUIkxwnz8l18p2cJ++pLhfNPYAP8AJ+iFYs3sAfeCTfW+KZviGfTSHL+HJPPQnLH7u/+XAPl6+Hm3/ejpHfuK9kuokpp+eZt2DPMS+9+SRS3FVy2uDUQbnO5TA9b0r5LEpOL5xkQpIhx9jcfyp8K/HtDv5ZCCFEL125mXOVnI3MDXmGNMlncjoLkxwnz8l18j2qS7qJ5D8eYDIWL0Qr9lRzb9T3lvgFz+AbvMOQDx5iyAcv4af6Sz6rLsuu4Z5aln2TsEwmMaEUwz33KzzY/LNFWwtPNu9DMwV7tvnrItGCvcj8iw/0srkE5vQR7Vd635T0IUpOL7QB2JyoFkOKsdH/0vCdHv5VCCFEL33ZGdmapUr+RhVKLpPP5HQIk/wmx6MdS77HsA+5f7G1rVi8gB+YiuWtibi3xCP4BK/EkM9B1j0R2/X6SJcsR4d8ZpXlDWxclnc0/6PjYwRbbHK45wTzDxEwEkw/mr70ueZfp7/A2hYsX36gp81l8CfMy3cui+mBU9pzYsmi5HQTkswi/G7ie0IIIVZMztUs1JAmeZyFSV6T2+Q3OU6ek+vkOzlP3l9m3orFA/gAL8S95bPMvYE/HmXtkM8Wc8/kidgFG5YlHlsXWdbvWN6q+aMY193LJl8b4SGOMH+J9Fjzh3yCtcM9fAfwJdbeV15o/vHdy81L8+3mve1cVXJpvGRe4ocoOc1EFRmCjE39t4Z/r/gPIYQQU1NnaGRrFij5G9UmuRzCJK+XzPM7V5fk+3bzvCf3yX88kO8teYXkOYWnWTvkg0/wCn6Jidj69ZFVfddytWSZ37G8k02+NnJv84fKk7A8NA/PIrzU/JURvuDwVvO+9bvNx4qjBXu1ea+bU0m0X+mJR0UZ1SQbFYKspfj9iv8UQggxNXWG1hINcUalSS5HhUleRzuWHCfPyfXciiX3494SH+AF/BBDPgyFnmj+cYKYiMUv9esjIcvb2g4iy7tb+5k7HoqH4yF5WB6ah99m/n5lDPcwOswIMfeVTEl9yNoW7OfMe96MJUdVSW+ckj8qyhBlFmS94f8lhBBibrokGpmbhUkuk8/kdFSX5Dc5Tp5HK5acJ+/J/XiFBB/gBfywzfzTd0+3diL2YdbKEs/gmz5Z3txW4cMEK5Hlbjb59Z76gwQhy/tY+5m7eG2Eh+bht5lPPL3W/Ks9MdxzhfnX6+lnMzX1aWtbsPS+OaUwdRXt11qUWZKxwf9d8f+EEEJMTZ2htTxDmlmY0Y4lr8lt8jtaseR6TMWS9+T+peYewAd4AT+caf7mRC1LvIJfDrVJWeIhfLTpZRkfJKhleZy1ssyvjbzc/IvzTEAxCcVixXDPR8zfyaG//XnzC2JKed7niaqScp9eeS3KWpL1xv9/IYQQU9MnzyzNLExymXyO6pLcJr/JcfL8GvN8J+djyIf8j4lYvIAfzjL3Bd442fwfhMYnIcvDrP23LfHPDidLvqrAQ/Aw8UECHpKH5aGfb74ILAZjwm+xyUlY3r9hEbkEZlG/YN7vzi3YuKvkFBP3kyHKWpJdm/8/QgghRhmSZ5Ym+Rv3mORy3F3mVmzcW5Lr5Ds5T96T++Q/HsAHeCFkiS9qWcaHCfBM/orPppVlfOpuD+uWJQ9Ty/JUa2UZ71iGLBkffq+1k7Ax3PNFm7yvjMGeaMGyObmq7BPl2H8UQggh+ukTZq4uQ5bRiiWv870leR5DPjERS+6T/1mW+CFkiTdClg+3cVniJfy0w8mSh4uv94QszzZfjPPN363hHZsxWfLOTtxXcoGcW7BDouza9P8VQggxypA0u4SZW7HkdNxbkt9jsox3LfFCfJggZIk/HmebXJa72PrJ8n3mixevjXzWfHGXbDZZdoly7D8KIYQQ/fQJc1pZLplPxJLrfPqOnN9u7buW6yFLfLbDyPIM80V4pU3KMj5IcKX5IrKYLCqLu2Tt+5Usfgz35BZsnyjH/gP4gRBCiGsZy8w+YeZWbAz5xAcKyO8lWy5L8r5LlvgBT+CLPlney9w3fEwd/+xjk//yyKaT5Z7W/vNc/NH88TzEtLJctNlkGZOw9X3lLLIc+49FCCHE/LKMIR/yupYl71p2yZKv+CzauCwfZP6PdOCZQ6z9l0f6ZLmrbYAsd7V+WfLH8kfzx/MQPAwPlWV5mvnDv8h8Md5gvjgsUpblx80XMz5IwDs6Q7KsW7B9ohz7D0MIIcRyhoSZW7FDsiTHv2zthwnIefL+/TYpS7yAH/AEvsAbkqVNypJFu8p8EePrPSzuashy7D8GIYQQ/cwry3jXskuW5D25zz/VJVnadLJksYZkWX+QgM3Iwz1jLdix/xCEEEL0M9aKzUM+kqWtnizPtbWRpUQphBBrw1B1Wcsy3rWcR5b4AU+8wNwbT7adSJY8LA/Nw69Eliw+myBZCiHE+iJZmmQphBBiGMnSrruyHNt8IYQQ0yNZmmQphBBiGMnSJEshhBDDrJUsLylcaJJlryxZHBZJshRCiM2PZGmSpRBCiGEkS5MshRBCDCNZmmQphBBiGMnSJEshhBDDSJYmWQohhBhGsjTJUgghxDCSpUmWQgghhpEsTbIUQggxjGRpkqUQQohhJEuTLIUQQgwjWZpkKYQQYhjJ0iRLIYQQw0iWJlkKIYQYRrI0yVIIIcQwkqVJlkIIIYaRLE2yFEIIMYxkaZKlEEKIYSRLkyyFEEIMI1maZCmEEGIYydIkSyGEEMNIliZZCiGEGEayNMlSCCHEMJKlSZZCCCGGkSxNshRCCDGMZGmSpRBCiGEkS5MshRBCDCNZmmQphBBiGMnSJEshhBDDSJYmWQohhBhGsjTJUgghxDCSpUmWQgghhpEsTbIUQggxjGRpkqUQQohhJEuTLIUQQgwjWZpkKYQQYhjJ0iRLIYQQw0iWJlkKIYQYRrI0yVIIIcQwkqVJlkIIIYaRLE2yFEIIMYxkaZKlEEKIYSRLkyyFEEIMI1maZCmEEGIYydIkSyGEEMNIliZZCiGEGEayNMlSCCHEMJKlSZZCCCGGkSxNshRCCDGMZGmSpRBCiGEkS5MshRBCDCNZmmQphBBiGMnSJEshhBDDSJYmWQohhBhGsjTJUgghxDCSpW2MLBcL7zDJUgghdgQkS5MshRBCDLNWssQDiyZZSpZCCHEdQLI0yVIIIcQwkqVdN2UpYQohxOqQc1WytLWR5ZPMH/oMkyyFEGJHRLK09ZflK20+WX678B2TLIUQYr2ZRZbkNHm9ElniC7yBPyRLW11ZSphCCLH69IlyLWSJHyRL65bl5eaLdqV1y/JrhW/YpCz/vfB98036b1N1KYQQa8VQVUn+ksPkMbmcZUluk99dsiTvyX3y/zoly5vYymR5qvnDn22+GOfbpCzfZ60sP2W+qF+y1ZGlhCmEEPNRZ+m8siTPyXXyPWRJ7mdZ4oXrtCz3M/+jDzZ/iCMLD7RxWV5QeLtNyvJj5ov5WfPFXbJhWVL6Z1kOCVPSFEKI6ejKz64WLPlLDg/Jcsk8z8l18p2cz7LEAxdYK0s8gS/wRpYlXsEveAbf4B380ydLvLUpZLlHYW/zP/ZA8z/+MOuX5fPNF+EVNp8sv2W+Cd+1+WUpcQohRDdjmTmNLMlncpq8XitZ4hl8g3fwDx7CRxsmy+vb+sjyMvNF226+iFebL+oXzRf5q4V/NF/8fzHfjH+zySGfPmFOI00hhBD95DytRZmHe8hl8pmcJq/JbfJ7yTzPyXXynZzfbp775H+WJX7AE/hip5LlY21SlmeZL8brC28p/I75Yr3XfPE+ar6YnzFf3K/YsCzre8s+YUqcQggxPV35mUVZ31cOyZIcJ8/JdfKdnN9unvvkPx5AlnhhrWSJz9Zdlrcq3NbGZXmcuSxPtklZvtwmZfku80X7oPkiftJ8Ub9gvsh/X/h64Z9s8sMEuRXbJ8w+aQohhJiOnKe1KOv7SvKZnCavyW3ymxwnz8l18p2cJ++zLPFByBJPhCzxx2PNfXKdkeXdzR/iPoUH2KQsn1F4nrWyfF3hzYWLzWX5HvPF+4j5Yl5jvrh/Y60s4ys+ecinbsX2CVPiFEKI6enKzyzKugUbsiSfyWnyOmRJjpPn5Dr5Ts6T9+Q++Y8HkCVewA8hS7yRZYlX8EufLPESftq0srxT4QBzWR5qrSwfVji+cJK1sjyzcI61sryocGnhisKfFD5c+PPCXxY+X/jrwt/Z8g8TRCu2ri67pDkkTyGEEN3UGZolWVeV0YKtP0hAfpPj5Dm5Tr6T8+Q9uU/+I0t8gBfwA57AF3gDfxxvk7LEM/hmh5HlHQp72XJZ3rtwtE3K8umF5xa2mS/GawtvMpfl7xX+sPDHhT8t/Fnh04W/Mn+Rdcl8oiruLXMrNt9d/qd1S7NPnkIIIfqpMzRLMkQZd5W5BRv3lfmDBOQ5uU6+k/PkPblP/uMBfIAX8MM2c1/gjZAlPqlliXfwz6aT5Y8Xbmb9srxb4Z7WyvKhhccUTiz8cuH0wgsLLy28pvBbhd8uvLPwB4U/KnzI2q/4xERsvreM6pIL5CzMaMl+3ybFmeUphBBidnKeRsZG6zWLklyOqjLfV37JPM/J9U+Y5/wHzHOf/H+buQ/wwsvMPYEv8Ab+wCP4BK/gFzyDb0KWeAgfhSzxFL7adLK8Y+FnrJXlEYWjCscWHl14YuFphecUfq3w64XzCr9ZeGvhEmu/D3ulta+PxJBPtGLjfcsY9KHcr4UZ0szi7BKoEEKIYeoMjWyNrM2ijLtK8jneryS3476SPCfX4x1L8v7dhd8198AbC682L6bwBL7AG/gDj+ATvIJfQpZ4B/9sGlnesHBja2V5y8Jtmj9uwVpZ3rXw84UthfsXHlJ4VOEJhacWnl341cJLCq8q/IZNfvLuvebjxFz+xr0lpTunkiVrq8v4QAEbExUmvfLvWSvOLM9aokIIIcapMzSyNbKW3I2KMtqv5HNUlUvWtmDjvpJ8326Tn7q70NwHeAE/4Al8gTfwBx7BJ3hli7ln8E0tS7yEn0KWeAt/rYssd7F+Wd7eXJb7Fn66cFDh5wq/ULhf4cGFXypsLTyl8Exr/wHo/Mk7xoaZiLrC2ntLSnW+9JCrS3rfvLMTwuQEQ8kfVWZUmt9NfE8IIcSKybkalWRUk+RwVJTkMzlNXpPb5HduwcZ9JXlP7pP/eAAfnFt4ceFXCs8qnFI4wdwj+ASvbLFWlngHWS6Y+6hPlnhsVWUZwhyS5U2bP2b35o/7SXNZ7m8uy3sUDi/8YuGYwiMKjzf/BzxPM/+E0VnWvj4SQz753pIS/aPmI8acRj5nXl1SztfCpDfOaSakGdUmfKeHfxVCCNFLX3ZGtkbWkrvkLzmcRRntV3I7qkrynBbsVeY5T97HcE9MwsYHCfDEaebewB+PNPcJXqEYoyg7yFyW+GfBZpfltd5bC1nuai7LW5jL8nbmsvwpc1nexbr/5RHekcnvWm4zv8TlMpc+ddxbXm7txwlydXmNte3YECYlPj1xNoepq282cLr5VuLbHfyzEEKIXrpyM+cqORuZS/6Sw+QxuUw+hyg/b94dJMfJ83vw5BsAAA/dSURBVA9b+zEC8p7cj/tKfFC/NoI34us9+ASvUIxRlOEbvIN/8BA+wkvIEk/hq00lyz1t8p/p4kXRw2zyXcs8ERtDPnFv+QZrW7GXmo8SR3VJb5sxY8p3FjyESWm/ZH56CWnyPs/XrZUnfKPim0IIIaamztDI1shacjckSR4vmedzFiX5zV0l3UJynSlYcp68J/cXrb2vZPgTP5xu7SRsvGOZv95DUYZv8A7+wUMhS/y0brLMwuR/JCZi+R/frfljbm3d34fN71rGRGwM+Zxi3oeOe0tK7mjF8goJU1FRXdLTZryYsp2FZsGpMGnJ0gMPaTKWvGStOOGrDV+r+AchhBBTU2doZGtkbQiSHKaaZJiHfKawCVFG+5U850ME5DtvP5D3bzPP/9eb+wAvxH1lDPcwCZtfG4l3LPEN3glZ4iO8tHayrITZNeQTshz7MEE9ERtDPvSb497yVJtsxZ5n7VQspwx62PSymZSiXA9hUmFSytP7jiqTTeE9TDYIcbJZX7FWoMHfCiGEmJulRGQseUvukr/kcEiSYR5ymrym0CG/uVYjz3ldhHzPVSWvEL7a3AdnWvtNWHyx1Xy4JyZhj7Dl71hSrFG0hSzxE55ClvHaCLLsHO6xNZYll6dZlgs2OREbQz71veVJ1rZiGQ1+sflULNUlL6TSu2aMmAkpynQWNoT5EfOeN6eULE02hg2i5P+CtQKFLyW+LIQQYmZyjka2RtaSuyFI8phcjmqSvKb1Sn6HKMl18p2cp5v4JvOqEg/gg3i/Ek/gC7yBP46x7uGeO9rydyxDlit6x3I1ZMmEUf36SAz5xL0l/eTDzO8tKZ0poSmloxXLlBOnB04RvIBKdcndJR/SpSy/xFphUmHSkr3S/HTC4rMJnFiuNt+YT5tvEm3az1gr0eBzQggh5ibnaWQseUvukr/kMHlMLpPPVJMM85DbtF5DlJeZ5/tF5nlP7pP/VJVnmU/B8oohnogWLHMvzL9wX8nw6CHWDvdQpC1Y9yTshsiSEnaaIZ98bxlf8qF0jlYsU00nm3/vL6pLetS8RsIkFO1Yhn2yMCnZ6XEz9MPpJKRJpcmGfNy8RcsmfbLh6oZPJf5CCCHEzOQcjWyNrCV3yV9ymDwml8nnq8zz+gPm+U2Ok+chSnKe9utrze8qqSrxwenmfsATXN3hjYeYz78M3VfWk7D5tZE1k2UIc0iWcW+Zh3wohSmJ496SUjlasUwxxVQsp4WnmFeX3F2+0HwyljKchWMBQ5iU6txhMvTDqSSkSaW53VyclPhsDqcYNuqjDR9LfFwIIcTc5DyNjCVvyV3ylxwmj7eb5zM5TV6T2wzzcEf5DmtFyasiXL+R+0zAbjPvNuIFqsonmvuCKViu8nILFr/gma77ylUb7lmJLPuGfOov+VAa51dIOA0cZX46iOqSXvTTzCeeKLtpx7JgIUwqTEp07jC5BGZqisVGmpxQrjDfCEr7kCel/gcbtlsr08xVQgghpqbO0O0NkbXkLvlLBUkec21GPpPT5DW5TX6T49xRkusURIjyXPNrOPKfNySebX5XGVUlgz28TcFVHld6+KSrBdt1XxnDPasvy0qY12v+j4Ywa1nme8uuVixTSkwrMRXLaSBXl/SgtxaeZF5us0AsVBYmLVl62Qz9LJovMotNCf9O83KejeDEwqZwemGD3mMuUXhfxfuFEELMTJ2lkbHkLblL/pLD7zbPZfKZjiB5TW7TJVw0H+Yh1ymIyHlEeZb5qyJcy/ERAiZgT7DlVeUWc5/gldyCZV7mdjZ8X5knYddEliHMPOTTdW/Z1YplSgn7cwqI6jLuLplsOt7adiwLxEKFMGnJcod5nvnpgyqTRaZ0f6t5Gc8GUNKHPNkYTjDvaris4fKK3xdCCDE1dYZGtkbWkrvkLzlMHpPL5DM5TV6T2+Q3Oc7UK7nOHSWFEXmPKLmnPNXcB7RfmYB9hLV3lbmqrKdgu1qwq3JfOa0s+1qx/I8PtWJjKjZXl3F3ySQT5TRlNe1YFoSFCWFSYZ5hfofJ0A+nDk4fIU1OJG+0VpyL5ptB1XlRw8XmGwVvT7xjSi4RQoidiLFMDHKeRsZe3ED2Uj2Sx4vWCpK8JrfJb96jJM9fZj7Ms828QKJQQpSnmH+th2s62q8PNZ+ApStJdzJXlXe29hN3eKerBXtjW2ELdqWy7GrFYnNasX3VJXeX9zQvoymnaceyECxIFiYtWe4wGfphKopTB4vK4nISeZV5e5aFP9/8pELvm1YtG/Pmhrc0XJBYnJILhRBiJ2JxSnKeRsZG5pK/5DB5TC6Tz+Q0eU1uk98hyTPN851hHgokCiXyP4uS6zrar/czf6OCCVg8gk+iqtzblk/B9rVgV1+WlTCnacXWX/OJ6jLfXd7V/CMFlNE8OAvAQmRh0pLlDpOhH6ahOG2wmCzqNvNKk/YsC06LlhMKm0DVyYbQA39dw+sbzq94gxBCiJmpszQyNjKX/CWHqR7JZfKZnCavyW3yOyRJ95C2KznPMA93lBRMtSi5tuP6jvcq72HuEXyCV6gqF6wd7Ombgq1bsBOyHBPlLLIMYQ61YutBn1xd7mteLlM2RzuWB2cBsjAfaX6HudV8SjaqzJAmlSblOl922GZ+IRzypO9Nu/achpc3vCLxyg7OFUII0UtXbkLkamRtZC9iJI/JZSrIs80FSW6T3+Q4ef5M83yn7crU6wnm+Y8H8EGIkntKru9ov/JeJW9Y7G+Td5V1Vbmbjbdg11yW9VRsPehT311SHlMm82A8IA/KA9fCpCXLHSZDP482P11QZbKILCYnD/rZtGdDnJxMWHxOKWwEd5zbzDfmrMTZFS8SQggxF3WeRs6Su9vMc5g8JpcZ2iGnQ5DkNzlOnockyXnyntxnmAcP9Iky2q+8V0nXMt9V1oM9q9aCHZVlJcyuVmxfdXmL5g/nASiPox3LA8b9ZRYmLVnuMI82n5Kl/OZ0wchwSJNKkzI9xEl/m4qT0wn9bjaCkv655hsDz684o4cXCCGEWEZfZkLO1shc8pccJo/JZeRITpPXIUhynDwn1x9vnvPkPblP/jPMQwFFIVWLkg8Q1O1XuphDVeVgC9bWQJZ9rdi+u8u6Hbtg7XQsD5yFyR3mFvMpWU4TVJmMCoc0OXFwn8nCssAnmp9IWHRatU81v+NkMyjrn9Fwag+nCSGEmIuuTI3MJX/JYfKYXA45ktfkdgiSPCfXQ5LkPbl/lPnUKwUUhRR+6BJlbr/SxYwJ2HxXOVRVztSCXYksx6rLeO8y2rE8UC1MKkxastxhcmnLlCynCE4TLBaLxuJx0qB/TXuWhX2U+Ukk5LnVfAO4GGYzTmo4ueFJU/BkIYQQyxjLToisjewlh8ljcpl7yJAjuU1+k+PkOblOvock6S6S/7wecqi5F/BDlyi53ru9Dbdfb2jLRTlXVTmVLCth9rViu6rL3I7tEiYtWe4wDzSfbmIcOKpMFiukeX/z9iw9bBb2WPOTCItNf5upKTaAUwqbcXzDYxOPE0IIsSZEzkb2ksPkMblMPpPT5DW5TX6T4+Q57VbynZwPSZL/tF3xAV6goKKwGhLlUPt1sKq0NZTlUHXJH3Yjm16Y3GEy9MOULGPAnB44RfBlBhaLRTvcvBznkpcFpY/NCYRFZrGPMV94Sng2gZPKwxqOa3i4EEKINeO4BNlLDpPH5DL5TE6HHMlvBEkVybUb+U7OhyTJ/6gm8QIFFYXVkChpv4Yo16SqnFqWlTBzdZmFGdVltGPHhMnQz97mr5VwauD0kKV5sHmlSXs2xLnF/AQS8mTBESiLzyYc3fCAhgd28CAhhBBz05WrD0iQwSFF8pmcJq+RI/m9xbyK5E6SfCfnsyTpNkY1iR8orBasvaOsRdnVfl3VqnJeWU7Tjs33l13CZOiHKSZOCZwWosrM0qT8pgzncpeFpH/NyYNeNvJkoREoi77F/IRyb2tlCkd2cF8hhBBz05WrkbmRweTxFvN8JqfJa3Kb/CbHQ5DkOzkflST5T7cRH0Q1SWGFL2KYp0+UQ+3XFVWVM8myR5h97di4v+wSJkM/TMnGV36iymRRWJyQJuU3l7qcMhDnQdbKk6ozBMqis/j3bDjUWqHW3EsIIcSK6crXyN7I4pAiOU1ek9vkNxUkeR5VJDlP3pP7IUm6jnhhD3NPUGDF1CsemUeUGyrLaYVZt2Q5FeQqs5Ymlea+1oqTkwYnjixPFvogayV6t4a7Jw7u4BAhhBBz05WrOXcji8nlyGjymtwOOZLnIUjuJMl7cj8qyVqSu1sryhjmGRPlqrRf55LliDDjj6uFWd9hxld+6iozS5P27IK14uSkwWKyqCHP/RtConBA4sAOflYIIcSK6crXnL+RySFFILezHMl18p0qcsGWSxIvhCRz2zUP84yJcln71TZIll3t2D5hxpRsbsvy8CxCSDMqTXrTWZws4oK5PFnYLNCoQOFOif16uLMQQoi56cvWnL+RyZHRWYzk+IJ5rpPv5HzcSdaVZEgyV5P11OuYKFdcVc4lyw5hdrVjh4QZVSYPzSkhpBmVJu3ZLnHeoSELNCQKeyX27mEfIYQQK6YvY3MOL1grxVqMQK6HIKkiY3inliSeyJKMr/OsmyjnluWcwhySZq40406zFudtrW3X3s5aiWaRZqF2sacQQogV05exdRZHRkdmhxhDjuR7FmQM74xJcmZR2iaRZZcwQ5rXt+VV5pA0c7VZyzMLNLiNTcq05ieEEEKsGX3ZG9mc8zrEmOVYC7Jut/ZJct1EuSJZjghzqMockmYtzizPXHkGt0zcqodbCyGEWDP6sjfnc87tEGPIMQtyFknWr4esmShXLMsf/h9YLsxpq8wuaXaJs5ZnCDS4WcXNhRBCbBh1Jue8zjleyzEEOa0ku6rJZaK0zSLLH/4fGRZmX5VZS7NPnFmeWaAh0ZrdhBBCbBhduZxzO+d5lmMtyGkk2VtN2ipJ8lrPjf1gFrr+WFsuzCzNIXF2ybOWaOYmM7CrEEKImRnL1i4RZuosr+XYJcgxSa65KH/ot7EfzErXH1091I9atzjzwuxScQPrlmim3gQhhBAbR1dO11me5dgnyA2V5LVuG/vBvHQ9RPWQQ9VmLc8hkXbJVAghxMbTldd92V47oC6sBiVpayjKHzpt7Acrpe+hbFicXfKcRqRDdG2aEEKI+RjL3GmEOCTHWpAbIslrXTb2g9Wi7yFtOnHOIlIhhBCbk7Fsr13QK0hbJ0le67CxH6w2Qw9u3eLsYmzBhRBCbD7Gsn1QjrbOgpxw19gP1pKxRbHp5SmEEGLHZMwBGybIzOgP1ouxxRpgbCOEEEJsHGMZvmkFmRn9wUYxtpBCCCGuO4w5YaMZ/cFmY2zBhRBCbF7GMn6zMvoDIYQQYmdn9AdCCCHEzs7oD4QQQoidndEfCCGEEDs7/weS0zGcEDvpAAAAAABJRU5ErkJggg==" style="mix-blend-mode: multiply"/>
      <path d="M205,73.92A5.07,5.07,0,0,1,200,79H20a5.07,5.07,0,0,1-5-5.08V20.08A5.07,5.07,0,0,1,20,15H200a5.07,5.07,0,0,1,5,5.08V73.92Z" fill="#fff"/>
      <rect x="49.96" y="46" width="52.75" height="1" transform="translate(29.83 122.83) rotate(-90)" fill="#bcbec0"/>
      <text transform="translate(84 45)" font-size="12" fill="#2aace3" font-family="Roboto">Christoph Example</text>
      <rect x="76" y="53" width="119" height="1" fill="#bcbec0"/>
      <image width="117" height="117" transform="translate(17.5 18.33) scale(0.48)" opacity="0.7" xlink:href="data:image/png;base64,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" style="mix-blend-mode: multiply"/>
      <path d="M45.17,71.33a25,25,0,1,1,25-25A25,25,0,0,1,45.17,71.33Z" fill="#fff"/>
      <text transform="translate(84.67 65.9)" font-size="10" fill="#939598" font-family="Roboto">Company employee</text>
      <g clip-path="url(#a)">
        <path d="M59.84,40.39a1.49,1.49,0,1,0,0-3,1.44,1.44,0,0,0,1-1.76,1.93,1.93,0,0,0-2-1.13,1.32,1.32,0,0,0,.38-1.9A2.16,2.16,0,0,0,57,31.94,1.3,1.3,0,0,0,56.71,30a2.3,2.3,0,0,0-2.41-.19,1.4,1.4,0,0,0-.86-1.8,2.28,2.28,0,0,0-2.39.31,1.61,1.61,0,0,0-1.42-1.56,2.11,2.11,0,0,0-2.21.79,2.06,2.06,0,0,0-3.75,0,2.12,2.12,0,0,0-2.2-.78A1.6,1.6,0,0,0,40,28.37a2.28,2.28,0,0,0-2.38-.3,1.4,1.4,0,0,0-.86,1.8,2.3,2.3,0,0,0-2.4.2A1.3,1.3,0,0,0,34.15,32a2.16,2.16,0,0,0-2.26.69,1.32,1.32,0,0,0,.39,1.9,1.92,1.92,0,0,0-2,1.13,1.44,1.44,0,0,0,1,1.76,1.49,1.49,0,1,0,0,3,1.44,1.44,0,0,0-1,1.76,1.93,1.93,0,0,0,2,1.13,1.32,1.32,0,0,0-.38,1.9,2.16,2.16,0,0,0,2.27.68,1.3,1.3,0,0,0,.25,1.91,2.29,2.29,0,0,0,2.41.19,1.4,1.4,0,0,0,.86,1.8,2.27,2.27,0,0,0,2.39-.31,1.6,1.6,0,0,0,1.42,1.56,2.11,2.11,0,0,0,2.21-.79,2.06,2.06,0,0,0,3.75,0,2.12,2.12,0,0,0,2.21.78,1.6,1.6,0,0,0,1.42-1.57,2.28,2.28,0,0,0,2.39.3,1.4,1.4,0,0,0,.86-1.8,2.3,2.3,0,0,0,2.4-.2A1.3,1.3,0,0,0,57,45.87a2.17,2.17,0,0,0,2.26-.69,1.32,1.32,0,0,0-.39-1.9,1.93,1.93,0,0,0,2-1.13A1.44,1.44,0,0,0,59.84,40.39Z" fill="#4e4e4e"/>
        <path d="M57.39,41.62h0a11.81,11.81,0,0,0-23.59,0H33.64a2,2,0,1,0,.64,3.93,11.83,11.83,0,0,0,8.18,8V69.74H48.4V53.59a11.83,11.83,0,0,0,8.47-8A2,2,0,1,0,57.39,41.62Z" fill="#e6e7e8"/>
        <path d="M61.57,70.8V63.37A6.37,6.37,0,0,0,55.2,57H48.4l-2.87,5.55L42.46,57H35.87a6.37,6.37,0,0,0-6.37,6.37V70.8H61.57Z" fill="#2da9e1"/>
        <path d="M50,28.22c-0.9,0-1.54-.19-1.57.5-1.05-.61-1.89-0.39-2.9-0.5a5.75,5.75,0,0,0-4.36,1,2.06,2.06,0,0,0-.75-0.12c-2.82,0-7.74,3.46-7.74,6.29s0.45,5.11,3.27,5.11a5.11,5.11,0,0,0,4.8-3.37,7.54,7.54,0,0,0,4.78,1.93,8.13,8.13,0,0,0,4.82-1.82,5.11,5.11,0,0,0,4.76,3.26c2.82,0,3.14-2.26,3.14-5.08S52.87,28.22,50,28.22Z" fill="#4e4e4e"/>
        <path d="M57.39,45.66a2,2,0,0,1-.52-0.07,11.74,11.74,0,0,1-1.18,2.63,2.12,2.12,0,0,0,1.08-.43A1.3,1.3,0,0,0,57,45.87a2.17,2.17,0,0,0,2.26-.69,1.25,1.25,0,0,0,.13-1.31A2,2,0,0,1,57.39,45.66Z" fill="#4e4e4e" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M61.36,38.9a1.66,1.66,0,0,0-1.53-1.49,1.44,1.44,0,0,0,1-1.76,1.93,1.93,0,0,0-2-1.13,1.32,1.32,0,0,0,.38-1.9A2.16,2.16,0,0,0,57,31.94,1.3,1.3,0,0,0,56.71,30a2.3,2.3,0,0,0-2.41-.19,1.4,1.4,0,0,0-.86-1.8,2.28,2.28,0,0,0-2.39.31,1.61,1.61,0,0,0-1.42-1.56,2.11,2.11,0,0,0-2.21.79,1.86,1.86,0,0,0-1.88-1.21l-0.26,0V39.07l0.3,0a8.13,8.13,0,0,0,4.82-1.82,5.11,5.11,0,0,0,4.76,3.26,2.57,2.57,0,0,0,2-.66c0,0.11.19,1.65,0.2,1.76h0a2,2,0,0,1,2,1.62,1.8,1.8,0,0,0,1.47-1.09,1.44,1.44,0,0,0-1-1.76A1.66,1.66,0,0,0,61.36,38.9Z" fill="#4e4e4e" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M59.37,43.25a2,2,0,0,0-2-1.62h0c0-.11-0.19-1.65-0.2-1.76a2.34,2.34,0,0,1-2,.66,5.11,5.11,0,0,1-4.76-3.26,8.13,8.13,0,0,1-4.82,1.82l-0.3,0v23l0.26,0.46L48.4,57h0v-3.4a11.86,11.86,0,0,0,8.47-8,2,2,0,0,0,2.52-1.71,2.06,2.06,0,0,0,0-.24A2,2,0,0,0,59.37,43.25Z" fill="#e5e5e5" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M55.2,57H48.4l-2.87,5.55-0.26-.46V70.8H61.57V63.37A6.37,6.37,0,0,0,55.2,57Z" fill="#2da9e1" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M45.54,45h0c-0.6-.06-7.9-0.66-7.9,4.49,0,4.4,6.62,6.88,7.94,6.88s7.94-2.48,7.94-6.88C53.52,44.13,45.54,45,45.54,45Zm0,5.08s-3.34.09-3.34-1.71,3.15-1.8,3.33-1.64h0c0.18-.16,3.33-0.1,3.33,1.64S45.58,50.09,45.58,50.09Z" fill="#4e4e4e"/>
        <path d="M45.69,45V46.7c0.57-.1,3.23.07,3.23,1.67s-2.65,1.71-3.23,1.71v6.28a9.74,9.74,0,0,0,2.92-1c2.25-1.09,4.85-3.07,4.91-5.8,0,0,0-.07,0-0.1C53.52,44.56,46.78,44.9,45.69,45Z" fill="#4e4e4e" opacity="0.5" style="mix-blend-mode: multiply"/>
        <path d="M45.69,46.7v3.39c0.57,0,3.23-.11,3.23-1.71S46.26,46.6,45.69,46.7Z" fill="#4e4e4e" opacity="0.5" style="mix-blend-mode: multiply"/>
      </g>
    </g>`;

let defs = '<clipPath id="a"><circle cx="45.17" cy="46.33" r="23.5" fill="none"/></clipPath>';

config.nodeOptions.width = 220;
config.nodeOptions.height = 93;
config.nodeOptions.margin = new NodeMargin(-10); // the template has background shadow and we need to make connectors a little bit longer
//config.tipOverOptions.tipOverChildrenCount = 10000;


// add definitions
config.onBeforeRender = (args: RenderEventArgs) => {
	args.paper.append(<any>Snap.parse(defs));
	args.paper.select('#a').toDefs();
	return null;
};

// use SVG string template
config.onBoxRender = (args: RenderBoxEventArgs) => {
	var tpl = '';

	if (args.node.data.sex && args.node.data.sex === 'F') {
		tpl = nodeTemplateFemale;
	}
	else {
		tpl = nodeTemplateMale;
	}
	// .replace('##x##', args.x + '').replace('##y##', args.y + '')
	return tpl;
};

new OrgChartSvg(config);

