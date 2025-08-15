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
    const [headersub, setHeaderSub] = useState(false)
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
      setHeaderSub(false);
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
                      <ul className={`nav-list ${selectedIndex === 0 ? "zero" : ""} z-50`}>
                        {menuN.map((noticia, subIndex) => (
                          <Link to={`/Projeto_Goias/${noticia.txt}`}>
                            <li key={`noticia-${subIndex}`}>{noticia.txt}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                    {selectedIndex === 1 && (
                      <ul className={`nav-list ${selectedIndex === 1 ? "um" : ""}`}>
                        {menuE.map((esmeralda, subIndex) => (
                          <Link to={`/Projeto_Goias/${esmeralda.txt}`}>
                            <li key={`noticia-${subIndex}`}>{esmeralda.txt}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                    {selectedIndex === 2 && (
                      <ul className={`nav-list ${selectedIndex === 2? "dois" : ""}`}>
                        {menuL.map((loja, subIndex) => (
                          <Link to={`/Projeto_Goias/${loja.txt}`} >
                            <li key={`noticia-${subIndex}`}>{loja.txt}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                    {selectedIndex === 3 && (
                      <ul className={`nav-list ${selectedIndex === 3 ? "tres" : ""}`}>
                        {menuC.map((clube, subIndex) => (
                          <Link to={`/Projeto_Goias/${clube.txt}`}>
                            <li key={`noticia-${subIndex}`}>{clube.txt}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                    {selectedIndex === 4 && (
                      <ul className={`nav-list ${selectedIndex === 4 ? "quatro" : ""}`}>
                        {menuB.map((base, subIndex) => (
                          <Link to={`/Projeto_Goias/${base.txt}`}>
                            <li key={`noticia-${subIndex}`}>{base.txt}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                    {selectedIndex === 5 && (
                      <ul className={`nav-list ${selectedIndex === 5 ? "cinco" : ""}`}>
                        {menuEl.map((elenco, subIndex) => (
                          <Link to={`/Projeto_Goias/${elenco.txt}`}>
                            <li key={`noticia-${subIndex}`}>{elenco.txt}</li>
                          </Link>
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

                  <div  onClick={
                    toggleMenuPhone
                  } className={`end-0 cursor-pointer absolute px-5 mt-2`}
                  >
                    <div className={`${menuPhoneActive === true ? "line-um" : "line"} w-[30px] h-[1px] bg-white text-white`}></div>

                    <div className={`${menuPhoneActive === true ? "line-dois" : "line"} w-[30px] h-[1px] bg-white text-white mt-2`}></div>

                    <div className={` ${menuPhoneActive === true ? "line-tres" : "line"} w-[30px] h-[1px] bg-white text-white mt-2`}></div>
                  </div>
                
                </header>
                 
                {menuPhoneActive && (

                  
                  <div className={`nav-list ${menuPhoneActive ? "active" : ""} absolute start-0 flex gap-6 text-white z-10`}
                  
                  >
                    {header.map((txt, index) => (
                      <div
                        key={`menu-${index}`}
                        
                        className={`menu mt-1 w-full px-4 sm:px-2 select-none ${selectedIndex === index ? "text-white" : ""}`}
                      >

                        {
                          clickIndex === index && headersub ? (
                            <div className="w-12/12 sm:w-full h-[1px] bg-black pr-8 opacity-0"></div>
                          ) : (
                            <div className="w-12/12 h-[1px] bg-black pr-8 opacity-0"></div>
                          )
                        }

                        {
                          headersub ? (
                            <div className="w-12/12 sm:w-full h-[1px] bg-white "></div>
                          ) : (
                           <div className="w-full h-[1px] bg-white pr-8"></div>
                           )
                        }
                        

                        <div className="flex items-center justify-between py-2 w-full cursor-pointer"
                        onClick={() => {
                                    if (selectedIndex === index && header) {
                                      setSelectedIndex(-1);
                                      setClickIndex(-1);
                                      setHeaderSub(false);
                                    } else {
                                      setSelectedIndex(index);
                                      setClickIndex(index)
                                      setHeaderSub(true);
                                    }
                                  }}
                        
                        >
                          {txt.txt}
                          
                              {
                                clickIndex === index && headersub ? (
                                <div className="text-white shrink-0 pr-0 sm:pr-0"
                                >
                                    <AiOutlineUp 
                                    />
                                </div>
                              
                                ) : (
                                  <div className="text-white shrink-0 ">
                                    <AiOutlineDown 
                                    
                                    />
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
                            <div className="w-12/12 sm:w-full h-[1px] bg-white  transition-all duration-100 pr-8"></div>
                          ) : (
                           <div className="w-full h-[1px] bg-white pr-8"></div>
                           )
                        }
                      </div>
                    ))}
                  </div>
                )}

                  <div className="">
                    {headersub && (
                      <div className="px-6 text-lg w-10/12 z-50 ">
                        
                        {selectedIndex === 0 && (
                          <ul className="nav zero  z-50">
                            {menuN.map((noticia, subIndex) => (
                              <li
                                key={`noticia-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${noticia.txt}`}>
                                  <h2>{noticia.txt}</h2>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 1 && (
                          <ul className="nav um  z-50">
                            {menuE.map((esmeralda, subIndex) => (
                              <li
                                key={`esmeralda-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${esmeralda.txt}`}>
                                  <h2>{esmeralda.txt}</h2>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 2 && (
                          <ul className="nav dois relative z-50">
                            {menuL.map((loja, subIndex) => (
                              <li
                                key={`loja-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${loja.txt}`}>
                                  <h2>{loja.txt}</h2>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 3 && (
                          <ul className="nav tres relative z-50">
                            {menuC.map((clube, subIndex) => (
                              <li
                                key={`clube-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${clube.txt}`}>
                                  <h2>{clube.txt}</h2>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 4 && (
                          <ul className="nav quatro relative z-50">
                            {menuB.map((base, subIndex) => (
                              <li
                                key={`base-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${base.txt}`}>
                                  <h2>{base.txt}</h2>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {selectedIndex === 5 && (
                          <ul className="nav cinco z-50">
                            {menuEl.map((elenco, subIndex) => (
                              <li
                                key={`elenco-${subIndex}`}
                                onClick={() => {
                                  setMenuPhoneActive(false);
                                  setHeaderSub(false);
                                }}
                              >
                                <Link to={`/Projeto_Goias/${elenco.txt}`}>
                                  <h2>{elenco.txt}</h2>
                                </Link>
                              </li>
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