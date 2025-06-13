import { Link } from "react-router-dom"

import { useState } from "react";
import "./header.css";


import logo from "../Assets/logo-goias-esporte-clube-256.png";


export function Header(){
    const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    };
    return(
    <div>
        <header>
                <nav>
                  <div className="logo-area">
                    <a href="/">
                      <img
                        src={logo}
                        alt="Logo Goiás Esporte Clube"
                        className="logo"
                      />
                    </a>
                    <div className="divider"></div>
                    <span className="numero">33</span>
                  </div>
                  
                  <div className="login">
                        <button className="signin-btn">Sign in</button>
                  </div>  
                  
        
                  <ul className={`nav-list ${menuActive ? "active" : ""}`}>
                    <li>
                      <Link to="/">Ingressos</Link>
                    </li>
                    <li>
                      <Link to="/">Loja</Link>
                    </li>
                    <li>
                      <Link to="/">Seja Esmeralda</Link>
                    </li>
                    <li>
                      <Link to="/">Clube</Link>
                    </li>
                    <li>
                      <Link to="/">Futebol</Link>
                    </li>
                    <li>
                      <Link to="/">Base</Link>
                    </li>
                    <li>
                      <Link to="/">Noticias</Link>
                    </li>
                  </ul>
        
                  <div
                    className={`mobile-menu ${menuActive ? "active" : ""}`}
                    onClick={toggleMenu}
                  >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
                </nav>
        </header>
    </div>
    )
}