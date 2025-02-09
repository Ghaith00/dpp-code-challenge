import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

export interface TextFieldProps {
    title: string
    value: string | number
    children?: ReactNode
}

export default function TextField({ title, value }: TextFieldProps) {

    return (
        <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
                <ShieldCheckIcon className='w-5 h-5 dark:text-white' />
            </div>
            <div className='flex-1 min-w-0'>
                <span className='block text-base font-semibold text-gray-900 truncate dark:text-white'>
                    {title}
                </span>
                <span className='block text-sm font-normal text-gray-500 truncate dark:text-gray-400'>
                    {value}
                </span>
            </div>
        </div>
    )
}