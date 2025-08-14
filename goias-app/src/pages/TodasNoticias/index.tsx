
import n3 from "../../Assets/Elenco goias.webp"
import n1 from "../../Assets/NoticiaGoiXOpr.jpeg"
import n2 from "../../Assets/NoticiaTorcida.jpeg"
import { Footer } from "../../Components/footer";
import { Header } from "../../Components/Header/header";


interface NoticiasProps{
    img: string;
    legenda: string;
    button?: string
    id?: number;
    data?: string;
}

interface VideosProps{
    link: string;
    legenda: string;
    button: string;
    data: string;
    id: number;
    
}

    const noticias: NoticiasProps[] =[
        {img: n1, legenda: "Goiás vence o Operário em casa", id:2, data: "09/08/25"},
        
        {img: n2, legenda: "Atenção, sócio-torcedor:", id:2, data: "06/08/25"},

        {img: n3, legenda: "Noticia Ofical: Treino realizado!", id:1, data: "06/08/25"},
    ]

        const videos: VideosProps[] = [
        {
            link: "GmCyxZt_G1I", legenda: "COLETIVA AO VIVO | JUNINHO | GOIÁS E.C", button: "VER NO YOUTUBE", data: "06/08/25", id: 1
        },
        {
            link: "KouYLb2BFFk", legenda: "BASTIDORES VIVA SORTE | GOIÁS 1x1 REMO", button: "VER NO YOUTUBE", data: "30/07/25", id: 2
        },
        {
            link: "jVs4iQ_kcB0", legenda: "WELLINGTON RATO | ENTREVISTA EXCLUSIVA ", button: "VER NO YOUTUBE", data: "11/07/25", id: 3
        },
    ]

export function TodasNoticias(){


    return(

        <main>
            <Header></Header>

            <section>
                <div className='flex w-full justify-center items-center'>
                    <div className='w-[380px] flex flex-col items-center justify-center sm:w-[650px] lg:w-[850px]'>
                        <div className='w-full flex text-lg font-bold mb-2 px-1.5'>
                                <h1 className='text-white text-xl sm:text-2xl'>UlTIMAS NOTICIAS</h1>
                        </div>
    
                            <div className='flex flex-col justify-center items-center w-full py-2 px-1.5 lg:flex-row lg:flex-wrap'>
                                {
                                    noticias.map((not) => (
                                    <div key={not.id} className='flex flex-col items-center'>
                                        <div>
                                        <img src={not.img} alt={not.legenda} className='w-full cursor-pointer transition-transform duration-2000 hover:scale-103' />
                                        </div>
                                        <div className='bg-black text-white mt-[-20px] w-[320px] sm:w-[600px] mb-10 z-11 relative'>
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
                                {
                                    videos.map((video) => (
                                        <div key={video.id} className='w-[380px] flex flex-col items-center justify-center sm:w-[650px] lg:w-[850px]'>
                                            <iframe
                                                className="w-full aspect-video"
                                                src={`https://www.youtube.com/embed/${video.link}`}
                                                title={video.legenda}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                            <div className=' bg-green-50 shadow w-full mb-10 z-11 relative'>
                                                <h1 className="break-words whitespace-pre-line text-lg ml-3 font-semibold">
                                                    {video.legenda.toLocaleUpperCase()}
                                                </h1>
                                                <div className='ml-3  text-center flex items-center'>
                                                    <div className='w-[50%] h-[1px] bg-green-200'></div>
                                                    <h2 className='px-1'
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
                    
            </section>
            <Footer></Footer>
        </main>
    )


}