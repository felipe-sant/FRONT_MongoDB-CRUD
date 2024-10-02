import { useEffect, useState } from "react"
import Livro from "../models/Livro"
import person_search from "../images/person_search.svg"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
import cancel from "../images/cancel.svg"
import LivroComponent from "../components/LivroComponent"
import css from "../styles/livroPage.module.css"

function Page_Livros() {
    const [livros, setLivros] = useState<Livro[]>([])
    const [errorImage] = useState(person_search)
    const [errorText] = useState("Nenhum livro encontrado.")

    async function buscarLivrosDoServidor() {
        // const livros = await buscarLivros()
        const livros: Livro[] = [new Livro("1", "pedro augustos book", "pedro augusto", 2020)]
        setLivros(livros)
    }

    useEffect(() => {
        buscarLivrosDoServidor()
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
                                placeholder="Buscar livros"
                            />
                            <button onClick={() => alert("oi")}>
                                <img src={cancel} alt="cancel" />
                            </button>
                        </div>
                        <a href="/livros/cadastro">Cadastrar novos livros</a>
                    </section>
                    <section className={css.listaLivros}>
                        {
                            !livros.length ?
                                <div className={css.semLivro}>
                                    <img src={errorImage} alt="" />
                                    <h2>{errorText}</h2>
                                </div>
                                :
                                livros.map((liv, key) => (
                                    <div key={key}>
                                        <LivroComponent livro={liv} />
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

export default Page_Livros