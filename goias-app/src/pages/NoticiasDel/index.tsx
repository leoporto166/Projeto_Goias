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
                data: data.data
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
                    <img src={notDet.img}></img>
                )
            }

        </main>

    )

}