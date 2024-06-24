"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrar = exports.modificar = exports.logUser = exports.listar = exports.eliminar = exports.crear = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysqldb = require("../config/mysqldb");
var _dotenv = require("dotenv");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
(0, _dotenv.config)();
var mostrar = exports.mostrar = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var rest;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mysqldb.pool.query("call SP_MOSTRARU();");
        case 3:
          rest = _context.sent;
          res.json({
            "respuesta": rest
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            "error": _context.t0
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function mostrar(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var listar = exports.listar = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, rest;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _mysqldb.pool.query("call SP_LISTARU(".concat(id, ");"));
        case 4:
          rest = _context2.sent;
          res.json({
            "respuesta": rest
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.json({
            "error": _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function listar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var crear = exports.crear = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var NOMBRE, APELLIDO, CORREO, DOCUMENTO, CLAVESC, FECHA_NACIMIENTO, CELULAR, hash, CLAVE, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          NOMBRE = req.body.nombre;
          APELLIDO = req.body.apellido;
          CORREO = req.body.correo;
          DOCUMENTO = req.body.documento;
          CLAVESC = req.body.clave;
          FECHA_NACIMIENTO = req.body.fecha_nacimiento;
          CELULAR = req.body.celular;
          _context3.prev = 7;
          _context3.next = 10;
          return _bcrypt["default"].hash(CLAVESC, 2);
        case 10:
          hash = _context3.sent;
          CLAVE = hash;
          _context3.next = 14;
          return _mysqldb.pool.query("CALL SP_CREARU ('".concat(NOMBRE, "', '").concat(APELLIDO, "', '").concat(CORREO, "', '").concat(DOCUMENTO, "', '").concat(CLAVE, "', '").concat(FECHA_NACIMIENTO, "', '").concat(CELULAR, "');"));
        case 14:
          respuesta = _context3.sent;
          res.json({
            "respuesta": respuesta
          });
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](7);
          res.json({
            "error": _context3.t0
          });
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[7, 18]]);
  }));
  return function crear(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificar = exports.modificar = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var ID, NOMBRE, APELLIDO, CORREO, DOCUMENTO, CLAVESC, CLAVE, FECHA_NACIMIENTO, CELULAR, rest;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID = req.body.id;
          NOMBRE = req.body.nombre;
          APELLIDO = req.body.apellido;
          CORREO = req.body.correo;
          DOCUMENTO = req.body.documento;
          CLAVESC = req.body.clave;
          CLAVE = CLAVESC;
          FECHA_NACIMIENTO = req.body.fecha_nacimiento;
          CELULAR = req.body.celular;
          _context4.prev = 9;
          _context4.next = 12;
          return _mysqldb.pool.query("call SP_MODIFICARU('".concat(ID, "' ,'").concat(NOMBRE, "', '").concat(APELLIDO, "', '").concat(CORREO, "', '").concat(DOCUMENTO, "', '").concat(CLAVE, "', '").concat(FECHA_NACIMIENTO, "', '").concat(CELULAR, "');"));
        case 12:
          rest = _context4.sent;
          res.json({
            "respuesta": rest
          });
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](9);
          res.json({
            "error": _context4.t0
          });
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[9, 16]]);
  }));
  return function modificar(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminar = exports.eliminar = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, rest;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysqldb.pool.query("call SP_ELIMINARU(".concat(id, ");"));
        case 4:
          rest = _context5.sent;
          res.json({
            "respuesta": rest
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": _context5.t0
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminar(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logUser = exports.logUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, NOMBRE, CLAVE, hash, respuesta, match, payload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, NOMBRE = _req$body.NOMBRE, CLAVE = _req$body.CLAVE;
          _context6.next = 3;
          return _bcrypt["default"].hash(CLAVE, 2);
        case 3:
          hash = _context6.sent;
          _context6.prev = 4;
          _context6.next = 7;
          return _mysqldb.pool.query("CALL SP_BUSCARU('".concat(NOMBRE, "')"));
        case 7:
          respuesta = _context6.sent;
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 11;
            break;
          }
          error(req, res, 404, "Usuario no existe");
          return _context6.abrupt("return");
        case 11:
          _context6.next = 13;
          return _bcrypt["default"].compare(CLAVE, respuesta[0][0][0].CLAVE);
        case 13:
          match = _context6.sent;
          if (!match) {
            error(req, res, 401, "No está autorizado");
          }
          payload = {
            "usuario": NOMBRE,
            "nombre": respuesta[0][0][0].NOMBRE
          };
          _context6.next = 18;
          return _jsonwebtoken["default"].sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
        case 18:
          token = _context6.sent;
          success(req, res, 200, {
            token: token
          });
          _context6.next = 25;
          break;
        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](4);
          error(req, res, 500, "Error en el servidor, por favor intente de nuevo");
        case 25:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 22]]);
  }));
  return function logUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();