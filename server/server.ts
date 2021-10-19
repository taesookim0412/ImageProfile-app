// Express
import express, {Application} from 'express';
const app:Application = express();
// BodyParser
import bodyParser from "body-parser"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//Cookies
import cookieParser, {CookieParseOptions} from "cookie-parser";
app.use(cookieParser("This needs a better secret"));
//Configs
import {initializeVariablesIfRequired} from "./configs/Utilities/GlobalUtil";
initializeVariablesIfRequired();

//Next.js
import {NextServer} from "next/dist/server/next";
import next from 'next';
const renderer:NextServer = next({dev: false})

import path from "path"

let server_port = process.env.PORT;
let app_dir = "";
const cwd = process.cwd();
//split by either \\ or /
let server_split = cwd.split(/[\\/]/);
const current_directory = server_split[server_split.length - 1]
if (current_directory === "build"){
    server_port = "8000";
    app_dir = path.join(cwd, "..", "..", "ip-react", "build")
}
else{
    app_dir = path.join(cwd, "..", "ip-react", "build")
}
//middleware
// import expressSession from "express-session";
// app.use(expressSession({
//     secret: 'too lazy to get a key',
//     resave: false,
//     cookie: {
//         maxAge: 600000,
//         secure: false
//     }
// }))

const indexFp = path.join(app_dir, "index.html")

app.use(express.static(app_dir));
app.use(express.static(path.join(app_dir, "static")));

renderer.prepare().then(() => {
    const routes = require('./controllers/login');
    // app.use("*", express.static(app_dir))
    routes(app, renderer, indexFp);
    app.listen(server_port, () => console.log(`Listening on port ${server_port}`));
});


