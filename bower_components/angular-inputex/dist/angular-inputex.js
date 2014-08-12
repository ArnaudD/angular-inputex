// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ix.config', [])
  .value('ix.config', {
    debug: true
  });

// Modules
angular.module('ix.directives', []);
angular.module('ix.filters', []);
angular.module('ix', [
  'ix.config',
  'ix.directives',
  'ix.filters'
]);


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


angular.module('ix')
  .directive('ixForm', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        fields: '=ixForm',
        model:  '=ixFormModel'
      },
      templateUrl: 'angular-inputex/directives/templates/form.html'
    };
  });



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


angular.module('ix')
  .directive('ixCapitalize', function ($compile) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, modelCtrl) {
        var capitalize = function (inputValue) {
          if (angular.isUndefined(inputValue)) {
            return;
          }

          var capitalized = inputValue.charAt(0).toUpperCase() +
              inputValue.substring(1);

          if (capitalized !== inputValue) {
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
          }

          return capitalized;
        };

        modelCtrl.$parsers.push(capitalize);
        modelCtrl.$formatters.push(capitalize);
      }
    };
  });

angular.module('ix')
  .directive('ixUppercase', function ($compile) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, modelCtrl) {
        var uppercase = function (inputValue) {
          if (angular.isUndefined(inputValue)) {
            return;
          }

          var uppercased = angular.uppercase(inputValue);

          if (uppercased !== inputValue) {
            modelCtrl.$setViewValue(uppercased);
            modelCtrl.$render();
          }

          return uppercased;
        };

        modelCtrl.$parsers.push(uppercase);
        modelCtrl.$formatters.push(uppercase);
      }
    };
  });
