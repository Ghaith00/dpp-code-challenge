import { dataFieldMap, GraphicalTypeEnum } from './constants'
import { DataFieldMapType, DataFieldType } from './types'

const dataFieldMapTyped = dataFieldMap as DataFieldMapType

export function getDPPDataField (key: string, dataKey: 'title' | 'type'): string {
    return dataFieldMapTyped[key] ? dataFieldMapTyped[key][dataKey] : key
}

export function getDPPData (key: string) : DataFieldType {
    if (dataFieldMapTyped[key]) return dataFieldMapTyped[key]
    // console.error('Not supported data key')
    return { title: 'Not supported data key', type: GraphicalTypeEnum.NoRender }
}

export const chunkArray = (arr: number[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size))
      return acc
    }, [] as number[][])
}