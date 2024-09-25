async function post(url: string, data: {}) {
    try {
        const result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (!result.ok) {
            throw new Error("Erro ao conectar com o banco")
        }
    } catch (error) {
        console.error('Erro ao inserir dado:', error)
    }
}

export default post