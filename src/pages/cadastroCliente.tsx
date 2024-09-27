import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import css from "../styles/cadastroCliente.module.css"

function CadastroCliente() {
    return (
        <>
            <HeaderComponent />
            <main>
                <article className={css.conteudo}>
                    <div className={css.titulo}>
                        <h2>Criando novo cliente</h2>
                    </div>
                    <div className={css.formulario}>
                        <div className={css.input}>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" />
                        </div>
                        <div className={css.input}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" />
                        </div>
                    </div>
                    <div className={css.rodape}>
                        <button>CADASTRAR</button>
                    </div>
                </article>
            </main>
            <FooterComponent />
        </>
    )
}

export default CadastroCliente