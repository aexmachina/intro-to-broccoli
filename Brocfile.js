// Brocfile.js
var concat = require('broccoli-concat');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var scripts = concat('app/', {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/scripts.js'
});
var styles = concat('app/styles', {
  inputFiles: ['**/*.css'],
  outputFile: '/assets/styles.css'
});
var public = pickFiles('public', {
  srcDir: '.',
  destDir: '.'
});

module.exports = mergeTrees([scripts, styles, public]);
