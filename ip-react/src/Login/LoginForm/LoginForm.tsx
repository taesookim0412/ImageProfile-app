import {Input} from "./Input";

export function LoginForm(){
    return (
        <form>
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"text"} placeholder={"Password"}/>
            <input type={"submit"} value={"Login"}/>
        </form>

    )

}
