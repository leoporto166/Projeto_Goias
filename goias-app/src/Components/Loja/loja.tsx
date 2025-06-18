import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import "./loja.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import ug from "../../Assets/u.goleiro.webp"
import ujl from "../../Assets/u.joglinha.jpg"
import urjl from "../../Assets/ur.joglinha.jpg"

export function Loja(){
    return(
    
        <article className="loja">
            <div className="dividir">

            </div>

            <div className="colecao">
                <h1>Green - Loja oficial</h1>
            </div>

            <Link to="/">
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
                    }} className="uniforme"
                   >
                    <SwiperSlide>
                        <div>
                            <img src={ug} alt="unifome 2024 goleiro" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={ujl} alt="unifome 2024 jogador de linha" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={urjl} alt="unifome reserva 2024 jogador de linha" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Link>

            <div className="dividir">

            </div>
        </article>
    )
}