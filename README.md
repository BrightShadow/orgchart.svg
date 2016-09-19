[![Build Status](https://travis-ci.org/BrightShadow/orgchart.svg.svg?branch=travis)](https://travis-ci.org/BrightShadow/orgchart.svg) 

# orgchart.svg
Modern typescript organisational chart in pure SVG.

Currently there is no documentation or API reference. Sorry for that. The documentation will be provided as soon as possible. Now I'm really busy with pure development of this component.

## Demo
You can check the [working DEMO example](http://52.174.5.36/orgchart.svg/ "Working demo example").

- Demo has a custom templates created in Adobe Illustrator - a green personal two-sided card
![Card Front](https://nabuiw-bn1305.files.1drv.com/y3mHIZik-T3MH0Y-1BcAzlBWK6lQPVu8iceP7_1c-6xyumiSK6q5DRTYYkhfgRcQQdpxJ2Odb1cpnLe1w_5JrkrrDHnex1ujeoloRhkze0ZylMW9sDPFIlLEvPkrdFvej0hayp0duPNImLmh7NZiVps9Q?width=256&height=135&cropmode=none "OrgChart box front side")
![Card Back](https://nqbuiw-bn1305.files.1drv.com/y3mI8s7ux3rjC5LXSYGSzOSEx-gg7AN2TqECgG9CJsjaf5cPpB42rbzIFfNxsQFPqs-G2z5Fwr1ZAauoywPxWSYgS3fRcBc_fkHljPr6mtmrjFcBz6csfRqlEQnKxg_Ljf7eIQfvB1lt851i-zcGXznDw?width=256&height=129&cropmode=none "OrgChart box back side")
- Cards can be flipped horizontally by clicking the arrow in the right upper corner
- By cliking the node box you can expand/collapse child nodes if some

### Building
If you want to build it yourself use the steps below:

1. Download the whole repo
2. Install required packages and toolset
	* install node packages first
	```bash
	npm install 
	```
	* install JSPM, typings, gulp
	```bash
	npm install -g jspm typings gulp
	```
	* install gulp locally
	```bash
	npm install gulp
	```	
	* install packages and DefinitelyTyped
	```bash
	jspm install
	typings install
	```	
3. Run `gulp watch` or `gulp serve`	

Enjoy!

## Full custom templating (SVG)
Library supports a very useful feature, **custom SVG string templates**. You can create your own design in Adobe Illustrator or other vector tool, export your node box to SVG and after slight changes adopt it as a template to the OrgChart.svg.

![alt text][example_template]

## Example layouts

I have ambitious plan, to support more complicated trees, where each node in tip-over subtree (those stacked) can have its own subtree. This is possible but not trivial.

Below you can find some example layouts created using OrgChart.svg.

![alt text][example1]

![alt text][example2]

![alt text][example3]

![alt text][example4]

![alt text][example5]



[example_template]: https://ddbsoa-bn1305.files.1drv.com/y3mV6C3lS_MjSQFvuHT4xQH3NYi9-phnei6_Kb5RBP6LpzT9KAlcyXt_MXGp0_7Vf1HWQD8Sxn_Y_5K0WTCEebYe-6kqX6mOwA9cQtfCerqOf_SCtb2mNeLn_Mu2WdbW9uEYAhKJkWWRTAC4GVEfNi4Rg?width=1690&height=954&cropmode=none "Example templated layout using custom SVG code"

[example1]: https://0kqaqw-bn1305.files.1drv.com/y3ms8R9IJvFaGlI71T3-SvSFGRMdKoplP-fbopkpj9maEI0v81dcNKmJADLwBvejPa8GNuXBx97SWqRm6lWSJCEjKH0xhwFuhp_mTPseZs3r-NheC-oVKZoIQeCtGY_V6F1XTAb_lhbu7IxqaRmJrncPnqYrG7ZonXhIWvCevLpmzk?width=1159&height=778&cropmode=none "Example nodes 1"
[example2]: https://zqjiug-bn1305.files.1drv.com/y3mJ5RQmH5Ms2i7AUi_Qz_DSnOEk08ylPzX9Bv1FOsuPLJMYfh44ES_4Por00RsDGKqPINf48OcEx88dxngG3OsI_hwhdt6htMvkj0ioCUH0EXFVbqbljRejtG66n1oFGy_Dfew_sCgeoruiu5-qp3yTnDHC1NN3qIUSPH7U0deSZY?width=1473&height=587&cropmode=none "Example nodes 2"
[example3]: https://bkjiug-bn1305.files.1drv.com/y3mGlf0eI0YcOK1wN8SviGgR5E6amPnOLm9ZnelYbjchm-i9s-JTX9xbUkzPkHKn3HWDpGhDODCKhazibdZS5Oss9dlVm2ZxdTnw6LMwDwoACeA3DaQuuMkgbfACzYTiuWk4dhEaDd70UsRjiTyO4F5f7NTULdOc-OigxWgwZmy4dI?width=589&height=580&cropmode=none "Example nodes 3"
[example4]: https://zkizga-bn1305.files.1drv.com/y3m8lmFguK5fUyf6zk27OTVVX6Ozv2X9VfkDzhnIfDeYG88Y3Dnv7twLY9J1l74QMQbZ4tDUY4z_85JK9327RNC70XULZXRfNezLRNQN2vPk6HrWw0kwedP9qtRzHbjAjo7Qk_sFIQLvFxAY9xp9utkzL7tyPDS6lQydupgAvJrCmQ?width=1052&height=587&cropmode=none "Example nodes 4"
[example5]: https://a6jiug-bn1305.files.1drv.com/y3mSwhgRzEp59e0lkhJoVUP0iR1BAudYqz9CztBeWhhUD7GFZPHn8rDOTmwzVS8Xezw8j9keAJzsJ0uPgld1MjJHhXehAps7AqE5Jh5AjdjWOiAnHLeeIVpoobL06N4YjDi5Cw0T7bt05WwJwKiI1vvaZuVUM9G3bgC6yIqpeoX_gk?width=722&height=579&cropmode=none "Example nodes 5"


## Known issues
Currently known problems regard performance and browsers support for SVG engine and [Snap.svg](http://snapsvg.io/ "Snap.svg library home page") library.
 - Serious performance problems with animations on Mozilla Firefox, due to the poor support of SVG technology  (take a look on [#9](../../issues/9))
 - Problems with performance on Internet Explorer (take a look on [#10](../../issues/10))
 - Problems with some click events handling on OSX Safari (take a look on [#11](../../issues/11))
