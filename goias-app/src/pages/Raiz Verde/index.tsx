
import { Header } from "../../Components/Header/header"
import TG from "../../Assets/taça_goiano.png"
import quantGoiano from "../../Assets/28.png"
import goias from "../../Assets/goias.webp"
export function RaizVerde(){
    return(
        <div>
            <Header></Header>

            <div className="px-2">
                <h1 className="py-2 text-2xl sm:text-4xl font-semibold"
                style={{color: "#165953"}}>
                    Raiz Verde
                </h1>

                <div>
                    <h2 className="mt-2 text-xl sm:text-2xl font-semibold">Titulos</h2>
                    
                    <img src={goias} alt="escudo goais" className="rounded-xl w-5/12 h-90"/>

                    <div className="flex items-start">
                        
                        <img src={TG} alt="Taça Goianão" className="w-[100px] mt-2 "/>
                        <img src={quantGoiano} className="w-[80px] h-[130px]"/>
                    </div>


                </div>
            </div>
            
        </div>
    )
}