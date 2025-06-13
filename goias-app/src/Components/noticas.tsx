import "./noticias.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';





import card1 from "../Assets/tadeu_ramom.jpeg"
import card2 from "../Assets/benitez.webp"
import card3 from "../Assets/ingressos-goxvolt.png"
import card4 from "../Assets/torcida.png"



import { Navigation, Pagination, Autoplay } from 'swiper/modules';
export function Noticias(){

    return(

        <main>
        
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            pagination = {{clickable: true}}

            className="noticias"
            >
            <SwiperSlide>
                <div className="card-principal">
                <img src = {card1}></img>
                <span className="text">Goias vence classico emocionante contra <br></br>
                Atlético-go</span>
                </div>
            </SwiperSlide>
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


            <SwiperSlide>
            <div className="card"><img src={card3}></img>
            <span className="text">Ingressos a venda:  Goias x Volta R.</span>
            
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="card"><img src={card2}></img>
            <span className="text">Anúncio Ofical: Martin Benítez</span>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="card">
                <img src={card4}></img>
                <span className="text">Contamos com seu apoio</span>
                </div>
            </SwiperSlide>
        
        </Swiper>
        </main>
    )
}