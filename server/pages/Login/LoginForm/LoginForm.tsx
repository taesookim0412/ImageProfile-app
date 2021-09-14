import Input from "./Input";
// import "./LoginForm.scss"

interface formInput {
    csrf: string
}


export default function LoginForm(props:formInput){
    return (
        <form>
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"text"} placeholder={"Password"}/>
            <Input type={"hidden"} value={props.csrf}/>
            <input type={"submit"} value={"Login"}/>
        </form>

    )

}
