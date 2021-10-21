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
var GlobalUtil_1 = require("../configs/Utilities/GlobalUtil");
var qs_1 = __importDefault(require("qs"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var ValidationUtils_1 = require("../configs/Utilities/ValidationUtils");
var LoginUtil_1 = require("../configs/Utilities/LoginUtil");
module.exports = function (app, renderer, indexFp) {
    app.post("/login/process_login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var globalScope, newbody, user_data, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    globalScope = (0, GlobalUtil_1.initializeVariablesIfRequired)();
                    if (!(0, ValidationUtils_1.validateUsernameAndPassword)(req.body.username, req.body.password) || !globalScope.xCsrfStore.validateCsrfToken(req.body.csrfToken)) {
                        return [2 /*return*/, res.status(403).end()];
                    }
                    newbody = qs_1.default.stringify({ username: req.body.username });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.post(globalScope.loginHost + "/login/login", newbody)];
                case 2:
                    user_data = _b.sent();
                    return [4 /*yield*/, bcrypt_1.default.compare(req.body.password, user_data.data.password)];
                case 3:
                    if (!(_b.sent()))
                        throw new Error();
                    delete user_data.data.password;
                    _a = user_data.data;
                    return [4 /*yield*/, axios_1.default.post(globalScope.loginHost + "/login/generatejwt", newbody)];
                case 4:
                    _a.token = (_b.sent()).data;
                    (0, LoginUtil_1.loginCookiesAndRedirect)(user_data.data, res, req);
                    return [2 /*return*/, res.end()];
                case 5:
                    e_1 = _b.sent();
                    return [2 /*return*/, res.status(403).end()];
                case 6: return [2 /*return*/];
            }
        });
    }); });
    app.post("/login/process_create", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var globalScope, newPass, newbody, create_request, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    globalScope = (0, GlobalUtil_1.initializeVariablesIfRequired)();
                    if (!(0, ValidationUtils_1.validateUsernameAndPassword)(req.body.username, req.body.password) || !globalScope.xCsrfStore.validateCsrfToken(req.body.csrfToken)) {
                        return [2 /*return*/, res.status(403).end()];
                    }
                    return [4 /*yield*/, bcrypt_1.default.hash(req.body.password, 10)];
                case 1:
                    newPass = _a.sent();
                    newbody = qs_1.default.stringify({ username: req.body.username, password: newPass });
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios_1.default.post(globalScope.loginHost + "/login/create", newbody)];
                case 3:
                    create_request = _a.sent();
                    (0, LoginUtil_1.loginCookiesAndRedirect)(create_request.data, res, req);
                    return [2 /*return*/, res.end()];
                case 4:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(403).end()];
                case 5: return [2 /*return*/];
            }
        });
    }); });
    app.get("/login/login/", function (req, res) {
        return renderer.render(req, res, "/login/login", {});
    });
    app.get("/login/create/", function (req, res) {
        return renderer.render(req, res, "/login/create", {});
    });
    app.get("/login/login", function (req, res) {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/login/create", function (req, res) {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/profile", function (req, res) {
        return res.sendFile(indexFp);
    });
    app.get("/home", function (req, res) {
        return res.sendFile(indexFp);
    });
    app.get("/", function (req, res) {
        return res.sendFile(indexFp);
    });
    app.get("*", function (req, res) {
        return renderer.render(req, res, req.path, req.query);
    });
};
