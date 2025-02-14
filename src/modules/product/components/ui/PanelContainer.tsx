import { ReactNode } from 'react'
import { DataFieldType } from '@/core/utils/types'

export interface PanelContainerProps {
    field: DataFieldType
    children?: ReactNode
    className?: string
}

export default function PanelContainer({ field, children , className=''}: PanelContainerProps) {
    return (
        <div className={`bg-gray-600 shadow-lg rounded-lg p-4 ${field.layout?.colSpan ? `lg:col-span-${field.layout?.colSpan} lg:col-span-${field.layout?.colSpan} ` : 'lg:col-span-1'}`}>
            <h2 className='text-xl font-semibold text-white mb-2'>{field.title}</h2>
            <div className={`space-y-2 ${className}`}>
                {children}
            </div>
        </div>
    )
}