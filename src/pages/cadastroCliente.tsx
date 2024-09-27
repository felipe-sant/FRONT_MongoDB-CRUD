import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import css from "../styles/cadastroCliente.module.css"
import back_arrow from "../images/back_arrow.svg"
import { useState } from "react"
import Cliente from "../models/Cliente"
import inserirCliente from "../functions/inserirCliente"

function CadastroCliente() {
    const [nome, setNome] = useState("")
    const [errorNome, setErrorNome] = useState(false)
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)

    function handleNome(event: any) {
        setNome(event.target.value)
    }

    function handleEmail(event: any) {
        setEmail(event.target.value)
    }

    function verificarErros() {
        nome == "" ? setErrorNome(true) : setErrorNome(false)
        email == "" ? setErrorEmail(true) : setErrorEmail(false)
    }

    function cadastrar() {
        verificarErros()
        if (nome == "" || email == "") return
        const cliente = new Cliente("", nome, email)
        inserirCliente(cliente)
        window.location.href = "/"
    }

    return (
        <>
            <HeaderComponent />
            <main>
                <article className={css.conteudo}>
                    <div className={css.titulo}>
                        <button onClick={() => window.location.href = "/"}>
                            <img src={back_arrow} alt="Voltar" />
                        </button>
                        <h2>Criando novo cliente</h2>
                    </div>
                    <div className={css.formulario}>
                        <div className={css.input}>
                            <label htmlFor="nome" className={css.required}>Nome</label>
                            <input 
                                type="text" 
                                placeholder="Adicione o cliente"
                                value={nome}
                                onChange={handleNome}
                                className={errorNome ? css.error : ""}
                            />
                        </div>
                        <div className={css.input}>
                            <label htmlFor="email" className={css.required}>Email</label>
                            <input 
                                type="email" 
                                placeholder="Adicione o email"
                                value={email}
                                onChange={handleEmail}
                                className={errorEmail ? css.error : ""}
                            />
                        </div>
                    </div>
                    <div className={css.rodape}>
                        <button onClick={cadastrar}>CADASTRAR</button>
                    </div>
                </article>
            </main>
            <FooterComponent />
        </>
    )
}

export default CadastroCliente