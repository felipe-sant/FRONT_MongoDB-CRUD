async function get(url: string): Promise<[]> {
    try {
        const result = await fetch(url)
        if (!result.ok) throw new Error(`Erro de requisição: ${result.status}`)
        const data = await result.json()
        return data
    } catch (error) {
        console.error('Erro ao buscar dados:', error)
        return []
    }
}

export default get