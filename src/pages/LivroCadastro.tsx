import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import css from "../styles/cadastroLivro.module.css"
import back_arrow from "../images/back_arrow.svg"
import { useState } from "react"
import Livro from "../models/Livro"

function Page_LivroCadastro() {
    const [titulo, setTitulo] = useState("")
    const [errorTitulo, setErrorTitulo] = useState(false)
    const [autor, setAutor] = useState("")
    const [errorAutor, setErrorAutor] = useState(false)
    const [ano, setAno] = useState<number>(new Date().getFullYear())

    function handleTitulo(event: any) {
        setErrorTitulo(false)
        setTitulo(event.target.value)
    }

    function handleAutor(event: any) {
        setErrorAutor(false)
        setAutor(event.target.value)
    }

    function handleAno(event: any) {
        const e: number = parseInt(event.target.value);
        if (!isNaN(e)) setAno(e) 
    }

    function verificarErros() {
        titulo === "" ? setErrorTitulo(true) : setErrorTitulo(false)
        autor === "" ? setErrorAutor(true) : setErrorAutor(false)
    }

    function cadastrar() {
        verificarErros()
        if (titulo === "" || autor === "") return
        const livro = new Livro("", titulo, autor, ano)
        // inserirLivro(livro)
        window.location.href = "/livros"
    }

    return (
        <>
            <HeaderComponent />
            <main>
                <article className={css.conteudo}>
                    <div className={css.titulo}>
                        <button onClick={() => window.location.href = "/livros"}>
                            <img src={back_arrow} alt="Voltar" />
                        </button>
                        <h2>Criando um novo livro</h2>
                    </div>
                    <div className={css.formulario}>
                        <div className={css.input}>
                            <label htmlFor="título" className={css.required}>Titulo</label>
                            <input
                                type="text"
                                placeholder="Adicione o título"
                                value={titulo}
                                onChange={handleTitulo}
                                className={errorTitulo ? css.error : ""}
                            />
                        </div>
                        <div className={css.input}>
                            <label htmlFor="autor" className={css.required}>Autor</label>
                            <input
                                type="text"
                                placeholder="Adicione o autor"
                                value={autor}
                                onChange={handleAutor}
                                className={errorAutor ? css.error : ""}
                            />
                        </div>
                        <div className={css.input}>
                            <label htmlFor="ano">Ano</label>
                            <input
                                type="number"
                                placeholder="Adicione o ano"
                                value={ano}
                                onChange={handleAno}
                            />
                        </div>
                    </div>
                    <div className={css.rodape}>
                        <button onClick={cadastrar}>Cadastrar</button>
                    </div>
                </article>
            </main>
            <FooterComponent />
        </>
    )
}

export default Page_LivroCadastro