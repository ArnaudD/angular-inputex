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
        module: 'angularInputex.templates',
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
      options: {
        livereload: true
      },
      files: [
        'Gruntfile.js',
        'src/**/*'
      ],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('default', ['jshint:beforeConcat', 'concat', 'html2js', 'jshint:afterConcat', 'uglify']);
  grunt.registerTask('livereload', ['default', 'watch']);

};