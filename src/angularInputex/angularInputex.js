// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angularInputex.config', [])
    .value('angularInputex.config', {
        debug: true
    });

// Modules
angular.module('angularInputex.directives', []);
angular.module('angularInputex.filters', []);
angular.module('angularInputex',
    [
        'angularInputex.config',
        'angularInputex.directives',
        'angularInputex.filters'
    ]);
