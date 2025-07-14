import "./elenco.css"
import { Link } from "react-router-dom";


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from "react";


import jogador1 from "../../Assets/TR-G.png"
import jogador2 from "../../Assets/TD-G.png"
import jogador3 from "../../Assets/EZ-G.png"
import jogador4 from "../../Assets//JV-G.png"

import jogador5 from "../../Assets/AT-Z.png"
import jogador6 from "../../Assets/MS-Z.png"
import jogador7 from "../../Assets/LR-Z.png"
import jogador8 from "../../Assets/LF-Z.png"

import jogador9 from "../../Assets/LL-L.png"
import jogador10 from "../../Assets/WL-L.png"
import jogador11 from "../../Assets/DN-L.png"
import jogador12 from "../../Assets/DG-L.png"

import jogador13 from "../../Assets/BD-V.png"
import jogador14 from "../../Assets/MR-V.png"
import jogador15 from "../../Assets/AL-V.png"
import jogador16 from "../../Assets/JN-V.png"
import jogador17 from "../../Assets/RA-V.png"

import jogador18 from "../../Assets/RG-M.png"
import jogador19 from "../../Assets/VT-M.png"
import jogador20 from "../../Assets/JC-M.png"
import jogador21 from "../../Assets/BZ-M.png"

import jogador22 from "../../Assets/AC-A.png"
import jogador23 from "../../Assets/AR-A.png"
import jogador24 from "../../Assets/VH-A.png"
import jogador25 from "../../Assets/WM-A.png"
import jogador26 from "../../Assets/ZH-A.png"
import jogador27 from "../../Assets/JJ-A.png"
import jogador28 from "../../Assets/FB-A.png"
import jogador29 from "../../Assets/EG-A.png"
import jogador30 from "../../Assets/HL-A.png"
import jogador31 from "../../Assets/PD-A.png"

import pose1 from "../../Assets/jogador-pose.jpg"

interface Jogador{
  nome: string;
  posicao: string;
  imagem: string;
  pose?: string;
}




export function Elenco(){

  useEffect(() => {



  }, [])
  const[ativoIndex, setAtivoIndex] = useState<number | null>(null);
  
  const jogadores: Jogador[] = [
    {nome: "Thiago R.", posicao: "GOL", imagem: jogador1, pose: pose1},
    {nome: "Tadeu", posicao: "GOL", imagem: jogador2},
    {nome: "Ezequiel", posicao: "GOL", imagem: jogador3},
    {nome: "José Vitor", posicao: "GOL", imagem: jogador4},

    {nome: "Anthony", posicao: "ZAG", imagem: jogador5},
    {nome: "Messias", posicao: "ZAG", imagem: jogador6},
    {nome: "Lucas Ribeiro", posicao: "ZAG", imagem: jogador7},
    {nome: "Luiz Felipe", posicao: "ZAG", imagem: jogador8},

    {nome: "Lucas Lovat", posicao: "LAT", imagem: jogador9},
    {nome: "Willian Lepo", posicao: "LAT", imagem: jogador10},
    {nome: "Danilo", posicao: "LAT", imagem: jogador11},
    {nome: "Diego Caito", posicao: "LAT", imagem: jogador12},

    {nome: "Baldoria", posicao: "VOL", imagem: jogador13},
    {nome: "Marcão", posicao: "VOL", imagem: jogador14},
    {nome: "Aloisio", posicao: "VOL", imagem: jogador15},
    {nome: "Juninho", posicao: "VOL", imagem: jogador16},
    {nome: "Rodrgo A.", posicao: "VOL", imagem: jogador17},

    {nome: "Rafael Gava", posicao: "MEI", imagem: jogador18},
    {nome: "Vitinho", posicao: "MEI", imagem: jogador19},
    {nome: "Jean Carlos", posicao: "MEI", imagem: jogador20},
    {nome: "Banitez", posicao: "MEI", imagem: jogador21},

    {nome: "Arthur Caike", posicao: "ATA", imagem: jogador22},
    {nome: "Anselmo Ramon", posicao: "ATA", imagem: jogador23},
    {nome: "Vitor Hugo", posicao: "ATA", imagem: jogador24},
    {nome: "Welliton Mathues", posicao: "ATA", imagem: jogador25},
    {nome: "Zé Hugo", posicao: "ATA", imagem: jogador26},
    {nome: "Jaja", posicao: "ATA", imagem: jogador27},
    {nome: "Facundo Barceló", posicao: "ATA", imagem: jogador28},
    {nome: "Esli Garcia", posicao: "ATA", imagem: jogador29},
    {nome: "Hallerandrio", posicao: "ATA", imagem: jogador30},
    {nome: "Pedrinho", posicao: "ATA", imagem: jogador31},


  ]
  

    return(
        <article>
          <div className="dividir">
            
          </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                navigation
                //autoplay = {{delay: 5000}}
                breakpoints={{
                  320: {  
                    slidesPerView: 1,
                  },
                  640:{
                    slidesPerView: 1,
                  },
                  641:{
                    slidesPerView: 1.5
                  },
                  760:{
                    slidesPerView: 2
                  },
                  910:{
                    slidesPerView: 2.5
                  },
                  1024:{
                    slidesPerView: 2.5,
                  },
                  1100:{
                    slidesPerView: 3,
                  },
                  1330:{
                    slidesPerView: 3.5,
                  },
                  1600:{
                    slidesPerView: 3.8,
                  }
                }} className="elenco"
               >

                
                  {jogadores.map((jogador, index) => (
                    <SwiperSlide key={index}>
                      
                        <Link to={`/Projeto_Goias/detalhesElenco/${jogador.nome}`}>
                          <div
                            className={`jogador ${ativoIndex === index ? "ativo" : ""}`}
                            onMouseEnter={() => setAtivoIndex(index)}
                            onMouseLeave={() => setAtivoIndex(null)}
                          >
                            <img
                            src={ativoIndex === index && jogador.pose ?jogador.pose : jogador.imagem}
                             alt={`Imagem de ${jogador.nome}`} />
                            <div
                              className={`inf ${ativoIndex === index ? "ativo" : ""}`}
                            >
                              <h3>{jogador.posicao}</h3>
                              <p>{jogador.nome}</p>
                            </div>
                          </div>
                        </Link>
                      
                    </SwiperSlide>
                  ))}
                

            </Swiper>

            <span><Link to={"/Projeto_Goias/elenco"}>Elenco completo</Link></span>
        </article>
    )
}