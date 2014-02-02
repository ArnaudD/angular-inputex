module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    library: grunt.file.readJSON('bower.json'),
    concat: {
      options: {
        separator: ''
      },
      library: {
        src: [
          'src/<%= library.name %>/<%= library.name %>.prefix',
          'src/<%= library.name %>/<%= library.name %>.js',
          'src/<%= library.name %>/directives/**/*.js',
          'src/<%= library.name %>/filters/**/*.js',
          'src/<%= library.name %>/services/**/*.js',
          'src/<%= library.name %>/<%= library.name %>.suffix'
        ],
        dest: 'dist/<%= library.name %>.js'
      }
    },
    uglify: {
      jid: {
        files: {
          'dist/<%= library.name %>.min.js': ['<%= concat.library.dest %>'],
          'dist/<%= library.name %>-templates.min.js': ['dist/<%= library.name %>-templates.js']
        }
      }
    },
    html2js: {
      options: {
        module: 'ix.templates',
        base: 'src'
      },
      main: {
        src: ['src/<%= library.name %>/directives/templates/*.html'],
        dest: 'dist/<%= library.name %>-templates.js'
      }
    },
    jshint: {
      beforeConcat: {
        src: ['gruntfile.js', '<%= library.name %>/**/*.js']
      },
      afterConcat: {
        src: [
          '<%= concat.library.dest %>'
        ]
      },
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          angular: true
        },
        globalstrict: false
      }
    },
    watch: {
      src: {
        files: [
          'Gruntfile.js',
          'src/**/*'
        ],
        tasks: ['default', 'build:gh-pages']
      },
      livereload: {
        files: ['out/built/gh-pages/**/*'],
        options: { livereload: true }
      }
    },
    connect: {
      options: {
        base : 'out/built/gh-pages',
        open: true,
        livereload: true
      },
      server: { options: { keepalive: true } },
      continuous: { options: { keepalive: false } }
    },
  });

  // HACK TO ACCESS TO THE ANGULAR-UI-PUBLISHER
  function fakeTargetTask(prefix){
    return function(){

      if (this.args.length !== 1) return grunt.log.fail('Just give the name of the ' + prefix + ' you want like :\ngrunt ' + prefix + ':bower');

      var done = this.async();
      var spawn = require('child_process').spawn;
      spawn('./node_modules/.bin/gulp', [ prefix, '--branch='+this.args[0] ].concat(grunt.option.flags()), {
        cwd : './node_modules/angular-ui-publisher',
        stdio: 'inherit'
      }).on('close', done);
    };
  }


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['jshint:beforeConcat', 'concat', 'html2js', 'jshint:afterConcat', 'uglify']);
  grunt.registerTask('livereload', ['default', 'watch']);
  grunt.registerTask('serve', [ 'default', 'build:gh-pages', 'connect:continuous', 'watch']);
  grunt.registerTask('build', fakeTargetTask('build'));
  grunt.registerTask('publish', fakeTargetTask('publish'));

};