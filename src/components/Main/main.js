
import "./main.css"
import Equipe from "../Equipe/Equipe"
import Charlizard  from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/teste_two.png"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"
import Tyle from "../../img/bgTyle.png"
import Ferra from "../../img/bgFerra.png"
import Mega from "../../img/bgGlass.png"
import Raio from "../../img/bgRaichu.png"

function Main(){
    return(
        <main>
            <Equipe n1="Charlizard" img1={Charlizard} n2="Blastoise" img2={Blastoise} n3="Venossauro" img3={Venossauro} n4="Pikachu" img4={Pikachu} />   
            <Equipe n1="Typhlosion" img1={Tyle} n2="Feraligatr" img2={Ferra} n3="Meganium" img3={Mega} n4="Raichu" img4={Raio} />
        </main>
    )
}

export default Main