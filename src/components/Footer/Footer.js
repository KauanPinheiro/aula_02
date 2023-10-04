import fac from "../../img/icons8-facebook-64.png"
import inst from "../../img/icons8-instagram-48.png"

import './footer.css'


function Footer(){
    return(
        <footer className="rodape">
            <img src={fac} className="img-fac"/>
            <img src={inst} className="img-inst"/>
        </footer>
    )
}

export default Footer;