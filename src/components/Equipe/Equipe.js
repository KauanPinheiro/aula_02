import "./equipe.css"
import ExibePerfil from "../ExibePerfil/ExibePerfil"
import Charlizard  from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/teste_two.png"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"


function Equipe({listP}){


    return(
        <>
        <div>
        {
            listP.map((exibir) =>
            <ExibePerfil nome={exibir.nome} caracteristica={exibir.caracteristica} img={exibir.img} />
            )
        }
        </div>
    
    
    </>
    )
}
export default Equipe