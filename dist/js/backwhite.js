(function() {
  // Backwhite

  // Backwhite style available as a module

  // Author:  Anshul Kharbanda
  // Created: 7 - 15 - 2018
  $(function() {
    // Menu button handling
    $('.bw-open').click(function() {
      $('.bw-back-container').addClass('visible');
      return $('.bw-front').addClass('slided');
    });
    $('.bw-close').click(function() {
      $('.bw-back-container').removeClass('visible');
      return $('.bw-front').removeClass('slided');
    });
    // Dynamic Tables
    return $('.bw-front table').each(function() {
      var canvas, ctx, font, length, longest;
      // Find longest
      longest = $(this).find('th,td').map(function() {
        return $(this).text();
      }).get().reduce(function(a, b) {
        if (a.length >= b.length) {
          return a;
        } else {
          return b;
        }
      });
      // Get length of longest
      font = $(this).find('td').css('font');
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      ctx.font = font;
      length = ctx.measureText(longest).width;
      // Set table cell lengths to length of longest
      return $(this).find('th,td').css('width', length);
    });
  });

}).call(this);
