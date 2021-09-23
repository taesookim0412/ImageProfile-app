// Express
import express, {Application} from 'express';
const app:Application = express();
// BodyParser
import bodyParser from "body-parser"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Services
import xCsrfStore from "./services/XCSRFStore";
(global as any).xCsrfStore = xCsrfStore;

//Next.js
import {NextServer} from "next/dist/server/next";
import next from 'next';
const renderer:NextServer = next({dev: false})

let server_port = process.env.PORT;
const cwd = process.cwd();
//split by either \\ or /
let server_split = cwd.split(/[\\/]/);
const current_directory = server_split[server_split.length - 1]
if (current_directory === "build"){
    server_port = "8000";
}
//middleware
import expressSession from "express-session";
app.use(expressSession({
    secret: 'too lazy to get a key',
    resave: false,
    cookie: {
        maxAge: 600000,
        secure: false
    }
}))

//temporary settings
// process.env.loginHost = "http://localhost:8000/"
process.env.loginHost = ""


app.get("/", (req, res) => {
    res.json({sanity: "check"})
})

renderer.prepare().then(() => {
    const routes = require('./controllers/login');
    routes(app, renderer);
    app.listen(server_port, () => console.log(`Listening on port ${server_port}`));
});


