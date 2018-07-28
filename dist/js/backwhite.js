"use strict";

require("hamburgers");

require("./scss/main.scss");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Backwhite
 *
 * Backwhite style available as a module
 *
 * Author:  Anshul Kharbanda
 * Created: 7 - 15 - 2018
 */
(0, _jquery.default)(function () {
  // Dropdown handling
  (0, _jquery.default)('.bw-dropdown').each(function (index, element) {
    (0, _jquery.default)(element).find('.bw-dropdown-link').click(function () {
      (0, _jquery.default)(element).find('.bw-dropdown-list').slideToggle(200);
    });
  }); // Menu button handling

  (0, _jquery.default)('.bw-toggle').click(function () {
    (0, _jquery.default)('.bw-content').toggleClass('slided');
    (0, _jquery.default)('.bw-toggle').toggleClass('is-active');
  });
});
//# sourceMappingURL=backwhite.js.map
