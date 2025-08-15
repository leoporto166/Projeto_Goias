
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import logo from "../../Assets/logo-goias-esporte-clube-256.png";
import crb from "../../Assets/crb.png"
import atle from "../../Assets/athletic.png"
import chape from "../../Assets/chape.png"
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Tabela } from '../tabela';
import CamisaLinha from "../../Assets/CamisaGoias-2025-2.jpg"
import CamisaGOL from "../../Assets/camisaGoiasGOL2025.jpg"
import socio2 from "../../Assets/banner2025_socio.jpg"


import Fundo1 from "../../Assets/FundoTitulos2.png"
import Fundo2 from "../../Assets/FundoLendas2.png"


import { Footer } from '../footer';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseconnection';




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
    id: string;
    data: string;
}

interface VideosProps{
    link: string;
    legenda: string;
    button: string;
    data: string;
    id: string;
    
}

interface LojaProps{
    titulo: string;
    img: string;
    preco: number; 
    button: string;
    link: string;
    id: number;
}



export function Noticias2(){
    
    const [largura, setLargura] = useState(window.innerWidth);

    const [noticias, setNoticias] = useState<NoticiasProps[]>([])
    
    const [videos, setVideos] = useState<VideosProps[]>([])
    
    useEffect(() => {
    
            const notRef = collection(db, "Noticias")
            const queryRef = query(notRef, orderBy("data", "desc"))
    
            const unsub = onSnapshot(queryRef, 
                (snapshot) => {
                    let lista = [] as NoticiasProps[]
    
                    snapshot.forEach((doc) => {
                        const data = doc.data()
                        lista.push({
                            id: doc.id,
                            img: data.img,
                            legenda: data.legenda,
                            data: data.data,
                            button: "Ver Mais"
                        })
                    })
    
                    setNoticias(lista)
            })
    
            const notVideoRef = collection(db, "NoticiasVideos")
            const queryRefVideos = query(notVideoRef, orderBy("data", "desc"))
    
            const unsubVideo = onSnapshot(queryRefVideos, (snapshot) => {
                let lista = [] as VideosProps[]
    
                snapshot.forEach((doc) => {
                    const data = doc.data()
                    lista.push({
                        id: doc.id,
                        link: data.link,
                        legenda: data.legenda,
                        data: data.data,
                        button: "VER NO YOUTUBE"
                    })
                })
    
                setVideos(lista)
            })
    
            return () => {
                unsub()
                unsubVideo()
            }
    
    
    }, [])

    useEffect(() => {

        function atualizarLargura() {
        setLargura(window.innerWidth);

        }

        window.addEventListener("resize", atualizarLargura);
        return () => window.removeEventListener("resize", atualizarLargura)

    }, [])

    const [indexBusca, setIndexBusca] = useState(0)

    /*const noticia: NoticiasProps[] = [
       {img: card1, legenda: "GOIAS VENCE ATLETICO EM CLASSICO EMOCIONANTE", button: "LER MAIS"},
       {img: card3, legenda: "ANUNCIO OFICIAl: MARTIN BENITÉZ", button: "LER MAIS"},

    ]*/

    /*const noticia2: NoticiasProps[] =[
        {img: n2, legenda: "Goiás vence o Operário em casa", id:1, data: "06/08/25"},
        
        {img: n3, legenda: "ATENÇÃO Sócios torcedores!", id:2, data: "09/08/25"},

        {img: n1, legenda: "Goias abre nova loja, veja", id:3, data: "06/08/25"}
    ]*/

    /*const videos: VideosProps[] = [
        {
            link: "GmCyxZt_G1I", legenda: "COLETIVA AO VIVO | JUNINHO | GOIÁS E.C", button: "VER NO YOUTUBE", data: "06/08/25", id: 1
        },
        {
            link: "KouYLb2BFFk", legenda: "BASTIDORES VIVA SORTE | GOIÁS 1x1 REMO", button: "VER NO YOUTUBE", data: "30/07/25", id: 2
        },
        {
            link: "jVs4iQ_kcB0", legenda: "WELLINGTON RATO | ENTREVISTA EXCLUSIVA ", button: "VER NO YOUTUBE", data: "11/07/25", id: 3
        },
    ]*/

    const Loja: LojaProps[] =[
        {
            titulo: "Camisa Linha 01 Masculina - 2025", img: CamisaLinha, preco: 399.99, button: "Comprar", link: "", id:1
        },
        {
            titulo: "Camisa Goleiro 01 Maculina - 2025", img: CamisaGOL, preco: 399.99, button: "Comprar", link: "", id:2
        },
    ]

      const partidas: PartidasProps[]=[
    {logo1: crb, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "12º rodada", data: "Domingo, Junho 14, 16h00", estadio: "Estadio Rei Pelé"},

    {logo1: logo, logo2: atle, titulo: "Campeonato brasileiro serie B", rodada: "13º rodada", data: "Segunda, Junho 23, 21h00", estadio: "Estadio Haile Pinheiro", ingresso: "Comprar ingresso"},

    {logo1: chape, logo2: logo, titulo: "Campeonato brasileiro serie B", rodada: "14º rodada", data: "Domingo, Junho 29, 19h00", estadio: "Arena Condá"},

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
                    {noticias.map((not) => (
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
                <div className='flex items-center justify-center mt-[-30px] xl:mt-0 bg-white z-11 shadow-lg xl:w-[400px] select-none'>
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
                        <div className='w-[380px] flex flex-col items-center justify-center sm:w-[650px] lg:w-[850px] xl:w-[1024px]'>
                            <div className='w-full flex text-lg font-bold mb-2'>
                                    <h1 className='text-white text-xl sm:text-2xl'>UlTIMAS NOTICIAS</h1>
                            </div>

                            {
                                largura < 1024 ? (
                                    <div className='flex flex-col justify-center items-center w-full py-2 px-1.5 lg:flex-row lg:flex-wrap'>
                                    {
                                        noticias.slice(0, 2).map((not) => (
                                        <div key={not.id} className='flex flex-col items-center'>
                                            <div>
                                            <img src={not.img} alt={not.legenda} className='w-full cursor-pointer transition-transform duration-2000 hover:scale-103' />
                                            </div>

                                            <div className='bg-black text-white mt-[-20px] w-[320px] sm:w-[550px] mb-10 z-11 relative'>
                                            <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                {not.legenda.toLocaleUpperCase()}
                                            </h1>

                                            <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                <h2 className='px-1'
                                                style={{ fontVariantLigatures: "none" }}>{not.data}</h2>
                                                <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
                                            </div>
                                            </div>
                                        </div>
                                        ))
                                    }
                                    </div>
                                ) : (
                                    <div>
                                        <div className='flex flex-col justify-center items-center w-full py-2 px-1.5 sm:w-[650px] lg:w-[850px] xl:w-[1024px]'>
                                        {
                                            noticias.slice(0,1).map((not) => (
                                            <div key={not.id} className='flex flex-col items-center sm:w-[650px] lg:w-[850px] xl:w-[1024px]'>
                                                <div>
                                                <img src={not.img} alt={not.legenda} className='w-full cursor-pointer transition-transform duration-2000 hover:scale-103 sm:w-[650px] lg:w-[850px] xl:w-[1024px]' />
                                                </div>
                                                <div className='bg-black text-white mt-[-20px] w-[320px] sm:w-[550px] mb-10 z-11 relative lg:w-[800px] xl:w-[980px]'>
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {not.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                    <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'
                                                    style={{ fontVariantLigatures: "none" }}>{not.data}</h2>
                                                    <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
                                                </div>
                                                </div>
                                            </div>
                                            ))
                                        }
                                        </div>


                                        <div className='flex flex-row justify-center items-center w-full py-2 px-1.5 gap-4 sm:w-[650px] lg:w-[850px] xl:w-[1024px]'>
                                        {
                                            noticias.slice(1,3).map((not) => (
                                            <div key={not.id} className='flex flex-col items-center'>

                                                <div>
                                                <img src={not.img} alt={not.legenda} className='w-full cursor-pointer transition-transform duration-2000 hover:scale-103 sm:w-[650px] lg:w-[850px] xl:w-[1024px]'/>
                                                </div>
                                                <div className="text-white bg-black mt-[-20px] w-[300px] lg:w-[400px] xl:w-[480px] mb-10 z-11 relative">
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {not.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                    <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'
                                                    style={{ fontVariantLigatures: "none" }}>{not.data}</h2>
                                                    <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
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
                <div className='w-[380px] flex sm:w-[650px] lg:w-[850px]  xl:w-[1024px] gap-2 py-2 items-center '>
                    <h1 className='font-bold text-xl sm:text-2xl'>VIDEOS</h1>
                    <div className='w-[1px] h-[25px] bg-green-400'></div>
                    <div className='font-light text-[15px]'><a href='https://www.youtube.com/@TVGoias' target='_blank'>Acessar Canal</a></div>
                </div>

                {
                    largura < 1024 ? (
                        <div>
                            {
                                videos.slice(0, 2).map((video) => (
                                    <div key={video.id} className='w-[380px] flex flex-col sm:w-[650px]  justify-center items-center cursor-pointer'>
                                        <iframe
                                            className="w-full aspect-video"
                                            src={`https://www.youtube.com/embed/${video.link}`}
                                            title={video.legenda}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                        <div className=' bg-green-50 shadow w-full mb-10 z-11 relative'>
                                            <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                {video.legenda.toLocaleUpperCase()}
                                            </h1>

                                            <div className='ml-3  text-center flex items-center'>
                                                <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                <h2 className='px-1'
                                                style={{ fontVariantLigatures: "none" }}>{video.data}</h2>
                                                <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            {
                                videos.slice(0,1).map((video) => (
                                    <div key={video.id} className='w-full flex flex-col justify-center items-center lg:w-[850px] xl:w-[1024px]'>
                                        <iframe
                                            className="lg:w-[850px] xl:w-[1024px] aspect-video"
                                            src={`https://www.youtube.com/embed/${video.link}`}
                                            title={video.legenda}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                        <div className=' bg-green-50 shadow w-full mb-10 z-11 relative'>
                                            <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                {video.legenda.toLocaleUpperCase()}
                                            </h1>

                                            <div className='ml-3  text-center flex items-center'>
                                                <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                <h2 className='px-1'
                                                style={{ fontVariantLigatures: "none" }}>{video.data}</h2>
                                                <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="flex flex-col py-2 gap-4 w-[650px] xl:w-[1024px]">
                                {
                                    videos.slice(1,3).map((video) => (
                                        <div key={video.id} className='flex flex-row items-center lg:w-[850px] xl:w-[1024px] '>

                                            <iframe
                                                className="w-[550px] lg:w-[650px] aspect-video m-0"
                                                src={`https://www.youtube.com/embed/${video.link}`}
                                                title={video.legenda}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>

                                            <div className=' bg-green-50 mt-
                                             shadow w-[300px] z-11 relative h-[307px] flex flex-col lg:w-[100%] lg:h-[365px]'>

                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {video.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-center flex items-center h-screen'>
                                                    <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'
                                                    style={{ fontVariantLigatures: "none" }}>{video.data}</h2>
                                                    <div className='w-[50%] h-[1px] bg-green-200 mr-1 '></div>
                                                </div>
                                            
                                                <a href={`https://www.youtube.com/watch?v=${video.link}`} target='_blank'>
                                                    <div className='flex justify-center bg-green-700 m-1 rounded text-green-50 mb-4 cursor-pointer'>
                                                        {video.button.toLocaleUpperCase()}
                                                    </div>
                                                </a>
                                            </div>

                                            

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </section>

            <section className='flex justify-center items-center flex-col w-full'>

                <div className='w-[380px] flex gap-2 items-center sm:w-[650px] lg:w-[850px] xl:w-[1024px] '>
                    <h1 className='text-xl font-bold py-2'>GOIÁS STORE</h1>
                    <div className='w-[1px] h-[25px] bg-green-400'></div>
                    <div className='font-light text-[15px]'><a href='#' target='_blank'>Acessar Loja</a></div>
                </div>

                {
                    largura < 750 ? (
                    <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        pagination = {{clickable: true}}
                        className="w-[380px] h-[700px] sm:h-[750px] sm:w-[650px] relative"
                        >
                        <style>
                        {`
                        .swiper-pagination {
                            margin-bottom: 2rem;
                        }
            
                        .swiper-pagination-bullet {
                            background-color: #0f0f0f0f !important; /* azul (Tailwind blue-500) */
                            opacity: 1;
                            }
                            .swiper-pagination-bullet-active {
                            background-color: #000F0F !important; /* verde (Tailwind green-500) */
                            }
                        `}
                    </style>
                    {
                        Loja.map((prod) => (
                            <SwiperSlide className=''>
                                <div key={prod.id} className='w-full flex justify-center bg-green-50'>
                                    <img src={prod.img} alt="" className=''></img>
                                </div>

                                <div className='flex- flex-col'>
                                    <h1 className='text-xl font-semibold mt-2'>{prod.titulo}</h1>

                                    <strong className='text-green-800 text-2xl'>
                                        {prod.preco.toLocaleString("pt-BR", {style: "currency",
                                        currency: "BRL"
                                        })}
                                    </strong>

                                    <div className='w-full flex justify-center items-center my-2'>
                                        <div className='w-[100%] bg-green-700 rounded text-center text-white h-8 flex justify-center items-center cursor-pointer'>
                                            <a href={prod.link} target='_blank'>{prod.button}</a>
                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                ) : (
                    <div className='flex gap-4 h-[750px] w-[650px] lg:w-[850px] xl:w-[1024px] mb-[-150px] lg:mb-[-15px]' >
                        {
                        Loja.map((prod) => (
                                <div key={prod.id}>
                                    <div className='w-full flex
                                    justify-center bg-green-50'>
                                        <img src={prod.img} alt=""></img>
                                    </div>
                                    <div className='flex- flex-col'>
                                        <h1 className='text-xl font-semibold mt-2'>{prod.titulo}</h1>
                                        <strong className='text-green-800 text-2xl'>
                                            {prod.preco.toLocaleString("pt-BR", {style: "currency",
                                            currency: "BRL"
                                            })}
                                        </strong>
                                        <div className='w-full flex justify-center items-center'>
                                            <div className='w-[100%] bg-green-700 rounded text-center text-white h-8 flex justify-center items-center cursor-pointer'>
                                                <a href={prod.link} target='_blank'>{prod.button}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        ))
                    }
                            
                    </div>
                )
                }
            </section>

            <section className='flex justify-center items-center flex-col w-full mt-[-30px] mb-20'>

                <div className='w-[380px] flex gap-2 items-center sm:w-[650px] lg:w-[850px] xl:w-[1024px] '>
                    <h1 className='text-xl font-bold py-2'>CLUBE</h1>
                    <div className='w-[1px] h-[25px] bg-green-400'></div>
                    <div className='font-light text-[15px]'><a href='#' target='_blank'>Acessar Página</a></div>
                </div>

                <div className='w-[380px] flex gap-2 items-center sm:w-[650px] lg:w-[850px] xl:w-[1024px] '>

                    <div className=' flex flex-col justify-center items-center gap-2 shadow sm:w-[650px] lg:w-[850px] xl:w-[1024px] p-2'>
                        <img src={Fundo1} className=''></img>
                        <h1 className='text-xl font-semibold'>TÍTULOS</h1>
                        <p className='text-[15px] mb-2'>Saiba mais sobre nossa vitoriosa caminhada</p>
                        <div className='bg-green-700 text-white py-1 mb-4 rounded w-[120px] text-center cursor-pointer hover:bg-white hover:text-green-500 border border-green-500 transition duration-500'>
                            Descubra
                        </div>
                        
                    </div>

                    <div className=' flex flex-col justify-center items-center gap-2 shadow sm:w-[650px] lg:w-[850px] xl:w-[1024px] p-2'>
                        <img src={Fundo2} className=''></img>
                        <h1 className='text-xl font-semibold'>LENDAS</h1>
                        <p className='text-[15px] mb-2'>Saiba mais sobre os ídolos do GOIÁS</p>
                        <div className='bg-green-700 text-white py-1 mb-4 rounded w-[120px] text-center cursor-pointer hover:bg-white hover:text-green-500 border border-green-500 transition duration-500'>
                            Descubra
                        </div>
                        
                    </div>

                </div>

                <div className='w-[380px] flex flex-col gap-2 items-center sm:w-[650px] lg:w-[850px] xl:w-[1024px] mt-2 shadow'>
                    <img src={socio2} className=''></img>
                        <h1 className='text-xl font-semibold'>Sócios</h1>
                        <p className='text-[15px] mb-2'>Saiba mais sobre o programa de sócios</p>
                        <div className='bg-green-700 text-white py-1 mb-4 rounded w-[120px] text-center cursor-pointer hover:bg-white hover:text-green-500 border border-green-500 transition duration-500'>
                            Descubra
                        </div>
                </div>

            </section>

            <Footer></Footer>

 
        </div>
    )
}
