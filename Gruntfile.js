module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          { expand: true, src: ['i/**'], dest: 'dist/' },
          { expand: true, src: ['robots.txt'], dest: 'dist/' },
          { expand: true, src: ['htaccess'], dest: 'dist/' },
          { expand: true, flatten: true, src: ['favicon/favicon.ico'], dest: 'dist/' },
          { expand: true, flatten: true, src: ['node_modules/bootstrap/dist/fonts/*'], dest: 'dist/fonts/' },
          { expand: true, flatten: true, src: ['node_modules/font-awesome/fonts/*'], dest: 'dist/fonts/' },
          { src: 'html/badssl.html', dest: 'dist/browser/badssl.html' },
          { src: 'html/keydown.html', dest: 'dist/browser/keydown.html' }
        ]
      }
    },
    uglify: {
      target: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'js/app.js'
          ]
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css',
            'css/app.css'
          ]
        }
      }
    },

    'compile-handlebars': {
      target: {
        templateData: 'hbs/config.json',
        helpers: ['hbs/helpers/*.js'],
        globals: ['secret.json'],
        partials: ['hbs/partials/*.hbs'],
        files: [
          { src: 'hbs/index.hbs', dest: 'dist/index.html' },
          { src: 'hbs/learn.hbs', dest: 'dist/learn/index.html' },
          { src: 'hbs/about.hbs', dest: 'dist/about/index.html' },
          { src: 'hbs/email.php.hbs', dest: 'dist/about/email.php' },
          { src: 'hbs/ref-git.hbs', dest: 'dist/reference/git/index.html' }
        ]
      }
    },
    secret: grunt.file.readJSON('secret.json'),
    environments: {
      options: {
        local_path: 'dist',
        current_symlink: 'clifton.io',
        deploy_path: '/srv',
        release_root: 'clifton.io-releases'
      },
      production: {
        options: {
          host: '<%= secret.production.host %>',
          username: '<%= secret.production.username %>',
          privateKey: require('fs').readFileSync('/Users/clifton/.ssh/id_rsa'),
          port: '<%= secret.production.port %>',
          releases_to_keep: '10'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-compile-handlebars')
  grunt.loadNpmTasks('grunt-ssh-deploy')

  grunt.registerTask('default', ['clean', 'copy', 'uglify', 'cssmin', 'compile-handlebars'])
  grunt.registerTask('deploy', ['default', 'ssh_deploy:production'])
}
