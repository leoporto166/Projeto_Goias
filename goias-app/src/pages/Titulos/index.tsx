import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../services/firebaseconnection";
import { Header } from "../../Components/Header/header";


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
            <div>

                {
                    titulo && (
                
                        <div key={titulo?.id}>

                            <img src={titulo?.imagem}></img>

                        </div>
                    )

                }
                {
                    titulosDef.map((titulo) => (
                        <div key={titulo.ano}>
                            {titulo.ano}
                        </div>
                    ))
                }
            </div>
        </main>
    )
}