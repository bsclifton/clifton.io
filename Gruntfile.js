module.exports = function(grunt) {

  // Project configuration.
  // Using this as a starting point: http://gruntjs.com/sample-gruntfile
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/handlebars/handlebars.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'js/app.js'
        ],
        dest: 'js/<%= pkg.name %>.js'
      },
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'css/app.css'
        ],
        dest: 'css/<%= pkg.name %>.css'
      }
    },
    uglify: {
      target: {
        files: {
          'js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'css/<%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    'compile-handlebars': {
      target:{
        files: [{
          src: 'hbs/index.hbs',
          dest: 'index.html'
        }],
        templateData: 'hbs/config.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-compile-handlebars');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'compile-handlebars']);
};
