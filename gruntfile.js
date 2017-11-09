module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
      
    jshint: {
      all: ['gruntfile.js', 'js/*.js'],
      options: {
        force: true,
      }
    },
      
    watch: {
      gruntfile: {
        files: 'gruntfile.js',
        tasks: ['jshint']
      },
      scripts: {
        files: ['scss/*.scss', 'js/*.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
      
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            '*.html',
            'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
    
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint', 'browserSync', 'watch']);
};