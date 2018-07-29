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
  $('.bw-dropdown').each(function (index, element) {
    $(element).find('.bw-dropdown-link').click(function () {
      $(element).find('.bw-dropdown-list').slideToggle(200);
    });
  }); // Menu button handling

  $('.bw-toggle').click(function () {
    $('.bw-content').toggleClass('is-slided');
    $('.bw-toggle').toggleClass('is-active');
  });
});
//# sourceMappingURL=backwhite.js.map
