// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ix.config', [])
  .value('ix.config', {
    debug: true
  });

// Modules
angular.module('ix.directives', []);
angular.module('ix.filters', []);
angular.module('ix', [
  'ix.config',
  'ix.directives',
  'ix.filters'
]);