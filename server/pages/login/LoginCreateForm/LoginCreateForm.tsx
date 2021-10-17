import Input from "../LoginForm/Input";

interface formInput {
    csrfToken: string
}
export default function _(){return null}

export function LoginCreateForm({csrfToken}: formInput){
    return (
        <form action={"/login/process_create"} method={"POST"} id={"form-id"}>
            {/*<Input type={"text"} placeholder={"Username"} value={username} setState={setUsername}/>*/}
            {/*<Input type={"text"} placeholder={"Password"} value={password} setState={setPassword} />*/}
            <Input name={"username"} type={"text"} placeholder={"Username"}/>
            <Input name={"password"} type={"text"} placeholder={"Password"}/>
            <Input name={"xcsrftoken"} type={"hidden"} value={csrfToken}/>
            <input type={"submit"} value={"Create"}/>
        </form>
    )
}