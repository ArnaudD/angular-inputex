
angular.module('ix')
  .directive('ixTypeString', function ($compile) {

    var propertiesTranslations = {
      required:    ['prop', 'required'],
      minLength:   ['attr', 'ng-minlength'],
      maxLength:   ['attr', 'ng-maxlength'],
      placeholder: ['attr', 'placeholder'],
      typeInvite:  ['attr', 'placeholder'],
      trim:        ['prop', 'ng-trim'],
      name:        ['attr', 'name'],
      validate:    ['attr', 'pattern'],
      value:       ['attr', 'value']
    };

    var compile = function (element, attrs) {

      element.removeAttr('ix-type-string');

      return {
        pre: function preLink(scope, element, attrs, controller) {
          var field = scope.field || scope.$parent.field;

          for (var key in propertiesTranslations) {
            if (propertiesTranslations.hasOwnProperty(key) && field.hasOwnProperty(key)) {
              var value = propertiesTranslations[key];
              element[value[0]](value[1], field[key]);
            }
          }
                    
          if (scope.model) {
            element.attr('value', scope.model);
          }
          else if (field.hasOwnProperty('value')) {
            scope.model = field.value;
          }

          attrs.$set('ng-model', 'model');
        },
        post: function postLink(scope, element, attrs, controller) {
          $compile(element)(scope);
        }
      };
    };

    return {
      restrict: 'A',
      terminal: true,
      priority: 1000,
      compile: compile
    };
  });
