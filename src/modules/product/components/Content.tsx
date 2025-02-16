import { ReactNode } from 'react'
import { CredentialSubject } from '@/modules/product/types'
import Section from './Section'


export interface ContentProps {
    data: CredentialSubject
    children?: ReactNode
}

export default function Content({ data }: ContentProps) {

    return (
        <div className='grid gap-2 grid-cols-4'>
            <Section data={data} />
        </div>
    )
}