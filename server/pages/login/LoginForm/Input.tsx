import {Dispatch, SetStateAction} from "react";
import {useState} from "react";

interface InputProps {
    type: string,
    name?: string,
    value?: string
    setState?: Dispatch<SetStateAction<string>>,
    placeholder?:string,
}

export default function Input(props: InputProps){
    function handleChange(setState: Dispatch<SetStateAction<string>>, newString: string){
        setState(newString);
    }
    return (
        <input type={props.type} name={props.name} value={props.value}/>
    )
}
