import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../Components/Header/header"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";

interface Jogador{
  nome: string;
  posicao: string;
  imagem: string;
  numero: number;
  imagem2: string,
  biografia: string,
  nomeCompleto: string,
  aniversario: string,
  altura: string,
  naturalidade: string,
  Clubes: string,
  Jogos: string,
  Gols: string,
  Assistencias: string,
}


export function ElencoDetalhes(){

    const {id} = useParams()

    const [jogador, setJogador] = useState<Jogador>()

    useEffect(() => {
        if (!id) return;

        const docRef = doc(db, "Elenco", id);

        const unsubTituloDet = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
            const data = docSnap.data();
            setJogador({
                nome: data.nome,
                posicao: data.posicao,
                imagem: data.imagem,
                numero: data.numero,
                imagem2: data.imagem2,
                biografia: data.biografia,
                nomeCompleto:data.nomeCompleto,
                aniversario: data.aniversario,
                altura: data.altura,
                naturalidade: data.naturalidade,
                Clubes: data.Clubes,
                Jogos: data.Jogos,
                Gols: data.Gols,
                Assistencias: data.Assistencias,
            });
            }

            console.log(jogador)
        });

        return () => {unsubTituloDet()}
    }, [id])

    return (
        <div>
            <Header />


            {
                jogador && (
                    <div className="h-screen" 
                    style={{ backgroundImage: "linear-gradient(to top, #012623, #5E8C6E, #F2F2F2)"}}
                    >

                    <div className="flex "
                    
                    >
                        <img src={jogador.imagem2} className="w-[190px] h-[460px]"/>

                        <div className=" flex flex-col items-center">

                            <div className="flex gap gap-2 items-center justify-center ">
                                <p className="text-5xl font-bold"
                                style={{color: "#26BFA3" }}
                                >{jogador.numero}</p>
                                <div className="w-[1px] h-[40px] bg-green-900"></div>
                                <h1 className="text-3xl font-extrabold"
                                style={{color: "#083532" }}
                                >{jogador.nome}</h1>
                            </div>

                            <div className="w-full">

                                <h2 className="text-2xl font-semibold"
                                
                                >Nome</h2>
                                <p  className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.nomeCompleto}</p>
                                <h2 className="text-2xl font-semibold"
                                
                                >Aniversario</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >
                                    {jogador.aniversario}</p>
                                <h2 className="text-2xl font-semibold"

                                >Altura</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.altura}</p>
                                <h2 className="text-2xl font-semibold"

                                >Naturalidade</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.naturalidade}</p>

                            </div>

                            <div className="h-[1px] w-[80%] bg-green-100 my-2"></div>

                            <div className="flex flex-col w-full whitespace-pre-line ">

                                <h2 className="text-2xl font-semibold">Jogos</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.Jogos}</p>
                                <h2 className="text-2xl font-semibold">Gols</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.Gols}</p>
                                <h2 className="text-2xl font-semibold"

                                >Assitencias</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.Assistencias}</p>
                                <h2 className="text-2xl font-semibold"

                                >Clubes</h2>
                                <p className="px-1"
                                style={{color: "#013A40" }}
                                >{jogador.Clubes.replace(/\\n/g, "\n")
                            .replace(/:contentReference\[.*?\]\{.*?\}/g, "")}</p>

                            </div>
                            
                        </div>

                    </div>

                   
                    </div>
                )
            }
        </div>
    )

}