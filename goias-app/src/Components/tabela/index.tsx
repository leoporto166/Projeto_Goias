import { useEffect, useState } from "react";

interface TabelaProps{
    time: string;
    jogos: number;
    vitorias: number;
    pontos: number;
    empates: number;
}

const tabela : TabelaProps[] = [
    { time: "Athletico‑PR", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Atlético‑GO", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Cuiabá",  jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Criciúma", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Volta Redonda", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Athletic", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Ferroviária", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Remo", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Goiás", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Novorizontino", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Operário‑PR", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "América‑MG", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Vila Nova", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Avaí", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Botafogo‑SP", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Chapecoense", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Coritiba", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "CRB", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Amazonas", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },

    { time: "Paysandu", jogos: 0, vitorias: 0, pontos: 0, empates: 0 },


]



    



export function Tabela(){

    const [largura, setLargura] = useState(window.innerWidth);
    const [table, setTable] = useState<TabelaProps[]>(tabela)

    
   function tabelaFun({ time, jogos, vitorias, empates }: Omit<TabelaProps, "pontos">) {
  setTable(currentTable => {
    return currentTable.map(t => {
      if (t.time === time) {
        const pontos = vitorias * 3 + empates;
        return { ...t, jogos, vitorias, pontos, empates };
      }
      return t;
    });
  });
}


useEffect(() => {
  tabelaFun({ time: "Goiás", jogos: 20, vitorias: 11, empates: 5 });    // 38 pontos
  tabelaFun({ time: "Coritiba", jogos: 20, vitorias: 11, empates: 5 }); // 38
  tabelaFun({ time: "Novorizontino", jogos: 20, vitorias: 9, empates: 8 }); // 35
  tabelaFun({ time: "Chapecoense", jogos: 20, vitorias: 10, empates: 3 });  // 33
  tabelaFun({ time: "Remo", jogos: 20, vitorias: 7, empates: 9 });    // 30
  tabelaFun({ time: "Criciúma", jogos: 20, vitorias: 8, empates: 5 }); // 29
  tabelaFun({ time: "Avaí", jogos: 20, vitorias: 7, empates: 8 });     // 29
  tabelaFun({ time: "Cuiabá", jogos: 19, vitorias: 8, empates: 4 });   // 28
  tabelaFun({ time: "Vila Nova", jogos: 20, vitorias: 8, empates: 3 }); // 27
  tabelaFun({ time: "Operário‑PR", jogos: 20, vitorias: 7, empates: 5 }); // 26
  tabelaFun({ time: "Athletico‑PR", jogos: 20, vitorias: 7, empates: 5 }); // 26
  tabelaFun({ time: "CRB", jogos: 20, vitorias: 7, empates: 4 });       // 25
  tabelaFun({ time: "Athletic", jogos: 19, vitorias: 7, empates: 2 });   // 23
  tabelaFun({ time: "Ferroviária", jogos: 20, vitorias: 5, empates: 8 }); // 23
  tabelaFun({ time: "Atlético‑GO", jogos: 19, vitorias: 5, empates: 8 }); // 23
  tabelaFun({ time: "América‑MG", jogos: 20, vitorias: 6, empates: 3 });  // 21
  tabelaFun({ time: "Volta Redonda", jogos: 19, vitorias: 5, empates: 6 }); // 21
  tabelaFun({ time: "Botafogo‑SP", jogos: 20, vitorias: 5, empates: 6 }); // 21
  tabelaFun({ time: "Paysandu", jogos: 20, vitorias: 4, empates: 8 });   // 20
  tabelaFun({ time: "Amazonas", jogos: 20, vitorias: 4, empates: 8 });
  
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
          <th className="px-2 border-green-900">J</th>
          <th className="px-2 border-green-900">P</th>
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
            <td className="px-2 border-green-900">{time.time}</td>
            <td className="px-2 border-green-900">{time.jogos}</td>
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
            <td className="px-4 border-green-900">{time.time}</td>
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