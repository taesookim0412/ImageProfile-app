import "./Profile.scss"

export default function Profile(props: any) {
    return (
        <div id={"wrapper"}>
            <div className={"sidebar"}/>
            <div>
                <div className={"spacer--top"}/>
                <div id={"block-image"}>
                    <img id={"main-image"} src={"/favicon.ico"}/>
                </div>
            </div>
        </div>
    )

}