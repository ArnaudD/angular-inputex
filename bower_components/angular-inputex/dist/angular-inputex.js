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
  .directive('ixError', function ($translate) {
    return {
      restrict: 'E',
      scope: {
        field: '=ixFieldOptions',
        model: '=ixFormModel',
        error: '=ixError'
      },
      templateUrl: 'angular-inputex/directives/templates/error.html',
      link: function (scope, element, attrs) {
        var field = scope.field,
            error = scope.error,
            keys,
            msg,
            i = 0;

        if (field.messages && field.messages[error]) {
          scope.message = field.messages[error];
        }
        else {
          keys = [
            'ERRORS.FIELDS.'  + field.type + '.' + error,
            'ERRORS.DEFAULTS.' + error,
            'ERRORS.DEFAULT'
          ];

          for (; i < 3; i++) {
            msg = $translate.instant(keys[i], scope);
            if (msg && msg !== '' && msg !== keys[i]) {
              scope.message = msg;
              break;
            }
          }
        }
      }
    };
  });


angular.module('ix')
  .directive('ixField', function ($compile, $templateCache, $timeout) {

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

      msg = angular.element(msg);
      element.append(msg);
      $compile(msg)(scope);

      // TODO : fix this !
      // input.controller('ngModel') is undefined at link time
      $timeout(function () {
        var controller = input.controller('ngModel');
        if (controller)  {
          scope.fieldErrors = controller.$error;
        }
      }, 0);
    };

    return {
      restrict: 'A',
      scope: {
        field: '=ixField',
        model: '=ixModel'
      },
      terminal: true,
      // priority: 1000,
      link: linker
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
  .directive('ixLinkedcombo', function ($compile) {

    return {
      restrict: 'A',
      require: 'ngModel',
      templateUrl: 'angular-inputex/directives/templates/linkedcombo-selects.html',
      scope: {
        field: '=ixLinkedcombo'
      },
      link: function (scope, element, attrs, ngModelCtrl) {
        scope.firstSelectChoices = scope.field.choices;

        scope.$watch('firstSelect', function () {
          var choices = scope.field.choices,
              l = choices.length,
              i = 0;

          for (; i < l; i++) {
            if (choices[i].value === scope.firstSelect) {
              scope.secondSelectChoices = choices[i].choices;
              ngModelCtrl.$setViewValue(undefined);
              return;
            }
          }
        });

        scope.$watch('secondSelect', function () {
          ngModelCtrl.$setViewValue(scope.secondSelect ? [scope.firstSelect, scope.secondSelect] : undefined);
        });

        ngModelCtrl.$parsers.unshift(function (value) {
          // console.log('parse', value);
          return value ? value[0] + '_' +  value[1] : undefined;
        });

        ngModelCtrl.$formatters.unshift(function (value) {
          // console.log('format', value);
          return value ? value.split('_') : undefined;
        });

        ngModelCtrl.$render = function () {
          if (ngModelCtrl.$viewValue) {
            scope.firstSelect  = ngModelCtrl.$viewValue[0];
            scope.secondSelect = ngModelCtrl.$viewValue[1];
          }
          else {
            scope.firstSelect  = undefined;
            scope.secondSelect = undefined;
          }
        };

      }
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
