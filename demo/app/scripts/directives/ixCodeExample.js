'use strict';

angular.module('demoApp')
  .directive('code', function () {
    return {
      restrict: 'A',
      priority: 2000,
      link: function postLink(scope, element, attrs) {
        element.text(element.html());
        Rainbow.color();
      }
    };
  });
