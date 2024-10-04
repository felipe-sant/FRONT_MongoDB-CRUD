import Livro from "../models/Livro";
import update from "./update";

async function atualizarLivro(livro: Livro) {
    await update("http://localhost:4444/livros/" + livro._id, livro.toJson())
}

export default atualizarLivro