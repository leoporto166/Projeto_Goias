import { useEffect, useState } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";


interface TabelaProps{
    time: string;
    jogos: number;
    vitorias: number;
    pontos: number;
    empates: number;
    img: string
}

/*const tabela : TabelaProps[] = [
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
  */



export function Tabela(){

    const [tabela, setTabela] = useState<TabelaProps[]>([])

    const [largura, setLargura] = useState(window.innerWidth);

    function calcularTabela(dados: any[]): TabelaProps[] {
    return dados.map((item) => {
      const pontos = (item.vitorias ?? 0) * 3 + (item.empates ?? 0);
      return {
        time: item.nome,
        jogos: item.jogos,
        vitorias: item.vitorias,
        empates: item.empates,
        pontos,
        img: item.logo,
      };
    });
  }

  useEffect(() => {
    const tabelaRef = collection(db, "Tabela");
    const queryTabela = query(tabelaRef, orderBy("nome", "asc"));

    const unsub = onSnapshot(queryTabela, (snapshot) => {
      const lista = snapshot.docs.map((doc) => doc.data());
      const tabelaCalculada = calcularTabela(lista);
      setTabela(tabelaCalculada);
      console.log(tabelaCalculada)
      console.log("Snapshot Firestore:", lista);
      console.log("Tabela calculada:", tabelaCalculada);
    });


    return () => unsub();
  }, []);





useEffect(() => {
  function atualizarLargura() {
        setLargura(window.innerWidth);
  }

  window.addEventListener("resize", atualizarLargura);
  return () => window.removeEventListener("resize", atualizarLargura)

}, []);

const tabelaOrdenada = [...tabela].sort((a, b) => b.pontos - a.pontos);
const indexGoias = tabelaOrdenada.findIndex(t => t.time === "Goiás")

const start = Math.max(0, indexGoias - 1);
const end = Math.min(tabelaOrdenada.length, indexGoias + 4);
const timesProximos = tabelaOrdenada.slice(start, end);


return (
<main className="mt-2 mb-5">
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
        <table className=" w-[100px] text-left border-collapse border bg-white border-green-900 lg:w-[850px] xl:w-[1024px]">
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