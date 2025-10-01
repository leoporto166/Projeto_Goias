import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home"
import NotFound from "./pages/Erro/erro"
import  Cadastro  from "./pages/Cadastro";
import { Login } from "./pages/Login"
import { ElencoTela } from "./pages/Elenco"
import { DetalhesElenco } from "./pages/DetelhesElenco"
import { Clube } from "./pages/Clube";
import { RaizVerde } from "./pages/Raiz Verde";
import { TodasNoticias } from "./pages/TodasNoticias";
import { CadastroInfo } from "./pages/CadastroInfo";
import { Videos } from "./pages/NotVideos";
import { Imagens } from "./pages/NotImg";
import { Private } from "./Components/RotaPrivada";
import { Esmeralda } from "./pages/Esmeralda";
import { Titulos } from "./pages/Titulos";
import { Titulos_Detalhes } from "./pages/TitulosDetalhes";
import { Base } from "./pages/BaseGoias";
import { NotDel } from "./pages/NoticiasDel";
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
        path: "/Projeto_Goias/Todas Noticias",
        element: <TodasNoticias />
    },

    {
        path: "/Projeto_Goias/Cadastro Informações",
        element: (
            <Private>
                <CadastroInfo />
            </Private>
        )
        
    },

    {
        path: "/Projeto_Goias/Esmeralda",
        element: <Esmeralda />
    },

    {
        path: "/Projeto_Goias/Videos",
        element: <Videos />
    },

    {
        path: "/Projeto_Goias/Noticias",
        element: <Imagens />
    },

    {
        path: "/Projeto_Goias/Clube",
        element: <Clube />
    },

    {
        path: "/Projeto_Goias/Clube/:id",
        element: <Titulos />
    },

    {
        path: "/Projeto_Goias/Clube/:categoria/:ano",
        element: <Titulos_Detalhes />
    },

    {
        path: "/Projeto_Goias/Noticias/:id",
        element: <NotDel />
    },

    {
        path: "/Projeto_Goias/Base",
        element: <Base />
    },

    {
        path:"*",
        element: <NotFound/>,
    }

    
])

export {router}