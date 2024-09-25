async function update(url: string, data: {}) {
    try {
        const result = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (!result.ok) {
            throw new Error("Erro ao conectar com o banco")
        }
    } catch (error) {
        console.error("Erro ao atualizar dado:", error)
    }
}

export default update