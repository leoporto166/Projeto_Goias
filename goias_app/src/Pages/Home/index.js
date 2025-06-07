import { Link } from "react-router-dom";

import { useState } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import logo from "../../img/logo-goias-esporte-clube-256.png";
import card1 from "../../img/tadeu_ramom.jpeg"
import card2 from "../../img/benitez.webp"
import card3 from "../../img/ingressos-goxvolt.png"
import card4 from "../../img/torcida.png"

import part1 from "../../img/goiasxvolta.png"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo-area">
            <a href="/">
              <img
                src={logo}
                alt="Logo Goiás Esporte Clube"
                className="logo"
              />
            </a>
            <div className="divider"></div>
            <span className="numero">33</span>
          </div>
          
          <div className="login">
                <button className="signin-btn">Sign in</button>
          </div>  
          

          <ul className={`nav-list ${menuActive ? "active" : ""}`}>
            <li>
              <Link to="/">Ingressos</Link>
            </li>
            <li>
              <Link to="/">Loja</Link>
            </li>
            <li>
              <Link to="/">Seja Esmeralda</Link>
            </li>
            <li>
              <Link to="/">Clube</Link>
            </li>
            <li>
              <Link to="/">Futebol</Link>
            </li>
            <li>
              <Link to="/">Base</Link>
            </li>
            <li>
              <Link to="/">Noticias</Link>
            </li>
          </ul>

          <div
            className={`mobile-menu ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
      <div className="divider2"></div>
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
              <span className="text">Goias vence classico emocionante contra Atlético-go</span>
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

       <div className="dividir">

       </div>

       <Swiper
       modules={[Navigation, Pagination, Autoplay]}
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
        }} className="part"
       >
        <SwiperSlide>
          <div className="card" id="part">
            <img src={part1}></img>
            <div className="info">
              <h2 id="txt">Campeonato brasileiro serie b</h2>
              <h3 id="txt">11º rodada</h3>
              <h4 id="txt">Domingo, 8/06, 16h00</h4>
            </div>
          </div>
        </SwiperSlide>
       </Swiper>
      </main>
    </div>
    
  );
}

export default Home;