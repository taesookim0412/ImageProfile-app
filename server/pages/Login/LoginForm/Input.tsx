interface InputProps {
    type: string,
    placeholder?:string,
    value?: string
}

export default function Input(props: InputProps){
    return (
        <input {...props}/>
    )
}
