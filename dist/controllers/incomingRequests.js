'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestWitAI = require('./requestWitAI');

var _requestWitAI2 = _interopRequireDefault(_requestWitAI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routeIncoming(app) {
  // incoming message Routes
  app.route('/incoming').get(_requestWitAI2.default.queryAI);
};

exports.default = routeIncoming;