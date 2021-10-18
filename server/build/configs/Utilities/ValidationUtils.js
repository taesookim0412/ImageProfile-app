"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsernameAndPassword = void 0;
function validateUsernameAndPassword(username, password) {
    return (username !== undefined && password !== undefined && username.length > 4 && username.length < 20 && password.length > 4 && password.length < 20);
}
exports.validateUsernameAndPassword = validateUsernameAndPassword;
