


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

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Jogador{
  nome: string;
  posicao: string;
  imagem: string;
  pose?: string;
}

export function ElencoTela(){

  
const jogadores: Jogador[] = [
  { nome: "Thiago R.", posicao: "Goleiros", imagem: jogador1 },
  { nome: "Tadeu", posicao: "Goleiros", imagem: jogador2 },
  { nome: "Ezequiel", posicao: "Goleiros", imagem: jogador3 },
  { nome: "José Vitor", posicao: "Goleiros", imagem: jogador4 },

  { nome: "Anthony", posicao: "Zagueiros", imagem: jogador5 },
  { nome: "Messias", posicao: "Zagueiros", imagem: jogador6 },
  { nome: "Lucas Ribeiro", posicao: "Zagueiros", imagem: jogador7 },
  { nome: "Luiz Felipe", posicao: "Zagueiros", imagem: jogador8 },

  { nome: "Lucas Lovat", posicao: "Laterais", imagem: jogador9 },
  { nome: "Willian Lepo", posicao: "Laterais", imagem: jogador10 },
  { nome: "Danilo", posicao: "Laterais", imagem: jogador11 },
  { nome: "Diego Caito", posicao: "Laterais", imagem: jogador12 },

  { nome: "Baldoria", posicao: "Volantes", imagem: jogador13 },
  { nome: "Marcão", posicao: "Volantes", imagem: jogador14 },
  { nome: "Aloisio", posicao: "Volantes", imagem: jogador15 },
  { nome: "Juninho", posicao: "Volantes", imagem: jogador16 },
  { nome: "Rodrgo A.", posicao: "Volantes", imagem: jogador17 },

  { nome: "Rafael Gava", posicao: "Meias", imagem: jogador18 },
  { nome: "Vitinho", posicao: "Meias", imagem: jogador19 },
  { nome: "Jean Carlos", posicao: "Meias", imagem: jogador20 },
  { nome: "Banitez", posicao: "Meias", imagem: jogador21 },

  { nome: "Arthur Caike", posicao: "Atacantes", imagem: jogador22 },
  { nome: "Anselmo Ramon", posicao: "Atacantes", imagem: jogador23 },
  { nome: "Vitor Hugo", posicao: "Atacantes", imagem: jogador24 },
  { nome: "Welliton Mathues", posicao: "Atacantes", imagem: jogador25 },
  { nome: "Zé Hugo", posicao: "Atacantes", imagem: jogador26 },
  { nome: "Jaja", posicao: "Atacantes", imagem: jogador27 },
  { nome: "Facundo Barceló", posicao: "Atacantes", imagem: jogador28 },
  { nome: "Esli Garcia", posicao: "Atacantes", imagem: jogador29 },
  { nome: "Hallerandrio", posicao: "Atacantes", imagem: jogador30 },
  { nome: "Pedrinho", posicao: "Atacantes", imagem: jogador31 },
];


    return(
        <div className="flex flex-row items-center">


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                navigation
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
                }} className="w-full max-w-7xl bg-amber-400 h-50"
               >


                <SwiperSlide className="bg-amber-200 w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl">
                        <h2 className="">Goleiros</h2>
                    </div>

                    <div className="flex  justify-center gap-10 w-full">
                    {jogadores.filter((j) => j.posicao === "Goleiros")
                    .map((jogador, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                            src={jogador.imagem}
                            alt={jogador.nome}
                            className="w-[250px] sm:w-[600px]"
                            >
                            </img>
                            <strong>{jogador.nome}</strong>
                        </div>
                    ))
                    }
                    </div>
                </SwiperSlide>
            
        </Swiper>
        </div>
    )

}