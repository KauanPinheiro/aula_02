import "./equipe.css"
import ExibePerfil from "../ExibePerfil/ExibePerfil"
import Charlizard from "../../img/006Charizard_AG_anime.jpg"
import Blastoise from "../../img/teste_two.png"
import Venossauro from "../../img/003Venusaur_Dream.jpg"
import Pikachu from "../../img/580b57fcd9996e24bc43c325.png"


function Equipe({ listP }) {
    function cat(c, n) {
        if (c === "thebest") {
            return (
                <div className="mitico">
                    <p>The best</p>
                </div>
            )
        } else if (c === "thesemi") {
            return (
                <div className="semeMitico">
                    <p>A</p>
                </div>
            )
        } else {
            console.log(`falta categoria ${n}`)
            return(
                <div className="sCat">
                <p>ATENÇÃO! {n} está sem categoria</p>
            </div>
            )
        }
    }



    return (
        <>
            <div className="container">
                {
                    listP.map((exibir) =>
                        <div>
                            <img className="img-exibe-perfil" src={exibir.img} alt={exibir.nome} />
                            {
                                exibir.name === "tName" ? 
                                <h1>Nome: {exibir.nome}</h1> 
                                :
                                "   "
                            }
                            
                            {cat(exibir.c, exibir.nome)}

                            {/* {
                                exibir.best === "thebest" ?
                                    <div className="mitico">
                                        <p>The best</p>
                                    </div>
                                    : ""
                            }
                            {
                                exibir.semi === "thesemi" ?
                                    <div className="semeMitico">
                                        <p>A</p>
                                    </div>
                                    :""
                                    
                            } */}
                            <p>Caracteristicas: {exibir.caracteristica}</p>
                        </div>
                    )
                }
            </div>


        </>
    )
}
export default Equipe