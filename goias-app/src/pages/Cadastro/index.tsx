import { Input } from "../../Components/Input"
import logo  from "../../Assets/logo-goias-esporte-clube-256.png"

export default function Cadastro(){
    return(
        <main className=" relative flex flex-col items-center justify-center h-screen w-full">
            <img src={logo} alt="Escudo Goias"
            className="absolute w-100 h-100 opacity-50 z-0 "
            ></img>

            <div className=" flex flex-col bg-green-200 h-5/12 w-9/12 rounded-xl px-2 z-100">
                h1
                <Input></Input>
            </div>
        </main>
    )
}