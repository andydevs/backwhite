(function() {
  // Backwhite

  // Backwhite style available as a module

  // Author:  Anshul Kharbanda
  // Created: 7 - 15 - 2018
  $(function() {
    // Dropdown handling
    $('.bw-dropdown').each(function(_, element) {
      return $(element).find('.bw-dropdown-link').click(function() {
        return $(element).find('.bw-dropdown-list').slideToggle(200);
      });
    });
    // Menu button handling
    $('.bw-toggle').click(function() {
      $('.bw-content').toggleClass('is-slided');
      return $('.bw-toggle').toggleClass('is-active');
    });
    // Fix table lengths
    return $('table').each(function(_, table) {
      var canvas, ctx, font, length, longest;
      // Find longest
      longest = $(table).find('th,td').map(function(_, cell) {
        return $(cell).text();
      }).get().reduce(function(a, b) {
        var ref;
        return (ref = a.length >= b.length) != null ? ref : {
          a: b
        };
      });
      // Get length of longest
      font = $(table).find('td').css('font');
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      ctx.font = font;
      length = ctx.measureText(longest).width;
      // Set table cell lengths to length of longest
      return $(table).find('th,td').css('width', length);
    });
  });

}).call(this);
