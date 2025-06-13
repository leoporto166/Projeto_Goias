import jogador1 from "../Assets/TR-G.png"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export function Elenco(){
    return(
        <article>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1.3}
                spaceBetween={100}
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
                }} className="part"
               >
                <SwiperSlide>
                    <img src={jogador1}></img>
                </SwiperSlide>

            </Swiper>
        </article>
    )
}