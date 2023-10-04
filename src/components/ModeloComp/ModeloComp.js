import gg from "../../img/icone-GENGAR.png"
import "./modeloComp.css"
function ModeloComp(props){
    return(
        <div className="teste">
            <h1>{props.titulo}</h1> 
            <div className="teste-img">
                <img src={gg} alt="logo" className="img-gg" />
                </div>
            <p>{props.paragrafo}</p>
        </div>
    )
}
export default ModeloComp;                                                                                        
