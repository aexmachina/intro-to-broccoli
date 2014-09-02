// Brocfile.js
var concat = require('broccoli-concat');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');
var compileES6 = require('broccoli-jstransform')

var scripts = concat('app/', {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/scripts.js'
});
scripts = compileES6(scripts);
var styles = compileSass(['app/styles'], 'app.scss', '/assets/styles.css');
var public = pickFiles('public', {
  srcDir: '.',
  destDir: '.'
});

module.exports = mergeTrees([scripts, styles, public]);
