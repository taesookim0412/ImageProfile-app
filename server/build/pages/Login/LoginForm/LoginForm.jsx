"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var Input_1 = __importDefault(require("./Input"));
function _() { return null; }
exports.default = _;
function LoginForm(_a) {
    var csrfToken = _a.csrfToken;
    // function attemptLogin({csrfToken}: formInput, username:string, password:string){
    //     const response = fetch("process_login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({username,
    //             password,
    //             csrfToken})})
    //     response.then((res) => {
    //         console.log(res);
    //     })
    // }
    return (<form action={"/login/process_login"} method={"POST"} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input_1.default name={"username"} type={"text"} placeholder={"Username"}/>
            <Input_1.default name={"password"} type={"text"} placeholder={"Password"}/>
            <Input_1.default name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"login"}/>
        </form>);
}
exports.LoginForm = LoginForm;
