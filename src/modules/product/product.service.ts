
export const fetchPassportsAPI = async () => {
    try {
        const response = await fetch(
            'https://api-vera.susi.spherity.dev/credential-registry/did:web:api-rcs.susi.spherity.dev:did-registry:acme-power-drive-x-1000-3985-cb-1739186-d-8-d'
        )
        if (!response.ok) throw new Error('Failed to fetch passports')
        return await response.json()
    } catch (error) {
        console.error('Error fetching passports:', error)
        return []
    }
}