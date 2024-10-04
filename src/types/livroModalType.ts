import Livro from "../models/Livro"

type LivroModalType = {
    livro: Livro,
    show: boolean,
    handleClose: () => void
}

export default LivroModalType