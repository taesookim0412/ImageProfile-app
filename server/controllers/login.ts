import {Application} from "express";
import {NextServer} from "next/dist/server/next";

module.exports = (app: Application, renderer: NextServer) => {
    app.get("/process_login", (req, res) => {
        res.json({nice: "Okay"});
    })
    app.get("/*", (req, res) => {
        // @ts-ignore
        return renderer.render(req, res, req.path, req.query);
    })
}