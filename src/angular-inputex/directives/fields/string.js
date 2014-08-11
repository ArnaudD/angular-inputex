
angular.module('ix')
  .directive('ixTypeString', function ($compile) {

    var propertiesTranslations = {
      required:    ['prop', 'required'],
      minLength:   ['attr', 'ng-minlength'],
      maxLength:   ['attr', 'ng-maxlength'],
      placeholder: ['attr', 'placeholder'],
      uppercase:   ['attr', 'ix-uppercase'],
      capitalize:  ['attr', 'ix-capitalize'],
      typeInvite:  ['attr', 'placeholder'],
      trim:        ['prop', 'ng-trim'],
      name:        ['attr', 'name'],
      validate:    ['attr', 'pattern'],
      value:       ['attr', 'value']
    };

    var compile = function (element, attrs) {

      element.removeAttr('ix-type-string');
      attrs.$set('ngModel', 'model');

      return {
        pre: function preLink(scope, element, attrs, modelCtrl) {
          var field = scope.field || scope.$parent.field;

          for (var key in propertiesTranslations) {
            if (propertiesTranslations.hasOwnProperty(key) && field.hasOwnProperty(key)) {
              var value = propertiesTranslations[key];
              element[value[0]](value[1], field[key]);
            }
          }
        },
        post: function postLink(scope, element, attrs, controller) {
          $compile(element)(scope);
        }
      };
    };

    return {
      restrict: 'A',
      // require: '^ngModel',
      terminal: true,
      priority: 1000,
      compile: compile
    };
  });
