import { Link } from "react-router-dom";


export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center my-5 h-screen">
            <h1 className="text-5xl text-green-950">Erro 404</h1>
            <p className="text-2xl">Não foi possivel encontrar essa página</p>
            <Link to="/Projeto_Goias" className="bg-green-500 text-white p-1 rounded text-lg mt-2">Voltar para a home</Link>
        </div>
    )
}