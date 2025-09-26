import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { db } from "../../services/firebaseconnection";
import { Header } from "../../Components/Header/header";
import { FaArrowLeft } from "react-icons/fa";


interface titulosDefProps {
        ano: string;
        descricao: string
}

interface tituloProps {
        titulo: string;
        id: string;
        ano: string;
        imagem: string;
        descricao: string
}

export function Titulos(){

    const {id} = useParams();
    const [titulosDef, setTitulosDef] = useState<titulosDefProps[]>([])
    const [titulo, setTitulo] = useState<tituloProps>()

    useEffect(() => {
        if(!id){
            return
        }
        const titulosRef = collection(db, id)
        const queryRef = query(titulosRef, orderBy("ano", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {

            let lista = [] as titulosDefProps[]

            snapshot.forEach((doc) => {
            
                const data = doc.data()

                lista.push({
                    ano: data.ano,
                    descricao: data.descricao
                })

            })

            setTitulosDef(lista)
            console.log(lista)

        })

        const docRef = doc(db, "Titulos", id);

        const unsubTitulo = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
            const data = docSnap.data();
            setTitulo({
                titulo: data.titulo,
                id: docSnap.id,
                ano: data.ano,
                imagem: data.img,
                descricao: data.descricao,
            });
            }

            console.log(titulo)
        });


        return () => {unsub(), unsubTitulo()}
    }, [id])

    return(

        <main>
            <Header></Header>

            <div className="flex w-full px-2 mt-4">
                <Link to={`/Projeto_Goias/Clube/`} className="text-xl">
                    <FaArrowLeft />
                </Link>
            </div>

            <div className="w-full h-[50px] flex justify-center items-center my-3">
                <h1 className="text-3xl font-extrabold">
                    {id}    
                </h1>
            </div>
            
            <div className="flex gap-4 p-2 justify-center flex-wrap">

                {
                    titulosDef.map((titulo) => (
                        <div key={titulo.ano}  className="">
                            <Link to={`/Projeto_Goias/Clube/${id}/${titulo.ano}`}>
                                <div className="flex flex-col border border-green-600 justify-center items-center h-[130px] w-[160px] sm:w-[250px] sm:h-[150px] bg-green-200/40 cursor-pointer hover:bg-green-800 hover:border-green-200/70 transition-all duration-300 hover:text-white">
                                    <div className="">
                                        <h1 className="text-2xl font-bold">{titulo.ano}</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}