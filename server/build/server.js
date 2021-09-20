"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var next_1 = __importDefault(require("next"));
var renderer = (0, next_1.default)({ dev: process.env.NODE_ENV !== 'production' });
renderer.prepare().then(function () {
    var routes = require('./controllers/login');
    routes(app, renderer);
    app.listen(8000, function () { return console.log("Listening on port 8000"); });
});
