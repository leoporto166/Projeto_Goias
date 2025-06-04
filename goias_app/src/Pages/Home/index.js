import { Link } from "react-router-dom";
import logo from "../../img/logo-goias-esporte-clube-256.png"
import menu from "../../img/menu.png"
import "./home.css"

function Home(){
    return(
        <div>
            <header>
                <div className="logo-area">
                    <img src = {logo}
                    alt="Logo Goiás Esporte Clube"
                                   className="logo" / >
                    <div class="divider"></div>
                    <span className="numero">33</span>
                </div>
                
                <img src={menu}
                alt = "Menu" className="menu"/>
                
            </header>
            <div className="divider2"></div>
        </div>
    )
}

export default Home;