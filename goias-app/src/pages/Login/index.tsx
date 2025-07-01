
import { Link } from "react-router-dom"
import { Input } from "../../Components/Input"
import { useState, type FormEvent } from "react"

import logo  from "../../Assets/logo-goias-esporte-clube-256.png"

import { auth } from "../../services/firebaseconnection"
import { signInWithEmailAndPassword } from "firebase/auth"

import { useNavigate } from "react-router-dom"


export function Login(){

    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")

    const navigate = useNavigate();

    async function handlelogin(event: FormEvent){

        event.preventDefault();

        await signInWithEmailAndPassword(auth, emailLogin, senhaLogin)

        .then(() => {
            setEmailLogin("")
            setSenhaLogin("")
            navigate("/Projeto_Goias/")
        })

        .catch ((error) => {


            if (error.code === "auth/user-not-found") {
            alert("Usuário não encontrado.");
            navigate("Projeto_Goias/cadastro")
            } else if (error.code === "auth/wrong-password") {
            alert("Senha incorreta.");
            } else if (error.code === "auth/invalid-email") {
            alert("Email inválido.");
            } else {
            console.log(error)
            }
                
            
    })
  


    }
    
    return(
        <main className="flex flex-col items-center h-screen w-full">
            <div className="w-[400px] sm:w-[500px] flex flex-col items-center">
                <div className="mt-5">
                    <img src={logo} alt="Escudo Goias"
                        className="w-15"
                    
                    ></img>
                </div>


                    <h1 
                    className="text-4xl font-semibold mb-10 mt-5"
                    style={{color: "#012623"}}
                    >Bem-Vindo Novamente</h1>

                <form className=" flex flex-col 
                text-xl w-full max-w-11/12 px-2 gap-2"
                onSubmit={handlelogin}
                >
                    <label className="font-medium">Email</label>
                    <Input
                    type="text"
                    placeholder="Seu Email"
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                    required

                    ></Input>

                    <label className="font-medium">Senha</label>
                    <Input
                    type="password"
                    placeholder="*******"
                    value={senhaLogin}
                    onChange={(e) => setSenhaLogin(e.target.value)}
                    minLength={8}
                    required
                    ></Input>

                    <button 
                    className=" text-white p-4 rounded-xl font-semibold mt-5 cursor-pointer"
                    style={{background: "#165953" }}
                    >
                        Entrar
                    </button>

                    
                </form>
                <Link className="text-lg mt-2 underline"
                to={"/Projeto_Goias/cadastro"}
                >
                    Não tem uma conta? Criar
                </Link>
            </div>
        </main>
    )

}