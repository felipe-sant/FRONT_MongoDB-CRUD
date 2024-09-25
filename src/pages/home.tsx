import { useState } from "react"
import get from "../functions/get"
import Cliente from "../models/Cliente"
import post from "../functions/post"
import update from "../functions/update"
import del from "../functions/delete"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
            <Header />
            <main></main>
            <Footer />
        </main>
    )
}

export default Home