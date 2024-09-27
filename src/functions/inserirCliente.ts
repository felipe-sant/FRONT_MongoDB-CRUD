import Cliente from "../models/Cliente";
import post from "./post";

async function inserirCliente(cliente: Cliente) {
    await post("http://localhost:4444/clientes", cliente.toJson())
}

export default inserirCliente