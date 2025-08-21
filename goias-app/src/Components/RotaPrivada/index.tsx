import { type ReactNode } from "react";
import { auth } from "../../services/firebaseconnection";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";


type PrivateProps = {
        children: ReactNode;
    }
export function Private({children}: PrivateProps){

 const [user, loading] = useAuthState(auth)

 if(loading){
    return <p>Carregando...</p>
 }

 if(user && user.email === "goiaspermitido@gmail.com") {
    return <>{children}</>
 } else{
    return <Navigate to={"/Projeto_Goias/"} replace/>
 }

}