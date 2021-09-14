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

renderer.prepare().then(() => {
    const routes = require('./controllers/login');
    routes(app, renderer);
    app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
});


