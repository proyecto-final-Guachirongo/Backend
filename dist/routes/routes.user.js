"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.user");
var _oauth = require("../middlewares/oauth");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user", _controller.mostrar);
rutaUser.get("/user/:id", _controller.listar);
rutaUser.post("/user", _oauth.verifyToken, _controller.crear);
rutaUser.put("/user", _oauth.verifyToken, _controller.modificar);
rutaUser["delete"]("/user", _oauth.verifyToken, _controller.eliminar);
rutaUser.post("/login", _controller.logUser);
var _default = exports["default"] = rutaUser;