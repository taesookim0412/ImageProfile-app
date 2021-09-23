import LoginForm from "./Login/LoginForm/LoginForm";
import Layout from "./views/Layout";
import {useEffect} from "react";
import xCsrfStore from "../services/XCSRFStore";
import axios from "axios";
import React from "react"

interface formProps {
    csrfToken: string
}

// No javascript. only raw css.
export async function getServerSideProps(context: any) {
    if ((global as any).xCsrfStore === undefined) (global as any).xCsrfStore = xCsrfStore;
    const csrfToken = (await axios.get("http://localhost:5000/login/createxcsrftoken")).data;
    (global as any).xCsrfStore.addToCsrfStore(csrfToken);
    context.req.session['X-CSRF-TOKEN'] = csrfToken;
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
            </div>
            <button onClick={() => alert("OKAY!")}>Click me!!</button>
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
// export default function Login({csrf}:formProps) {
//     return (
//         <Layout>
//             <button onClick={() => alert("Okay!")}>Click me!!</button>
//         {/*<div id={"login-page"}>*/}
//         {/*    <LoginForm csrf={csrf}/>*/}
//         {/*</div>*/}
//         </Layout>
//     )
// }

