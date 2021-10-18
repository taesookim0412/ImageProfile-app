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
//Cookies
var cookie_parser_1 = __importDefault(require("cookie-parser"));
app.use((0, cookie_parser_1.default)("This needs a better secret"));
//Configs
var GlobalUtil_1 = require("./configs/Utilities/GlobalUtil");
(0, GlobalUtil_1.initializeVariablesIfRequired)();
var next_1 = __importDefault(require("next"));
var renderer = (0, next_1.default)({ dev: false });
var path_1 = __importDefault(require("path"));
var server_port = process.env.PORT;
var app_dir = "";
var cwd = process.cwd();
//split by either \\ or /
var server_split = cwd.split(/[\\/]/);
var current_directory = server_split[server_split.length - 1];
if (current_directory === "build") {
    server_port = "8000";
    app_dir = path_1.default.join(cwd, "..", "..", "ip-react", "build");
}
else {
    app_dir = path_1.default.join(cwd, "..", "ip-react", "build");
}
//middleware
// import expressSession from "express-session";
// app.use(expressSession({
//     secret: 'too lazy to get a key',
//     resave: false,
//     cookie: {
//         maxAge: 600000,
//         secure: false
//     }
// }))
app.use(express_1.default.static(app_dir));
app.use(express_1.default.static(path_1.default.join(app_dir, "static")));
renderer.prepare().then(function () {
    var routes = require('./controllers/login');
    routes(app, renderer);
    app.use("*", express_1.default.static(app_dir));
    app.listen(server_port, function () { return console.log("Listening on port " + server_port); });
});
