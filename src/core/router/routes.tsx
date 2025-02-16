import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from '@/modules/product/ProductPage'
import HomePage from '@/modules/home/HomePage'
import TopNavBar from '@/core/components/layout/TopNavBar'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<TopNavBar/>
			<div className='mt-14'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/product/:id' element={<ProductPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
