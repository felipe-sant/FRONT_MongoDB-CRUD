import Livro from "../models/Livro";
import get from "./get";

async function buscarLivros(): Promise<Livro[]> {
    const livros: Livro[] = []
    const data: any[] = await get("http://localhost:4444/livros")
    data.forEach(livro => livro._id ? livros.push(new Livro(livro._id, livro.titulo, livro.autor, livro.ano)) : null)
    return livros
}

export default buscarLivros