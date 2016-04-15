var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  output: outputRoot,
  dtsSrc: [
    './typings/browser/**/*.d.ts',
    './jspm_packages/**/*.d.ts'
  ]
}
