import Head from "next/head";
import React from "react";

export default function Layout(props:any) {
    return (
        <React.Fragment>
            <Head>
                <title>ImageProfile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </Head>
            {props.children}
        </React.Fragment>
    )
}