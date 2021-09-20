"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Input_1 = __importDefault(require("./Input"));
function LoginForm(props) {
    return (<form>
            <Input_1.default type={"text"} placeholder={"Username"}/>
            <Input_1.default type={"text"} placeholder={"Password"}/>
            <Input_1.default type={"hidden"} value={props.csrf}/>
            <input type={"submit"} value={"Login"}/>
        </form>);
}
exports.default = LoginForm;
