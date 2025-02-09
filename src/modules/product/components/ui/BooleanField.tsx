import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export interface BooleanFieldProps {
    title: string
    value: boolean
}

export default function BooleanField({ title, value }: BooleanFieldProps) {

    return (
        <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
                <ShieldCheckIcon className='w-5 h-5 dark:text-white' />
            </div>
            <div className='flex-1 min-w-0'>
                <span className='block text-base font-semibold text-gray-900 truncate dark:text-white'>
                    {title}
                </span>
                <span className='px-2 py-1 text-sm rounded-lg font-medium bg-green-100 text-green-700'>
                    {value ? 'Yes' : 'No'}
                </span>
            </div>
        </div>
    )
}