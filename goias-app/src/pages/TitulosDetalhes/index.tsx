import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../services/firebaseconnection";
import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header/header";

interface titulosDefProps {
        ano: string;
        descricao: string
}

export function Titulos_Detalhes(){

    const [titulosDet, setTitulosDet] = useState<titulosDefProps>()

    const {categoria, ano} = useParams()

    useEffect(() => {
        if (!categoria || !ano) return;

        const docRef = doc(db, categoria, ano);

        const unsubTituloDet = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
            const data = docSnap.data();
            setTitulosDet({
                ano: data.ano,
                descricao: data.descricao
            });
            }

            console.log(titulosDet)
        });

        return () => {unsubTituloDet()}
    }, [categoria, ano])

    return(


        <main>
            <Header />

            {
                titulosDet && (
                    <div className="p-2">
                        {titulosDet.descricao}
                    </div>
                )
            }
        </main>
    )


}