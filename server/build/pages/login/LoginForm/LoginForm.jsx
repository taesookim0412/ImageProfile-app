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
exports.LoginForm = void 0;
var Input_1 = __importDefault(require("./Input"));
var ValidationUtils_1 = require("../../../configs/Utilities/ValidationUtils");
var axios_1 = __importDefault(require("axios"));
function _() { return null; }
exports.default = _;
function attemptLogin(e, csrfToken) {
    return __awaiter(this, void 0, void 0, function () {
        var target, username, response;
        return __generator(this, function (_a) {
            e.preventDefault();
            target = e.target;
            username = target.username.value;
            if (!(0, ValidationUtils_1.validateUsernameAndPassword)(username, e.target.password.value)) {
                return [2 /*return*/];
            }
            response = axios_1.default.post("/login/process_login", { username: username, password: e.target.password.value, csrfToken: csrfToken });
            response.catch(function (err) {
                location.reload();
                return;
            });
            response.then(function (_) {
                window.location.href = "/home";
            });
            return [2 /*return*/];
        });
    });
}
function LoginForm(_a) {
    var csrfToken = _a.csrfToken;
    return (<form onSubmit={function (e) { return attemptLogin(e, csrfToken); }} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input_1.default name={"username"} type={"text"} placeholder={"Username"}/>
            <Input_1.default name={"password"} type={"password"} placeholder={"Password"}/>
            <Input_1.default name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"login"}/>
        </form>);
}
exports.LoginForm = LoginForm;
