/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
$(() => {
    // Dropdown handling
    $('.bw-dropdown').each((_, element) => {
        $(element).find('.bw-dropdown-link').click(() => {
            $(element).find('.bw-dropdown-list').slideToggle(200)
        })
    })

    // Menu button handling
    $('.bw-toggle').click(() => {
        $('.bw-content').toggleClass('is-slided')
        $('.bw-toggle').toggleClass('is-active')
    })

    // Fix table width
    $('table').each((_, table) => {
        // Find longest
        let longest = $(table)
            .find('th,td')
            .map((_, cell) => $(cell).text())
            .get()
            .reduce((a, b) => a.length >= b.length ? a : b)

        // Get length of longest
        let font = $(table).find('td').css('font')
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        ctx.font = font
        let length = ctx.measureText(longest).width

        // Set table cell lengths to length of longest
        $(table).find('th,td').css('width', length)
    })
})
