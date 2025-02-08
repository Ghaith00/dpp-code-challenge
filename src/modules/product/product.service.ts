
export const fetchPassportsAPI = async (id: string) => {
    try {
        const response = await fetch(
            `https://api-vera.susi.spherity.dev/credential-registry/${id}`
        )
        if (!response.ok) throw new Error('Failed to fetch passports')
        return await response.json()
    } catch (error) {
        console.error('Error fetching passports:', error)
        return []
    }
}