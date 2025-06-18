import { Link } from "react-router-dom";
import "./socio.css"




import socio1 from "../../Assets/socio.png"

interface SocioProps{
    img: string;
}


export function Socio(){

    const socio: SocioProps[] =[
        {img: socio1},
    ]
    return(
        <main>
            <div className="dividir">
            
                </div>
            
                <div className="socio-img">
                    <Link>
                    {socio.map((socio) => (
                        <img src={socio.img}></img>
                    ))}
                    </Link>
                    
            </div>
        </main>
    )
}