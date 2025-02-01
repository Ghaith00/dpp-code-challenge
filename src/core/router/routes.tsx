import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListPage from '@/modules/product/pages/ProductListPage'
import ProductPage from '@/modules/product/pages/ProductPage'
import HomePage from '@/modules/home//HomePage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}
