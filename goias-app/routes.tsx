import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home/home"
import NotFound from "./src/pages/Erro/erro"
const router = createBrowserRouter([
    {
        path:"/Projeto_Goias",
        element: <Home />,
    },

    {
        path:"*",
        element: <NotFound/>,
    }
])

export {router}