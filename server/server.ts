// Express
import express, {Application} from 'express';
const app:Application = express();
// BodyParser
import bodyParser from "body-parser"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Next.js
import {NextServer} from "next/dist/server/next";
import next from 'next';
const renderer:NextServer = next({dev: false})


import path from "path";
let server_port = process.env.PORT;
const cwd = process.cwd();
//split by either \\ or /
let server_split = cwd.split(/[\\/]/);
const current_directory = server_split[server_split.length - 1]
console.log(current_directory)
if (current_directory === "build"){
    server_port = "8000";
}


renderer.prepare().then(() => {
    const routes = require('./controllers/login');
    routes(app, renderer);
    app.listen(server_port, () => console.log(`Listening on port ${server_port}`));
});


