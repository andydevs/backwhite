/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
const sass = require('node-sass')

/**
 * Configure grunt
 *
 * @param grunt grunt instance
 */
module.exports = function(grunt) {
    grunt.initConfig({
        coffee: {
            compile: {
                src: ['coffee/**/*.coffee'],
                dest: 'dist/js/backwhite.js'
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                src: ['scss/backwhite.scss'],
                dest: 'dist/css/backwhite.css'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: './node_modules/@fortawesome/fontawesome-free/webfonts',
                src: ['*'],
                dest: 'dist/fonts'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee']
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Register tasks
    grunt.registerTask('build', ['coffee', 'sass', 'copy'])
    grunt.registerTask('build:watch', ['build', 'watch'])
    grunt.registerTask('default', ['build'])
}
