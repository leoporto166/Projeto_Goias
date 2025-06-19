
import "./partidas.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import logo from "../../Assets/logo-goias-esporte-clube-256.png";
import crb from "../../Assets/crb.png"
import atle from "../../Assets/athletic.png"
import chape from "../../Assets/chape.png"

interface PartidasProps{
  logo1: string;
  logo2: string;
  titulo: string;
  rodada: string;
  calendario: React.ReactNode;
  data: string;
  loc: React.ReactNode;
  estadio: string;
  ingresso?: string;
}
export function Partidas(){

  const partidas: PartidasProps[]=[
    {logo1: crb, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "12º rodada", calendario: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /> </svg>), data: "Domingo, Junho 14, 16h00", loc: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> </svg>), estadio: "Estadio Rei Pelé"},

    {logo1: logo, logo2: atle, titulo: "Campeonato brasileiro serie B", rodada: "13º rodada", calendario: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /> </svg>), data: "Segunda, Junho 23, 21h00", loc: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> </svg>), estadio: "Estadio Haile Pinheiro", ingresso: "Comprar ingresso"},

    {logo1: chape, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "14º rodada", calendario: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /> </svg>), data: "Domingo, Junho 29, 19h00", loc: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /> <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /> </svg>), estadio: "Arena Condá"},

  ]
    return(
        <main>
        <div className="title">
                  <h1>Próximas Partidas</h1>
        </div>

               <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1.3}
                spaceBetween={65}
                navigation
                pagination = {{clickable: true}}
                //autoplay = {{delay: 5000}}
                breakpoints={{
                  320: {  
                    slidesPerView: 1.2,
                  },
                  499: {
                    slidesPerView: 1.5,
                  },
                  520:{
                    slidesPerView: 1.6,
                  },
                  600:{
                    slidesPerView: 1.8,
                  },
                  700:{
                    slidesPerView: 1.9,
                  },
                  840:{
                    slidesPerView: 2.2,
                  },
                  920:{
                    slidesPerView: 2.3,
                  },
                  1024:{
                    slidesPerView: 2.5,
                  },
                  1080:{
                    slidesPerView: 2.7,
                  },
                  1230:{
                    slidesPerView: 2.9,
                  },
                  1280:{
                    slidesPerView: 3.2,
                  },
                  1340:{
                    slidesPerView: 3.4,
                  },
                  1460:{
                    slidesPerView: 3.6,
                  },
                  1550:{
                    slidesPerView: 3.8,
                  },
                  1630:{
                    slidesPerView: 4,
                  },
                }} className="part"
               >
                {partidas.map((partida, index) => (
                  <SwiperSlide>
                  <div className={`part-icon ${index === partidas.length - 1 ? "last-card" : ""}`}>
                    <img src={partida.logo1}></img>
                    <img src={partida.logo2}></img>
                    
                    <div className="info">
                        <h1>{partida.titulo}</h1>
                        <h2 id="txt">{partida.rodada}</h2>
        
                      <div className="svg-info">
                        {partida.calendario}
                        <h3 id="txt">{partida.data}</h3>
                      </div>
        
                      <div className="svg-info">
                         {partida.loc}
                        <h3 id="txt">{partida.estadio}</h3>
                      </div>
        
                      
                        {partida.ingresso && (
                          <div className="button">
                            <button>{partida.ingresso}</button>
                          </div>
                        )}
                      </div>
                    
                  </div>
                </SwiperSlide>
                ))}

               </Swiper>
        </main>
        
    )
}