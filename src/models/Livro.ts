import LivroType from "../types/livroType"

class Livro {
    public _id: string
    public titulo: string
    public autor: string
    public ano: number

    constructor(_id: string, titulo: string, autor: string, ano: number) {
        this._id = _id
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    public toJson(): LivroType {
        return { titulo: this.titulo, autor: this.autor, ano: this.ano }
    }
}

export default Livro