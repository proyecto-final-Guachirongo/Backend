"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.product");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user", _controller.mostrar);
rutaUser.get("/user/:id", _controller.listar);
rutaUser.post("/user", _controller.crear);
rutaUser.put("/user", _controller.modificar);
rutaUser["delete"]("/user", _controller.eliminar);
var _default = exports["default"] = rutaUser;