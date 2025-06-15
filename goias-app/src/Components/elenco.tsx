import "./elenco.css"


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useState } from "react";

import jogador1 from "../Assets/TR-G.png"
import jogador2 from "../Assets/TD-G.png"
import jogador3 from "../Assets/EZ-G.png"
import jogador4 from "../Assets/JV-G.png"

import jogador5 from "../Assets/AT-Z.png"
import jogador6 from "../Assets/MS-Z.png"
import jogador7 from "../Assets/LR-Z.png"
import jogador8 from "../Assets/LF-Z.png"

import jogador9 from "../Assets/LL-L.png"
import jogador10 from "../Assets/WL-L.png"
import jogador11 from "../Assets/DN-L.png"
import jogador12 from "../Assets/DG-L.png"

interface Jogador{
  nome: string;
  posicao: string;
  imagem: string;
}


export function Elenco(){
  const[ativoIndex, setAtivoIndex] = useState<number | null>(null);
  
  const jogadores: Jogador[] = [
    {nome: "Thiago R.", posicao: "GOL", imagem: jogador1},
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
                  1024:{
                    slidesPerView: 2.5,
                  },
                  1440:{
                    slidesPerView: 3.5,
                  },
                }} className="elenco"
               >

                
                  {jogadores.map((jogador, index) => (
                    <SwiperSlide key={index}>
                      <div 
                        className={`jogador ${ativoIndex === index ? "ativo" : ""}`}
                        onClick={() => setAtivoIndex(ativoIndex === index ? null : index)}
                      >
                        <img src={jogador.imagem} alt={`Imagem de ${jogador.nome}`} />

                        <div 
                          className={`inf ${ativoIndex === index ? "ativo" : ""}`}
                        >
                          <h3>{jogador.posicao}</h3>
                          <p>{jogador.nome}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                

            </Swiper>
        </article>
    )
}