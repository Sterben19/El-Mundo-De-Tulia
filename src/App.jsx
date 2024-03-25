import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Product } from './pages/Product'
import { ToastContainer } from 'react-toastify'
import { Cart } from './pages/Cart'
import { CartContextProvider } from './contexts/CartContext'
import { Upload } from './pages/Upload'
import { Category } from './pages/Category'
import { Order } from './pages/Order'

function App() {
  return (
    <div className="flex flex-col">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:itemId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/order/:orderId" element={<Order />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
