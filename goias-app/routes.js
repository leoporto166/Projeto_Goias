
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home"


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;