import { Link } from "react-router-dom"

import { useState, useEffect } from "react";
import "./header.css";


import logo from "../../Assets/logo-goias-esporte-clube-256.png";

import { auth } from "../../services/firebaseconnection";

import { BiLogOut } from "react-icons/bi"

import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

interface HeaderProps{
  txt: string;
}



export function Header(){
    const [menuActive, setMenuActive] = useState(false);
    const [logado, setLogado] = useState(false)


    const [largura, setLargura] = useState(window.innerWidth);



    useEffect(() => {
      function atualizarLargura() {
        setLargura(window.innerWidth);
      }

    window.addEventListener("resize", atualizarLargura);
    return () => window.removeEventListener("resize", atualizarLargura);
    }, []);

    useEffect(() => {

      const unsub = onAuthStateChanged(auth, () => {
        setLogado(true)
          
      })

      return() => unsub()
      

    }, [])

     async function handleLogOut(){
      signOut(auth)
      setLogado(false)

     }



    const header: HeaderProps[] =[
      {txt: "Ingressos"},
      {txt: "Seja Esmeralda"},
      {txt: "Loja Oficial"},
    ]

    const menu: HeaderProps[] =[
      {txt: "Ingressos"},
      {txt: "Seja Esmeralda"},
      {txt: "Loja Oficial"},
      {txt: "Clube"},
      {txt: "Futebol"},
      {txt: "Base"},
      {txt: "Noticias"},
      {txt: "Elenco"},
    ]

    const menu2: HeaderProps[] =[
      {txt: "Clube"},
      {txt: "Futebol"},
      {txt: "Base"},
      {txt: "Noticias"},
      {txt: "Elenco"},
    ]

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

                  {largura >= 800 && ( <div className="header-nav">
                    {header.map((txt) => (
                      <Link to={"/"}>{txt.txt}</Link>
                    ))}
                    </div>
                  )}
                  
                  {logado ? (
                    <div className="login">
                        <button onClick={handleLogOut} className="signin-btn"><BiLogOut size={26} /></button>
                    </div>
                  ): (
                    <div className="login">
                        <Link to= {"/Projeto_Goias/Cadastro"} className="signin-btn">Sign In</Link>
                    </div>
                  )}  
                  
                  {largura > 0 && largura <= 640 && 
                  (<ul className={`nav-list ${menuActive ? "active" : ""}`}>
                    
                    {menu.map((menu, index) => (
                     
                        <li key={index}> 
                          <Link to={`/Projeto_Goias/${menu.txt}`}>
                            {menu.txt}
                          </Link>
                        </li>
                      
                    ))}
                   </ul>
                  )}

                  {largura >= 760 && largura <= 2000 && 
                  (<ul className={`nav-list ${menuActive ? "active" : ""}`}>
                    
                    {menu2.map((menu, index) => (
                      
                        <li key={index}>
                          <Link to={`/Projeto_Goias/${menu.txt}`}>
                            {menu.txt}
                          </Link>
                        </li>
                      
                    ))}
                   </ul>
                  )}

      
                 
                  
        
                  <div
                    className={`mobile-menu ${menuActive ? "active" : ""}`}
                    onClick={toggleMenu}
                  >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
                </nav>
                <div className="divisor">

                </div>
        </header>

        
    </div>
    )
}