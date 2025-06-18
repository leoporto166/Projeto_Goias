import {Header} from "../Header/header"
import {Noticias} from "../Noticias/noticas"
import {Partidas} from "../Partidas/partidas"
import {Socio} from "../Socio/socio"
import {Elenco} from "../Elenco/elenco"
import {Loja} from "../Loja/loja"
import {Patrocionios} from "../Patrocinios/patrocinios"

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

