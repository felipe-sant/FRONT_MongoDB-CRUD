import Cliente from "../models/Cliente"
import del from "./delete"

async function deletarCliente(cliente: Cliente) {
    await del("http://localhost:4444/clientes/" + cliente._id)
}

export default deletarCliente