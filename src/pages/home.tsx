import { useState } from "react"
import get from "../functions/get"
import Cliente from "../models/Cliente"
import post from "../functions/post"
import update from "../functions/update"
import del from "../functions/delete"
import Header from "../components/Header"
import Footer from "../components/Footer"
import css from "../styles/home.module.css"

function Home() {
    const cliente1 = new Cliente("dasd123123dsadfa", "Pedro Augusto Nogueira Silva", "pedro@gmail.com")
    const cliente2 = new Cliente("dasdkgj2j232ksadfa", "João Augusto Nogueira Silva", "joaozinho@gmail.com")
    const cliente3 = new Cliente("ddsa123dsacvasdfd", "Luiz Felipe dos Santos", "luizfelipedossantos2004@hotmail.com")

    const [clientes, setClientes] = useState<Cliente[]>([cliente1, cliente2, cliente3])

    // async function buscarClientes() {
    //     const data: { _id: string, nome: string, email: string }[] = await get("http://localhost:4444/clientes")
    //     const listaCliente: Cliente[] = []
    //     data.forEach(cli => listaCliente.push(new Cliente(cli._id, cli.nome, cli.email)))
    //     setClientes(listaCliente)
    // }

    // async function inserirCliente() {
    //     await post("http://localhost:4444/clientes", pedroAugusto.toJson())
    // }

    // async function atualizarCliente() {
    //     await update("http://localhost:4444/clientes/" + pedroAugusto._id, pedroAugusto.toJson())
    // }

    // async function deletarCliente() {
    //     await del("http://localhost:4444/clientes/" + pedroAugusto._id)
    // }

    return (
        <>
            <Header />
            <main>
                <article className={css.conteudo}>
                    <div className={css.filtro}>
                        <input
                            type="text"
                            placeholder="Buscar clientes"
                        />
                        <a href="/clientes">Cadastrar novos clientes</a>
                    </div>
                    <div className="listaClientes">

                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Home