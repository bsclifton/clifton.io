module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          { expand: true, src: ['i/**'], dest: 'dist/' },
          { expand: true, src: ['robots.txt'], dest: 'dist/' },
          { expand: true, src: ['htaccess'], dest: 'dist/' }
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
    clean: {
      dist: [ "dist/" ],
      'combined-files': [
        "<%= concat.js.dest %>",
        "<%= concat.css.dest %>"
      ],
    },
    'compile-handlebars': {
      target:{
        files: [{
          src: 'hbs/index.hbs',
          dest: 'dist/index.html'
        }],
        templateData: 'hbs/config.json'
      }
    },
    secret: grunt.file.readJSON('secret.json'),
    environments: {
      options: {
        local_path: 'dist',
        current_symlink: 'clifton.io',
        deploy_path: '/home/<%= secret.production.username %>',
        release_root: 'clifton.io-releases'
      },
      production: {
        options: {
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          password: '<%= secret.production.password %>',
          port: '<%= secret.production.port %>',
          releases_to_keep: '10',
          after_deploy: 'cd /home/<%= secret.production.username %>/clifton.io && mv htaccess .htaccess'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-ssh-deploy');

  grunt.registerTask('default', ['clean:dist', 'copy', 'concat', 'uglify', 'cssmin', 'clean:combined-files', 'compile-handlebars']);
  grunt.registerTask('deploy', ['default', 'ssh_deploy:production']);
};
