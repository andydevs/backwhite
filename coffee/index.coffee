# Backwhite
#
# Backwhite style available as a module
#
# Author:  Anshul Kharbanda
# Created: 7 - 15 - 2018
$ ->
    # Menu button handling
    $('.bw-open').click ->
        $('.bw-back-container').show()
        $('.bw-front').animate(
            {'margin-left': '100%'},
            400,
            'swing')
    $('.bw-close').click ->
        $('.bw-front').animate(
            {'margin-left': '0%'},
            400,
            'swing',
            -> $('.bw-back-container').hide())

    # Dynamic Tables
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
