async function del(url: string) {
    try {
        const result = await fetch(url, {
            method: "DELETE"
        })

        if (!result.ok) {
            throw new Error("Erro ao conectar com o banco")
        }
    } catch (error) {
        console.error("Erro ao deletar dado:", error)
    }
}

export default del