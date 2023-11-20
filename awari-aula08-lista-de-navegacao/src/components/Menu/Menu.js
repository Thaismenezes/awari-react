import { Link } from "react-router-dom"



const Menu = () => {
    return <nav>
        <Link to ='/'>Home</Link> <br/>
        <Link to='/Error'>Fale Conosco</Link> <br/>
        <Link to='/about'>Sobre Nós</Link>
    </nav>
}

export default Menu;