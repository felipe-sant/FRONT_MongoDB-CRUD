import Cliente from "../models/Cliente";
import css from "../styles/cliente.module.css";
import edit from "../images/edit.svg";
import del from "../images/delete.svg";
import deletarCliente from "../functions/deletarCliente";
import ClienteModalComponent from "./ClienteModalComponent";
import { useState } from "react";

function ClienteComponent(props: { cliente: Cliente }) {
    const cliente = props.cliente

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    function deletar() {
        deletarCliente(cliente)
        window.location.reload()
    }

    return (
        <>
            <article className={css.conteudo}>
                <div className={css.info}>
                    <h2>{cliente.nome}</h2>
                    <p>{cliente.email}</p>
                </div>
                <div className={css.botao}>
                    <button onClick={handleShow}>
                        <img src={edit} alt="editar" />
                    </button>
                    <button onClick={deletar}>
                        <img src={del} alt="deletar" />
                    </button>
                </div>
            </article>
            <ClienteModalComponent cliente={cliente} show={show} handleClose={handleClose} />
        </>
    )
}

export default ClienteComponent