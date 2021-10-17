import {LoginForm} from "./LoginForm/LoginForm";
import axios from "axios";
import React from "react"
import {initializeVariablesIfRequired} from "../../configs/Utilities/GlobalUtil";

interface formProps {
    csrfToken: string
}

// No javascript. only raw css.
export async function getServerSideProps(context: any) {
    const globalScope = initializeVariablesIfRequired();
    const csrfToken = (await axios.get(`${globalScope.loginHost}/login/createxcsrftoken`)).data;
    globalScope.xCsrfStore.addToCsrfStore(csrfToken);
    return {
        props: {
            csrfToken
        }
    }
}

export default function Login({csrfToken}: formProps) {
    return (
        <>
            <div style={{height: "400px", width: "400px"}} id={"login-page"}>
                <LoginForm csrfToken={csrfToken}/>
                <br/>
                <a href={"/login/create"}>Create User</a>
            </div>
        </>
    )
}
