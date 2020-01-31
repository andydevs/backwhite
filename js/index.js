/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
import $ from 'jquery';

$(() => {
    // Menu button handling
    $('.bw-open').click(() => {
        $('.bw-back-container').show()
        $('.bw-front').animate(
            {'margin-left': '100%'},
            400, 'swing')
    })
    $('.bw-close').click(() => {
        $('.bw-front').animate(
            {'margin-left': '0%'},
            400, 'swing',
            () => $('.bw-back-container').hide())
    })

    // Dynamic Tables
    $('.bw-front table').each(() => {
        // Find longest
        let longest = $(this)
            .find('th,td')
            .map(() => $(this).text())
            .get()
            .reduce((a, b) => a.length >= b.length ? a : b, -Infinity)

        // Get length of longest
        let font = $(this).find('td').css('font')
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        ctx.font = font
        let length = ctx.measureText(longest).width

        // Set table cell lengths to length of longest
        $(this).find('th,td').css('width', length)
    })
})