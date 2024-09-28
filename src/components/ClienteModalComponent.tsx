import Modal from 'react-bootstrap/Modal';
import ClienteModalType from '../types/clienteModalType';
import modal from "../styles/modal.module.css";
import css from "../styles/clienteModal.module.css";

function ClienteModalComponent(props: ClienteModalType) {
    const cliente = props.cliente;
    const show = props.show;
    const handleClose = props.handleClose;

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
                    />
                </div>
                <div className={css.input}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder={cliente.email}
                    />
                </div>
                <p>Caso não queira alterar, deixe em branco</p>
            </Modal.Body>
            <Modal.Footer className={css.rodape}>
                <button>Salvar</button>
            </Modal.Footer>
        </Modal>

    );
}

export default ClienteModalComponent;