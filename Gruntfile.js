/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
const sass = require('node-sass');

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
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            coffee: {
                files: ['coffee/**/*.coffee'],
                tasks: ['coffee']
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Register tasks
    grunt.registerTask('build', ['coffee', 'sass'])
    grunt.registerTask('build:watch', ['build', 'watch'])
    grunt.registerTask('default', ['build'])
}
