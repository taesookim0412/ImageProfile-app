"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeVariablesIfRequired = void 0;
var XCSRFStore_1 = __importDefault(require("../../services/XCSRFStore"));
function initializeVariablesIfRequired() {
    var globalScope = global;
    if (globalScope.initialized === undefined) {
        globalScope.xCsrfStore = XCSRFStore_1.default;
        if (process.env.NODE_ENV === "development") {
            globalScope.loginHost = "http://localhost:5000";
        }
        else {
            globalScope.loginHost = "http://10.0.0.5";
        }
        globalScope.initialized = true;
    }
    return globalScope;
}
exports.initializeVariablesIfRequired = initializeVariablesIfRequired;
