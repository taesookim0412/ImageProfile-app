"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, renderer) {
    app.get("/process_login", function (req, res) {
        res.json({ nice: "Okay" });
    });
    app.get("/login", function (req, res) {
        console.log("?");
        return renderer.render(req, res, req.path, {});
    });
};
