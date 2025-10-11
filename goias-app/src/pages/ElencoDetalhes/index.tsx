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
        <div style={{ backgroundImage: "linear-gradient(to top, #5E8C6E, #F2F2F2)"}}>
            <Header />


            {
                jogador && (
                    <div
                    style={{ backgroundImage: "linear-gradient(to top, #5E8C6E, #F2F2F2)"}}
                    className="h-screen min-h-[1000px]"
                    >
                        <div className="flex items-center justify-center h-[100px] ">
                                <p className="text-5xl font-bold"
                                style={{color: "#26BFA3" }}
                                >{jogador.numero}</p>
                                <div className="w-[10px] h-[1px] bg-green-900 mx-2"></div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl"
                                style={{color: "#083532" }} 
                                >{jogador.nome}</h1>
                        </div>

                        <div className="flex justify-center items-center"
                        
                        >
                        <div className="flex"
                        
                        >
                        
                            <img src={jogador.imagem2} className="w-[210px] h-[500px] sm:w-[300px] sm:h-[700px]"/>
                            <div className=" flex flex-col items-center justify-center lg:flex-row">
                                <div className="w-full lg:w-[300px] lg:ml-[10px]">
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                        
                                    >Nome</h2>
                                    <p  className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.nomeCompleto}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                        
                                    >Aniversario</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >
                                        {jogador.aniversario}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                                    >Altura</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.altura}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                                    >Naturalidade</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.naturalidade}</p>
                                </div>
                                    <div className="h-[1px] w-[80%] bg-green-100 my-2 lg:h-[200px] lg:w-[1px] lg:mx-[30px]"></div>
                                <div className=" w-full ">
                                    <h2 className="text-2xl font-semibold lg:text-4xl">Jogos</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.Jogos}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl">Gols</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.Gols}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                                    >Assitencias</h2>
                                    <p className="px-1 lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.Assistencias}</p>
                                    <h2 className="text-2xl font-semibold lg:text-4xl"
                                    >Clubes</h2>
                                    <p className="px-1 whitespace-pre-line lg:text-lg"
                                    style={{color: "#013A40" }}
                                    >{jogador.Clubes
                                        .replace(/\\n/g, "\n")
                                        .replace(/:contentReference\[.*?\]\{.*?\}/g, "")}</p>
                                </div>
                        
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
    )

}