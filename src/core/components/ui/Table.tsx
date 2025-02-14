
interface TableProps {
    headers: string[]
    data: { [key: string]: string | number }[]
}

export default function Table({ headers, data } : TableProps) {
    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope='col' className='px-6 py-3'>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className='bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200'>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex} className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}