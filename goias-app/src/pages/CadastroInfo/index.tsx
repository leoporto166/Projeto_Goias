
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

const schemaTabela = z.object({
    docId: z.enum([
        "Amazonas",
        "América-MG",
        "Athletic-MG",
        "Athletico-PR",
        "Atlético-GO",
        "Avaí",
        "Botafogo-SP",
        "CRB",
        "Chapecoense",
        "Coritiba",
        "Criciúma",
        "Cuiabá",
        "Ferroviária",
        "Goiás",
        "Novorizontino",
        "Operário-PR",
        "Paysandu",
        "Remo",
        "Vila Nova-GO",
        "Volta Redonda",
    ]),
    vitorias: z.coerce.number(),
    empates: z.coerce.number(),
    jogos: z.coerce.number(),
    img: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
})

const schemaSocio = z.object({
  id: z.coerce.number(),
  titulo: z.string().nonempty("Preencha esse campo"),
  descricao: z.string().nonempty("Preencha esse campo"),
  preco: z.string().nonempty("Preencha esse campo"),
  button: z.string().default("ASSINAR"),
  informacao1: z.string().nonempty("Preencha esse campo"),
  informacao2: z.string().nonempty("Preencha esse campo"),
  informacao3: z.string().nonempty("Preencha esse campo"),
  informacao4: z.string().optional(),
  informacao5: z.string().optional(),
  informacao6: z.string().optional(),
});

const schemaIdolos = z.object({
  id: z.coerce.number(),
  nome: z.string().nonempty("Preencha esse campo"),
  numero: z.string().nonempty("Preencha esse campo"),
  foto: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
});

const schemaSocioImg = z.object({
    docId: z.enum(["1", "2", "3"]),
    img: z.string().nonempty("Preencha esse campo").url("Insira um link válido"),
});

type FormDataImg = z.infer<typeof schemaImg>
type FormDataVideos = z.infer<typeof schemaVideos>
type FormDataPartidas = z.infer<typeof schemaPartidas>
type FormDataNoticiasCapa = z.infer<typeof schemaNoticiasCapa>
type FormDataLoja = z.infer<typeof schemaLoja>
type FormDataTabela = z.infer<typeof schemaTabela>
type FormDataSocio = z.infer<typeof schemaSocio>
type FormDataSocioImg = z.infer<typeof schemaSocioImg>
type FormDataIdolos = z.infer<typeof schemaIdolos>


export function CadastroInfo(){

    const [videos, setVideos] = useState(false)
    const [img, setImg] = useState(false)
    const [partidas, setPartidas] = useState(false)
    const [capa, setCapa] = useState(false)
    const [escolha,  setEscolha] = useState("")
    const [loja, setLoja] = useState(false)
    const [tabela, setTabela] = useState(false)
    const [socio, setSocio] = useState(false)
    const [socioImg, setSocioimg] = useState(false)
    const [idolo, setIdolo] = useState(false)

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

    const {register: registerTabela, handleSubmit: handleSubmitTabela, formState: {errors: errorsTabela}, reset: resetTabela} = useForm<FormDataTabela>({
            resolver: zodResolver(schemaTabela) as any,
            mode:"onChange"
        })

    async function onSubmitTabela(data: FormDataTabela) {

          try {

            await setDoc(doc(db, "Tabela", data.docId), {
            nome: data.docId,
            logo: data.img,
            jogos: data.jogos,
            vitorias: data.vitorias,
            empates: data.empates,
            });

            resetTabela();
            console.log(`Documento ${data.docId} atualizado com sucesso!`);
        } catch (error) {
            console.log(`ERRO: ${error}`);
        }
        }   
        
        const {register: registerSocio, handleSubmit: handleSubmitSocio, formState: {errors: errorsSocio}, reset: resetSocio} = useForm<FormDataSocio>({
            resolver: zodResolver(schemaSocio) as any,
            mode:"onChange"
        })

    async function onSubmitSocio(data: FormDataSocio) {
    const socioData = {
        id: data.id,
        titulo: data.titulo,
        descrição: data.descricao,
        preco: data.preco,
        button: data.button,
        informacao1: data.informacao1,
        informacao2: data.informacao2,
        informacao3: data.informacao3,
        ...(data.informacao4 && { informacao4: data.informacao4 }),
        ...(data.informacao5 && { informacao5: data.informacao5 }),
        ...(data.informacao6 && { informacao6: data.informacao6 }),
    };

    await setDoc(doc(db, "Socio", data.id.toString()), socioData)
        .then(() => {
        resetSocio();
        console.log(`Socio atualizado com sucesso!`);
        })
        .catch((error) => {
        console.log(`ERRO: ${error}`);
        });
    }

            const {register: registerSocioImg, handleSubmit: handleSubmitSocioImg, formState: {errors: errorsSocioImg}, reset: resetSocioImg} = useForm<FormDataSocioImg>({
            resolver: zodResolver(schemaSocioImg) as any,
            mode:"onChange"
        })

    async function onSubmitSocioimg(data: FormDataSocioImg) {
    const socioData = {
        id: data.docId,
        img: data.img
    };

    await setDoc(doc(db, "SocioImg", data.docId), socioData)
        .then(() => {
        resetSocioImg();
        console.log(`Imagens Socio atualizado com sucesso!`);
        })
        .catch((error) => {
        console.log(`ERRO: ${error}`);
        });
    }

    const {register: registerIdolos, handleSubmit: handleSubmitIdolos, formState: {errors: errorsIdolos}, reset: resetIdolos} = useForm<FormDataIdolos>({
            resolver: zodResolver(schemaIdolos) as any,
            mode:"onChange"
    })

    async function onSubmitIdolos(data: FormDataIdolos) {
    const idolosData = {
        id: data.id,
        nome: data.nome,
        numero: data.numero,
        foto: data.foto
    };

    await setDoc(doc(db, "Idolos", data.id.toString()), idolosData)
        .then(() => {
        resetIdolos();
        console.log(`Idolos atualizado com sucesso!`);
        })
        .catch((error) => {
        console.log(`ERRO: ${error}`);
        });
    }
    

    

        

    return(

        <main className="h-screen">
            <Header></Header>

            <div className="flex flex-col justify-center items-center w-full h-[89%]">
                
                <div className="bg-white p-2 flex flex-col justify-center items-center w-[80%]">
                    {
                        videos === false && img === false && partidas === false && capa === false && loja === false && tabela == false && socio === false && socioImg === false && idolo === false ? (
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
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
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
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
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
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
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
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
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
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
                            setEscolha("Loja")
                        }}
                        className={`${loja === true ? "text-green-600" : ""}`}
                        >
                            Loja
                        </h2>

                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
                            setTabela(true)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(false)
                            setEscolha("Tabela")
                        }}
                        className={`${tabela === true ? "text-green-600" : ""}`}
                        >
                            Tabela
                        </h2>

                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
                            setTabela(false)
                            setSocio(true)
                            setSocioimg(false)
                            setIdolo(false)
                            setEscolha("Socio")
                        }}
                        className={`${socio === true ? "text-green-600" : ""}`}
                        >
                            Socio
                        </h2>

                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(true)
                            setIdolo(false)
                            setEscolha("Imagens Socio")
                        }}
                        className={`${socioImg === true ? "text-green-600" : ""}`}
                        >
                            Imagens Socio
                        </h2>

                        <h2
                        onClick={() => {
                            setImg(false)
                            setVideos(false)
                            setPartidas(false)
                            setCapa(false)
                            setLoja(false)
                            setTabela(false)
                            setSocio(false)
                            setSocioimg(false)
                            setIdolo(true)
                            setEscolha("Idolos")
                        }}
                        className={`${idolo === true ? "text-green-600" : ""}`}
                        >                      
                            Idolos

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
                    {
                        tabela && (

                            <div>
                                <form onSubmit={handleSubmitTabela(onSubmitTabela)} className="flex flex-col">
                                    <select {...registerTabela("docId")}>
                                        <option value="Amazonas">Amazonas</option>
                                        <option value="América-MG">América-MG</option>
                                        <option value="Athletic-MG">Athletic-MG</option>
                                        <option value="Athletico-PR">Athletico-PR</option>
                                        <option value="Atlético-GO">Atlético-GO</option>
                                        <option value="Avaí">Avaí</option>
                                        <option value="Botafogo-SP">Botafogo-SP</option>
                                        <option value="CRB">CRB</option>
                                        <option value="Chapecoense">Chapecoense</option>
                                        <option value="Coritiba">Coritiba</option>
                                        <option value="Criciúma">Criciúma</option>
                                        <option value="Cuiabá">Cuiabá</option>
                                        <option value="Ferroviária">Ferroviária</option>
                                        <option value="Goiás">Goiás</option>
                                        <option value="Novorizontino">Novorizontino</option>
                                        <option value="Operário-PR">Operário-PR</option>
                                        <option value="Paysandu">Paysandu</option>
                                        <option value="Remo">Remo</option>
                                        <option value="Vila Nova-GO">Vila Nova-GO</option>
                                        <option value="Volta Redonda">Volta Redonda</option>
                                    </select>
                                    <Input
                                        type="text"
                                        placeholder="link escudo time"
                                        {...registerTabela("img")} 
                                    
                                    />
                                    {errorsTabela.img && <p className="text-red-500 mt-0 mb-2">{errorsTabela.img?.message}</p>}

                                    <Input
                                        type="text"
                                        placeholder="jogos do time"
                                        {...registerTabela("jogos")} 
                                    
                                    />
                                    {errorsTabela.jogos && <p className="text-red-500 mt-0 mb-2">{errorsTabela.jogos?.message}</p>}

                                    <Input
                                        type="text"
                                        placeholder="vitorias do time"
                                        {...registerTabela("vitorias")} 
                                    
                                    />
                                    {errorsTabela.vitorias && <p className="text-red-500 mt-0 mb-2">{errorsTabela.vitorias?.message}</p>}

                                    <Input
                                        type="text"
                                        placeholder="empates do time"
                                        {...registerTabela("empates")} 
                                    
                                    />
                                    {errorsTabela.empates && <p className="text-red-500 mt-0 mb-2">{errorsTabela.empates?.message}</p>}

                                    <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>

                                </form>

                            </div>


                        )
                    }
                    {
                        socio && (
                        <form onSubmit={handleSubmitSocio(onSubmitSocio)} className=" flex flex-col">

                        <Input
                            type="text"
                            {...registerSocio("titulo")}
                            placeholder="nome do plano"
                        />
                        {errorsSocio.titulo && <p className="text-red-500 mt-0 mb-2">{errorsSocio.titulo?.message}</p>}

                        <Input
                            type="text"
                            placeholder="proço do plano"
                            {...registerSocio("preco")}
                        />
                        {errorsSocio.preco && <p className="text-red-500 mt-0 mb-2">{errorsSocio.preco?.message}</p>}
                        <Input
                            type="text"
                            {...registerSocio("descricao")}
                            placeholder="descrição do plano"
                        />

                        {errorsSocio.descricao && <p className="text-red-500 mt-0 mb-2">{errorsSocio.descricao?.message}</p>}

                        <Input
                            type="text"
                            {...registerSocio("informacao1")}
                            placeholder="1 info do plano"
                        />
                        {errorsSocio.informacao1 && <p className="text-red-500 mt-0 mb-2">{errorsSocio.informacao1?.message}</p>}

                        <Input
                            type="text"
                            {...registerSocio("informacao2")}
                            placeholder="2 info do plano"
                        />
                        {errorsSocio.informacao2 && <p className="text-red-500 mt-0 mb-2">{errorsSocio.informacao2?.message}</p>}

                        <Input
                            type="text"
                            {...registerSocio("informacao3")}
                            placeholder="3 info do plano"
                        />
                        {errorsSocio.informacao3 && <p className="text-red-500 mt-0 mb-2">{errorsSocio.informacao3?.message}</p>}

                        <Input
                            type="text"
                            {...registerSocio("informacao4")}
                            placeholder="4 info do plano"
                        />
                         <p className="text-green-500 mt-0 mb">Campo não obrigatorio</p>

                         <Input
                            type="text"
                            {...registerSocio("informacao5")}
                            placeholder="5 info do plano"
                        />
                         <p className="text-green-500 mt-0">Campo não obrigatorio</p>

                         <Input
                            type="text"
                            {...registerSocio("informacao6")}
                            placeholder="6 info do plano"
                        />
                         <p className="text-green-500 mt-0">Campo não obrigatorio</p>

                        <Input
                            type="number"
                            {...registerSocio("id")}
                            placeholder="id do plano"
                        />
                        {errorsSocio.id && <p className="text-red-500 mt-0 mb-2">{errorsSocio.id?.message}</p>}

                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                    </form>
                        )
                    }
                    {
                        socioImg && (
                        <form onSubmit={handleSubmitSocioImg(onSubmitSocioimg) } className=" flex flex-col">

                            <select {...registerSocioImg("docId")}>
                                    <option value="1">Imagem 1</option>
                                    <option value="2">Imagem 2</option>
                                    <option value="3">Imagem 3</option>
                                </select>
            
                        <Input
                            type="text"
                            placeholder="link da imagem"
                            {...registerSocioImg("img")}
            
                        />
                        {errorsSocioImg.img && <p className="text-red-500 mt-0 mb-2">{errorsSocioImg.img?.message}</p>}
                        
                        <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>
                    </form>
                        )
                    }
                    {
                        idolo && (
                            <form onSubmit={handleSubmitIdolos(onSubmitIdolos)}
                            className=" flex flex-col"
                            >

                                <Input
                                type="text"
                                {...registerIdolos("id")}
                                placeholder="id"
                                />
                                {errorsIdolos.id && <p className="text-red-500 mt-0 mb-2">{errorsIdolos.id?.message}</p>}


                                <Input
                                type="text"
                                {...registerIdolos("nome")}
                                placeholder="nome do jogador"
                                />
                                {errorsIdolos.nome && <p className="text-red-500 mt-0 mb-2">{errorsIdolos.nome?.message}</p>}

                                                                                        <Input
                                type="text"
                                {...registerIdolos("numero")}
                                placeholder="numero do jogador"
                                />
                                {errorsIdolos.numero && <p className="text-red-500 mt-0 mb-2">{errorsIdolos.numero?.message}</p>}

                                                                                        <Input
                                type="text"
                                {...registerIdolos("foto")}
                                placeholder="imagem do jogador"
                                />
                                {errorsIdolos.foto && <p className="text-red-500 mt-0 mb-2">{errorsIdolos.foto?.message}</p>}

                                <button type="submit" className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1 w-full text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500">Cadastrar</button>




                            </form>
                        )
                    }
            
                </div>
            </div>
        </main>

    )
}