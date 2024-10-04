import Modal from 'react-bootstrap/Modal';
import LivroModalType from "../types/livroModalType";
import modal from "../styles/modal.module.css";
import css from "../styles/livroModal.module.css"
import { useState } from "react";
import Livro from "../models/Livro"
import atualizarLivro from '../functions/atualizarLivro';

function LivroModalComponent(props: LivroModalType) {
    const livro = props.livro;
    const show = props.show;
    const handleClose = props.handleClose;

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [ano, setAno] = useState<number>(livro.ano);

    function handleTitulo(event: React.ChangeEvent<HTMLInputElement>) {
        setTitulo(event.target.value);
    }

    function handleAutor(event: React.ChangeEvent<HTMLInputElement>) {
        setAutor(event.target.value);
    }

    function handleAno(event: React.ChangeEvent<HTMLInputElement>) {
        const e: number = parseInt(event.target.value);
        if (!isNaN(e)) setAno(e)
    }

    function salvar() {
        const tituloLivro = titulo === "" ? livro.titulo : titulo;
        const autorLivro = autor === "" ? livro.autor : autor;
        const anoLivro: number = ano;
        atualizarLivro(new Livro(livro._id, tituloLivro, autorLivro, anoLivro));
        window.location.reload();
    }

    return (
        <Modal show={show} onHide={handleClose} className={modal.modal}>
            <Modal.Header className={css.titulo}>
                <div className={css.id}>
                    <span>{livro._id}</span>
                </div>
                <div className={css.nomeTitulo}>
                    <Modal.Title>{livro.titulo}</Modal.Title>
                    <hr />
                </div>
            </Modal.Header>
            <Modal.Body className={css.info}>
                <div className={css.input}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        placeholder={livro.titulo}
                        onChange={handleTitulo}
                        value={titulo}
                    />
                </div>
                <div className={css.input}>
                    <label htmlFor="autor">Autor</label>
                    <input
                        type="text"
                        placeholder={livro.autor}
                        onChange={handleAutor}
                        value={autor}
                    />
                </div>
                <div className={css.input}>
                    <label htmlFor="ano">Ano</label>
                    <input
                        type="number"
                        placeholder={livro.ano.toString()}
                        onChange={handleAno}
                        value={ano}
                    />
                </div>
                <p>Caso não queira alterar, deixe em branco</p>
            </Modal.Body>
            <Modal.Footer className={css.rodape}>
                <button onClick={salvar}>Salvar</button>
            </Modal.Footer>
        </Modal>

    )
}

export default LivroModalComponent