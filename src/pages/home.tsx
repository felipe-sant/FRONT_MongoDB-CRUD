import { useState } from "react"
import get from "../functions/get"
import Cliente from "../models/Cliente"
import post from "../functions/post"
import update from "../functions/update"
import del from "../functions/delete"

function Home() {
    const [clientes, setClientes] = useState<Cliente[]>([])

    const pedroAugusto: Cliente = new Cliente("66f31832edd2360e948b9878", "pedro augusto", "pedroaugusto@gmail.com")

    async function buscarClientes() {
        const data: { _id: string, nome: string, email: string }[] = await get("http://localhost:4444/clientes")
        const listaCliente: Cliente[] = []
        data.forEach(cli => listaCliente.push(new Cliente(cli._id, cli.nome, cli.email)))
        setClientes(listaCliente)
    }

    async function inserirCliente() {
        await post("http://localhost:4444/clientes", pedroAugusto.toJson())
    }

    async function atualizarCliente() {
        await update("http://localhost:4444/clientes/" + pedroAugusto._id, pedroAugusto.toJson())
    }

    async function deletarCliente() {
        await del("http://localhost:4444/clientes/" + pedroAugusto._id)
    }

    return (
        <main>
            <h1>Hello world</h1>
            <button onClick={inserirCliente}>inserir</button>
            <button onClick={buscarClientes}>buscar</button>
            <button onClick={atualizarCliente}>Atualizar</button>
            <button onClick={deletarCliente}>Deletar</button>
            {clientes.map((cliente, key) => {
                return (
                    <li key={key}>
                        {cliente._id} - {cliente.nome} - {cliente.email}
                    </li>
                )
            })}
        </main>
    )
}

export default Home