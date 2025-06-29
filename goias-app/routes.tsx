import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home/home"
import NotFound from "./src/pages/Erro/erro"
import  Cadastro  from "./src/pages/Cadastro";
const router = createBrowserRouter([
    {
        path:"/Projeto_Goias",
        element: <Home />,
    },

    {
        path: "/Projeto_Goias/Cadastro",
        element: <Cadastro />
    },

    {
        path:"*",
        element: <NotFound/>,
    }
])

export {router}