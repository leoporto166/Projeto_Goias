import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home"
import NotFound from "./pages/Erro/erro"
import  Cadastro  from "./pages/Cadastro";
import { Login } from "./pages/Login"
import { ElencoTela } from "./pages/Elenco"
import { DetalhesElenco } from "./pages/DetelhesElenco"
import { Clube } from "./pages/Clube";
import { RaizVerde } from "./pages/Raiz Verde";
const router = createBrowserRouter([
    {
        path:"/Projeto_Goias",
        element: <Home />,
    },

    {
        path: "/Projeto_Goias/cadastro",
        element: <Cadastro />
    },

    {
        path: "/Projeto_Goias/login",
        element: <Login />
    },

    {
        path: "/Projeto_Goias/Elenco",
        element: <ElencoTela />
    },

    {
        path: "/Projeto_Goias/detalhesElenco/:id",
        element: <DetalhesElenco />
    },
    
    {
        path: "/Projeto_Goias/Clube dos 33",
        element: <Clube />
    },

    {
        path: "/Projeto_Goias/Raiz Verde",
        element: <RaizVerde />
    },

    {
        path:"*",
        element: <NotFound/>,
    }

    
])

export {router}