import { useState } from "react"
import Cliente from "../models/Cliente"
import css from "../styles/home.module.css"
import cancel from "../images/cancel.svg"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import ClienteComponent from "../components/ClienteComponent"

function Home() {
    const cliente1 = new Cliente("dasd123123dsadfa", "Pedro Augusto Nogueira", "pedro@gmail.com")
    const cliente2 = new Cliente("dasdkgj2j232ksadfa", "João Augusto Nogueira", "joaozinho@gmail.com")
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
            <HeaderComponent />
            <main>
                <div className={css.conteudo}>
                    <section className={css.filtro}>
                        <div className={css.input}>
                            <input
                                type="text"
                                placeholder="Buscar clientes"
                            />
                            <button onClick={() => alert("oi")}>
                                <img src={cancel} alt="cancel" />
                            </button>
                        </div>
                        <a href="/clientes">Cadastrar novos clientes</a>
                    </section>
                    <section className={css.listaClientes}>
                        {
                            clientes.map((cli, key) => (
                                <>
                                    <ClienteComponent key={key} cliente={cli} />
                                    <hr />
                                </>
                            )) 
                        }
                    </section>
                </div>
            </main>
            <FooterComponent />
        </>
    )
}

export default Home