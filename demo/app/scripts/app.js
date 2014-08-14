'use strict';

angular.module('demoApp', [
  'ngSanitize',
  'ngRoute',
  'pascalprecht.translate',
  'ix',
  'ix.templates'
])
.config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'bower_components/angular-inputex/dist/angular-inputex-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en_GB');
});
