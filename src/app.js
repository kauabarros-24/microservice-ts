"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
// Defina a porta
var port = 8000;
// Configure o CORS
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}));
app.use(express.json());
// Inicie o servidor
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
