import { useEffect, useState } from "react";
import { Footer } from "../../Components/footer";
import { Header } from "../../Components/Header/header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseconnection";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowDown } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import fundo from "../../Assets/FUNDO-PERG..png"
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";



interface SocioProps {
    descricao: string;
    informacao1: string;
    informacao2: string;
    informacao3: string;
    informacao4: string;
    informacao5: string;
    informacao6: string;
    preco: string;
    titulo: string;
    button: string;
    id: string;
}

interface SocioImgProps {
    img: string;
    id: string;
}

interface DuvidasProps {
    txt: string
}

const Pergutas: DuvidasProps[] = [
    {txt: "COMO FUNCIONA O PROGRAMA ESMERALDA?"},
    {txt: "QUALQUER PESSOA PODE SE TORNAR SÓCIO TORCEDOR?"},
    {txt: "O QUE É UM PLANO INATIVO E COMO POSSO ATIVALO?"},
    {txt: "QUANTOS DEPENDENTES POSSO INCLUIR NO MEU PLANO"},
    {txt: "TEM JOGO HOJE, SE EU ME ASSOCIAR AGORA JÁ ENTRO NESTE JOGO?"},
    {txt: "SOU SÓCIO ATIVO, CONSIGO REALIZAR O CHECK-IN PARA O JOGO EM QUALQUER MOMENTO?"},
    {txt: "ESTOU COM UMA PARCELO EM ATRASO, VOU PODER ASSSIR OS JOGOS?"},
    {txt: "COMO FAÇO PARA CADASTRAR UM DEPENDENTE EM MEU PLANO?"},
    {txt: "ME TORNEI SÓCIO. PRECISO COMPRAR INGRESSO?"},
]

const Respostas: DuvidasProps[] = [
    {txt: "Esmeralda Sócio-Torcedor é o projeto de sócio-torcedor do Goiás Esporte Clube. É um programa de relacionamento entre o clube e seus torcedores. O torcedor que se associa está adquirindo o direito de assistir aos jogos do clube, como mandante, no estádio Hailé Pinheiro, de acordo com os locais e restrições do plano contratado, durante a sua vigência. Além disso, o sócio-torcedor terá direito a outros benefícios, como descontos na Loja Oficial do Goiás EC e descontos em uma rede de parceiros. Verifique a página de planos para conhecer melhor as opções, valores e vigências dos planos oferecidos.É necessário estar em dia com os pagamentos das parcelas para usufruir de todos os benefícios e vantagens oferecidos."},
    {txt: "Sim. Qualquer pessoa que possua um CPF válido pode se tornar sócio torcedor, basta confirmar o processo escolhendo um plano e forma de pagamento disponível. "},
    {txt: "É uma associação que foi iniciada mas não obteve confirmação de pagamento. Todos os planos são ativados automaticamente após a confirmação do pagamento da primeira parcela. No caso do cartão de crédito certamente ocorreu algum problema com o pagamento, como erro, dados inválidos ou transação não autorizada pela operadora do cartão.Entre em contato com o atendimento para saber o que ocorreu. Você poderá tentar efetuar o pagamento novamente, fornecer outro cartão ou mudar o formato da cobrança."},
    {txt: "Dependentes familiares no plano Nossa Família;               60,00 reais > Casal                                                  70,00 reais > Casal + 1 filho                                       *Em caso de mais dependentes diretos, será adicionado 10,00 reais por cada filho (até 18 anos)                                           Nos demais planos, será permitida apenas a inclusão de dependentes menores de 18 anos com 50% de desconto referente ao plano titular."},
    {txt: "Sim, caso ainda haja disponibilidade de setores. Após o período de abertura para o público geral, havendo esgotamento da capacidade nos setores, não será possível a realização de check-ins. Podem haver duelos aonde haja trava de adesões no dia da partida, o período da trava de associações no site pode variar de acordo com o jogo, a ser determinado pelo Goiás Esporte Clube. "},
    {txt: "Os sócios possuem a prioridade para confirmar seu check-in em todos os jogos, antes da abertura de venda dos ingressos para o público geral. Após o período de abertura para o público geral, havendo esgotamento da capacidade nos setores, não será possível a realização de check-ins, bem como a venda de ingressos."},
    {txt: "Quando é reconhecido pelo sistema a parcela em atraso, o plano automaticamente será bloqueado por inadimplência, bloqueando também a realização do check-in e liberação do ingresso.                    Para o desbloqueio, acesse: https://socioesmeralda.com.br/Login      Você poderá conferir na aba *Financeiro*"},
    {txt: "A inclusão dependente Nossa Família deverá ser realizada pelo nosso atendimento online.                                           Em caso de um novo plano ou renovação, pode ser realizada diretamente no ato de associação.                                               Em caso de dúvidas, basta nos acionar pelo número: (62) 99472-2541 para a conclusão do processo."},
    {txt: "Somente em caso de cancelamento do ingresso ou esgotamento do mesmo por falta de confirmação de presença dentro do prazo de disponibilidade.                                                    Com o plano ativo, acessando o seu cadastro, terá a opção de confirmar check-in, para ter acesso ao seu ingresso (Nossa Glória, Nossa Garra, Nossa Família)"},
    
    
]

export function Esmeralda(){


    const [socio, setSocio] = useState<SocioProps[]>([])
    const [socioImg, setSocioImg] = useState<SocioImgProps[]>([])
    const [selectIndex,  setSelectedIndex] = useState<null | number>(null)

    useEffect(() => {


        const socioRef  = collection(db, "Socio")
        const queryRef = query(socioRef, orderBy("id", "asc"))

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as SocioProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    descricao: data.descrição,
                    informacao1: data.informacao1,
                    informacao2: data.informacao2,
                    informacao3: data.informacao3,
                    informacao4: data.informacao4,
                    informacao5: data.informacao5,
                    informacao6: data.informacao6,
                    preco: data.preco,
                    titulo: data.titulo,
                    button: data.button,
                    id: doc.id,
                })
            })

            setSocio(lista)
            console.log(lista)

        })

        const socioImgRef = collection(db, "SocioImg")
        const queryRefImg = query(socioImgRef, orderBy("id", "desc"))

        const unsubImg = onSnapshot(queryRefImg, (snapshot) => {

            let lista = [] as SocioImgProps[]

            snapshot.forEach((doc) => {
                const data = doc.data()

                lista.push({
                    id: data.id,
                    img: data.img
                })
            })

            setSocioImg(lista)
            console.log(lista)

        })


        return () => {
            unsub()
            unsubImg()
        }

    }, [])
    return(
        <main>
            <Header />

            <section>
            { 
                socioImg.slice(0,1).map((img, index) => (
                <div key={index}>
                    <div
                    style={{
                    backgroundImage: `linear-gradient(rgba(0,35,0,0.7), rgba(0,25,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,1)), url(${img.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-[100%] h-[60vh] lg:h-[60vh]"
                    >
                        <div className="flex flex-col justify-center items-center w-[100%] h-[50vh] text-white">
                            <div className="">
                                <h2 className="text-2xl sm:text-3xl">
                                    QUEM É ESMERALDINO É
                                </h2>

                                <h1 className="text-6xl font-bold sm:text-7xl text-green-600">
                                    ESMERALDA
                                </h1>

                                <h3 className="mt-5 text-lg  sm:text-xl">FAÇA PARTE DO MAIOR DO CENTRO-OESTE</h3>

                                <div className="text-center mt-10 font-bold text-lg flex flex-col justify-center items-center">

                                    <h4 className="">CONHEÇA OS NOVOS PLANOS</h4>

                                    <FaArrowDown className="mt-10 text-green-600"></FaArrowDown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))

            }

                <div className="bg-black w-[100%] h-[80vh] mt-[-50px]">
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween = {0}
                navigation
                //autoplay = 5000
                breakpoints={{
                  320: {  
                    slidesPerView: 1.3,
                    spaceBetween: 25
                  },
                  640:{
                    slidesPerView: 1.5,
                    spaceBetween:20
                  }, 
                  641:{
                    slidesPerView: 1.7
                    
                  },
                  760:{
                    slidesPerView: 2.5
                  },
                  910:{
                    slidesPerView: 2.8
                  },
                  1024:{
                    slidesPerView: 3.2,
                  },
                  1250:{
                    slidesPerView: 4,
                  },
                  1600:{
                    slidesPerView: 5.2,
                  }
                }} className="w-full"
               >

                <div className="">
                    {
                        socio.map((socio) => (
                            <SwiperSlide key={socio.id} className="px-2 flex flex-col justify-center items-center">
                                <div className="transform hover:-translate-y-4 transition-all duration-800 mt-5">
                                    <div className="w-[280px] flex flex-col justify-center items-center py-2 bg-white rounded-t-xl mb-[-2px]">
                                        <div className="text-2xl font-semibold text-green-950">
                                                {socio.titulo}
                                            </div>
                                            <div className="py-2">
                                                <h3 className="font-normal text-green-900/80">{socio.descricao}</h3>
                                        </div>
                                        <div className="p-2 border rounded border-green-600/30 font-bold">
                                            {Number(socio.preco).toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL"
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-[280px] flex flex-col h-[500px] items-center py-2 bg-white text-[16px]
                                    ">
                                            <div className="py-2 px-2 flex flex-col justify-start items-start">
                                                <div className="flex justify-center items-center gap-2">
                                                    <div className="w-[10px]">
                                                        <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                    </div>
                                                    <h3 className="py-2">{socio.informacao1}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                <div className="flex justify-center items-center gap-2">
                                                    <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                    <h3 className="py-2">{socio.informacao2}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                <div className="flex justify-center items-center gap-2">
                                                <div className="w-[10px]">
                                                    <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                </div>
                                                <h3 className="py-2">{socio.informacao3}</h3>
                                                </div>
                                                <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                {
                                                    socio.informacao4 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao4}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                                 {
                                                    socio.informacao5 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao5}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                                 {
                                                    socio.informacao6 && (
                                                      <div>
                                                        <div className="flex justify-center items-center gap-2">
                                                        <div className="w-[10px]">
                                                            <FaCheckCircle color="green" size={12}></FaCheckCircle>
                                                        </div>
                                                        <h3 className="py-2">{socio.informacao6}</h3>
                                                        </div>
                                                        <div className="w-[98%] h-[0.5px] bg-green-800"></div>
                                                      </div>
                                                    )
                                                }
                                            </div>
                                    </div>
                                    <div className="w-[280px] flex flex-col py-2 bg-white mt-[-2px] rounded-b-xl justify-center items-center h-[50px]">
                                        <div className="flex justify-center bg-green-700 my-2 rounded text-green-50 mb-4 cursor-pointer py-1  text-center  hover:bg-white hover:text-green-500 border border-green-500 transition duration-500 w-[98%]">
                                                {socio.button}
                                        </div>
                                    </div>
                                </div>a
                            </SwiperSlide>
                        ))
                    }
                </div>
                
                    

               </Swiper>
                </div>
            </section>

            <section className="px-2 h-[120vh] sm:h-[100vh]"
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0)), url(${fundo})`}}
            >
                    <div className="pt-[120px] sm:pt-[50px] pb-2">
                        <h1 className="text-white font-bold">PERGUNTAS FREQUENTES</h1>
                    </div>

                    <div className="">

                        {
                        

                    <div className="">
                    {Pergutas.map((perg, index) => (
                        <div
                        key={index}
                        className="py-2 cursor-pointer select-none text-white"
                        onClick={() =>
                            setSelectedIndex(selectIndex === index ? null : index)
                        }
                        >
                        <div className="flex justify-between">
                            <h2>{perg.txt}</h2>

                            {selectIndex === index ? (
                            <AiOutlineUp className="" />
                            ) : (
                            <AiOutlineDown className="" />
                            )}
                        </div>

                        <div className="w-[100%] h-[1px] bg-green-100"></div>

                        {selectIndex === index && (
  <div className="mt-2 bg-white text-black p-2 rounded">
    {Respostas[index] ? Respostas[index].txt : "Resposta não encontrada"}
  </div>
)}
                        </div>
                    ))}
                    </div>
                                

                        }

                        

{/*
                        {
                            selectIndex === 0 && (
                                Respostas.slice(0,1).map((resp, index) => (
                                    <div key={index} className="mt-[-570px] bg-white"
                                    onClick={() => setSelectedIndex(null)}>
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 1 && (
                                Respostas.slice(1,2).map((resp, index) => (
                                    <div key={index} className="mt-[-530px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 2 && (
                                Respostas.slice(2,3).map((resp, index) => (
                                    <div key={index} className="mt-[-490px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 3 && (
                                Respostas.slice(3,4).map((resp, index) => (
                                    <div key={index} className="mt-[-450px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 4 && (
                                Respostas.slice(4,5).map((resp, index) => (
                                    <div key={index} className="mt-[-410px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 5 && (
                                Respostas.slice(4,5).map((resp, index) => (
                                    <div key={index} className="mt-[-345px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 6 && (
                                Respostas.slice(5,6).map((resp, index) => (
                                    <div key={index} className="mt-[-300px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 7 && (
                                Respostas.slice(6,7).map((resp, index) => (
                                    <div key={index} className="mt-[-260px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
                        {
                            selectIndex === 8 && (
                                Respostas.slice(7).map((resp, index) => (
                                    <div key={index} className="mt-[-220px] bg-white">
                                        {resp.txt}
                                    </div>
                                ))
                            )
                        }
*/}

                    </div>
            </section>
            
            <Footer />
        </main>
    )
}