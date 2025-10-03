import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/header";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { useParams } from "react-router-dom";


interface NoticiasProps{
    img: string;
    legenda: string;
    button?: string
    id: string;
    data: string;
    descricao: string;
}

export function NotDel(){

        const [notDet, setNotDet] = useState<NoticiasProps>()

    const {id} = useParams()

    useEffect(() => {
        if (!id) return;

        const docRef = doc(db, "Noticias", id );

        const unsubTituloDet = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
            const data = docSnap.data();
            setNotDet({
                img: data.img,
                legenda: data.legenda,
                id: data.id,
                data: data.data,
                descricao: data.descricao
            });
            }

            console.log(notDet)
        });

        return () => {unsubTituloDet()}
    }, [id])

    return(

        <main>

            <Header></Header>

            {
                notDet && (
                    <div>
                        <h1 className="text-3xl p-2 my-2 xl:mt-6 font-bold">{notDet.legenda}</h1>
                        <div className="w-full flex justify-center items-center">
                            <img src={notDet.img} className="p-2"></img>
                        </div>
                        <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-full">
                        <p className="text-[16px] text-gray-700 p-2 whitespace-pre-line xl:w-[895px]">
                            {notDet.descricao
                            .replace(/\\n/g, "\n")
                            .replace(/:contentReference\[.*?\]\{.*?\}/g, "")}
                        </p>
                        </div>
                    </div>
                )
            }

        </main>

    )

}