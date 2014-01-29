
angular.module('angularInputex')
  .directive('ixField', function ($compile, $templateCache) {

    var getTemplate = function(contentType) {
      var template = 'angular-inputex/directives/templates/' + contentType + '.html';
      return $templateCache.get(template);
    };

    var compile = function(html) {
    };

    var linker = function(scope, element, attrs) {
      var html = getTemplate(scope.field.type),
          input = angular.element(html),
          field = scope.field;

      if (field.required) {
        input.prop('required', true);
      }

      if (field.maxLength) {
        input.prop('maxlength', field.maxLength);
      }

      element.append($compile(input)(scope));
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
