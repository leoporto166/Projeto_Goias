import { Link } from "react-router-dom"

import { useState, useEffect } from "react";
import "./header.css";


import logo from "../../Assets/logo-goias-esporte-clube-256.png";

import { auth } from "../../services/firebaseconnection";

import { BiLogOut} from "react-icons/bi"

import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import { FaTimes } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

interface HeaderProps{
  txt: string;
}



export function Header(){
    const [menuActive, setMenuActive] = useState(false);
    const [menuPhoneActive, setMenuPhoneActive] = useState(false);
    const [headersub, setHeader] = useState(false)
    const [logado, setLogado] = useState(false)
    const [clickIndex, setClickIndex] = useState(-1)


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

      const unsub = onAuthStateChanged(auth, (user) => {
        if(user){
          setLogado(true)
        } else {
          setLogado(false)
        }
          
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

    const toggleMenuPhone = () => {
      setMenuPhoneActive(!menuPhoneActive);
    setHeader(false);
    setClickIndex(-1);
    }

  const toggleMenu = () => {
    setMenuActive(false);
    };

  const active = () => {
    setMenuActive(true)
  }


    useEffect(() => {
      document.body.style.overflow = menuPhoneActive ? "hidden" : "auto";
    }, [menuPhoneActive]);
    
    return(
      <div style={{background: "#012623"}}>
        {largura >= 1300 ? (<div className="flex flex-col justify-center items-center">
          <header className="w-full h-[120px] relative flex items-center px-2 gap-4 justify-center">
        
              <div className="relative w-[140px] h-[110px] sm:w-[135px]  md:w-[130px] lg:w-[120px]">
                <Link to={"/Projeto_Goias"}>
                  <img
                    src={logo}
                    alt="Logo Goiás Esporte Clube"
                    className="absolute w-full h-full z-10 mt-10"
                  />
                </Link>
              </div>
              <div className="flex gap-6 h-12/12 items-end mb-8 w-full relative ml-4 text-lg font-bold ">
                <div
                className={` absolute start-0 flex gap-6 text-gray-500`}
                onClick={active}
              >
                {header.map((txt, index) => (
                  <div
                    key={`menu-${index}`}
                    onClick={() => setSelectedIndex(index)}
                    className={`menu cursor-pointer select-none ${selectedIndex === index ? "text-white" : ""}`}
                  >
                    {txt.txt}
                    
                    
                  </div>
                  
                ))}

                {menuActive ? (
                      <FaTimes
                      className="cursor-pointer mt-1 text-white"
                      size={20}
                      onClick={(e) => {
                        e.stopPropagation();  // <- PARA A BORBULHA DO EVENTO AQUI
                        setSelectedIndex(-1);
                        toggleMenu();
                      }}
                    />
                      ) : (
                        <></>
                      )
                  }
                  
              </div>
        
        
        
        
                <div className="login absolute end-0 cursor-pointer mb-[-5px] text-white ">
                  {logado ? (
                    <div
                    >
                        <button onClick={handleLogOut} className="signin-btn cursor-pointer"><BiLogOut size={26} /></button>
                    </div>
                  ): (
                    <div className="login">
                        <Link to= {"/Projeto_Goias/Cadastro"} className="signin-btn cursor-pointer bg-green-600 text-white p-2 rounded-xl">Sign In</Link>
                    </div>
                  )}
                </div>
        
              </div>
        
          </header>

          <div className={`${menuActive === true ? "fundo" : "fundo-des"}`}>

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
            </div>) : (
              <div className="relative z-50">
                <header className="relative flex items-center h-[100px]">
                  <div  className="flex flex-row items-center px-2 mt-2">
                    <Link to={"/Projeto_Goias"}>
                      <img src={logo} className="w-[50px]"></img>
                    </Link>

                    <div className="w-[1px] h-[50px] bg-green-100"></div>

                    <div className="ml-2 text-xl font-semibold text-gray-200">33</div>
                    </div>
                  
                    <div className="login end-0 cursor-pointer text-white absolute mr-15 mt-4">
                    {logado ? (
                      <div
                      >
                          <button onClick={handleLogOut} className="signin-btn cursor-pointer"><BiLogOut size={26} /></button>
                      </div>
                    ) : (
                      <div className="login">
                          <Link to= {"/Projeto_Goias/Cadastro"} className="signin-btn cursor-pointer bg-green-600 text-white p-2 rounded-xl">Sign In</Link>
                      </div>
                    )}
                  </div>

                  <div  onClick={toggleMenuPhone} className={`end-0 cursor-pointer absolute px-5 mt-2`}>
                    <div className={`${menuPhoneActive === true ? "line-um" : "line"} w-[30px] h-[1px] bg-white text-white `}></div>

                    <div className={`${menuPhoneActive === true ? "line-dois" : "line"} w-[30px] h-[1px] bg-white text-white mt-2`}></div>

                    <div className={` ${menuPhoneActive === true ? "line-tres" : "line"} w-[30px] h-[1px] bg-white text-white mt-2`}></div>
                  </div>
                
                </header>
                 
                {menuPhoneActive && (

                  
                  <div className={`nav-list ${menuPhoneActive ? "active" : ""} absolute start-0 flex gap-6 text-white z-10`}>
                    {header.map((txt, index) => (
                      <div
                        key={`menu-${index}`}
                        onClick={() => {
                          if (selectedIndex === index && header) {
                            setHeader(false);
                            setSelectedIndex(-1);
                            setClickIndex(-1);
                          } else {
                            setSelectedIndex(index);
                            setHeader(true);
                            setClickIndex(index)
                          }
                        }}
                        className={`menu mt-1 w-full px-4 sm:px-2 cursor-pointer select-none ${selectedIndex === index ? "text-white" : ""}`}
                      >

                        {
                          clickIndex === index && headersub ? (
                            <div className="w-11/12 sm:w-full h-[1px] bg-white pr-8 opacity-0"></div>
                          ) : (
                            <div className="w-full h-[1px] bg-white pr-8 opacity-0"></div>
                          )
                        }

                        {
                          headersub ? (
                            <div className="w-11/12 sm:w-full h-[1px] bg-white "></div>
                          ) : (
                           <div className="w-full h-[1px] bg-white pr-8"></div>
                           )
                        }
                        

                        <div className="flex items-center justify-between py-2 w-full">
                          {txt.txt}
                          
                              {
                                clickIndex === index && headersub ? (
                                <div className="text-white shrink-0 pr-8 sm:pr-0 opacity-0">
                                    <AiOutlineUp />
                                </div>
                              
                                ) : (
                                  <div className="text-white shrink-0 opacity-0">
                                    <AiOutlineDown />
                                </div>
                                )
                              }

                              {
                                headersub ? (
                                  <div className="text-white shrink-0 pr-8 sm:pr-0">
                                    <AiOutlineUp />
                                </div>
                                ) : (
                                  <div className="text-white shrink-0">
                                    <AiOutlineDown />
                                </div>
                                )
                              }
                            
                            
                          
                        </div>

                        {
                        clickIndex === index &&headersub ? (
                        <div className="w-11/12 sm:w-full h-[1px] bg-white mt-[100px] transition-all duration-100 pr-8 opacity-0"></div>

                        ) : (
                        <div className="w-full h-[1px] bg-white opacity-0"></div>
                      )
                          }

                          {
                          headersub ? (
                            <div className="w-11/12 sm:w-full h-[1px] bg-white  transition-all duration-100 pr-8"></div>
                          ) : (
                           <div className="w-full h-[1px] bg-white pr-8"></div>
                           )
                        }
                      </div>
                    ))}
                  </div>
                )}

                  <div>
                    {headersub && (
                      <div className="px-6 text-lg w-10/12">
                        {selectedIndex === 0 && (
                          <ul className="nav zero">
                            {menuN.map((noticia, subIndex) => (
                              <li key={`noticia-${subIndex}`}
                              
                              >{noticia.txt}</li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 1 && (
                          <ul className="nav um">
                            {menuE.map((esmeralda, subIndex) => (
                              <li key={`esmeralda-${subIndex}`}>{esmeralda.txt}</li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 2 && (
                          <ul className="nav dois">
                            {menuL.map((loja, subIndex) => (
                              <li key={`loja-${subIndex}`}>{loja.txt}</li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 3 && (
                          <ul className="nav tres">
                            {menuC.map((clube, subIndex) => (
                              <li key={`clube-${subIndex}`}>{clube.txt}</li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 4 && (
                          <ul className="nav quatro">
                            {menuB.map((base, subIndex) => (
                              <li key={`base-${subIndex}`}>{base.txt}</li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 5 && (
                          <ul className="nav cinco">
                            {menuEl.map((elenco, subIndex) => (
                              <li key={`elenco-${subIndex}`}>{elenco.txt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
              </div>
            )}

      </div>
    
    )
}