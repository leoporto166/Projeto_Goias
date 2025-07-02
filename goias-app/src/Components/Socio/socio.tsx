import { Link } from "react-router-dom";
import "./socio.css"
import { useEffect, useState } from "react";




import socio1 from "../../Assets/socio.png"
import socio2 from "../../Assets/banner2025_socio.jpg"
import socio3 from "../../Assets/banner2025_sociomob.jpg"



export function Socio(){

    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setLargura(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <main>
            <div className="dividir">
            
                </div>
            
                <div className="socio-img">
                    <Link to={"/"}>
                    {largura <= 641 &&<img src={socio1}></img>}
                    {(largura >= 642 && largura <= 749) && <img src={socio3} alt="Sócio 3" />}
                    {largura >= 750 &&<img src={socio2}></img>}
                    </Link>
                </div>
        </main>
    )
}