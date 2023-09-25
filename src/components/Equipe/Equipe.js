import ExibePerfil from "../ExibePerfil/ExibePerfil"
import Charlizard  from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/pokemon-blastoise-nicknames.jpg"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"



function Equipe(name, imgs, caracteristica){
    return(
        <div>
            <ExibePerfil nome="Charlizard" caracteristica="Fire" img={Charlizard} className ="poke-g" />  
            <ExibePerfil nome="Blastoise" caracteristica="Water" img={Blastoise} className="poke-p" /> 
            <ExibePerfil nome="Venassauro" caracteristica="grama" img={Venossauro} className="poke-p" /> 
            <ExibePerfil nome="Pikachu" caracteristica="eletríco" img={Pikachu} className="poke-p" /> 
        </div>
    )
}
export default Equipe