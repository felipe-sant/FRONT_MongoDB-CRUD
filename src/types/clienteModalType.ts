import Cliente from "../models/Cliente"

type ClienteModalType = {
    cliente: Cliente,
    show: boolean,
    handleClose: () => void
}

export default ClienteModalType