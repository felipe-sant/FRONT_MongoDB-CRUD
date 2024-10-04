import css from "../styles/notFound.module.css"

function PageNotFound() {
    return (
        <main className={css.main}>
            <div>
                <h1 className={css.title}>404 - Not Found</h1>
                <p><a href="/">Vá para a página inicial.</a></p>
            </div>
        </main>
    )
}

export default PageNotFound