
angular.module('angularInputex')
  .directive('ixForm', function () {
    return {
      restrict: 'A',
      scope: {
        fields: '=ixForm',
        model:  '=ixModel'
      },
      templateUrl: 'angular-inputex/directives/templates/form.html'
    };
  });
