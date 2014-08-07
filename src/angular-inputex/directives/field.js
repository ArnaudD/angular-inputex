
angular.module('ix')
  .directive('ixField', function ($compile, $templateCache) {

    var getTemplate = function (contentType) {
      var template = 'angular-inputex/directives/templates/' + contentType + '.html';
      return $templateCache.get(template);
    };

    var linker = function (scope, element, attrs) {
      var field = scope.field,
          html  = getTemplate(field.type),
          input = angular.element(html);

      element.append(input);
      $compile(input)(scope);
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
