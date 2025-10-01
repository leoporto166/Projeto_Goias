import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../services/firebaseconnection";
import { Header } from "../../Components/Header/header";
import { Footer } from "../../Components/footer";

interface NoticiasProps{
    img: string;
    legenda: string;
    id: string;
    data: string;
}


export function Imagens(){

    const [img, setImg] = useState<NoticiasProps[]>([])

    useEffect(() => {

        const imgRef = collection(db, "Noticias")
        const queryRef = query(imgRef, orderBy("data", "desc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            const lista = [] as NoticiasProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()
                lista.push({
                    id: doc.id,
                    img: data.img,
                    legenda: data.legenda,
                    data: data.data
                })
            })

            setImg(lista)
        })

        return () => {
            unsub()
        }


    }, [])

    return(

        <div>
            <Header></Header>

            <div className="flex flex-col justify-center items-center mt-5">

                <div className="w-full text-lg font-bold mb-2 px-1.5 justify-center items-center sm:justify-start sm:items-start">

                    <div className="w-full text-lg font-bold mb-2 px-1.5 justify-center items-center sm:justify-start sm:items-start">

                        <h1 className='text-black text-4xl sm:text-6xl mt-2'>Noticias</h1>

                    </div>

                    <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center sm:justify-start sm:items-start px-1.5">

                        {
                                    img.map((not) => (
                                            <div key={not.id} className='flex flex-col items-center'>

                                                <div>
                                                <img src={not.img} alt={not.legenda} className='w-full cursor-pointer transition-transform duration-2000 hover:scale-103 sm:w-[650px] lg:w-[850px] xl:w-[1024px]'/>
                                                </div>
                                                <div className="text-white bg-black mt-[-20px] w-full mb-10 z-11 relative">
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {not.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3 text-gray-300 text-center flex items-center'>
                                                    <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'
                                                    style={{ fontVariantLigatures: "none" }}>{not.data}</h2>
                                                    <div className='w-[50%] h-[1px] bg-green-200 mr-1'></div>
                                                </div>
                                                </div>
                                            </div>
                                            ))
                                }

                    </div>

                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}