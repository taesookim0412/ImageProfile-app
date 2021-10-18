"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCookiesAndRedirect = void 0;
function loginCookiesAndRedirect(data, res, req) {
    var _a = data.data, token = _a.token, expiresAt = _a.expiresAt;
    res.cookie("username", req.body.username, { httpOnly: true });
    res.cookie("token", token, { httpOnly: true });
    res.cookie("expiresAt", expiresAt, { httpOnly: true });
    return res.redirect("/home");
}
exports.loginCookiesAndRedirect = loginCookiesAndRedirect;
