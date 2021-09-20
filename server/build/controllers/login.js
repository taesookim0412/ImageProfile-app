"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, renderer) {
    app.get("/process_login", function (req, res) {
        res.json({ nice: "Okay" });
    });
    app.get("/*", function (req, res) {
        // @ts-ignore
        return renderer.render(req, res, req.path, req.query);
    });
};
