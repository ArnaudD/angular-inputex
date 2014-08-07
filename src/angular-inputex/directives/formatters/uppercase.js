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
