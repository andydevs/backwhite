/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
import './scss/main.scss'
import $ from 'jquery'

$(() => {
    // Dropdown handling
    $('.bw-dropdown').each((index, element) => {
        $(element).find('.bw-dropdown-link').click(() => {
            $(element).find('.bw-dropdown-list').slideToggle(200)
        })
    })
})
