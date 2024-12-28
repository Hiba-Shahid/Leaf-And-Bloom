import {  NavLink } from 'react-router'
import { ShoppingCart, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartPanel from './CartPanel'

export default function Navbar() {
  const { setIsCartOpen, getCartCount } = useCart()
  const cartCount = getCartCount()

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center space-x-2">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                  <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                </div>
                <span className="text-lg font-semibold text-gray-800">Leaf And Bloom</span>
              </NavLink>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavLink className={(e)=>{return e.isActive?"text-pink-500": "text-gray-600 hover:text-gray-900"}} to="/">
                Home
              </NavLink>
              <NavLink className={(e)=>{return e.isActive?"text-pink-500": "text-gray-600 hover:text-gray-900"}} to="/store">
                Shop
              </NavLink>
              <NavLink className={(e)=>{return e.isActive?"text-pink-500": "text-gray-600 hover:text-gray-900"}} to="/about" >
                About Us
              </NavLink>
              <NavLink className={(e)=>{return e.isActive?"text-pink-500": "text-gray-600 hover:text-gray-900"}}to="/contact" >
                Contact Us
              </NavLink>
              <NavLink className={(e)=>{return e.isActive?"text-pink-500": "text-gray-600 hover:text-gray-900"}} to="/account" >
                My Account
              </NavLink>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>
              <button 
                className="relative text-gray-600 hover:text-gray-900"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartPanel />
    </>
  )
}

