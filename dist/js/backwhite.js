"use strict";

/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
$(function () {
  // Dropdown handling
  $('.bw-dropdown').each(function (_, element) {
    $(element).find('.bw-dropdown-link').click(function () {
      $(element).find('.bw-dropdown-list').slideToggle(200);
    });
  }); // Menu button handling

  $('.bw-toggle').click(function () {
    $('.bw-content').toggleClass('is-slided');
    $('.bw-toggle').toggleClass('is-active');
  }); // Fix table width

  $('table').each(function (_, table) {
    // Find longest
    var longest = $(table).find('th,td').map(function (_, cell) {
      return $(cell).text();
    }).get().reduce(function (a, b) {
      return a.length >= b.length ? a : b;
    }); // Get length of longest

    var font = $(table).find('td').css('font');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = font;
    var length = ctx.measureText(longest).width; // Set table cell lengths to length of longest

    $(table).find('th,td').css('width', length);
  });
});
//# sourceMappingURL=backwhite.js.map
