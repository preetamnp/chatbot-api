'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeWit = require('node-wit');

function queryAI(req, res) {
    var client = new _nodeWit.Wit({ accessToken: '6PS4KGWGHEYRMV7FOUED6O4BSQ7ARIW3' });
    console.log(req.body.message);
    client.message(req.body.message, {}).then(function (data) {
        res.send(JSON.stringify(data));
    });
};

exports.default = queryAI;