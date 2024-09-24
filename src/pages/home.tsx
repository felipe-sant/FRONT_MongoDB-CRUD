import { useState } from "react"
import get from "../functions/get"

function Home() {
    const [clientes, setClientes] = useState([])
 
    async function buscarClientes() {
        const data = await get("http://localhost:4444/clientes")
        setClientes(data)
    }

    return (
        <main>
            <h1>Hello world</h1>
            <button onClick={buscarClientes}>buscar</button>
            {clientes.map((cliente, key) => {
                return (
                    <li key={key}>
                        sadlksalçdk
                    </li>
                )
            })}
        </main>
    )
}

export default Home