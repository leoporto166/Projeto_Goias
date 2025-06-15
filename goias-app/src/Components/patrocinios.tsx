import "./patrocinios.css"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import p1 from "../Assets/p.viva.png"
import p2 from "../Assets/p.unimed.png"
import p3 from "../Assets/p.5G.jpg"
import p4 from "../Assets/p.Vedacil.jpg"
import p5 from "../Assets/p.fiber.png"
import p6 from "../Assets/p.Frutos.png"
import p7 from "../Assets/p.cristal.webp"
import p8 from "../Assets/p.Dtc.jpeg"
import p9 from "../Assets/p.Farias.png"
import p10 from "../Assets/p.Josidiyh.png"
import p11 from "../Assets/p.La.png"
import p12 from "../Assets/p.Mica.png"
import p13 from "../Assets/p.vulcano.jpg"
import p14 from "../Assets/p.Italac.jpeg"
import p15 from "../Assets/p.Leinertex.png"
import p16 from "../Assets/p.Colombina.png"
import p17 from "../Assets/p.Wrap.png"
import p18 from "../Assets/p.academy.jpg"
import p19 from "../Assets/p.bambu.jpeg"
import p20 from "../Assets/p.desprag.jpeg"
import p21 from "../Assets/p.multi.jpeg"

interface Patrocionios{
    img: string;
}

export function Patrocionios(){

    const patrocinios: Patrocionios[] =[
            {img: p1},
            {img: p2},
            {img: p3},
            {img: p4},
            {img: p5},
            {img: p6},
            {img: p7},
            {img: p8},
            {img: p9},
            {img: p10},
            {img: p11},
            {img: p12},
            {img: p13},
            {img: p14},
            {img: p15},
            {img: p16},
            {img: p17},
            {img: p18},
            {img: p19},
            {img: p20},
            {img: p21},
        ]
    return(
        <article>
            
            <div className="pat-title">
                    <h1>Patrocinios</h1>
                </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                navigation
                autoplay = {{delay: 5000}}
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
                }} className="patrocinios"
            >

                
                
                    {patrocinios.map((patrocinio) => (
                        <SwiperSlide>
                            <div className="pat-img">
                                <img src={patrocinio.img}></img>
                            </div>
                        </SwiperSlide>
                    ))}
                
            </Swiper>
            
        </article>
    )
}