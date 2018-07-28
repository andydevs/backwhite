/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
import $ from 'jquery'

$(() => {
    // Dropdown handling
    $('.bw-dropdown').each((index, element) => {
        $(element).find('.bw-dropdown-link').click(() => {
            $(element).find('.bw-dropdown-list').slideToggle(200)
        })
    })

    // Menu button handling
    $('.bw-toggle').click(() => {
        $('.bw-content').toggleClass('slided')
        $('.bw-toggle').toggleClass('is-active')
    })
})
