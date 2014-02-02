/* jshint node:true */

'use strict';

var fs = require('fs');

module.exports = function() {
  return {
    humaName: 'Angular InputEx',
    repoName: 'angular-inputex',
    inlineHTML: fs.readFileSync(__dirname + '/demo/demos.html')
  };
};