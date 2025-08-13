

import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from "../../Assets/logo-goias-esporte-clube-256.png";

import p1 from "../../Assets/p1.jpeg"
import p2 from "../../Assets/p2.png"
import p3 from "../../Assets/p3.png"
import p4 from "../../Assets/p4.png"
import p5 from "../../Assets/p5.png"
import p6 from "../../Assets/p6.jpeg"
import p7 from "../../Assets/p7.jpeg"
import p8 from "../../Assets/p8.jpeg"
import p9 from "../../Assets/p9.jpeg"
import p10 from "../../Assets/p10.jpeg"
import p11 from "../../Assets/p11.jpg"
import p12 from "../../Assets/p12.jpg"
import p13 from "../../Assets/p13.png"
import p14 from "../../Assets/p14.jpeg"
import p15 from "../../Assets/p15.png"
import p16 from "../../Assets/p16.jpeg"
import p17 from "../../Assets/p17.jpeg"
import p18 from "../../Assets/p18.png"
import p19 from "../../Assets/p19.png"
import p20 from "../../Assets/p20.jpg"
import p21 from "../../Assets/p21.png"
import p22 from "../../Assets/p22.png"
import p23 from "../../Assets/p23.png"
import p24 from "../../Assets/p24.png"
import p25 from "../../Assets/p25.png"
import p26 from "../../Assets/p26.png"

interface Patrocionios{
    img: string;
}


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
            {img: p22},
            {img: p23},
            {img: p24},
            {img: p25},
            {img: p26},

        ]

export function Footer(){
    return(

        <div>
                <div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex justify-center items-center w-11/12'>
                                <div className='w-full h-[1px] bg-green-800'>
                                </div>
                                <h1 className='font-bold text-xl px-2 sm:text-2xl'>Patrocinadores</h1>
                                <div className='w-full h-[1px] bg-green-800'>
                                </div>
                            </div>
                    </div>
                    <div className=' mt-[-50px] w-full flex flex-col justify-center items-center'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <div className='flex flex-wrap w-11/12 justify-center items-center gap-2 mt-20'>
                                {
                                    patrocinios.slice(0, 7).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[100px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                                {
                                    patrocinios.slice(7, 14).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[100px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                                {
                                    patrocinios.slice(14, 19).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[100px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                                {
                                    patrocinios.slice(19, 23).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[100px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                                {
                                    patrocinios.slice(23, 25).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[100px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                                {
                                    patrocinios.slice(25).map((pat) => (
                                        <div>
                                            <img src={pat.img} alt=""  className='w-[40px]'/>
        
                                        </div>
        
                                    ))
        
                                }
                                <div className='w-full h-[1px] bg-green-800 mt-1'>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>

                <footer className='relative bg-black'>
                    <Link to={"/Projeto_Goias/"}>
                        <div className='w-full flex justify-center items-center mt-40'>
        
                            <img src={logo} alt="Escudo Goias" className='absolute w-[150px]'></img>
        
                        </div>
                    </Link>
                    <div className='w-full flex justify-center items-center mt-20 '>
                            <div className='w-11/12 text-white flex flex-col justify-center items-center mt-4'>
                                <h1 className='text-xl'>REDES DO VERDÃO</h1>
                                <div className='grid grid-cols-3 gap-2 mt-2 mb-10'>
                                    <a href="https://www.youtube.com/@TVGoias" aria-label="YouTube" target='_blank'>
                                    <FaYoutube size={40}/>
                                    </a>
                                    <a href="https://www.tiktok.com/@goiasec" aria-label="TikTok"
                                    target='_blank'>
                                    <SiTiktok size={40}/>
                                    </a>
                                    <a href="https://x.com/goiasoficial" aria-label="X (Twitter)"
                                    target='_blank'>
                                    <FaTwitter size={40}/>
                                    </a>
                                    <a href="https://www.instagram.com/goiasoficial/" aria-label="Instagram"
                                    target='_blank'>
                                    <FaInstagram size={40}/>
                                    </a>
                                    <a href="https://web.facebook.com/goiasoficial?locale=pt_BR" aria-label="facebook"
                                    target='_blank'>
                                    <FaFacebook size={40}/>
                                    </a>
                                    <a href="https://www.linkedin.com/company/goi%C3%A1s-esporte-clube/posts/?feedView=all" aria-label="linkedin"
                                    target='_blank'>
                                    <FaLinkedin size={40}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                </footer>
        </div>
    )
}