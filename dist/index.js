"use strict";

var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_server["default"].listen(3000, function () {
  console.log("Port 3000");
});