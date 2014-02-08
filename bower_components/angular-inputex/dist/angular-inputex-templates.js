(function(module) {
try {
  module = angular.module('ix.templates');
} catch (e) {
  module = angular.module('ix.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-inputex/directives/templates/capitalize.html',
    '<input type="text" ix-type-string ix-capitalize />');
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
    '<input type="email" ix-type-string ix-type-email />');
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
    '<div class="ix-form">\n' +
    '\n' +
    '  <div class="ix-field-wrapper form-group" ng-repeat="field in fields" ng-form name="subForm">\n' +
    '    <label for="ix-{{ field.name }}">{{ field.label }}</label>\n' +
    '    <div ix-field="field" ix-model="model[field.name]"></div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<div ng-transclude></div>');
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
  $templateCache.put('angular-inputex/directives/templates/password.html',
    '<input type="password" ix-type-string />');
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
    '<input type="text" ix-type-string/>');
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
    '<textarea ix-type-string></textarea>');
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
    '<input type="text" ix-type-string ix-uppercase />');
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
