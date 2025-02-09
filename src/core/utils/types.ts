import { dataFieldMap } from './constants'

export enum GraphicalTypeEnum {
    Panel = 'Panel',
    Boolean = 'Boolean',
    NoRender = 'NoRender',
    Graph = 'Graph',
    Number = 'Number',
    Text = 'Text',
    Date = 'Date',
    File = 'File',
    FileReport = 'FileReport',
    URL = 'URL'
}

export interface DataFieldType {
    title: string
    type: GraphicalTypeEnum
    layout?: {
        colSpan: string | number
    } 
}

export interface DataFieldMapType {
    [key : string]: DataFieldType
}

export type KeyDataField =  keyof typeof dataFieldMap
