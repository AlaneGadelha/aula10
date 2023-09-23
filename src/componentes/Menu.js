import { Link } from "react-router-dom"

function Menu(){

    return(
        <>
            <nav>
                <ul>
                    <li><Link to = '/' >Home</Link></li>
                    <li><Link to = '/contatos' >Contatos</Link></li>
                    <li><Link to = '/form' >Formulário</Link></li>
                    <li><Link to = '/Menu' >Menu</Link></li>

                </ul>
            </nav>
        </>
    )
}
export default Menu