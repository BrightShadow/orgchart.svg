import {OrgChartConfig} from "./org.chart.config";
import {RenderBoxEventArgs} from "./orgchart.events";

export class OrgChartTemplate {
	public fragment = '';

	public nodeTemplate: string;
	public rightConnectorTemplate: string;
	public leftConnectorTemplate: string;
	public topConnectorTemplate: string;
	public bottomConnectorTemplate: string;
	public horizontalConnectorTemplate: string;
	public definitions: string;

	constructor (private snap: Snap.Paper) {
		this.definitions = '<clipPath id="a"><circle cx="45.17" cy="46.33" r="23.5" fill="none"/></clipPath>';
		this.snap.append(<any>Snap.parse(this.definitions));
		this.snap.select('#a').toDefs();
	}

	private replaceAll(target: string, search: string, replacement: string): string {
		return target.replace(new RegExp(search, 'g'), replacement);
	}

	public collect(args: RenderBoxEventArgs) {
		var tpl = this.replaceAll(this.nodeTemplate, '##x##', args.x + '');
		tpl = this.replaceAll(tpl, '##y##', args.y + '');

		this.fragment += tpl;
	}

	public getTemplateFragment(): any {
		return Snap.parse(this.fragment);
	}
}
