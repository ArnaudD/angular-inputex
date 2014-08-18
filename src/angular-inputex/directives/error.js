
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
