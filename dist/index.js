'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import routeIncoming from './controllers/incomingRequests'

var app = (0, _express2.default)();

var port = 3000;

console.log("Hello");
// get all todos
app.get('/incoming', function (req, res) {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: 'db'
  });
});
//routeIncoming(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);