module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          { expand: true, src: ['i/**'], dest: 'dist/' },
          { expand: true, src: ['robots.txt'], dest: 'dist/' },
          { expand: true, src: ['web.config'], dest: 'dist/' }
        ]
      }
    },
    concat: {
      js: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/handlebars/handlebars.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'js/app.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'css/app.css'
        ],
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
    uglify: {
      target: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    clean: ["<%= concat.js.dest %>", "<%= concat.css.dest %>"],
    'compile-handlebars': {
      target:{
        files: [{
          src: 'hbs/index.hbs',
          dest: 'dist/index.html'
        }],
        templateData: 'hbs/config.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-compile-handlebars');

  grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin', 'clean', 'compile-handlebars']);
};
