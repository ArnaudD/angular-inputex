'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angularInputex', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angularInputex');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angularInputex.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('angularInputex.filters')).toBeTruthy();
    });
    

    
    it('should load directives module', function() {
        expect(hasModule('angularInputex.directives')).toBeTruthy();
    });
    

    

});
