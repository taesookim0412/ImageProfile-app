import Input from "./Input";
import {FormEvent, useState} from "react";

interface formInput {
    csrfToken: string
}



export default function LoginForm({csrfToken}:formInput){
    // const [username, setUsername] = useState("abc");
    // const [password, setPassword] = useState("abcd");
    //client sided function for login attempt
    // function attemptLogin({csrf}: formInput, username:string, password:string){
    function attemptLogin({csrfToken}: formInput, username:string, password:string){

        alert("Okay");
        const response = fetch("process_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,
                password,
                csrfToken})})
        response.then((res) => {
            console.log(res);
        })
    }
    return (
        <form action={"process_login"} method={"POST"} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input name={"username"} type={"text"} placeholder={"Username"}/>
            <Input name={"password"} type={"text"} placeholder={"Password"}/>
            <Input name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"Login"}/>
        </form>

    )

}
