import { useState } from "react"
import get from "../functions/get"
import Cliente from "../models/Cliente"

function Home() {
    const [clientes, setClientes] = useState<Cliente[]>([])
 
    async function buscarClientes() {
        const data: { nome: string, email: string }[] = await get("http://localhost:4444/clientes")
        const listaCliente: Cliente[] = []
        data.forEach(cli => listaCliente.push(new Cliente(cli.nome, cli.email)))
        setClientes(listaCliente)
    }

    return (
        <main>
            <h1>Hello world</h1>
            <button onClick={buscarClientes}>buscar</button>
            {clientes.map((cliente, key) => {
                return (
                    <li key={key}>
                        {cliente.nome} - {cliente.email}
                    </li>
                )
            })}
        </main>
    )
}

export default Home