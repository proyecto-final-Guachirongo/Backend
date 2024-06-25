"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.user");
var _oauth = require("../middlewares/oauth");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user", _controllers.mostrar);
rutaUser.get("/user/:id", _controllers.listar);
rutaUser.post("/user", _controllers.crear);
rutaUser.put("/user", _oauth.verifyToken, _controllers.modificar);
rutaUser["delete"]("/user", _oauth.verifyToken, _controllers.eliminar);
rutaUser.post("/login", _controllers.logUser);
var _default = exports["default"] = rutaUser;