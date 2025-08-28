import { useEffect, useState } from "react";
import { Footer } from "../../Components/footer";
import { Header } from "../../Components/Header/header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowDown } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";



interface SocioProps {
    descricao: string;
    informacao1: string;
    informacao2: string;
    informacao3: string;
    informacao4: string;
    informacao5: string;
    informacao6: string;
    preco: string;
    titulo: string;
    button: string;
    id: string;
}

interface SocioImgProps {
    img: string;
    id: string;
}

export function Esmeralda(){


    const [socio, setSocio] = useState<SocioProps[]>([])
    const [socioImg, setSocioImg] = useState<SocioImgProps[]>([])

    useEffect(() => {


        const socioRef  = collection(db, "Socio")
        const queryRef = query(socioRef, orderBy("id", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as SocioProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    descricao: data.descrição,
                    informacao1: data.informacao1,
                    informacao2: data.informacao2,
                    informacao3: data.informacao3,
                    informacao4: data.informacao4,
                    informacao5: data.informacao5,
                    informacao6: data.informacao6,
                    preco: data.preco,
                    titulo: data.titulo,
                    button: data.button,
                    id: doc.id,
                })
            })

            setSocio(lista)
            console.log(lista)

        })

        const socioImgRef = collection(db, "SocioImg")
        const queryRefImg = query(socioImgRef, orderBy("id", "desc"))

        const unsubImg = onSnapshot(queryRefImg, (snapshot) => {

            let lista = [] as SocioImgProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    id: data.id,
                    img: data.img
                })
            })

            setSocioImg(lista)
            console.log(lista)

        })


        return () => {
            unsub()
            unsubImg()
        }

    }, [])
    return(
        <main>
            <Header />

            <section>
            { 
                socioImg.slice(1).map((img, index) => (
                <div key={index}>
                    <div
                    style={{
                    backgroundImage: `linear-gradient(rgba(0,35,0,0.7), rgba(0,25,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)), url(${img.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-[100%] h-[60vh] lg:h-[50vh]"
                    >
                        <div className="flex flex-col justify-center items-center w-[100%] h-[50vh] text-white ">
                            <div className="">
                                <h2 className="text-2xl px-2 sm:text-3xl">
                                    QUEM É ESMERALDINO É
                                </h2>

                                <h1 className="text-6xl font-bold px-2 sm:text-7xl">
                                    ESMERALDA
                                </h1>

                                <h3 className="mt-5 text-lg px-2 sm:text-xl">FAÇA PARTE DO MAIOR DO CENTRO-OESTE</h3>

                                <div className="text-center mt-10 font-bold text-lg flex flex-col justify-center items-center">

                                    <h4 className="">CONHEÇA OS NOVOS PLANOS</h4>

                                    <FaArrowDown className="mt-10"></FaArrowDown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))

            }

                <div className="bg-black w-[100%] h-[100vh] mt-[-50px]">
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween = {0}
                navigation
                //autoplay = 5000
                breakpoints={{
                  320: {  
                    slidesPerView: 1.3,
                    spaceBetween: 25
                  },
                  640:{
                    slidesPerView: 1.5,
                    spaceBetween:20
                  }, 
                  641:{
                    slidesPerView: 1.7
                    
                  },
                  760:{
                    slidesPerView: 2.5
                  },
                  910:{
                    slidesPerView: 2.8
                  },
                  1024:{
                    slidesPerView: 3.2,
                  },
                  1250:{
                    slidesPerView: 4,
                  },
                  1600:{
                    slidesPerView: 5.2,
                  }
                }} className="w-full"
               >

                <div className="">
                    {
                        socio.map((socio) => (
                            <SwiperSlide key={socio.id} className="px-2 flex flex-col justify-center items-center">
                                <div className="transform hover:-translate-y-4 transition-all duration-800 mt-5">
                                    <div className="w-[280px] flex flex-col justify-center items-center py-2 bg-white rounded-t-xl mb-[-2px]">
                                        <div className="text-2xl font-semibold">
                                                {socio.titulo}
                                            </div>
                                            <div className="py-2">
                                                <h3 className="font-normal text-green-900/80">{socio.descricao}</h3>
                                        </div>
                                        <div className="p-2 border rounded border-green-600/30 font-bold">
                                            {Number(socio.preco).toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL"
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-[280px] flex flex-col h-[500px] items-center py-2 bg-white text-[16px]
                                    ">
                                            <div className="py-2 px-2 flex flex-col justify-start items-start">
                                                <div className="flex justify-center items-center gap-2">
                                                    <div className="w-[10px]">
                                                        <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                    </div>
                                                    <h3 className="py-2">{socio.informacao1}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                <div className="flex justify-center items-center gap-2">
                                                    <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                    <h3 className="py-2">{socio.informacao2}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                <div className="flex justify-center items-center gap-2">
                                                <div className="w-[10px]">
                                                    <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                </div>
                                                <h3 className="py-2">{socio.informacao3}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                {
                                                    socio.informacao4 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao4}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                                 {
                                                    socio.informacao5 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao5}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                                 {
                                                    socio.informacao6 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao6}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                            </div>
                                    </div>
                                    <div className="w-[280px] flex flex-col py-2 bg-white mt-[-2px] rounded-b-xl justify-center items-center h-[50px]">
                                        <div className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1  text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500 w-[98%]">
                                                {socio.button}
                                        </div>
                                    </div>
                                </div>a
                            </SwiperSlide>
                        ))
                    }
                </div>
                
                    

               </Swiper>
                </div>
            </section>

            <section>

            </section>
            
            <Footer />
        </main>
    )
}