(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/capitalize.html',
    '<input type="text" ix-type-string ix-capitalize  class="form-control" />\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/checkbox.html',
    '<div class="checkbox">\n' +
    '  <label>\n' +
    '    <input type="checkbox" ix-type-checkbox ng-model="model" ng-true-value="{{ field.sentValues[0] || true }}" ng-false-value="{{ field.sentValues[1] || false }}" />\n' +
    '    {{ field.rightLabel }}\n' +
    '  </label>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/date.html',
    '<input\n' +
    '  type="date"\n' +
    '  ng-model="model"\n' +
    '  ng-required="field.required"\n' +
    '  min="{{ field.min || NaN }}"\n' +
    '  max="{{ field.max || NaN }}"\n' +
    '  class="form-control" />\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/email.html',
    '<input type="email" ix-type-string ix-type-email class="form-control"/>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/form.html',
    '\n' +
    '<div class="ix-form form">\n' +
    '\n' +
    '  <div class="ix-field-wrapper form-group" ng-repeat="field in fields" name="subForm">\n' +
    '    <label for="ix-{{ field.name }}" class="control-label">{{ field.label }} <span class="required-asterisk" ng-if="field.required">*</span></label>\n' +
    '    <div ix-field="field" ix-model="model[field.name]"></div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div ng-transclude></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/hidden.html',
    '<input type="hidden" ix-type-string />');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/integer.html',
    '<input type="number" ix-type-string min="{{ field.min || NaN }}" max="{{ field.max || NaN }}" class="form-control"/>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/linkedcombo-selects.html',
    '\n' +
    '  <select class="form-control"\n' +
    '    ng-options="choice.value as choice.label for choice in firstSelectChoices"\n' +
    '    ng-model="firstSelect"\n' +
    '  ></select>\n' +
    '\n' +
    '  <select class="form-control"\n' +
    '    ng-options="choice for choice in secondSelectChoices"\n' +
    '    ng-model="secondSelect"\n' +
    '    name="{{ field.name }}"\n' +
    '    ng-show="firstSelect"\n' +
    '  ></select>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/linkedcombo.html',
    '<div ng-model="model" ix-linkedcombo="field" required="{{ field.required }}"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/messages.html',
    '<ul class="error-messages">\n' +
    '  <li ng-repeat="(key, value) in fieldErrors" ng-if="value">{{ key }}</li>\n' +
    '</ul>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/password.html',
    '<input type="password" ix-type-string class="form-control"/>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/radio.html',
    '<div class="radio" ng-repeat="choice in field.choices">\n' +
    '  <label>\n' +
    '    <input type="radio" name="{{ field.name }}" ng-model="$parent.model" value="{{ choice.value }}">\n' +
    '    {{ choice.label }}\n' +
    '  </label>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/select.html',
    '<select class="form-control"\n' +
    '  ng-options="choice.value as choice.label for choice in field.choices"\n' +
    '  ng-required="field.required"\n' +
    '  ng-model="model"\n' +
    '  name="{{ field.name }}"\n' +
    '></select>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/string.html',
    '<input type="text" ix-type-string class="form-control"/>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/textarea.html',
    '<textarea ix-type-string rows="{{ field.rows }}" class="form-control"></textarea>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/uppercase.html',
    '<input type="text" ix-type-string ix-uppercase class="form-control"/>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/url.html',
    '<input type="url" ix-type-string ix-trim />');
}]);
})();
