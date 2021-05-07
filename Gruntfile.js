module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // concatenate files
        concat: {
            css: {
                src: ['css/styles.css', 'css/normalize.css', 'css/animate.css'],
                dest: 'build/css/styles.css',
            },
            js: {
                src: ['js/slider.js', 'js/script02.js'],
                dest: 'build/js/script.js',
            },
        },
        // minify css
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'build/css',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css',
                ext: '.min.css'
              }]
          }
        },
        // Uglify js
        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'build/js/scripts.min.js': ['build/js/script.js','js/wow.min.js']
              }
            }
        },
        // watch changes
        watch: {
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat:js'],
            },
        },

    });

    // Load tasks-plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch');
    

    // Register tasks
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);


};