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
        // copy: {
        //     main: {
        //         files: [
        //             {
        //                 expand: true,
        //                 cwd: './node_modules/jquery/dist',
        //                 src: 'jquery.min.js',
        //                 dest: 'docs/'
        //             },
        //             {
        //                 expand: true,
        //                 cwd: './dist/js',
        //                 src: ['backwhite.js*'],
        //                 dest: 'docs/'
        //             },
        //             {
        //                 expand: true,
        //                 cwd: './dist/css',
        //                 src: ['backwhite.css*'],
        //                 dest: 'docs/'
        //             }
        //         ]
        //     }
        // },
        watch: {
            options: {
                livereload: true
            },
            files: {
                files: ['scss/**/*.scss', 'coffee/**/*.coffee'],
                tasks: ['build']
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Register tasks
    grunt.registerTask('build', ['coffee', 'sass'])
    grunt.registerTask('build:watch', ['build', 'watch'])
    grunt.registerTask('default', ['build'])
}
