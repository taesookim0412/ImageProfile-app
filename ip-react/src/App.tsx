import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Profile from "./Profile/Profie";

function App() {
    return (
        <>
            <BrowserRouter>
                <a href={"/login/login"}>Login</a>
                <a href={"/login/create"}>Create Account</a>
                <Link to={"/home"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
                <br/>
                <Switch>
                    <Route exact path={"/"}>
                        Landing page;;
                    </Route>
                    <Route path={"/home"}>
                        Welcome home.
                    </Route>
                    <Route path={"/profile"}>
                        <Profile>Welcome to your profile</Profile>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
