import { type InputHTMLAttributes } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input className="p-2 h-12 rounded-md outline-none mb-3" 
        style={{background: "rgba(168, 191, 176, 0.5)", color: "#012623" }}
        {...props}
        />
    )
}