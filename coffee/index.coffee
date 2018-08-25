# Backwhite
#
# Backwhite style available as a module
#
# Author:  Anshul Kharbanda
# Created: 7 - 15 - 2018
$ ->
    # Dropdown handling
    $('.bw-dropdown').each (_, element) ->
        $(element).find('.bw-dropdown-link').click ->
            $(element).find('.bw-dropdown-list').slideToggle 200

    # Menu button handling
    $('.bw-toggle').click ->
        $('.bw-content').toggleClass 'slided'
        $('.bw-toggle').toggleClass 'active'

    # Fix table lengths
    $('table').each (_, table) ->
        # Find longest
        longest = $(table)
            .find 'th,td'
            .map (_, cell) -> $(cell).text()
            .get()
            .reduce (a, b) -> if a.length >= b.length then a else b

        # Get length of longest
        font = $(table).find('td').css 'font'
        canvas = document.createElement 'canvas'
        ctx = canvas.getContext '2d'
        ctx.font = font
        length = ctx.measureText(longest).width

        # Set table cell lengths to length of longest
        $(table).find('th,td').css 'width', length
