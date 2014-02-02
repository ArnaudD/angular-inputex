
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
