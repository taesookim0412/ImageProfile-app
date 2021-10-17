"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var GlobalUtil_1 = require("../configs/GlobalUtil");
module.exports = function (app, renderer) {
    app.post("/login/process_login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var globalScope, pw_response;
        return __generator(this, function (_a) {
            globalScope = (0, GlobalUtil_1.initializeVariablesIfRequired)();
            pw_response = axios_1.default.post(globalScope.loginHost + "/login/login", { username: req.body.username, password: req.body.password });
            //Status code 500 (request failed);
            pw_response.catch(function (err) {
                if (err) {
                    //TODO: Handle error with validations
                    return res.redirect("/login/login");
                }
            });
            pw_response.then(function (data) {
                console.log("got data: " + data.data);
            });
            return [2 /*return*/];
        });
    }); });
    app.post("/login/process_create", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var globalScope, newbody, create_request;
        return __generator(this, function (_a) {
            globalScope = (0, GlobalUtil_1.initializeVariablesIfRequired)();
            newbody = "username=" + req.body.username + "&password=" + req.body.password;
            create_request = axios_1.default.post(globalScope.loginHost + "/login/create", newbody);
            create_request.catch(function (err) {
                if (err) {
                    return res.redirect("/login/create");
                }
            });
            create_request.then(function (data) {
                var _a = data.data, token = _a.token, expiresAt = _a.expiresAt;
                res.cookie("username", req.body.username, { httpOnly: true });
                res.cookie("token", token, { httpOnly: true });
                res.cookie("expiresAt", expiresAt, { httpOnly: true });
                return res.redirect("/login/login");
            });
            return [2 /*return*/];
        });
    }); });
    app.get("/login", function (req, res) {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/*", function (req, res) {
        return renderer.render(req, res, req.path, req.query);
    });
};
