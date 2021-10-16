"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Input_1 = __importDefault(require("./Input"));
function LoginForm(_a) {
    var csrfToken = _a.csrfToken;
    // const [username, setUsername] = useState("abc");
    // const [password, setPassword] = useState("abcd");
    //client sided function for login attempt
    // function attemptLogin({csrf}: formInput, username:string, password:string){
    function attemptLogin(_a, username, password) {
        var csrfToken = _a.csrfToken;
        alert("Okay");
        var response = fetch("process_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password, csrfToken: csrfToken })
        });
        response.then(function (res) {
            console.log(res);
        });
    }
    return (<form action={"process_login"} method={"POST"} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input_1.default name={"username"} type={"text"} placeholder={"Username"}/>
            <Input_1.default name={"password"} type={"text"} placeholder={"Password"}/>
            <Input_1.default name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"Login"}/>
        </form>);
}
exports.default = LoginForm;
