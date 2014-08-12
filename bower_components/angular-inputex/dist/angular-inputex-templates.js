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
    '<div ng-repeat="choice in field.choices" ng-form name="checkboxSubForm">\n' +
    '  <input type="checkbox" ix-type-checkbox id="todo" value="choice.value"/>\n' +
    '  <label for="todo">{{ choice.label }}</label>\n' +
    '</div>');
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
    '  <div class="ix-field-wrapper form-group" ng-repeat="field in fields" ng-form name="subForm">\n' +
    '    <label for="ix-{{ field.name }}" class="control-label">{{ field.label }}</label>\n' +
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
    '<select\n' +
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
    '<textarea ix-type-string class="form-control"></textarea>\n' +
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
