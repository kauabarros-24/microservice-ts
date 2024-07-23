"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(function (db) {
    var app = express();
    var port = 8000;
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
    }));
    app.use(express.json());
    app.listen(port, function () {
        console.log("".concat(port));
    });
});
