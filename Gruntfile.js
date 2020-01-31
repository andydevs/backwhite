/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
const sass = require('node-sass')
const webpackConfig = require('./webpack.config.js')

/**
 * Configure grunt
 *
 * @param grunt grunt instance
 */
module.exports = function(grunt) {
    grunt.initConfig({
        webpack: {
            config: webpackConfig
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
            webpack: {
                files: ['js/**/*.js'],
                tasks: ['webpack']
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-webpack')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Register tasks
    grunt.registerTask('build', ['webpack', 'sass', 'copy'])
    grunt.registerTask('build:watch', ['build', 'watch'])
    grunt.registerTask('default', ['build'])
}
