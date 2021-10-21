"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCookiesAndRedirect = void 0;
function loginCookiesAndRedirect(data, res, req) {
    var username = data.username, token = data.token, expiresAt = data.expiresAt;
    res.cookie("username", req.body.username, { httpOnly: true });
    res.cookie("token", token, { httpOnly: true });
    res.cookie("expiresAt", expiresAt, { httpOnly: true });
}
exports.loginCookiesAndRedirect = loginCookiesAndRedirect;
