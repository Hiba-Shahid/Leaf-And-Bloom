import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Store from './pages/Store'
import ProductPage from './pages/ProductPage'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/product/:productId" element={<ProductPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}






