import {Application} from "express";
import {NextServer} from "next/dist/server/next";
import {ParsedUrlQuery} from "querystring";
import xCsrfStore from "../services/XCSRFStore";
import axios, {AxiosResponse} from "axios";
import {initializeVariablesIfRequired} from "../configs/Utilities/GlobalUtil";
import qs from "qs";
import bcrypt from "bcrypt";
import {validateUsernameAndPassword} from "../configs/Utilities/ValidationUtils";
import {loginCookiesAndRedirect} from "../configs/Utilities/LoginUtil";

module.exports = (app: Application, renderer: NextServer) => {
    app.post("/login/process_login", async (req, res) => {
        if (!validateUsernameAndPassword(req.body.username, req.body.password)){
            return res.redirect("/login/login");
        }
        const globalScope = initializeVariablesIfRequired();
        const newPass = await bcrypt.hash(req.body.password, 10);
        const pw_response =  axios.post(`${globalScope.loginHost}/login/login`, {username: req.body.username, password: newPass})
        //Status code 500 (request failed);
        pw_response.catch((err) => {
            if (err) {
                //TODO: Handle error with validations
                return res.redirect("/login/login")
            }
        });
        pw_response.then((data) => {
            return loginCookiesAndRedirect(data, res, req);
        })
    })

    app.post("/login/process_create", async (req, res) => {
        if (!validateUsernameAndPassword(req.body.username, req.body.password)){
            return res.redirect("/login/create")
        }
        const globalScope = initializeVariablesIfRequired();
        const newPass = await bcrypt.hash(req.body.password, 10);
        const newbody = qs.stringify({username: req.body.username, password: newPass});
        const create_request = axios.post(`${globalScope.loginHost}/login/create`, newbody);
        create_request.catch(err => {
            if (err){
                return res.redirect("/login/create")
            }
        });
        create_request.then((data) => {
            return loginCookiesAndRedirect(data, res, req);
        });
    })
    app.get("/login/login", (req, res) => {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/login/create", (req, res) => {
        return renderer.render(req, res, req.path, {});
    });
    // app.get("/*", (req, res) => {
    //     return renderer.render(req, res, req.path, req.query as ParsedUrlQuery);
    // })
}