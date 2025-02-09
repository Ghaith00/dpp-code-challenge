import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Content from './components/Content'
import { usePassportStore, useSelectedContent } from './product.store'
import SideBar  from './components/SideBar'

export default function ProductPage() {
    const { id } = useParams()
	
	const { passport, loading, error, fetchPassport } = usePassportStore()
	const { selected, setSelected} = useSelectedContent()

	useEffect(() => {
		fetchPassport(id).then((data) => data && setSelected(data[0]))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	if (loading) return <p>Loading...</p>
	if (error) return <p className='text-red-500'>Error: {error}</p>
	if (!passport || passport.length < 1 || !selected) return <p>No data available</p>

    return (
        <div className='flex'>
            {/* Sidebar */}
            <SideBar data={passport} />

            {/* Main Content */}
            <div className='flex-1 p-6'>
                <nav className='flex mb-5' aria-label='Breadcrumb'>
                    <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
                        <li className='inline-flex items-center'>
                            <a href='/' className='inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white'>
                                <svg className='w-5 h-5 mr-2.5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className='flex items-center'>
                                <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
                                <span className='ml-1 text-gray-400 md:ml-2 dark:text-gray-500' aria-current='page'>{id}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <Content data={selected.credentialSubject} />
            </div>
        </div>
    )
}
