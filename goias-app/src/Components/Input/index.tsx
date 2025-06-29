import { type InputHTMLAttributes } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input className="h-9 bg-white rounded-md outline-none px-2" 
        {...props}
        />
    )
}