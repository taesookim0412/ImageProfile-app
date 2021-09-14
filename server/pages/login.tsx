import LoginForm from "./Login/LoginForm/LoginForm";
import Layout from "../views/Layout";

interface formProps{
    csrf: string
}
export async function getServerSideProps(){
    // const csrf_token = get_random_token_from_server();
    const csrf = "$123456789"
    return {
        props:{
            csrf
        }
    }
}

export default function Login({csrf}:formProps) {
    return (
        <Layout>
        <div id={"login-page"}>
            <LoginForm csrf={csrf}/>
        </div>
        </Layout>
    )
}
