/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                src: ['js/**/*.js'],
                dest: 'dist/js/backwhite.js'
            }
        },
        sass: {
            dist: {
                src: 'scss/main.scss',
                dest: 'dist/css/backwhite.css'
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-node-sass')

    // Default task
    grunt.registerTask('default', ['babel', 'sass'])
}
