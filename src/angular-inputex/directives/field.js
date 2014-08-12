
angular.module('ix')
  .directive('ixField', function ($compile, $templateCache) {

    var aliases = {
      'text': 'textarea',
      'boolean': 'checkbox',
      'datesplit': 'date'
    };

    var linker = function (scope, element, attrs) {
      var field = scope.field,
          type  = aliases[field.type] || field.type,
          input = $templateCache.get('angular-inputex/directives/templates/' + type + '.html'),
          msg   = $templateCache.get('angular-inputex/directives/templates/messages.html'),
          controller;

      input = angular.element(input);
      element.append(input);
      $compile(input)(scope);

      controller = input.controller('ngModel');
      if (controller)  {
        scope.fieldErrors = controller.$error;
        msg = angular.element(msg);
        element.append(msg);
        $compile(msg)(scope);
      }
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
