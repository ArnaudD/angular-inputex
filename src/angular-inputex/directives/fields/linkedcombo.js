
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
