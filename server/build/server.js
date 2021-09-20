"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// BodyParser
var body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var next_1 = __importDefault(require("next"));
var renderer = (0, next_1.default)({ dev: false });
var server_port = process.env.PORT;
var cwd = process.cwd();
//split by either \\ or /
var server_split = cwd.split(/[\\/]/);
var current_directory = server_split[server_split.length - 1];
console.log(current_directory);
if (current_directory === "build") {
    server_port = "8000";
}
renderer.prepare().then(function () {
    var routes = require('./controllers/login');
    routes(app, renderer);
    app.listen(server_port, function () { return console.log("Listening on port " + server_port); });
});