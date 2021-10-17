import {LoginForm} from "./LoginForm/LoginForm";
import axios from "axios";
import React from "react"
import {initializeVariablesIfRequired} from "../../configs/GlobalUtil";

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
    // return (
    //     <Layout>
    //         <div style={{height: "400px", width: "400px"}} id={"login-page"}>
    //             <LoginForm csrf={csrf}/>
    //         </div>
    //         <button onClick={() => alert("OKAY!")}>Click me!!</button>
    //     </Layout>
    // )
}
// export default function login({csrf}:formProps) {
//     return (
//         <Layout>
//             <button onClick={() => alert("Okay!")}>Click me!!</button>
//         {/*<div id={"login-page"}>*/}
//         {/*    <LoginForm csrf={csrf}/>*/}
//         {/*</div>*/}
//         </Layout>
//     )
// }

