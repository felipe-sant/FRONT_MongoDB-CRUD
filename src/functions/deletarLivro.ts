import Livro from "../models/Livro";
import del from "./delete";

async function deletarLivro(livro: Livro) {
    await del("http://localhost:4444/livros/" + livro._id)
}

export default deletarLivro