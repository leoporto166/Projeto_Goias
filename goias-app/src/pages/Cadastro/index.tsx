import { Input } from "../../Components/Input"
import logo  from "../../Assets/logo-goias-esporte-clube-256.png"
import { useState } from "react"

export default function Cadastro(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <div className="flex flex-col items-center h-screen w-full ">
            <div className=" h-2 w-full"></div>
            <div className="h-24">
                <img src={logo} alt="Escudo Goias"
                    className="w-20"
                
                ></img>
            </div>


                <h1 className="text-4xl font-semibold mb-90">CADASTRO</h1>

            <form className=" flex flex-col 
            text-xl w-full max-w-11/12 px-2 gap-2">
                <label className="">Nome Completo</label>
                <Input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                ></Input>

                <label>Email</label>
                <Input
                type="text"
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                ></Input>

                <label>Senha</label>
                <Input
                type="password"
                placeholder="Sua senha aqui"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                ></Input>
            </form>
        </div>
    )
}