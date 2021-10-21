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

module.exports = (app: Application, renderer: NextServer, indexFp: string) => {
    app.post("/login/process_login", async (req, res) => {
        const globalScope = initializeVariablesIfRequired();
        if (!validateUsernameAndPassword(req.body.username, req.body.password) || !globalScope.xCsrfStore.validateCsrfToken(req.body.csrfToken)) {
            return res.status(403).end();
        }
        const newbody = qs.stringify({username: req.body.username});
        try {
            const user_data = await axios.post(`${globalScope.loginHost}/login/login`, newbody);
            if (!await bcrypt.compare(req.body.password, user_data.data.password)) throw new Error();
            delete user_data.data.password;
            user_data.data.token = (await axios.post(`${globalScope.loginHost}/login/generatejwt`, newbody)).data;
            loginCookiesAndRedirect(user_data.data, res, req);
            return res.end();
        }
        catch(e) {
            return res.status(403).end();
        }
    })

    app.post("/login/process_create", async (req, res) => {
        const globalScope = initializeVariablesIfRequired();
        if (!validateUsernameAndPassword(req.body.username, req.body.password) || !globalScope.xCsrfStore.validateCsrfToken(req.body.csrfToken)) {
            return res.status(403).end();
        }
        const newPass = await bcrypt.hash(req.body.password, 10);
        const newbody = qs.stringify({username: req.body.username, password: newPass});
        try {
            const create_request = await axios.post(`${globalScope.loginHost}/login/create`, newbody);
            loginCookiesAndRedirect(create_request.data, res, req);
            return res.end();
        }
        catch(e) {
            return res.status(403).end();
        }
    })
    app.get("/login/login/", (req, res) => {
        return renderer.render(req, res, "/login/login", {});
    });
    app.get("/login/create/", (req, res) => {
        return renderer.render(req, res, "/login/create", {});
    });
    app.get("/login/login", (req, res) => {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/login/create", (req, res) => {
        return renderer.render(req, res, req.path, {});
    });
    app.get("/profile", (req, res) => {
        return res.sendFile(indexFp)
    })
    app.get("/home", (req, res) => {
        return res.sendFile(indexFp)
    })
    app.get("/", (req, res) => {
        return res.sendFile(indexFp)
    })
    app.get("*", (req, res) => {
        return renderer.render(req, res, req.path, req.query as ParsedUrlQuery);
    });
}