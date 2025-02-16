import { ReactNode } from 'react'
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

import { MaterialFile } from '@/modules/product/types'
import { DataFieldType } from '@/core/utils/types'
import PanelContainer from './PanelContainer'

export interface FilesFieldProps {
    files: MaterialFile[]
    field: DataFieldType
    children?: ReactNode
}


export interface FilesProps {
    name: string
    size: string
    url: string
}

export function File({ name, size, url }: FilesProps) {
    return <div className='flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg'>
        <div className='flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-lg dark:bg-teal-900'>
            <DocumentTextIcon className='w-5 h-5 text-teal-600 lg:w-6 lg:h-6 dark:text-teal-300' />
        </div>
        <div className='mr-4 overflow-hidden'>
            <p className='text-sm font-semibold text-gray-900 dark:text-white'>{name}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{url}, {size}</p>
        </div>
        <div className='flex items-center ml-auto'>
            <button type='button' className='p-2 rounded hover:bg-gray-100'>
                <ArrowDownTrayIcon className='w-5 h-5 dark:text-white' />
                <span className='sr-only'>Download</span>
            </button>
        </div>
    </div>
} 

export default function BooleanField({ files, field }: FilesFieldProps) {
    return (
        <PanelContainer field={field}>
            {files.map((file, key) =>(
                <File key={key} name={file.fileName} size={file.fileSize} url={file.fileUrl} />
            ))}
        </PanelContainer>
    )
}