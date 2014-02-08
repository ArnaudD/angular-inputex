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

    var getTemplate = function (contentType) {
      var template = 'angular-inputex/directives/templates/' + contentType + '.html';
      return $templateCache.get(template);
    };

    var linker = function (scope, element, attrs) {
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


angular.module('ix')
  .directive('ixForm', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        fields: '=ixForm',
        model:  '=ixModel'
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
        capitalize(scope[attrs.ngModel]); // capitalize initial value
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

          var uppercased = inputValue.toUpperCase();

          if (uppercased !== inputValue) {
            modelCtrl.$setViewValue(uppercased);
            modelCtrl.$render();
          }
          
          return uppercased;
        };

        modelCtrl.$parsers.push(uppercase);
        uppercase(scope[attrs.ngModel]); // uppercase initial value
      }
    };
  });
