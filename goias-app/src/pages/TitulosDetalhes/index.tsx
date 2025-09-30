import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../services/firebaseconnection";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../Components/Header/header";
import { FaArrowLeft } from "react-icons/fa"; 

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

            <div className="flex w-full px-2 mt-4 xl:mt-[30px]">
                <Link to={`/Projeto_Goias/Clube/${categoria}`} className="text-xl">
                    <FaArrowLeft />
                </Link>
            </div>

            {
                titulosDet && (
                    <div>
                        <h1 className="text-3xl flex justify-center my-2 font-bold">{titulosDet.ano}</h1>
                        <div className=" text-[16px] text-gray-700 p-4 whitespace-pre-line">
                            {
                            titulosDet.descricao
                            .replace(/\\n/g, "\n")
                            .replace(/:contentReference\[.*?\]\{.*?\}/g, "")
                            }
                        </div>
                    </div>
                )
            }
        </main>
    )


}