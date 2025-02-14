import { ReactNode } from 'react'
import { CredentialSubject } from '@/modules/product/types'
import Section from './Section'


export interface ContentProps {
    data: CredentialSubject
    children?: ReactNode
}

export default function Content({ data }: ContentProps) {

    return (
        <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 grid-cols-1'>
            <Section data={data} />
        </div>
    )
}