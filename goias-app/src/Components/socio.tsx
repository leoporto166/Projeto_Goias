import { Link } from "react-router-dom";
import "./socio.css"




import socio from "../Assets/socio.png"


export function Socio(){
    return(
        <main>
            <div className="dividir">
            
                </div>
            
                <div className="socio-img">
                    <Link>
                    <img src={socio}></img>
                    </Link>
                    
            </div>
        </main>
    )
}