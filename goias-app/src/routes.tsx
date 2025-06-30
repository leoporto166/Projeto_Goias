import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home"
import NotFound from "./pages/Erro/erro"
import  Cadastro  from "./pages/Cadastro";
import { Login } from "./pages/Login"
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
        path:"*",
        element: <NotFound/>,
    }
])

export {router}