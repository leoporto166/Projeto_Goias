
import { useForm } from "react-hook-form"
import { z }  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

import { db } from "../../services/firebaseconnection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Input } from "../../Components/Input";
import { Header } from "../../Components/Header/header";




const schemaImg = z.object({
    data: z.string().nonempty("Preencha o campo"),
    img: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
    legenda: z.string().nonempty("Preencha essa campo").max(35, "O campo deve ter no maximo 35 caracteres"),
    id: z.coerce.number(),
})

const schemaVideos = z.object({
    data: z.string().nonempty("Preencha o campo"),
    id: z.coerce.number(),
    link: z.string().nonempty("Preencha esse campo"),
    legenda: z.string().nonempty("Preencha essa campo").max(38, "O campo deve ter no maximo 38 caracteres"),
    button: z.string().default("VER NO YOUTUBE")
})

const schemaPartidas = z.object({
    docId: z.enum(["partida1", "partida2", "partida3"]),
    logo1: z.string().nonempty("Preencha o campo").url("Insira um link válido"),
    logo2: z.string().nonempty("Preencha o campo").url("Insira um link válido"),
    titulo: z.string().nonempty("Preencha esse campo"),
    rodada: z.string().nonempty("Preencha essa campo"),
    estadio: z.string().nonempty("Preencha esse campo"),
    data: z.string().nonempty("Preencha essa campo"),
    ingresso: z.string().default("Comprar"),
})

const schemaNoticiasCapa = z.object({
    docId: z.enum(["noticia1", "noticia2", "noticia3"]),
    data: z.string().nonempty("Preencha o campo"),
    id: z.coerce.number(),
    img: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
    legenda: z.string().nonempty("Preencha essa campo").max(35, "O campo deve ter no maximo 35 caracteres"),
    button: z.string().default("VER MAIS"),
})

const schemaLoja = z.object({
    titulo: z.string().nonempty("Preencha o campo"),
    id: z.coerce.number(),
    img: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
    preco: z.string().nonempty("Preencha essa campo"),
    button: z.string().default("COMPRAR"),
    link: z.string().url("Insira um link válido"),
})

type FormDataImg = z.infer<typeof schemaImg>
type FormDataVideos = z.infer<typeof schemaVideos>
type FormDataPartidas = z.infer<typeof schemaPartidas>
type FormDataNoticiasCapa = z.infer<typeof schemaNoticiasCapa>
type FormDataLoja = z.infer<typeof schemaLoja>


export function CadastroNoticias(){

    const [videos, setVideos] = useState(false)
    const [img, setImg] = useState(false)
    const [partidas, setPartidas] = useState(false)
    const [capa, setCapa] = useState(false)
    const [escolha,  setEscolha] = useState("")
    const [loja, setLoja] = useState(false)

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormDataImg>({
        resolver: zodResolver(schemaImg) as any,
        mode:"onChange"
    })

    async function onSubmit(data: FormDataImg) {

        const docRef = doc(db, "Noticias", data.id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("ERRO: ID já existe");
            alert("Erro: ID já existe no banco");
            return;
        }

        await setDoc(docRef, {
            data: data.data,
            img: data.img,
            legenda: data.legenda.toUpperCase(),
            id: data.id
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
         const docRef = doc(db, "NoticiasVideos", data.id.toString())
         const docSnap = await getDoc(docRef)

         if(docSnap.exists()){
            console.log("ERRO: ID já existe");
            alert("Erro: ID já existe no banco");
            return;
         }

        await setDoc(docRef, {
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

        const {register: registerPartidas, handleSubmit: handleSubmitPartidas, formState: {errors: errorsPartidas}, reset: resetPartidas} = useForm<FormDataPartidas>({
            resolver: zodResolver(schemaPartidas) as any,
            mode:"onChange"
        })

    async function onSubmitPartidas(data: FormDataPartidas) {

          try {
            // Aponta para o documento específico dentro da coleção "Partidas"
            await setDoc(doc(db, "Partidas", data.docId), {
            logo1: data.logo1,
            logo2: data.logo2,
            titulo: data.titulo,
            rodada: data.rodada,
            estadio: data.estadio,
            data: data.data,
            ingresso: data.ingresso || "Comprar",
            });

            resetPartidas();
            console.log(`Documento ${data.docId} atualizado com sucesso!`);
        } catch (error) {
            console.log(`ERRO: ${error}`);
        }
        }

        const {register: registerCapa, handleSubmit: handleSubmitCapa, formState: {errors: errorsCapa}, reset: resetCapa} = useForm<FormDataNoticiasCapa>({
            resolver: zodResolver(schemaNoticiasCapa) as any,
            mode:"onChange"
        })

        async function onSubmitCapa(data: FormDataNoticiasCapa) {


          try {
            
            await setDoc(doc(db, "NoticiasCapa", data.docId), {
            data: data.data,
            id: data.id,
            img: data.img,
            legenda: data.legenda.toUpperCase(),
            });

            resetCapa();
            console.log(`Documento ${data.docId} atualizado com sucesso!`);
        } catch (error) {
            console.log(`ERRO: ${error}`);
        }
        }

        const {register: registerLoja, handleSubmit: handleSubmitLoja, formState: {errors: errorsLoja}, reset: resetLoja} = useForm<FormDataLoja>({
            resolver: zodResolver(schemaLoja) as any,
            mode:"onChange"
        })

    async function onSubmitLoja(data: FormDataLoja) {

        const docRef = doc(db, "Loja", data.id.toString())
         const docSnap = await getDoc(docRef)

         if(docSnap.exists()){
            console.log("ERRO: ID já existe");
            alert("Erro: ID já existe no banco");
            return;
         }

        await setDoc(docRef, {
            img: data.img,
            link: data.link,
            button: data.button,
            preco: data.preco,
            titulo: data.titulo,
            id: data.id,         
        })

        .then(() => {
            resetLoja()
            console.log("Produto cadastrado")
        })

        .catch((error) => {
            console.log(`ERRO: ${error}`)
        })
        
    }

        

    return(

        <main className="h-screen">
            <Header></Header>

            <div className="flex flex-col justify-center items-center w-full h-[89%]">
                
                <div className="bg-white p-2 flex flex-col justify-center items-center w-[400px]">
                    {
                        videos === false && img === false && partidas === false && capa === false && loja=== false   ? (
                            <div className="text-xl font-semibold my-5">
                                <h1>Escolha uma das opções</h1>
                            </div>
                        ) : (
                            <h1 className="text-xl font-semibold my-5">Preencha os campos da opção {escolha} </h1>
                        )
                    }
            
                    <div className="cursor-pointer flex gap-2">
                        <h2
                        onClick={() => {
                            setImg(true)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
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
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
                            setEscolha("Videos")
                        }}
                        className={`${videos === true ? "text-green-600" : ""}`}
                        >
                            Videos
                        </h2>
                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(true)
                            setCapa(false)
                            setLoja(false)
                            setEscolha("Partidas")
                        }}
                        className={`${partidas === true ? "text-green-600" : ""}`}
                        >
                            Partidas
                        </h2>
                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(true)
                            setLoja(false)
                            setEscolha("Capa")
                        }}
                        className={`${capa === true ? "text-green-600" : ""}`}
                        >
                            Capa
                        </h2>
                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(true)
                            setEscolha("Loja")
                        }}
                        className={`${loja === true ? "text-green-600" : ""}`}
                        >
                            Loja
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
                            placeholder="id da postagem"
                        />
                        {errors.id && <p className="text-red-500 mt-0 mb-2">{errors.id?.message}</p>}
                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
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
                            placeholder="Legenda do video"
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
                            placeholder="id do video"
                        />
                        {errorsVideos.id && <p className="text-red-500 mt-0 mb-2">{errorsVideos.id?.message}</p>}
                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                    </form>
                        )
                    }
                    {
                        partidas && (
                            <form onSubmit={handleSubmitPartidas(onSubmitPartidas)} className="flex flex-col">
                                <select {...registerPartidas("docId")}>
                                    <option value="partida1">Partida 1</option>
                                    <option value="partida2">Partida 2</option>
                                    <option value="partida3">Partida 3</option>
                                </select>
                                <Input
                                    type="text"
                                    placeholder="Logo 1"
                                    {...registerPartidas("logo1")}
                                />
                                {errorsPartidas.logo1 && <p className="text-red-500">{errorsPartidas.logo1.message}</p>}
                                <Input
                                    type="text"
                                    placeholder="Logo 2"
                                    {...registerPartidas("logo2")}
                                />
                                {errorsPartidas.logo2 && <p className="text-red-500">{errorsPartidas.logo2.message}</p>}
                                <Input
                                    type="text"
                                    placeholder="Título"
                                    {...registerPartidas("titulo")}
                                />
                                {errorsPartidas.titulo && <p className="text-red-500">{errorsPartidas.titulo.message}</p>}
                                <Input
                                    type="text"
                                    placeholder="Rodada"
                                    {...registerPartidas("rodada")}
                                />
                                {errorsPartidas.rodada && <p className="text-red-500">{errorsPartidas.rodada.message}</p>}
                                <Input
                                    type="text"
                                    placeholder="Estádio"
                                    {...registerPartidas("estadio")}
                                />
                                {errorsPartidas.estadio && <p className="text-red-500">{errorsPartidas.estadio.message}</p>}
                                <Input
                                    type="text"
                                    placeholder="Data da partida"
                                    {...registerPartidas("data")}
                                />
                                {errorsPartidas.data && <p className="text-red-500">{errorsPartidas.data.message}</p>}
                                <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                            </form>
                        )
                    }
                    {
                        capa && (
                            <form onSubmit={handleSubmitCapa(onSubmitCapa)} className="flex flex-col">
                                <select {...registerCapa("docId")}>
                                    <option value="noticia1">Noticia 1</option>
                                    <option value="noticia2">Noticia 2</option>
                                    <option value="noticia3">Noticia 3</option>
                                </select>
                                <Input
                            type="text"
                            placeholder="link da imagem"
                            {...registerCapa("img")}
            
                        />
                        {errorsCapa.img && <p className="text-red-500 mt-0 mb-2">{errorsCapa.img?.message}</p>}
                        <Input
                            type="text"
                            placeholder="Legenda da noticia"
                            {...registerCapa("legenda")}
                        />
                        {errorsCapa.legenda && <p className="text-red-500 mt-0 mb-2">{errorsCapa.legenda?.message}</p>}
                        <Input
                            type="text"
                            {...registerCapa("data")}
                            placeholder="data da postagem"
                        />
                        {errorsCapa.data && <p className="text-red-500 mt-0 mb-2">{errorsCapa.data?.message}</p>}
                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                            </form>
                        )
                    }
                    {
                        loja && (
                            <form onSubmit={handleSubmitLoja(onSubmitLoja)} className="flex flex-col">
                                <Input
                            type="text"
                            placeholder="link da imagem"
                            {...registerLoja("img")}
            
                        />
                        {errorsLoja.img && <p className="text-red-500 mt-0 mb-2">{errorsLoja.img?.message}</p>}
                            <Input
                                type="text"
                                placeholder="link do produto"
                                {...registerLoja("link")}
                            />
                            {errorsLoja.link && <p className="text-red-500 mt-0 mb-2">{errorsLoja.link?.message}</p>}
                        <Input
                            type="text"
                            placeholder="Titulo do produto"
                            {...registerLoja("titulo")}
                        />
                        {errorsLoja.titulo && <p className="text-red-500 mt-0 mb-2">{errorsLoja.titulo?.message}</p>}
                        <Input
                            type="text"
                            {...registerLoja("preco")}
                            placeholder="Preço do produto"
                        />
                        {errorsLoja.preco && <p className="text-red-500 mt-0 mb-2">{errorsLoja.preco?.message}</p>}
                         <Input
                            type="number"
                            {...registerLoja("id")}
                            placeholder="id do produto"
                        />
                        {errorsLoja.id && <p className="text-red-500 mt-0 mb-2">{errorsLoja.id?.message}</p>}
                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                            </form>
                        )
                    }
            
                </div>
            </div>
        </main>

    )
}