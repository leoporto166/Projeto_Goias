import { Link } from "react-router-dom"

import { useState, useEffect } from "react";
import "./header.css";


import logo from "../../Assets/logo-goias-esporte-clube-256.png";

import { auth } from "../../services/firebaseconnection";

import { BiLogOut } from "react-icons/bi"

import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import { FaTimes } from "react-icons/fa";

interface HeaderProps{
  txt: string;
}



export function Header(){
    const [menuActive, setMenuActive] = useState(false);
    const [logado, setLogado] = useState(false)


    const [largura, setLargura] = useState(window.innerWidth);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);



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
      {txt: "NOTICIAS"},
      {txt: "ESMERALDA"},
      {txt: "LOJA"},
      {txt: "CLUBE"},
      {txt: "BASE"},
      {txt: "ELENCO"},
    ]

    const menu: HeaderProps[] =[
      {txt: "Ingressos"},
      {txt: "Esmeralda"},
      {txt: "Loja Oficial"},
      {txt: "Clube dos 33"},
      {txt: "Futebol"},
      {txt: "Base"},
      {txt: "Noticias"},
      {txt: "Elenco"},
      {txt: "Raiz Verde"}
    ]

    const menuN: HeaderProps[] = [
      {txt: "Todas Noticias"},
      {txt: "Videos"},
      {txt: "Noticias"}
    ]

    const menuE: HeaderProps[] = [
      {txt: "Esmeralda"},
      
    ]

    const menuL: HeaderProps[] = [
      {txt: "Loja"},
    ]

    const menuC: HeaderProps[] = [
      {txt: "Clube"}
    ]

    const menuB: HeaderProps[] = [
      {txt: "Base"}
    ]

    const menuEl: HeaderProps[] = [
      {txt: "Elenco"}
    ]

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    };
    return(
    <div className="flex flex-col justify-center items-center">
        <header className="w-full h-[120px] relative flex items-center px-2 gap-4 justify-center">
          
            <div className="relative w-[140px] h-[110px] sm:w-[135px]  md:w-[130px] lg:w-[120px]">
              <img
                src={logo}
                alt="Logo Goiás Esporte Clube"
                className="absolute w-full h-full z-10 mt-10"
              />
            </div>
            <div className="flex gap-6 h-12/12 items-end mb-8 w-full relative ml-4 text-lg font-bold ">

              <div
              className={`mobile-menu ${menuActive ? "active" : ""} absolute start-0 flex gap-6 text-gray-500`}
              onClick={toggleMenu}
            >
              {header.map((txt, index) => (
                <div
                  key={`menu-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className={`menu cursor-pointer select-none ${selectedIndex === index ? "text-green-950" : ""}`}
                >
                  {txt.txt}
                </div>
              ))}
            </div>
            
            
            
            
              <div className="login absolute end-0 cursor-pointer mb-[-5px] text-black ">
                {logado ? (
                  <div
                  >
                      <button onClick={handleLogOut} className="signin-btn cursor-pointer"><BiLogOut size={26} /></button>
                  </div>
                ): (
                  <div className="login">
                      <Link to= {"/Projeto_Goias/Cadastro"} className="signin-btn cursor-pointer">Sign In</Link>
                  </div>
                )}
              </div>
            
            </div>

             
        </header>

        
          
        <div className="w-full h-[1px] bg-green-800">
            
        </div>

            {selectedIndex === 0 && (
                    <ul className={`nav-list ${selectedIndex === 0 ? "zero" : ""}`}>
                      {menuN.map((noticia, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{noticia.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex === 1 && (
                    <ul className={`nav-list ${selectedIndex === 1 ? "um" : ""}`}>
                      {menuE.map((esmeralda, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{esmeralda.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex === 2 && (
                    <ul className={`nav-list ${selectedIndex === 2? "dois" : ""}`}>
                      {menuL.map((loja, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{loja.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex === 3 && (
                    <ul className={`nav-list ${selectedIndex === 3 ? "tres" : ""}`}>
                      {menuC.map((clube, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{clube.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex === 4 && (
                    <ul className={`nav-list ${selectedIndex === 4 ? "quatro" : ""}`}>
                      {menuB.map((base, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{base.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex === 5 && (
                    <ul className={`nav-list ${selectedIndex === 5 ? "cinco" : ""}`}>
                      {menuEl.map((elenco, subIndex) => (
                        <li key={`noticia-${subIndex}`}>{elenco.txt}</li>
                      ))}
                    </ul>
                  )}
                  {selectedIndex !== -1 ? (
                  <FaTimes
                  className="ml-[98%] cursor-pointer z-1000"
                  size={20}
                  onClick={() => {setSelectedIndex(-1)
                    setMenuActive(false)
                  } }></FaTimes>
                  ) : (
                    <></>
                  )
                }
                         
        
    </div>
    )
}