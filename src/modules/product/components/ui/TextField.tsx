import { ReactNode } from 'react'
import Icon from '@/core/components/ui/Icon'
import { DataFieldType } from '@/core/utils/types'

export interface TextFieldProps {
    field: DataFieldType
    value: string | number
    children?: ReactNode
}

export default function TextField({ field, value }: TextFieldProps) {

    return (
        <div className='flex items-center space-x-4'>
            {
                field.layout?.icon &&
                <div className='flex-shrink-0'>
                    <Icon name={field.layout?.icon || 'shield-check'} className='w-5 h-5 dark:text-white' />
                </div>
            }
            <div className='flex-1 min-w-0'>
                <span className='block text-base font-semibold text-gray-900 truncate dark:text-white whitespace-pre-wrap'>
                    {field.title}
                </span>
                <span className='block text-sm font-normal text-gray-500 truncate dark:text-gray-400 whitespace-pre-wrap'>
                    {value}
                </span>
            </div>
        </div>
    )
}