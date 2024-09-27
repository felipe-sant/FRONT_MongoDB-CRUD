import ClienteType from "../types/clienteType"

class Cliente {
    public _id: string
    public nome: string
    public email: string
    constructor(_id: string, nome: string, email: string) {
        this._id = _id
        this.nome = nome
        this.email = email
    }
    public toJson(): ClienteType { return { nome: this.nome, email: this.email } }
}

export default Cliente