import Input from "./Input";
import {FormEvent, useState} from "react";
// import "./LoginForm.scss"

interface formInput {
    csrf: string
}



export default function LoginForm(props:formInput){
    // const [username, setUsername] = useState("abc");
    // const [password, setPassword] = useState("abcd");
    //client sided function for login attempt
    // function attemptLogin({csrf}: formInput, username:string, password:string){
    function attemptLogin({csrf}: formInput, username:string, password:string){

        alert("Okay");
        const response = fetch("process_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username,
                password,
                csrf})})
        response.then((res) => {
            console.log(res);
        })
    }
    return (
<>
        <form id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"text"} placeholder={"Password"}/>
            <input type={"submit"} value={"Login"}/>
        </form>
        <>
        <button onClick={(e) => { alert("Clicked!"); e.preventDefault(); attemptLogin(props, "", "") }}>Click me!</button>
        </>
</>

    )

}
