
import { useForm } from "react-hook-form"
import { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { db } from "../../services/firebaseconnection";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { Input } from "../../Components/Input";


const schemaImg = z.object({
    data: z.string().nonempty("Preencha o campo"),
    id: z.coerce.number(),
    img: z.string().nonempty("Preencha esse campo"),
    legenda: z.string().nonempty("Preencha essa campo").max(35, "O campo deve ter no maximo 35 caracteres"),
})

const schemaVideos = z.object({
    data: z.string().nonempty("Preencha o campo"),
    id: z.coerce.number(),
    link: z.string().nonempty("Preencha esse campo"),
    legenda: z.string().nonempty("Preencha essa campo").max(40, "O campo deve ter no maximo 40 caracteres"),
    button: z.string().default("VER NO YOUTUBE")
})

type FormDataImg = z.infer<typeof schemaImg>
type FormDataVideos = z.infer<typeof schemaVideos>


export function CadastroNoticias(){

    const [videos, setVideos] = useState(false)
    const [img, setImg] = useState(false)
    const [escolha,  setEscolha] = useState("")

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormDataImg>({
        resolver: zodResolver(schemaImg) as any,
        mode:"onChange"
    })

    async function onSubmit(data: FormDataImg) {

        await addDoc(collection(db, "Noticias"), {
            data: data.data,
            id: data.id,
            img: data.img,
            legenda: data.legenda.toUpperCase()
        })

        .then(() => {
            reset()
            console.log("Noticia img cadastrada")
        })

        .catch((error) => {
            console.log(`ERRO: ${error}`)
        })
        
    }

    const {register: registerVideos, handleSubmit: handleSubmitVideos,formState: {errors: errorsVideos}, reset: resetVideos} = useForm<FormDataVideos>({
        resolver: zodResolver(schemaVideos) as any,
        mode:"onChange"
    })

    async function onSubmitVideos(data: FormDataVideos) {

        await addDoc(collection(db, "NoticiasVideos"), {
            data: data.data,
            id: data.id,
            link: data.link,
            legenda: data.legenda.toUpperCase()
        })

        .then(() => {
            resetVideos()
            console.log("Noticia videos cadastrada")
        })

        .catch((error) => {
            console.log(`ERRO: ${error}`)
        })
        
    }

    return(

        <main className="flex flex-col justify-center items-center w-full h-screen">

            <div className="bg-white p-2 flex flex-col justify-center items-center">
                {
                    videos === false && img === false ? (
                        <div>
                            <h1>Escolha uma das opções</h1>
                        </div>
                    ) : (
                        <h1>Preencha os campos da opção {escolha} </h1>
                    )
                }
                
                <div className="cursor-pointer flex gap-2">
                    <h2
                    onClick={() => {
                        setImg(true)
                        setVideos(false)
                        setEscolha("Imagens")
                    }}
                    className={`${img === true ? "text-green-600" : ""}`}
                    >
                        Imagens
                    </h2>
                
                    <h2
                    onClick={() => {
                        setImg(false)
                        setVideos(true)
                        setEscolha("Videos")
                    }}
                    className={`${videos === true ? "text-green-600" : ""}`}
                    >
                        Videos
                    </h2>
                </div>
                {
                    img && (

                    <form onSubmit={handleSubmit(onSubmit) } className=" flex flex-col">
                            
                    <Input
                        type="text"
                        placeholder="link da imagem"
                        {...register("img")}
                        
                    />
                    {errors.img && <p className="text-red-500 mt-0 mb-2">{errors.img?.message}</p>}

                    <Input
                        type="text"
                        placeholder="Legenda da noticia"
                        {...register("legenda")}
                    />
                    {errors.legenda && <p className="text-red-500 mt-0 mb-2">{errors.legenda?.message}</p>}

                    <Input
                        type="text"
                        {...register("data")}
                        placeholder="data da postagem"
                    />
                    {errors.data && <p className="text-red-500 mt-0 mb-2">{errors.data?.message}</p>}

                    <Input
                        type="number"
                        {...register("id")}
                        placeholder="id da noticia"
                    />
                    {errors.id && <p className="text-red-500 mt-0 mb-2">{errors.id?.message}</p>}

                    <button type="submit" className="cursor-pointer">Cadastrar</button>
                </form>
                    )
                }
                {
                    videos && (
                        <form onSubmit={handleSubmitVideos(onSubmitVideos) } className=" flex flex-col">
                            
                    <Input
                        type="text"
                        placeholder="link do video"
                        {...registerVideos("link")}
                        
                    />
                    {errorsVideos.link && <p className="text-red-500 mt-0 mb-2">{errorsVideos.link?.message}</p>}

                    <Input
                        type="text"
                        placeholder="Legenda da noticia"
                        {...registerVideos("legenda")}
                    />
                    {errorsVideos.legenda && <p className="text-red-500 mt-0 mb-2">{errorsVideos.legenda?.message}</p>}

                    <Input
                        type="text"
                        {...registerVideos("data")}
                        placeholder="data da postagem"
                    />
                    {errorsVideos.data && <p className="text-red-500 mt-0 mb-2">{errorsVideos.data?.message}</p>}

                    <Input
                        type="number"
                        {...registerVideos("id")}
                        placeholder="id da noticia"
                    />
                    {errorsVideos.id && <p className="text-red-500 mt-0 mb-2">{errorsVideos.id?.message}</p>}

                    <button type="submit" className="cursor-pointer">Cadastrar</button>
                </form>
                    )
                }
                
            </div>

        </main>

    )
}