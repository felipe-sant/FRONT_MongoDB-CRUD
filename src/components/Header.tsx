import logo from "../images/gato.svg"
import css from "../styles/header.module.css"

function Header() {
    return (
        <header className={css.header}>
            <div className="img">
                <img src={logo} alt="logo felipe-sant" />
            </div>
            <h1>CRUD de Clientes</h1>
        </header>
    )
}

export default Header