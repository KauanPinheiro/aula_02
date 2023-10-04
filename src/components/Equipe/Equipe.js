import "./equipe.css"
import ExibePerfil from "../ExibePerfil/ExibePerfil"
import Charlizard  from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/teste_two.png"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"


function Equipe({n1,n2,n3,n4,img1,img2,img3,img4}){
    return(
        <>

        <div className="equipe">
            <ExibePerfil nome={n1} caracteristica="Fogo" img={img1} className ="poke-1" />  
            <ExibePerfil nome={n2} caracteristica="Água" img={img2} className="poke-2" /> 
            <ExibePerfil nome={n3} caracteristica="grama" img={img3} className="poke-3" /> 
            <ExibePerfil nome={n4} caracteristica="eletríco" img={img4} className="poke-4" /> 
            </div>
            
        </>
    )
}
export default Equipe