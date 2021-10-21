import Input from "./Input";
import {FormEvent, FormEventHandler, useState} from "react";
import {validateUsernameAndPassword} from "../../../configs/Utilities/ValidationUtils";
import axios from "axios";
interface formInput {
    csrfToken: string
}

export default function _(){return null}
async function attemptLogin(e: FormEvent<HTMLFormElement>, csrfToken: string){
    e.preventDefault();
    const target = e.target as any;
    const username = target.username.value;
    if (!validateUsernameAndPassword(username, (e.target as any).password.value)) {
        return;
    }
    // bcrypt does not work on client side
    // const newPass = await bcrypt.hash((e.target as any).password.value, 10);
    const response = axios.post("/login/process_login", {username, password: (e.target as any).password.value, csrfToken});
    response.catch(err => {
        location.reload();
        return;
    });
    response.then(_ => {
        window.location.href = "/home"
    })
}

export function LoginForm({csrfToken}:formInput){
    return (
        <form onSubmit={(e) => attemptLogin(e, csrfToken)} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input name={"username"} type={"text"} placeholder={"Username"}/>
            <Input name={"password"} type={"password"} placeholder={"Password"}/>
            <Input name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"login"}/>
        </form>

    )

}
