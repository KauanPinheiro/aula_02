import "./equipe.css"
import ExibePerfil from "../ExibePerfil/ExibePerfil"
import Charlizard  from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/pokemon-blastoise-nicknames.jpg"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"


function Equipe(name, imgs, caracteristica){
    return(
        <div className="equipe">
            <ExibePerfil nome="Charlizard" caracteristica="Fogo" img={Charlizard} className ="poke-1" />  
            <ExibePerfil nome="Blastoise" caracteristica="Água" img={Blastoise} className="poke-2" /> 
            <ExibePerfil nome="Venassauro" caracteristica="grama" img={Venossauro} className="poke-3" /> 
            <ExibePerfil nome="Pikachu" caracteristica="eletríco" img={Pikachu} className="poke-4" /> 
        </div>
    )
}
export default Equipe