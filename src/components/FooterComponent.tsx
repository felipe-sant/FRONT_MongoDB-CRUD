import css from "../styles/footer.module.css"

function FooterComponent() {
    return (
        <footer className={css.footer}>
            <p>Feito por:<a href="https://github.com/felipe-sant">felipe-sant</a></p>
        </footer>
    )
}

export default FooterComponent