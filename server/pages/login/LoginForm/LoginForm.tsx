import Input from "./Input";
import {FormEvent, useState} from "react";
interface formInput {
    csrfToken: string
}

export default function _(){return null}

export function LoginForm({csrfToken}:formInput){
    // function attemptLogin({csrfToken}: formInput, username:string, password:string){
    //     const response = fetch("process_login", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({username,
    //             password,
    //             csrfToken})})
    //     response.then((res) => {
    //         console.log(res);
    //     })
    // }
    return (
        <form action={"/login/process_login"} method={"POST"} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input name={"username"} type={"text"} placeholder={"Username"}/>
            <Input name={"password"} type={"text"} placeholder={"Password"}/>
            <Input name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"login"}/>
        </form>

    )

}
