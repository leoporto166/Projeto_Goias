import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Components/Home/home"
import NotFound from "./src/Erro/erro"
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