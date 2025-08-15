
import { Header } from "../../Components/Header/header"

import jogador1 from "../../Assets/TR-G-2.png"
import jogador2 from "../../Assets/TD-G-2.png"
import jogador3 from "../../Assets/EZ-G-2.png"
import jogador4 from "../../Assets//JV-G-2.png"

import jogador5 from "../../Assets/AT-Z-2.png"
import jogador6 from "../../Assets/MS-Z-2.png"
import jogador7 from "../../Assets/LR-Z-2.png"
import jogador8 from "../../Assets/LF-Z-2.png"

import jogador9 from "../../Assets/LL-L-2.png"
import jogador10 from "../../Assets/WL-L-2.png"
import jogador11 from "../../Assets/DN-L-2.png"
import jogador12 from "../../Assets/DG-L-2.png"

import jogador13 from "../../Assets/BD-V-2.png"
import jogador14 from "../../Assets/MR-V-2.png"
import jogador15 from "../../Assets/AL-V-2.png"
import jogador16 from "../../Assets/JN-V-2.png"
import jogador17 from "../../Assets/RA-V-2.png"

import jogador18 from "../../Assets/RG-M-2.png"
import jogador19 from "../../Assets/VT-M-2.png"
import jogador20 from "../../Assets/JC-M-2.png"
import jogador21 from "../../Assets/BZ-M-2.png"

import jogador22 from "../../Assets/AC-A-2.png"
import jogador23 from "../../Assets/AR-A-2.png"

import jogador25 from "../../Assets/WM-A-2.png"
import jogador26 from "../../Assets/ZH-A-2.png"
import jogador27 from "../../Assets/JJ-A-2.png"
import jogador28 from "../../Assets/FB-A-2.png"
import jogador29 from "../../Assets/EG-A-2.png"

import jogador31 from "../../Assets/PD-A-2.png"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Jogador{
  nome: string;
  posicao: string;
  imagem: string;
  numero: number;
}


const posicoes = [
  "Goleiros",
  "Zagueiros",
  "Laterais",
  "Volantes",
  "Meias",
  "Atacantes"
];

export function ElencoTela(){

  
const jogadores: Jogador[] = [
  { nome: "Thiago R.", posicao: "Goleiros", imagem: jogador1, numero: 1 },
  { nome: "Tadeu", posicao: "Goleiros", imagem: jogador2, numero: 23 },
  { nome: "Ezequiel", posicao: "Goleiros", imagem: jogador3, numero: 12 },
  { nome: "José Vitor", posicao: "Goleiros", imagem: jogador4, numero: 0 },

  { nome: "Anthony", posicao: "Zagueiros", imagem: jogador5, numero: 13 },
  { nome: "Messias", posicao: "Zagueiros", imagem: jogador6, numero: 75 },
  { nome: "Lucas Ribeiro", posicao: "Zagueiros", imagem: jogador7, numero: 14 },
  { nome: "Luiz Felipe", posicao: "Zagueiros", imagem: jogador8, numero: 3 },

  { nome: "Lucas Lovat", posicao: "Laterais", imagem: jogador9, numero: 36 },
  { nome: "Willian Lepo", posicao: "Laterais", imagem: jogador10, numero: 97 },
  { nome: "Danilo", posicao: "Laterais", imagem: jogador11, numero: 66 },
  { nome: "Diego Caito", posicao: "Laterais", imagem: jogador12, numero: 20 },

  { nome: "Baldoria", posicao: "Volantes", imagem: jogador13, numero: 55 },
  { nome: "Marcão", posicao: "Volantes", imagem: jogador14, numero: 77 },
  { nome: "Aloisio", posicao: "Volantes", imagem: jogador15, numero: 16 },
  { nome: "Juninho", posicao: "Volantes", imagem: jogador16, numero: 28 },
  { nome: "Rodrgo A.", posicao: "Volantes", imagem: jogador17, numero: 32 },

  { nome: "Rafael Gava", posicao: "Meias", imagem: jogador18, numero: 8 },
  { nome: "Vitinho", posicao: "Meias", imagem: jogador19, numero: 22 },
  { nome: "Jean Carlos", posicao: "Meias", imagem: jogador20, numero: 21 },
  { nome: "Benitez", posicao: "Meias", imagem: jogador21, numero: 10 },

  { nome: "Arthur Caike", posicao: "Atacantes", imagem: jogador22, numero: 45 },
  { nome: "Anselmo Ramon", posicao: "Atacantes", imagem: jogador23, numero: 9 },
  { nome: "Welliton Mathues", posicao: "Atacantes", imagem: jogador25, numero: 11 },
  { nome: "Zé Hugo", posicao: "Atacantes", imagem: jogador26, numero: 71 },
  { nome: "Jaja", posicao: "Atacantes", imagem: jogador27, numero: 7 },
  { nome: "Facundo Barceló", posicao: "Atacantes", imagem: jogador28, numero: 31 },
  { nome: "Esli Garcia", posicao: "Atacantes", imagem: jogador29, numero: 15 },
  { nome: "Pedrinho", posicao: "Atacantes", imagem: jogador31, numero: 17 },
];


    return(

        
    <div>
      <Header />

      
        {posicoes.map((posicao) => ( 
          <div key={posicao} className="w-full mt-10">
            <h2 className="text-xl sm:text-2xl w-full font-bold text-center sm:text-start px-2"
            style={{color: "#165953"}}
            >
                  {posicao.toUpperCase()}
            </h2>
          

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween = {0}
                navigation
                //autoplay = 5000
                breakpoints={{
                  320: {  
                    slidesPerView: 1.3,
                    spaceBetween: 25
                  },
                  640:{
                    slidesPerView: 1.3,
                    spaceBetween:20
                  }, 
                  641:{
                    slidesPerView: 1.5
                    
                  },
                  760:{
                    slidesPerView: 2.5
                  },
                  910:{
                    slidesPerView: 2.8
                  },
                  1024:{
                    slidesPerView: 3.2,
                  },
                  1250:{
                    slidesPerView: 4,
                  },
                  1600:{
                    slidesPerView: 5.2,
                  }
                }} className="w-full mb-10 mt-2"
               >
              
                
                  
                  <div className=" flex px-2 ">
                    
                    {jogadores
                      .filter((j) => j.posicao === posicao)
                      .map((jogador, index) => (
                      <SwiperSlide key={index}
                          className="flex flex-col items-center justify-center px-2 text-white mt-3">
                        
                              <div
                              style={{ backgroundImage: "linear-gradient(to top, #012623, #5E8C6E, #F2F2F2)"}}
                              className=" flex flex-col items-center w-[300px] rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:shadow relative"
                              
                              >

                                  <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/80 to-transparent pointer-events-none rounded-xl"></div>

                                <img
                                  src={jogador.imagem}
                                  alt={jogador.nome}
                                  className="w-71 h-92"
                                />
                              
                                <div className="absolute mt-78 sm:mt-74 ml-3 w-12/12">
                                  <strong className="text-4xl sm:text-6xl my-2 mr-2"
                                  style={{color: "#5E8C6E"}}
                                  >
                                    {jogador.numero}
                                  </strong>

                                  <strong className="text-2xl"
                                  style={{color:"#F2F2F2"}}
                                  >
                                    {jogador.nome}
                                  </strong>
                                </div>
                            </div>
                          </SwiperSlide>
                        
                        
                      ))}
                  </div>
            </Swiper>
        </div>
          
        ))}
      
    </div>

    )

}