import LoginForm from "./Login/LoginForm/LoginForm";
import Layout from "./views/Layout";
import {useEffect} from "react";
import xCsrfStore from "../services/XCSRFStore";
import axios from "axios";
import document from "./_document"
import React from "react"

interface formProps {
    csrf: string
}

// export async function getServerSideProps(context:any){
//     console.log(context.query);
//     const xCsrfStore = context.query.XCSRFSTORE
//     const csrf = "$123456789"
//     xCsrfStore.addToCsrfStore(csrf);
//     //This is a hack. (1-HARD) Create an interceptor between Nextjs and renders instead. (2-HACKER) Or, create a singleton through JS.
//     //(3-Problem? AddAnotherServer) Or, GET the server / microservice, and obtain a new key that way.
//     // This is TEMPORARY (I HOPE).
//     context.query.XCSRFSTORE = undefined;
//     context.req.session['X-CSRF-TOKEN'] = csrf;
//     return {
//         props:{
//             csrf
//         }
//     }
// }
// export async function getServerSideProps(context:any){
//     const csrf = "CSRF_NEXTJS";
//     (global as any).xCsrfStore.addToCsrfStore(csrf);
//     context.req.session['X-CSRF-TOKEN'] = csrf;
//     return {
//         props:{
//             csrf
//         }
//     }
// }

// THIS LOADS 1 EVERY TIME.
// export async function getStaticProps(){
//     const nGlobal = global as any;
//     console.log(nGlobal.ct);
//     if (nGlobal.ct === undefined){
//         nGlobal.ct = 0;
//     }
//     nGlobal.ct += 1;
//     const csrfToken = nGlobal.ct;
//     return {
//         props: {
//             csrf: csrfToken
//         }
//     }
// }

// No javascript. only raw css.
export async function getServerSideProps(context: any) {
    const csrf = "CSRF_NEXTJS";
    (global as any).xCsrfStore.addToCsrfStore(csrf);
    context.req.session['X-CSRF-TOKEN'] = csrf;
    return {
        props: {
            csrf
        }
    }
}

export default function Login({csrf}: formProps) {
    return (
        <>
            <div style={{height: "400px", width: "400px"}} id={"login-page"}>
                <LoginForm csrf={csrf}/>
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

