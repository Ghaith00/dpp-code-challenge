import { ReactNode } from 'react'
import { BatteryCellScan } from '@/modules/product/types'
import { File } from './Files'

export interface FileReportProps {
    file: BatteryCellScan
    children?: ReactNode
}

export default function FileReport({ file }: FileReportProps) {
    return <File name={file.scanTitle} size={file.scanImageSize} url={file.scanImage} />
}