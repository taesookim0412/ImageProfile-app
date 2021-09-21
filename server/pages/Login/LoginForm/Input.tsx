import {Dispatch, SetStateAction} from "react";
import {useState} from "react";

interface InputProps {
    type: string,
    value?: string
    setState?: Dispatch<SetStateAction<string>>,
    placeholder?:string,
}

export default function Input(props: InputProps){
    function handleChange(setState: Dispatch<SetStateAction<string>>, newString: string){
        console.log(newString);
        setState(newString);
    }
    return (
        <input type={props.type} value={props.value}/>
    )
}
