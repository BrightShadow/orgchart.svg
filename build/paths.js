var appRoot = 'src/';
var outputRoot = 'demo/';

module.exports = {
	root: appRoot,
	output: outputRoot,
	source: appRoot + '**/*.ts',
	demoSrc: appRoot + 'demo.html',
	testsSrc: './tests/**/*.ts',
	testsDst: './tests',
	dtsSrc: [
		'./typings/browser/**/*.d.ts',
		'./jspm_packages/**/*.d.ts'
	]
}
