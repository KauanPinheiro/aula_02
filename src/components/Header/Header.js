import logo from "../../img/logo.png"
import './header.css'

function Header(){
    return(
        <header className="header-menu">  
            <img src={logo} className= "img-logo"/>
            <h4 className="text2">Bem vindo </h4>
        </header>
    )
}
export default Header;