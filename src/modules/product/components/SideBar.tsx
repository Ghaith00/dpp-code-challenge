import { ProductPassportResponse } from '@/modules/product/types'
import { ShieldCheckIcon, InformationCircleIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid'
import { useSelectedContent } from '@/modules/product/product.store'
import { useState } from 'react'
import Button from '@/core/components/ui/Button'

export interface SideBarProps {
    data: ProductPassportResponse
}

const sideBarMenu = [
    {
        id: 'urn:dpp:ev-battery-cell-batch-quality-assurance',
        name: 'Quality Assurance',
        icon: <ShieldCheckIcon className='size-6 text-indigo-800' />,
    },
    {
        id: 'urn:dpp:spherity-battery-dpp',
        name: 'Battery Manufacturer Scores',
        icon: <PresentationChartLineIcon className='size-6 text-indigo-800' />,
    },
    {
        id: 'urn:dpp:rcs-battery-manufacturer-scores',
        name: 'Battery DPP',
        icon: <InformationCircleIcon className='size-6 text-indigo-800' />,
    }
]

const getMenuData = (id: string, key: 'name' | 'icon') => {
    const selected = sideBarMenu.find(value => id.includes(value.id))
    if (!selected) return
    return selected[key]
}

export default function SideBar({ data }: SideBarProps) {
    const { selected, setSelected } = useSelectedContent()
    const [expanded, setExpanded] = useState<boolean>(true)
	if (!selected) return <p>No data available</p>

    return (
        <aside className={`h-screen bg-gray-800 text-white p-4 ${expanded ? 'w-100' : 'w-20'}`}>
            <nav className='h-full flex flex-col'>
                <div className='pb-2 flex justify-between items-center'>
                    {expanded && <h2 className='overflow-hidden transition-all text-xl font-bold mb-4'>
                        Battery DPP
                    </h2>}
                    <Button
                        label={''}
                        iconName={expanded ? 'chevron-left' : 'chevron-right'}
                        onClick={() => setExpanded((curr) => !curr)}
                        className='bg-gray-200'
                        variant='secondary'
                    />
                </div>
                <ul>
                    {data.map((item) => (
                        <li
                            key={item.id}
                            className={`flex items-center gap-2 p-2 cursor-pointer rounded-lg ${
                                selected.id === item.id ? 'bg-gray-700' : ''
                            }`}
                            onClick={() => setSelected(item)}
                        >
                            {getMenuData(item.id, 'icon')} {expanded && getMenuData(item.id, 'name')}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}