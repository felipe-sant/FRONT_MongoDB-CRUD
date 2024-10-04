import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import css from "../styles/home.module.css"

function PageHome() {
    return (
        <>
            <HeaderComponent />
            <main>
                <article className={css.main}>
                    <h1>Escolha o CRUD</h1>
                    <section className={css.links}>
                        <button onClick={() => window.location.href = "/clientes"}>Clientes</button>
                        <button onClick={() => window.location.href = "/livros"}>Livros</button>
                    </section>
                </article>
            </main>
            <FooterComponent />
        </>
    )
}

export default PageHome