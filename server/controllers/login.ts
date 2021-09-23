import {Application} from "express";
import {NextServer} from "next/dist/server/next";
import {ParsedUrlQuery} from "querystring";
import xCsrfStore from "../services/XCSRFStore";
import expressSession from "express-session";
import axios from "axios";

module.exports = (app: Application, renderer: NextServer) => {
    app.post("/process_login", async (req, res) => {
        console.log(`${process.env.loginhost as string}/login/login`)
        console.log(req.body);
        const pw_response =  axios.post(`${process.env.loginhost as string}/login/login`, req.body)
        //Status code 500 (request failed);
        pw_response.catch((err) => {
            if (err) {
                //TODO: Handle error with validations
                return res.redirect("/login")
            }
        });
        pw_response.then((data) => {
            console.log("got data: " + data);
        })
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