import {Application} from "express";
import {NextServer} from "next/dist/server/next";
import {ParsedUrlQuery} from "querystring";
import xCsrfStore from "../services/XCSRFStore";
import expressSession from "express-session";

module.exports = (app: Application, renderer: NextServer) => {
    app.post("/process_login", (req, res) => {
        console.log(req.body);
        res.json(req.body);
    })
    app.get("csrf_token", (req, res) => {
        if ((global as any).ct == undefined) (global as any).ct = 0;
        (global as any).ct += 1;
        res.json({token: (global as any).ct});
    })
    app.get("/login", (req, res) => {
        // @ts-ignore
        console.log(global.xCsrfStore)
        console.log((req as any).session['X-CSRF-TOKEN']);
        // O_O
        // return renderer.render(req, res, req.path, {...{...req.query as ParsedUrlQuery}, ...{XCSRFSTORE: xCsrfStore}} as any);
        return renderer.render(req, res, req.path, {});
    });
    app.get("/*", (req, res) => {
        return renderer.render(req, res, req.path, req.query as ParsedUrlQuery);
    })
}