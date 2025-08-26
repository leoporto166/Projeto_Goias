import { useEffect, useState } from "react";
import { Footer } from "../../Components/footer";
import { Header } from "../../Components/Header/header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



interface SocioProps {
    descricao: string;
    informacao1: string;
    informacao2: string;
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
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {

        function atualizarLargura() {
            setLargura(window.innerWidth);
        }

        window.addEventListener("resize", atualizarLargura);

        const socioRef  = collection(db, "Socio")
        const queryRef = query(socioRef, orderBy("preco", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as SocioProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    descricao: data.descricao,
                    informacao1: data.informacao1,
                    informacao2: data.informacao2,
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
        const queryRefImg = query(socioImgRef, orderBy("id", "asc"))

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
            window.removeEventListener("resize", atualizarLargura)
        }

    }, [])
    return(
        <main>
            <Header />

            <section>
            { largura < 700 ? (
                socioImg.slice(1).map((img, index) => (
                <div key={index}>
                    <div>
                    <img src={img.img} alt={`socio-${index}`} />
                    </div>
                </div>
                ))
            ) : (
                socioImg.slice(1).map((img, index) => (
                <div key={index}>
                    <div
                    style={{
                    backgroundImage: `linear-gradient(rgba(0,35,0,0.7), rgba(0,25,0,0.7), rgba(0,0,0,1)), url(${img.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "60vh",
                }}
                    >
                        <div className="flex flex-col justify-center items-center w-[100%] h-[50vh] text-white">
                            <div className="">
                                <h2 className="text-3xl">
                                    QUEM É ESMERALDINO É
                                </h2>

                                <h1 className="text-7xl font-bold">
                                    ESMERALDA
                                </h1>

                                <h3 className="mt-5 text-xl">FAÇA PARTE DO MAIOR DO CENTRO-OESTE</h3>

                                <h4 className="text-center mt-10 font-bold text-lg">CONHEÇA OS NOVOS PLANOS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                ))

            )
            }

                <div className="bg-black w-[100%] h-[50vh]">
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
                    slidesPerView: 1.3,
                    spaceBetween:20
                  }, 
                  641:{
                    slidesPerView: 1.5
                    
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

                {
                    socio.map((socio) => (
                        <SwiperSlide key={socio.id} className="px-2 flex flex-col justify-center items-center">
                            <div className="bg-white w-[250px] h-[300px] text-center py-2">
                                <div>
                                    {socio.titulo}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                
                    

               </Swiper>
                </div>
            </section>

            <section>

            </section>
            
            <Footer />
        </main>
    )
}