System.config({
    "babelOptions": {
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    "bundles": {
        "orgchart.svg.bundle.js": [
            "connector.type.js",
            "github:adobe-webplatform/Snap.svg@0.4.1.js",
            "github:adobe-webplatform/Snap.svg@0.4.1/dist/snap.svg.js",
            "github:jspm/nodelibs-process@0.1.2.js",
            "github:jspm/nodelibs-process@0.1.2/index.js",
            "node.options.js",
            "npm:es6-promise@3.1.2.js",
            "npm:es6-promise@3.1.2/dist/es6-promise.js",
            "npm:process@0.11.3.js",
            "npm:process@0.11.3/browser.js",
            "npm:snap.svg.zpd@0.0.11.js",
            "npm:snap.svg.zpd@0.0.11/snap.svg.zpd.js",
            "org.chart.config.js",
            "orgchart.svg.js"
        ]
    },
    "defaultJSExtensions": true,
    "map": {
        "babel": "npm:babel-core@5.8.38",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "core-js": "npm:core-js@1.2.6",
        "es6-promise": "npm:es6-promise@3.1.2",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.38": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:core-js@1.2.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:es6-promise@3.1.2": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:snap.svg.zpd@0.0.11": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "snap.svg.zpd": "npm:snap.svg.zpd@0.0.11",
        "snapsvg": "github:adobe-webplatform/Snap.svg@0.4.1"
    },
    "paths": {
        "*": "demo/*",
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    "transpiler": "babel"
});