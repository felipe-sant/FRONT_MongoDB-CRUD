import { useState } from "react";
import css from "../styles/livro.module.css"
import edit from "../images/edit.svg"
import del from "../images/delete.svg"
import Livro from "../models/Livro";
import LivroModalComponent from "./LivroModalComponent";
import deletarLivro from "../functions/deletarLivro";

function LivroComponent(props: { livro: Livro }) {
    const livro = props.livro

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    function deletar() {
        deletarLivro(livro)
        window.location.reload()
    }

    return (
        <>
            <article className={css.conteudo}>
                <div className={css.info}>
                    <h2>{livro.titulo}</h2>
                    <p>{livro.autor}</p>
                    <p>{livro.ano}</p>
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
            <LivroModalComponent livro={livro} show={show} handleClose={handleClose} />
        </>
    )
}

export default LivroComponent