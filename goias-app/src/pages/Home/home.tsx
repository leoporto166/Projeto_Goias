import {Header} from "../../Components/Header/header"
import {Noticias} from "../../Components/Noticias/noticas"
import {Partidas} from "../../Components/Partidas/partidas"
import {Socio} from "../../Components/Socio/socio"
import {Elenco} from "../../Components/Elenco/elenco"
import {Loja} from "../../Components/Loja/loja"
import {Patrocionios} from "../../Components/Patrocinios/patrocinios"

export default function  Home() {

  return (
      <div>
      <Header></Header>
      <Noticias></Noticias>
      <Partidas></Partidas>
      <Socio></Socio>
      <Elenco></Elenco>
      <Loja></Loja>
      <Patrocionios></Patrocionios>
    </div>
  )
}

