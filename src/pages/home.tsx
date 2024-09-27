import { useEffect, useState } from "react"
import Cliente from "../models/Cliente"
import css from "../styles/home.module.css"
import cancel from "../images/cancel.svg"
import warning from "../images/warning.svg"
import person_search from "../images/person_search.svg"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import ClienteComponent from "../components/ClienteComponent"
import buscarClientes from "../functions/buscarClientes"

function Home() {
    const [clientesDoServidor, setClientesDoServidor] = useState<Cliente[]>([])
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [errorImage, setErrorImage] = useState(person_search)
    const [errorText, setErrorText] = useState("Nenhum cliente encontrado.")

    async function buscarClientesDoServidor() {
        const clientes = await buscarClientes()
        console.log(clientes)
        setClientesDoServidor(clientes)
        setClientes(clientes)
    }

    useEffect(() => {
        buscarClientesDoServidor()
    }, [])

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
                            !clientes.length ?
                                <div className={css.semCliente}>
                                    <img src={errorImage} alt="" />
                                    <h2>{errorText}</h2>
                                </div>
                                :
                                clientes.map((cli, key) => (
                                    <div key={key}>
                                        <ClienteComponent cliente={cli} />
                                        <hr/>
                                    </div> 
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