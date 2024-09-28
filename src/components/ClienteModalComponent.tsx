import Modal from 'react-bootstrap/Modal';
import ClienteModalType from '../types/clienteModalType';
import modal from "../styles/modal.module.css";
import css from "../styles/clienteModal.module.css";
import { useState } from 'react';
import Cliente from '../models/Cliente';
import atualizarCliente from '../functions/atualizarCliente';

function ClienteModalComponent(props: ClienteModalType) {
    const cliente = props.cliente;
    const show = props.show;
    const handleClose = props.handleClose;

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function handleNome (event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }

    function handleEmail (event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function salvar() {
        const nomeCliente = nome === "" ? cliente.nome : nome;
        const emailCliente = email === "" ? cliente.email : email;
        atualizarCliente(new Cliente(cliente._id, nomeCliente, emailCliente));
        window.location.reload();
    }

    return (
        <Modal show={show} onHide={handleClose} className={modal.modal}>
            <Modal.Header className={css.titulo}>
                <div className={css.id}>
                    <span>{cliente._id}</span>
                </div>
                <div className={css.nomeTitulo}>
                    <Modal.Title className={css.nome}>{cliente.nome}</Modal.Title>
                    <hr />
                </div>
            </Modal.Header>
            <Modal.Body className={css.info}>
                <div className={css.input}>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder={cliente.nome}
                        onChange={handleNome}
                        value={nome}
                    />
                </div>
                <div className={css.input}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder={cliente.email}
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
                <p>Caso não queira alterar, deixe em branco</p>
            </Modal.Body>
            <Modal.Footer className={css.rodape}>
                <button onClick={salvar}>Salvar</button>
            </Modal.Footer>
        </Modal>

    );
}

export default ClienteModalComponent;