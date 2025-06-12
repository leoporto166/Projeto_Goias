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

import crb from "../../img/crb.png"
import atle from "../../img/athletic.png"
import chape from "../../img/chape.png"

import socio from "../../img/socio.png"

import elenco1 from "../../img/TR-G.png"
import elenco2 from "../../img/TD-G.png"
import elenco3 from "../../img/EZ-G.png"
import elenco4 from "../../img/JV-G.png"

import elenco5 from "../../img/AT-Z.png"
import elenco6 from "../../img/MS-Z.png"
import elenco7 from "../../img/LR-Z.png"
import elenco8 from "../../img/LF-Z.png"

import elenco9 from "../../img/LL-L.png"
import elenco10 from "../../img/WL-L.png"
import elenco11 from "../../img/DN-L.png"
import elenco12 from "../../img/DG-L.png"

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

       <div className="dividir">

       </div>

        
         <div className="title">
          <h1>Próximas Partidas</h1>
        </div>

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
          <div className="part-icon">
            <img src={logo}></img>
            <img src={crb}></img>
            
            <div className="info">
                <h1>Campeonato brasileiro serie B</h1>
                <h2 id="txt">12º rodada</h2>

              <div className="svg-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <h3 id="txt">Domingo, Jun 14, 16h00</h3>
              </div>

              <div className="svg-info">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4"
                class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                
                </svg>
                <h3 id="txt">Estadido Rei Pelé</h3>
              </div>

              <div className="button">
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="part-icon">
            <img src={logo}></img>
            <img src={atle}></img>
            
            <div className="info">
                <h1>Campeonato brasileiro serie B</h1>
                <h2 id="txt">13º rodada</h2>

              <div className="svg-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <h3 id="txt">Domingo, Jun 23, 21h00</h3>
              </div>

              <div className="svg-info">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4"
                class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                
                </svg>
                <h3 id="txt">Estadido Haile Pinheiro</h3>
              </div>

              <div className="button">
                <button>Comprar ingresso</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="part-icon">
            <img src={logo}></img>
            <img src={chape}></img>
            
            <div className="info">
                <h1>Campeonato brasileiro serie B</h1>
                <h2 id="txt">11º rodada</h2>

              <div className="svg-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#114440c4" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <h3 id="txt">Domingo, Jun 29, 19h00</h3>
              </div>

              <div className="svg-info">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#114440c4"
                class="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                
                </svg>
                <h3 id="txt">Arena Condá </h3>
              </div>

              <div className="button">
                
              </div>
            </div>
          </div>

          
        </SwiperSlide>
       </Swiper>

       <div className="dividir">

       </div>

       <div className="socio-img">
        <Link>
        <img src={socio}></img>
        </Link>
        
       </div>

       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={0}
        spaceBetween={200}
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
        }} className="elenco"
       >
        
          <SwiperSlide>
            <div className="j-elenco">
              <img src={elenco1} alt="Jogador" />
            </div> 
          </SwiperSlide>

        
       </Swiper>

      </main>
    </div>
    
  );
}

export default Home;