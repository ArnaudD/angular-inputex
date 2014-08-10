
angular.module('ix')
  .directive('ixField', function ($compile, $templateCache) {

    var linker = function (scope, element, attrs) {
      var field = scope.field,
          input = $templateCache.get('angular-inputex/directives/templates/' + field.type + '.html'),
          msg   = $templateCache.get('angular-inputex/directives/templates/messages.html');

      input = angular.element(input);
      element.append(input);
      $compile(input)(scope);

      scope.fieldErrors = input.controller('ngModel').$error;
      msg = angular.element(msg);
      element.append(msg);
      $compile(msg)(scope);
    };

    return {
      restrict: 'A',
      scope: {
        field: '=ixField',
        model: '=ixModel'
      },
      terminal: true,
      priority: 1000,
      link: linker
      // compile: function (element, attrs) {
      //   return {
      //     pre: function (scope, element, attrs) {

      //     },
      //     post: function (scope,element, attrs) {

      //     }
      //   }
      // }
    };
  });
