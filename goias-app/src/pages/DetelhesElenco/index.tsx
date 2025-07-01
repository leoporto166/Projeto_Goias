
import { useParams } from "react-router-dom"

export function DetalhesElenco(){

    const {id} = useParams();

    return(
        <h1>Pagina Detalhes {id}</h1>
    )

}