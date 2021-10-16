"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Input(props) {
    function handleChange(setState, newString) {
        setState(newString);
    }
    return (<input type={props.type} name={props.name} value={props.value}/>);
}
exports.default = Input;
