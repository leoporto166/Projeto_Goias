import "./noticias.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import card1 from "../../Assets/tadeu_ramom.jpeg"
import card2 from "../../Assets/ingressos-goxvolt.png"
import card3 from "../../Assets/benitez.webp"
import card4 from "../../Assets/torcida.png"

interface NoticiaProps{
    img: string;
    legenda: string;
}

interface NoticiasProps{
    img: string;
    legenda: string;
}



import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export function Noticias(){

    const noticia: NoticiaProps[] = [
       {img: card1, legenda: "Goias vence classico emocionante contra Atlético-go"},
    ]

    const noticias: NoticiasProps[] = [
        {img: card2, legenda: "Ingressos a venda: Goias x Volta R."},
        {img: card3, legenda: "Anuncio Oficial: Martin Benitéz"},
        {img: card4, legenda: "Vem pra Serrinha"}
    ]

    return(

        <main>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            pagination = {{clickable: true}}

            className="noticias"
            >
            {noticia.map((not) => (
                <SwiperSlide>
                <div className="card-principal">
                <img src = {not.img}></img>
                <span className="text">{not.legenda} </span><br></br>
                </div>
            </SwiperSlide>
                
            ))}
            </Swiper>

            <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5}
            navigation
            pagination = {{clickable: true}}
            //autoplay = {{delay: 5000}}
            breakpoints={{
            320: {  
                slidesPerView: 1.5,
            },
            640:{
                slidesPerView: 1.3,
            },
            1024:{
                slidesPerView: 2.5,
            },
            1440:{
                slidesPerView: 3.5,
            },
            }}
            className="noticias">
                {noticias.map((not) => (
                    <SwiperSlide>
                    <div className="card">
                        <img src={not.img}></img>
                        <span className="text">{not.legenda}</span>
                        </div>
            </SwiperSlide>

                ))}
            </Swiper>
        </main>
    )
}