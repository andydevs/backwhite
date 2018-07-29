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
        babel: {
            options: {
                presets: ['@babel/preset-env'],
                sourceMap: true
            },
            dist: {
                src: ['js/**/*.js'],
                dest: 'dist/js/backwhite.js'
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/backwhite.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['babel']
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Register tasks
    grunt.registerTask('build', ['babel', 'sass'])
    grunt.registerTask('build:watch', ['build', 'watch'])
    grunt.registerTask('default', ['build'])
}
