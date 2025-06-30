import { Input } from "../../Components/Input"
import logo  from "../../Assets/logo-goias-esporte-clube-256.png"
import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { auth, db} from "../../services/firebaseconnection"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"



export default function Cadastro(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    async function handleRegister(event: FormEvent){
        event.preventDefault();

        await createUserWithEmailAndPassword(auth,email, senha )
        .then(() => {
            setNome("")
            setEmail("")
            setSenha("")
            navigate("/Projeto_Goias/")

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
                    >CADASTRO</h1>

                <form className=" flex flex-col 
                text-xl w-full max-w-11/12 px-2 gap-2"
                onSubmit={handleRegister}
                >
                    <label className="font-medium">Nome Completo</label>
                    <Input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    ></Input>

                    <label className="font-medium">Email</label>
                    <Input
                    type="text"
                    placeholder="Seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    ></Input>

                    <label className="font-medium">Senha</label>
                    <Input
                    type="password"
                    placeholder="Sua senha aqui"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    ></Input>

                    <button 
                    className=" text-white p-4 rounded-xl font-semibold mt-5"
                    style={{background: "#165953" }}
                    >
                        Cadastrar
                    </button>

                    
                </form>
                <Link className="text-lg mt-2 underline"
                >
                    Já tem um conta? Entrar
                </Link>
            </div>
        </main>
    )
}