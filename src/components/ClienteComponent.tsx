import Cliente from "../models/Cliente";
import css from "../styles/cliente.module.css";
import edit from "../images/edit.svg";
import del from "../images/delete.svg";

function ClienteComponent(props: {cliente: Cliente}) {
    const cliente = props.cliente

    return (
        <article className={css.conteudo}>
            <div className={css.info}>
                <h2>{cliente.nome}</h2>
                <p>{cliente.email}</p>
            </div>
            <div className={css.botao}>
                <button onClick={() => alert("oi")}>
                    <img src={edit} alt="editar" />
                </button>
                <button onClick={() => alert("oi")}>
                    <img src={del} alt="deletar" />
                </button>
            </div>
        </article>
    )
}

export default ClienteComponent