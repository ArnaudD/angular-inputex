
angular.module('ix')
  .directive('ixCapitalize', function ($compile) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
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
