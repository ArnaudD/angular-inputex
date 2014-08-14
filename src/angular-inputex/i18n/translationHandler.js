
angular.module('ix').factory('ixTranslationHandler', function ($translate) {

  return function (translationId, uses) {
    console.log(translationId, uses);

    if (/^ERRORS./.test(translationId)) {
      var ns = translationId.split('.');
      if (ns.length > 2) {
        ns.splice(1, 1);
        console.log($translate.instant(ns.join('.')));
        return $translate.instant(ns.join('.'));
      }
    }

    return 'TRANSLATION_MISSING';
  };

});