import { Link } from "react-router-dom";


export default function NorFound(){
    return(
        <div>
            <h1>Erro 404</h1>
            <h2>Volte para a home</h2>
            <Link to="/Projeto_Goias">Home</Link>
        </div>
    )
}