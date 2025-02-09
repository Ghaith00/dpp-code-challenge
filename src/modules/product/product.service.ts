import { ProductPassportResponse } from './types'


export const fetchPassportsAPI = async (id: string) : Promise<ProductPassportResponse>  => {
    try {
        const response = await fetch(
            `https://api-vera.susi.spherity.dev/credential-registry/${id}`
        )
        if (!response.ok) throw new Error('Failed to fetch passports')
        const result : ProductPassportResponse =  await response.json()
        return result
    } catch (error) {
        console.error('Error fetching passports:', error)
        return []
    }
}