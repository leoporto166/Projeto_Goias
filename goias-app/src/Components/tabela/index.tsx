import { useEffect, useState } from "react";

import escudoGoias from "../../Assets/logo-goias-esporte-clube-256.png"
import escudoCoritiba from "../../Assets/coritiba.png"
import escudoRemo from "../../Assets/Remo.png"
import escudoCriciuma from "../../Assets/Criciuma.webp"
import escudoChape from "../../Assets/Chape.png"
import escudoCuiba from "../../Assets/Cuiabá.png"
import escudoNovo from "../../Assets/Novorizontino.png"
import escudoAvai from "../../Assets/avai.png"
import escudoByla from "../../Assets/byla.png"
import escudoAtl from "../../Assets/athletic.png"
import escudoCap from "../../Assets/cap.png"
import escudoAma from "../../Assets/amazonas.png"
import escudoAmer from "../../Assets/América.png"
import escudoPay from "../../Assets/Paysandu.png"
import escudoOpr from "../../Assets/OPR.png"
import escudoBota from "../../Assets/botafogo.png"
import escudoCRB from "../../Assets/crb.png"
import escudoAtlGO from "../../Assets/Atlético_Goianiense.png"
import escudoFerro from "../../Assets/Ferroviária.png"
import escudoVoltaço from "../../Assets/Voltaço.png"










interface TabelaProps{
    time: string;
    jogos: number;
    vitorias: number;
    pontos: number;
    empates: number;
    img: string
}

const tabela : TabelaProps[] = [
    { time: "Athletico‑PR", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: ""},

    { time: "Atlético‑GO", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Cuiabá",  jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Criciúma", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Volta Redonda", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Athletic", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Ferroviária", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Remo", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Goiás", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Novorizontino", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Operário‑PR", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "América‑MG", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Vila Nova", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Avaí", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Botafogo‑SP", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Chapecoense", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Coritiba", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "CRB", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Amazonas", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },

    { time: "Paysandu", jogos: 0, vitorias: 0, pontos: 0, empates: 0, img: "" },


]



    



export function Tabela(){

    const [largura, setLargura] = useState(window.innerWidth);
    const [table, setTable] = useState<TabelaProps[]>(tabela)

    
   function tabelaFun({ time, jogos, vitorias, empates, img }: Omit<TabelaProps, "pontos">) {
  setTable(currentTable => {
    return currentTable.map(t => {
      if (t.time === time) {
        const pontos = vitorias * 3 + empates;
        return { ...t, jogos, vitorias, pontos, empates, img };
      }
      return t;
    });
  });
}


useEffect(() => {
   tabelaFun({ time: "Goiás", jogos: 20, vitorias: 11, empates: 5, img: escudoGoias });
  tabelaFun({ time: "Coritiba", jogos: 20, vitorias: 11, empates: 5, img: escudoCoritiba });
  tabelaFun({ time: "Novorizontino", jogos: 20, vitorias: 9, empates: 8, img: escudoNovo });
  tabelaFun({ time: "Chapecoense", jogos: 20, vitorias: 10, empates: 3, img: escudoChape });
  tabelaFun({ time: "Remo", jogos: 20, vitorias: 7, empates: 9, img: escudoRemo });
  tabelaFun({ time: "Criciúma", jogos: 20, vitorias: 8, empates: 5, img: escudoCriciuma });
  tabelaFun({ time: "Avaí", jogos: 20, vitorias: 7, empates: 8, img: escudoAvai });
  tabelaFun({ time: "Cuiabá", jogos: 19, vitorias: 8, empates: 4, img: escudoCuiba });
  tabelaFun({ time: "Vila Nova", jogos: 20, vitorias: 8, empates: 3, img: escudoByla });
  tabelaFun({ time: "Athletic", jogos: 19, vitorias: 7, empates: 2, img: escudoAtl });
  tabelaFun({ time: "Athletico‑PR", jogos: 20, vitorias: 7, empates: 5, img: escudoCap });
  tabelaFun({ time: "Amazonas", jogos: 20, vitorias: 4, empates: 8, img: escudoAma });
  tabelaFun({ time: "América‑MG", jogos: 20, vitorias: 6, empates: 3, img: escudoAmer });
  tabelaFun({ time: "Paysandu", jogos: 20, vitorias: 4, empates: 8, img: escudoPay });
  tabelaFun({ time: "Operário‑PR", jogos: 20, vitorias: 7, empates: 5, img: escudoOpr });
  tabelaFun({ time: "Botafogo‑SP", jogos: 20, vitorias: 5, empates: 6, img: escudoBota });
  tabelaFun({ time: "CRB", jogos: 20, vitorias: 7, empates: 4, img: escudoCRB });
  tabelaFun({ time: "Atlético‑GO", jogos: 19, vitorias: 5, empates: 8, img: escudoAtlGO });
  tabelaFun({ time: "Ferroviária", jogos: 20, vitorias: 5, empates: 8, img: escudoFerro });
  tabelaFun({ time: "Volta Redonda", jogos: 19, vitorias: 5, empates: 6, img: escudoVoltaço });
  
  function atualizarLargura() {
        setLargura(window.innerWidth);
  }

  window.addEventListener("resize", atualizarLargura);
  return () => window.removeEventListener("resize", atualizarLargura)

}, []);

const tabelaOrdenada = [...table].sort((a, b) => b.pontos - a.pontos);
const indexGoias = tabelaOrdenada.findIndex(t => t.time === "Goiás")

const start = Math.max(0, indexGoias - 1);
const end = Math.min(tabelaOrdenada.length, indexGoias + 4);
const timesProximos = tabelaOrdenada.slice(start, end);

<div className="flex gap-4">
                <h1>Classificação</h1>
                <h1>Jogos</h1>
                <h1>Vitorias</h1>
                <h1>Pontos</h1>
            </div>
            {
                timesProximos.map((time) => (
                    <div key={time.time} className="flex flex-col">
                        <div className="flex">
                            <div>{time.time}</div>

                            <div className="ml-[67px]">{time.jogos}</div>

                            <div className="ml-[41px]">{time.vitorias}</div>

                            <div className="ml-[55px]">{time.pontos}</div>
                        </div>
                        <div className="w-full h-[1px] bg-green-950"></div>
                    </div>

                ))
            }

console.log(tabelaOrdenada)



return (
<main className="my-10">
    {
        largura < 700 ? (
    <table className=" w-[100px] text-left  border-collapse border bg-white">
      <thead className="">
        <tr className="text-green-950 font-bold">
          <th className="px-2 border-green-900 py-3">Classificação</th>
          <th className="px-2 border-green-900 ">Time</th>
          <th className="px-2 border-green-900">JGS</th>
          <th className="px-2 border-green-900">PTS</th>
        </tr>
      </thead>
      <tbody>
        {timesProximos.map((time, index) => (
          <tr
            key={time.time}
            className={`border border-green-950 ${
              time.time === "Goiás" ? "bg-green-300 font-bold" : ""
            }`}
          >
            <td className="px-2 border-green-900 py-3">{index + 1}</td>

            <td className=" border-green-900 flex items-center w-[180px]">
              <img src={time.img} className="w-15 p-[6px] ml-[-3px]"/>
              {time.time}
              </td>
            <td className="px-2 border-green-900 ml-10">{time.jogos}</td>
            <td className="px-2 border-green-900">{time.pontos}</td>
            
          </tr>
          
        ))}
      </tbody>
    </table>
    ) : (
        <table className=" w-[100px] text-left border-collapse border bg-white border-green-900">
      <thead>
        <tr className="text-green-950 font-bold text-lg ">
          <th className="px-4 border-green-900 py-2">CLASSIFICAÇÃO</th>
          <th className="px-4 border-green-900">TIME</th>
          <th className="px-4 border-green-900">JOGOS</th>
          <th className="px-4 border-green-900">VITORIAS</th>
          <th className="px-4 border-green-900">PONTOS</th>
        </tr>
      </thead>
      <tbody>
        {timesProximos.map((time, index) => (
          <tr
            key={time.time}
            className={`border border-green-950 ${
              time.time === "Goiás" ? "bg-green-300 font-bold" : ""
            }`}
          >
            <td className="px-4 border-green-900 py-2">{index + 1}</td>
            <td className=" border-green-900 flex items-center w-[200px]">
              <img src={time.img} className="w-15 p-2 ml-[-3px]"/>
              {time.time}
              </td>
            <td className="px-4 border-green-900">{time.jogos}</td>
            <td className="px-4 border-green-900">{time.vitorias}</td>
            <td className="px-4 border-green-900">{time.pontos}</td>
            
          </tr>
          
        ))}
      </tbody>
    </table>
    )
    }
  </main>
);
}