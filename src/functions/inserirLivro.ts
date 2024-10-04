import Livro from "../models/Livro";
import post from "./post";

async function inserirLivro(livro: Livro) {
    await post("http://localhost:4444/livros", livro.toJson())
}

export default inserirLivro