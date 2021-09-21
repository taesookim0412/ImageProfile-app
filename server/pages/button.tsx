export async function getStaticProps(context:any) {
    return {
        props: {
            data: "1234"
        }
    }
}
export default function button(){
    return (
        <div>
            <button onClick={() => alert("Clicked!")}>Click me!</button>
        </div>
    )
}