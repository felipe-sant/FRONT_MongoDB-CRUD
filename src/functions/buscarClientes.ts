import Cliente from "../models/Cliente"
import ClienteType from "../types/clienteType"
import get from "./get"

async function buscarClientes(): Promise<Cliente[]> {
    const clientes: Cliente[] = []
    const data: ClienteType[] = await get("http://localhost:4444/clientes")
    data.forEach(cliente => cliente._id ? clientes.push(new Cliente(cliente._id, cliente.nome, cliente.email)) : null)
    return clientes
}

export default buscarClientes