import Cliente from "../models/Cliente";
import update from "./update";

async function atualizarCliente(cliente: Cliente) {
    await update("http://localhost:4444/clientes/" + cliente._id, cliente.toJson())
}

export default atualizarCliente