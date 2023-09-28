import gg from "../../img/icone-GENGAR.png"
import "./modeloComp.css"
function ModeloComp(props){
    return(
        <div className="teste">
            <h1>{props.titulo}</h1> 
                <img src={gg} alt="logo" className="img-gg" />
            <p>{props.paragrafo}</p>
        </div>
    )
}
export default ModeloComp;                                                                                        
