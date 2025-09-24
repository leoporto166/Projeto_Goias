import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../services/firebaseconnection";
import { Header } from "../../Components/Header/header";


interface titulosDefProps {
        ano: string;
        descricao: string
}

export function Titulos(){

    const {id} = useParams();
    const [titulosDef, setTitulosDef] = useState<titulosDefProps[]>([])

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

        return () => {unsub()}
    }, [id])

    return(

        <main>
            <Header></Header>
            <div>
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