import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App: any) => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component: any) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <React.Fragment>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
                </React.Fragment>
            </Html>
        )
    }
    // render() {
    //     return (
    //         <Html>
    //             <Head/>
    //             <body>
    //             Yo!!!
    //             <Main/>
    //             <NextScript/>
    //             </body>
    //         </Html>
    //     )
    // }
}