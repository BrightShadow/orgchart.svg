System.config({
	defaultJSExtensions: true,
	transpiler: "none",
	paths: {
		"*": "demo/*",
		"npm:*": "jspm_packages/npm/*"
	},

	map: {
		"d3": "npm:d3@3.5.16"
	}
});
