"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _server = _interopRequireDefault(require("./server"));
_server["default"].listen(3000, function () {
  console.log("Port 3000");
});