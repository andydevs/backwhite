# Backwhite
#
# Backwhite style available as a module
#
# Author:  Anshul Kharbanda
# Created: 7 - 15 - 2018
$ ->
    # Dropdown handling
    $('.bw-dropdown').each ->
        $(this).find('.bw-dropdown-link').click =>
            $(this).find('.bw-dropdown-link').toggleClass 'active'
            $(this).find('.bw-dropdown-list').slideToggle 200

    # Menu button handling
    $('.bw-toggle').click ->
        $('.bw-front').toggleClass 'slided'
        $('.bw-toggle').toggleClass 'active'

    # Fix table lengths
    $('.bw-front table').each ->
        # Find longest
        longest = $(this)
            .find 'th,td'
            .map -> $(this).text()
            .get()
            .reduce (a, b) -> if a.length >= b.length then a else b

        # Get length of longest
        font = $(this).find('td').css 'font'
        canvas = document.createElement 'canvas'
        ctx = canvas.getContext '2d'
        ctx.font = font
        length = ctx.measureText(longest).width

        # Set table cell lengths to length of longest
        $(this).find('th,td').css 'width', length
