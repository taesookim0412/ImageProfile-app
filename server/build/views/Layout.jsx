"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(require("next/head"));
var react_1 = __importDefault(require("react"));
function Layout(props) {
    return (<>
            <head_1.default>
                <title>ImageProfile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </head_1.default>
            {props.children}
        </>);
}
exports.default = Layout;
