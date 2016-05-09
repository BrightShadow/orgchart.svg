[![Build Status](https://travis-ci.org/BrightShadow/orgchart.svg.svg?branch=travis)](https://travis-ci.org/BrightShadow/orgchart.svg) 

# orgchart.svg
Modern typescript organisational chart in pure SVG.

Currently there is no documentation or API reference. Sorry for that. The documentation will be provided as soon as possible. Now I'm really busy with pure development of this component.

## Demo
You can check the [working DEMO example](http://13.80.66.33/orgchart.svg/ "Working demo example") or try to build it yourself using the steps below:

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

## Distribution files
In order to fill all need I've created two types of distribution for the library.

1. System.js module diustribution
	* `orgchart.svg.js`
	* `orgchart.svg.min.js`
	* Example module loading over SystemJS
	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		</head>
		<body>
			<svg id="orgChartSvg"></svg>
			<script src="jspm_packages/system.js"></script>
			<script src="config.js"></script>
			<script src="jspm_packages/github/BrightShadow/orgchart.svg@1.0.0-beta.2.1/orgchart.svg.min.js"></script>
			<script>
				System.import('BrightShadow/orgchart.svg').then(function(m) {
					
				});
			</script>
		</body>
	</html>
	```
	
2. Standalone all-in-one version which you can just reference in your HTML file
	* `orgchart.svg.standalone.js`
	* `orgchart.svg.standalone.min.js`
	* Loading standalone version
	```html
	<!DOCTYPE html>
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		</head>
		<body>
			<svg id="orgChartSvg"></svg>
			<script src="orgchart.svg.standalone.min.js"></script>
		</body>
	</html>
	```
	

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



[example_template]: https://ddbsoa-bn1305.files.1drv.com/y3msAD-TLtOjFEx5eCdJMsc0GFANmOrPbclzcDOJmKfHVKHvTmouLgNckXjlYLffWYEspixaJhgs327jDuTX5QknHrkuWnEBzqCrPFQeudzDNUcHCZtndGttUcrljDnQ_t5ktW19bIiCbUDnkvoY1mTHfv_fc6WZ64FAk6Nl1JhmHA?width=3162&height=896&cropmode=none "Example templated layout using custom SVG code"

[example1]: https://zajiug-bn1305.files.1drv.com/y3mbrSSK3JtxHwyOpCwRJnssCgJwyPOI70sLtI4iB1GZpdhjm_yLArqjCkpiq1LFizL6FlmzjZAZJ7u6K__ihm1YVO_F3XarplXt6uoe1FNq_JaPmsMEY1kZetwWM90PcC1KlQqG99A7cJdJ9uuVFHJuaanLHACD36YUtfvJAAcZEc?width=1078&height=653&cropmode=none "Example nodes 1"
[example2]: https://zqjiug-bn1305.files.1drv.com/y3mJ5RQmH5Ms2i7AUi_Qz_DSnOEk08ylPzX9Bv1FOsuPLJMYfh44ES_4Por00RsDGKqPINf48OcEx88dxngG3OsI_hwhdt6htMvkj0ioCUH0EXFVbqbljRejtG66n1oFGy_Dfew_sCgeoruiu5-qp3yTnDHC1NN3qIUSPH7U0deSZY?width=1473&height=587&cropmode=none "Example nodes 2"
[example3]: https://bkjiug-bn1305.files.1drv.com/y3mGlf0eI0YcOK1wN8SviGgR5E6amPnOLm9ZnelYbjchm-i9s-JTX9xbUkzPkHKn3HWDpGhDODCKhazibdZS5Oss9dlVm2ZxdTnw6LMwDwoACeA3DaQuuMkgbfACzYTiuWk4dhEaDd70UsRjiTyO4F5f7NTULdOc-OigxWgwZmy4dI?width=589&height=580&cropmode=none "Example nodes 3"
[example4]: https://zkizga-bn1305.files.1drv.com/y3m8lmFguK5fUyf6zk27OTVVX6Ozv2X9VfkDzhnIfDeYG88Y3Dnv7twLY9J1l74QMQbZ4tDUY4z_85JK9327RNC70XULZXRfNezLRNQN2vPk6HrWw0kwedP9qtRzHbjAjo7Qk_sFIQLvFxAY9xp9utkzL7tyPDS6lQydupgAvJrCmQ?width=1052&height=587&cropmode=none "Example nodes 4"
[example5]: https://a6jiug-bn1305.files.1drv.com/y3mSwhgRzEp59e0lkhJoVUP0iR1BAudYqz9CztBeWhhUD7GFZPHn8rDOTmwzVS8Xezw8j9keAJzsJ0uPgld1MjJHhXehAps7AqE5Jh5AjdjWOiAnHLeeIVpoobL06N4YjDi5Cw0T7bt05WwJwKiI1vvaZuVUM9G3bgC6yIqpeoX_gk?width=722&height=579&cropmode=none "Example nodes 5"
