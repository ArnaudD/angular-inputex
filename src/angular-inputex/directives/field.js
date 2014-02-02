
angular.module('ix')
  .directive('ixField', function ($compile, $templateCache) {

    var getTemplate = function(contentType) {
      var template = 'angular-inputex/directives/templates/' + contentType + '.html';
      return $templateCache.get(template);
    };

    var linker = function(scope, element, attrs) {
      var html = getTemplate(scope.field.type),
          input = angular.element(html),
          field = scope.field;

      element.append(input);
      $compile(input)(scope);
    };

    return {
      restrict: 'A',
      scope: {
        field: '=ixField',
        model: '=ixModel'
      },
      link: linker
    };
  });
