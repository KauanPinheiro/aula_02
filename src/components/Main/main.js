
import "./main.css"
import Equipe from "../Equipe/Equipe"
import Charlizard from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/teste_two.png"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"
import Tyle from "../../img/bgTyle.png"
import Ferra from "../../img/bgFerra.png"
import Mega from "../../img/bgGlass.png"
import Raio from "../../img/bgRaichu.png"

function Main() {
    const listA = [
        { nome: "Charlizard", caracteristica: "Fogo", img: Charlizard, c: "thesemi" },
        { nome: "Blastoise", caracteristica: "Água", img: Blastoise, c: "thebest", semi:'thesemi'},
        { nome: "Venossauro", caracteristica: "Grama", img: Venossauro, c: "thebest" },
        { nome: "Pikachu", caracteristica: "Eletríco", img: Pikachu, c: "thesemi" }
    ]
    const listB = [
        { nome: "Typlosion", caracteristica: "Fogo", img: Tyle, c: "thebest" },
        { nome: "Feraligatr", caracteristica: "Água", img: Ferra, c: "thesemi" },
        { nome: "Meganium ", caracteristica: "Grama", img: Mega, c: "thesemi" },
        { nome: "Raichu", caracteristica: "Eletríco", img: Raio, c: "thebest" }
    ]



    return (
        <main>
            <Equipe listP={listA} />
            <Equipe listP={listB} />
        </main>
    )
}

export default Main