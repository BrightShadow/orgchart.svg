[![Build Status](https://travis-ci.org/BrightShadow/orgchart.svg.svg?branch=travis)](https://travis-ci.org/BrightShadow/orgchart.svg) 

# orgchart.svg
Modern typescript organisational chart in pure SVG.

Currently there is no documentation or API reference. Sorry for that. The documentation will be provided as soon as possible. Now I'm really busy with pure development of this component.

## Demo
You can check the [working DEMO example](http://52.174.5.36/orgchart.svg/ "Working demo example").

- Demo has a custom templates created in Adobe Illustrator - a green personal two-sided card
![Card Front](https://zarqzg-bn1305.files.1drv.com/y3mjsqEDZDQAEEZXBPiPAWN3h5HkRm_xP7icWd0aj7e8SZNynw5bvEVQJATEnYIyQG0ZvtkjZLqNRydFy-KsCcOjxFURKZ1v1lkiM1K_O7hgPi0tdAZz5YngmnQzqPZWXKCN-7MIRhwSPeTh-8Ojhu2vlG_mKffgF5RaZqSy0JIx5I?width=518&height=518&cropmode=none "OrgChart box front side")
![Card Back](https://zkrqzg-bn1305.files.1drv.com/y3m1vsnbTNt0xe9dyl7dhkmiuUp2hucxDXZe7FgshS9pkghjgLt3hb519gNlpGmaR0oLdk2EaVzjnDiFmM0KbsNJoj-F19GlBKs6IVA_-lg48MKAj706i1LxjFGvDd9Ph9U3hQtuUzMrRMQ66t9ThJqj_ugu8l0aV4tngNr0JLl5PA?width=518&height=518&cropmode=none "OrgChart box back side")
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
![alt text][example_template_2]

## Example layouts

I have ambitious plan, to support more complicated trees, where each node in tip-over subtree (those stacked) can have its own subtree. This is possible but not trivial.

Below you can find some example layouts created using OrgChart.svg.

![alt text][example1]

![alt text][example2]

![alt text][example3]



[example_template]: https://z6rqzg-bn1305.files.1drv.com/y3m7vBAFP67i9g6fTx0r4NBupWmBvD-jZayVfrIPNTdGsEBLKoBeI3HJgiAflCN8knq5iXx4TZ1_KkboG3hoWC3iPHCqmBB8zA8dmMdUOM5IhTkLF9V8-8X3BzNQZ-cIjnD0Q6uL4mhAvQWYbeTY3TlazSzuX0vUSb5HqGczPZvDO0?width=661&height=328&cropmode=none "Example templated layout using custom SVG code"

[example_template_2]: https://zqrqzg-bn1305.files.1drv.com/y3mTIcmF1Zwc6Jl4CJWOooTpHKblOT-RRRYpDpGUuvufDK8s0GtyDBWz2a3ularIuDYJKFhFzUbIVqb9DYfnWoVUAYkV0d2hSzGY3YnEj6xXhaxlq_8jRaihhvwG8OtOrqjAFhNspoRdJphwd02EDaLHjD44qaY52sN0C0iQqjkY5g?width=699&height=371&cropmode=none "Example templated layout using custom SVG code"

[example1]: https://0kqaqw-bn1305.files.1drv.com/y3ms8R9IJvFaGlI71T3-SvSFGRMdKoplP-fbopkpj9maEI0v81dcNKmJADLwBvejPa8GNuXBx97SWqRm6lWSJCEjKH0xhwFuhp_mTPseZs3r-NheC-oVKZoIQeCtGY_V6F1XTAb_lhbu7IxqaRmJrncPnqYrG7ZonXhIWvCevLpmzk?width=1159&height=778&cropmode=none "Example nodes 1"
[example2]: https://0aqaqw-bn1305.files.1drv.com/y3m0FwFeJBYzLpIzceEdhlHUUxxQcW9b3hMHazI51qrgHw1jYKBnNId7u0NUwqPe8PjPbxKQU9D6jbbo49PgvT1mnfbFySnJdix0dJBrH51E4NdJE5U9M0vxMWKe4Zmr__mkGipdgSOSzMLTfUe8oyuY7YtKuwOg8GGJEatXDTNhSk?width=875&height=894&cropmode=none "Example nodes 2"
[example3]: https://06qaqw-bn1305.files.1drv.com/y3m-FNisILqqSzdS415qTjUvrY0-W9zIoCf36oQe2mP8P4iGz4x5DJ8iaEkDUi-JujvVTMv-_hPWnYmWjXWyMcsKqoGUwToMSfWH_N8SHkevmwMWzYlB7EVqHCFw_7yvWf-RBlmrm4aQ5mCkfVeh2jOJJU6CR3Gna9_1HhyArI3Rp8?width=1138&height=929&cropmode=none "Example nodes 3"


## Known issues
Currently known problems regard performance and browsers support for SVG engine and [Snap.svg](http://snapsvg.io/ "Snap.svg library home page") library.
 - Serious performance problems with animations on Mozilla Firefox, due to the poor support of SVG technology  (take a look on [#9](../../issues/9))
 - Problems with performance on Internet Explorer (take a look on [#10](../../issues/10))
 - Problems with some click events handling on OSX Safari (take a look on [#11](../../issues/11))
