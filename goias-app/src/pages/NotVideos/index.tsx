import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../services/firebaseconnection"
import { Header } from "../../Components/Header/header";
import { Footer } from "../../Components/footer";

interface VideosProps{
    link: string;
    legenda: string;
    button: string;
    data: string;
    id: string;
    
}


export function Videos(){

    const [videos, setVideos] = useState<VideosProps[]>([])    

    useEffect(() => {

        const videosRef = collection(db, "NoticiasVideos")
        const queryRef = query(videosRef, orderBy("data", "desc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as VideosProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    id: doc.id,
                    link: data.link,
                    legenda: data.legenda,
                    data: data.data,
                    button: "VER NO YOUTUBE"
                })
            })

            setVideos(lista)
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
                    
                    <div className='w-full text-lg font-bold mb-2 px-1.5 justify-center items-center sm:justify-start sm:items-start'>
                                <h1 className='text-black text-xl sm:text-2xl mt-2'>Videos</h1>
                    </div>

                    <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center sm:justify-start sm:items-start px-1.5">

                        {
                            videos.map((video) => (

                                <div key={video.id} className='w-full flex flex-col items-center justify-center'>
                                            <iframe
                                                className="w-full aspect-video h-[180px] sm:h-[300px] md:h-[200px] lg:h-[200px]
                                                xl:h-[200px]"
                                                src={`https://www.youtube.com/embed/${video.link}`}
                                                title={video.legenda}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                            <div className=' bg-black text-white w-full z-11 relative'>
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {video.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3  text-center flex items-center'>
                                                    <div className='w-[50%] h-[1px] bg-green-200 '></div>
                                                    <h2 className='px-1 text-gray-300'
                                                    style={{ fontVariantLigatures: "none" }}>{video.data}</h2>
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