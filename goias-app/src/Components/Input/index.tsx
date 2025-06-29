import { type InputHTMLAttributes } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input className="px-2 py-2 h-10 rounded-md outline-none mb-3" 
        style={{background: "#A8BFB0" }}
        {...props}
        />
    )
}