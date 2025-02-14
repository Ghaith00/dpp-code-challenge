import { CellChemistry } from '@/modules/product/types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useState } from 'react'
import ButtonGroup from '@/core/components/ui/ButtonGroup'
import Select from '@/core/components/ui/Select'
import Table from '@/core/components/ui/Table'

export interface GraphPanelProps {
    data: CellChemistry
}

const COLORS = ['#4f46e5', '#82ca9d', '#ffc658', '#ff7300', '#8884d8']

export default function GraphPanel({ data }: GraphPanelProps) {
    type CellChemistryKey = keyof typeof data

    const [view, setView] = useState('bar')
    const [selectedCategory, setSelectedCategory] = useState('anodeActiveMaterials' as CellChemistryKey)
  
    return (
        <div className='p-6 rounded-lg'>
            <div className='flex justify-between mb-4'>
                <Select
                    options={Object.keys(data).map((category) => ({
                        label: category,
                        value: category,
                        onClick: () => setSelectedCategory(category as CellChemistryKey),
                    }))}
                    selectedValue={selectedCategory}
                    onChange={(value) => setSelectedCategory(value as CellChemistryKey)}
                    placeholder='Choose an option'
                    className='w-60'
                />
                <ButtonGroup
                    buttons={[
                        { label: '', onClick: () => setView('bar'), iconName: 'chart-pie' },
                        { label: '', onClick: () => setView('pie'), iconName: 'chart-bar' },
                        { label: '', onClick: () => setView('table'), iconName: 'table-cells' },
                    ]}
                />
            </div>
            {view === 'bar' && (
                <ResponsiveContainer width='100%' height={400}>
                    <BarChart data={data[selectedCategory]}>
                        <XAxis dataKey='materialName' /><YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='materialWeight' fill='#4f46e5' name='Weight' />
                        <Bar dataKey='materialPercentageMassFraction' fill='#82ca9d' name='Percentage' />
                    </BarChart>
                </ResponsiveContainer>
            )}
            {view === 'pie' && (
                <ResponsiveContainer width='100%' height={400}>
                    <PieChart>
                        <Pie data={data[selectedCategory]} dataKey='materialWeight' nameKey='materialName' cx='50%' cy='50%' outerRadius={100}>
                            {data[selectedCategory].map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            )}
            {view === 'table' && (
                <Table
                    headers={['Material Name', 'Weight (g)', 'Percentage (%)']}
                    data={data[selectedCategory].map(item => ({
                        'Material Name': item.materialName,
                        'Weight (g)': item.materialWeight,
                        'Percentage (%)': item.materialPercentageMassFraction,
                    }))}
                />
            )}
        </div>
    )
}