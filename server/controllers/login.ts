import {Application} from "express";
import {NextServer} from "next/dist/server/next";
import {ParsedUrlQuery} from "querystring";
import xCsrfStore from "../services/XCSRFStore";
import axios from "axios";
import {initializeVariablesIfRequired} from "../configs/GlobalUtil";

module.exports = (app: Application, renderer: NextServer) => {
    app.post("/login/process_login", async (req, res) => {
        const globalScope = initializeVariablesIfRequired();
        const pw_response =  axios.post(`${globalScope.loginHost}/login/login`, {username: req.body.username, password: req.body.password})
        //Status code 500 (request failed);
        pw_response.catch((err) => {
            if (err) {
                //TODO: Handle error with validations
                return res.redirect("/login/login")
            }
        });
        pw_response.then((data) => {
            console.log("got data: " + data.data);
        })
    })
    app.post("/login/process_create", async (req, res) => {
        const globalScope = initializeVariablesIfRequired();
        // const newbody = {username: req.body.username, password: req.body.password}
        // .NET will only receive query strings through axios...
        const newbody = `username=${req.body.username}&password=${req.body.password}`
        const create_request = axios.post(`${globalScope.loginHost}/login/create`, newbody)
        create_request.catch(err => {
            if (err){
                return res.redirect("/login/create")
            }
        });
        create_request.then((data) => {
            const { token, expiresAt } = data.data;
            res.cookie("username", req.body.username, {httpOnly:true});
            res.cookie("token", token, {httpOnly:true});
            res.cookie("expiresAt", expiresAt, {httpOnly:true});
            return res.redirect("/login/login");
        });
    })
    app.get("/login", (req, res) => {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/*", (req, res) => {
        return renderer.render(req, res, req.path, req.query as ParsedUrlQuery);
    })
}