import { IconKey } from '@/core/components/ui/Icon'
import { dataFieldMap, GraphicalTypeEnum } from './constants'

export const dataFieldMapTyped = dataFieldMap as DataFieldMapType

export interface DataFieldType {
    title: string
    type: GraphicalTypeEnum
    layout?: {
        colSpan?: string | number
        icon?: IconKey
    } 
}

export interface DataFieldMapType {
    [key : string]: DataFieldType
}

export type KeyDataField =  keyof typeof dataFieldMap
export { GraphicalTypeEnum }

