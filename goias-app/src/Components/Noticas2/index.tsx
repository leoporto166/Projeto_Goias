
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import card1 from "../../Assets/tadeu_ramom.jpeg"
import card3 from "../../Assets/benitez.webp"


import logo from "../../Assets/logo-goias-esporte-clube-256.png";
import crb from "../../Assets/crb.png"
import atle from "../../Assets/athletic.png"
import chape from "../../Assets/chape.png"
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import n1 from "../../Assets/Elenco goias.webp"



  const partidas: PartidasProps[]=[
    {logo1: crb, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "12º rodada", data: "Domingo, Junho 14, 16h00", estadio: "Estadio Rei Pelé"},

    {logo1: logo, logo2: atle, titulo: "Campeonato brasileiro serie B", rodada: "13º rodada", data: "Segunda, Junho 23, 21h00", estadio: "Estadio Haile Pinheiro", ingresso: "Comprar ingresso"},

    {logo1: chape, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "14º rodada", data: "Domingo, Junho 29, 19h00", estadio: "Arena Condá"},

  ]

interface PartidasProps{
  logo1: string;
  logo2: string;
  titulo: string;
  rodada: string;
  data: string;
  estadio: string;
  ingresso?: string;
}

interface NoticiasProps{
    img: string;
    legenda: string;
    button?: string
    id?: number;
    data?: string;
}

interface VideosProps{
    link: string;
    legenda: string;
    button: string;
    data: string;
    id: number;
    
}

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Tabela } from '../tabela';


export function Noticias2(){
    
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {

        function atualizarLargura() {
        setLargura(window.innerWidth);

        }

        window.addEventListener("resize", atualizarLargura);
        return () => window.removeEventListener("resize", atualizarLargura)

    }, [])

    const [indexBusca, setIndexBusca] = useState(0)

    const noticia: NoticiasProps[] = [
       {img: card1, legenda: "GOIAS VENCE ATLETICO EM CLASSICO EMOCIONANTE", button: "LER MAIS"},
       {img: card3, legenda: "ANUNCIO OFICIAl: MARTIN BENITÉZ", button: "LER MAIS"},

    ]

    const noticia2: NoticiasProps[] =[
        {img: n1, legenda: "Noticia Ofical: Treino realizado!", id:1, data: "06/08/25"},
        
        {img: n1, legenda: "Noticia Ofical: Treino bbbrealizado!", id:2, data: "06/08/25"},

        {img: n1, legenda: "Noticia Ofical: Treino aaarealizado!", id:3, data: "06/08/25"}
    ]

    const videos: VideosProps[] = [
        {
            link: "GmCyxZt_G1I", legenda: "COLETIVA AO VIVO | JUNINHO | GOIÁS E.C", button: "VER NO YOUTUBE", data: "06/08/2025", id: 1
        }
    ]



    return(

        <div className="">
            <main className='flex flex-col justify-center items-center xl:flex-row '>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination = {{clickable: true}}
                    className="w-full relative"
            
                    ><style>
                        {`
                        .swiper-pagination {
                            margin-bottom: 2rem;
                        }
            
                        .swiper-pagination-bullet {
                            background-color: #000F0F !important; /* azul (Tailwind blue-500) */
                            opacity: 1;
                            }
                            .swiper-pagination-bullet-active {
                            background-color: #ffffff !important; /* verde (Tailwind green-500) */
                            }
                        `}
                    </style>
                    {noticia.map((not) => (
                        <SwiperSlide className="">
                        <div className="h-96 bg-cover bg-no-repeat bg-center flex p-4 items-start flex-col justify-end md:bg-top"
                        style={{ backgroundImage: `url(${not.img})` }}>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/90'></div>
                            <div className='text-white text-2xl z-10'>{not.legenda.toUpperCase()}</div>
                            <div className='text-white z-10 bg-green-400 py-1 w-[150px] text-center rounded mt-4 cursor-pointer mb-20'>{not
                            .button?.toUpperCase()}</div>
                        </div>
                    </SwiperSlide>
            
                    ))}
                </Swiper>
                <div className='flex items-center justify-center mt-[-30px] xl:mt-0 bg-white z-11 shadow-lg xl:w-[400px]'>
                        {
                            indexBusca === 0 ? (
                            <div className='w-[24px]'></div>
                            ) : (
                                <MdOutlineArrowBackIos className='swiper-button-prev text-2xl cursor-pointer'></MdOutlineArrowBackIos>
                            )
                        }
            
                            <article className='flex flex-col justify-center items-center gap-5 sm:w-[400px]  z-11 px-2 mb-10  xl:p-0 xl:shadow-none xl:mb-0 xl:mt-0 md:w-[520px] bg-white xl:h-[384px]'>
            
                                <div className='w-full flex items-center gap-2 xl:justify-center'>
                                    <div className='w-full h-[1px] bg-green-950 xl:w-[90px]'></div>
                                    <div>PARTIDAS</div>
                                    <div className='w-full h-[1px] bg-green-950 xl:w-[90px]'></div>
                                </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation = {{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                            //autoplay = {{delay: 5000}}
                            onSlideChange={(swiper) => setIndexBusca(swiper.activeIndex)}
                            className="w-[250px] h-[220px] md:w-[500px] xl:w-[280px] "
                        >
                            {partidas.map((partida) => (
            
                            <SwiperSlide>
                            <div className=" items-center justify-center flex  text-black flex-col">
                                <div className='text-lg text-gray-800'>
                                    {partida.titulo}
                                </div>
                                <div className='text text-gray-600'>
                                    {partida.data}
                                </div>
                                <div className='text text-gray-600'>
                                    {partida.estadio}
                                </div>
                                <div className=' flex gap-6 justify-between items-center w-full h-[40px]'>
                                    <div className='w-[50px]'>
                                        <img src={partida.logo1} ></img>
                                    </div>
                                    <div>
                                        <h1 className='text-3xl'>X</h1>
                                    </div>
                                    <div>
                                        <img className='w-[50px]' src={partida.logo2}>
                                        </img>
                                    </div>
                                </div>
                                {
                                    partida.ingresso && (
                                        <div
                                            className='bg-green-700 text-white p-1 rounded cursor-pointer'
                                            >{partida.ingresso}
                                        </div>
                                    )
            
                                }
                                {
                                    partida.ingresso ? (
                                        <div className="overflow-hidden whitespace-nowrap w-full  mt-[8px]">
                                    <div className="animate-marquee inline-block text-gray-200 text-xl">
                                        {Array(20).fill("VAI PRA CIMA DELES GOIÁS•")}
                                    </div>
                                </div>
                                    ) : (
                                        <div className="overflow-hidden whitespace-nowrap w-full  mt-[40px]">
                                            <div className="animate-marquee inline-block text-gray-300 text-xl">
                                                {Array(20).fill("VAI PRA CIMA DELES GOIÁS•")}
                                            </div>
                                        </div>
                                    )
                                }
            
            
            
                            </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                        </article>
                        <MdOutlineArrowForwardIos className='swiper-button-next text-2xl cursor-pointer'></MdOutlineArrowForwardIos>
                </div>
            </main>

            <section className='bg-black'>
                <div className='w-full flex flex-col justify-center mt-4 xl:mt-0 items-center'>
                    <div className="my-2">
                        <h1 className='text-white text-xl sm:text-2xl font-semibold'>TABELA</h1>
                
                        <Tabela></Tabela>
                    </div>
                </div>

                    <div className='flex w-full justify-center items-center'>
                        <div className='w-[380px] flex flex-col items-center justify-center sm:w-[650px]'>
                            <div className='w-full flex text-lg font-bold mb-2 px-1.5'>
                                    <h1 className='text-white'>UlTIMAS NOTICIAS</h1>
                            </div>

                            {
                                largura < 1024 ? (
                                    <div className='flex flex-col justify-center items-center w-full py-2 px-1.5 lg:flex-row lg:flex-wrap'>
                                    {
                                        noticia2.slice(0, 2).map((not) => (
                                        <div key={not.id} className='flex flex-col items-center'>
                                            <div>
                                            <img src={not.img} alt={not.legenda} className='w-full' />
                                            </div>

                                            <div className='bg-black text-white mt-[-20px] w-[320px] sm:w-[550px] mb-10 z-11 relative'>
                                            <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                {not.legenda.toLocaleUpperCase()}
                                            </h1>

                                            <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                <div className='w-[40%] h-[1px] bg-green-200'></div>
                                                <h2 className='px-1'>{not.data}</h2>
                                                <div className='w-[40%] h-[1px] bg-green-200 mr-1'></div>
                                            </div>
                                            </div>
                                        </div>
                                        ))
                                    }
                                    </div>
                                ) : (
                                    <div>
                                        <div className='flex flex-col justify-center items-center w-full py-2 px-1.5 '>
                                        {
                                            noticia2.slice(0,1).map((not) => (
                                            <div key={not.id} className='flex flex-col items-center'>
                                                <div>
                                                <img src={not.img} alt={not.legenda} className='w-full' />
                                                </div>
                                                <div className='bg-black text-white mt-[-20px] w-[320px] sm:w-[550px] mb-10 z-11 relative'>
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {not.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                    <div className='w-[40%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'>{not.data}</h2>
                                                    <div className='w-[40%] h-[1px] bg-green-200 mr-1'></div>
                                                </div>
                                                </div>
                                            </div>
                                            ))
                                        }
                                        </div>


                                        <div className='flex flex-row justify-center items-center w-full py-2 px-1.5 gap-4'>
                                        {
                                            noticia2.slice(1,3).map((not) => (
                                            <div key={not.id} className='flex flex-col items-center'>

                                                <div>
                                                <img src={not.img} alt={not.legenda} className='w-full' />
                                                </div>
                                                <div className="bg-black text-white mt-[-20px] w-[300px] mb-10 z-11 relative">
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {not.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                    <div className='w-[40%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'>{not.data}</h2>
                                                    <div className='w-[40%] h-[1px] bg-green-200 mr-1'></div>
                                                </div>
                                                </div>
                                            </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                )
                                }

                        </div>
                        </div>
            </section>

            <section className='flex flex-col justify-center items-center my-2'> 
                <div className='w-[380px] flex flex-col sm:w-[650px]'>
                    <h1 className='font-bold'>VIDEOS</h1>
                </div>

                {
                    largura < 1024 ? (
                        <div>
                            {
                                videos.slice(0, 2).map((video) => (
                                    <div key={video.id} className='w-[380px] flex flex-col sm:w-[650px] justify-center items-center'>
                                        <iframe
                                            className="w-full aspect-video"
                                            src={`https://www.youtube.com/embed/${video.link}`}
                                            title={video.legenda}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                        <div className=' bg-white mt-[-30px] shadow w-[320px] sm:w-[550px] mb-10 z-11 relative'>
                                            <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                {video.legenda.toLocaleUpperCase()}
                                            </h1>

                                            <div className='ml-3  text-center flex items-center'>
                                                <div className='w-[40%] h-[1px] bg-green-200'></div>
                                                <h2 className='px-1'>{video.data}</h2>
                                                <div className='w-[40%] h-[1px] bg-green-200 mr-1'></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </section>


            
            
        </div>
    )
}
