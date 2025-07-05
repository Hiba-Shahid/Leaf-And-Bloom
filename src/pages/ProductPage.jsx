import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, Search, ShoppingCart } from 'lucide-react'
import { products } from '../data/products'
import ProductRating from '../components/ProductRating'
import { useCart } from '../context/CartContext'

export default function ProductPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('description')
  const [isZoomed, setIsZoomed] = useState(false)
  
  const product = products[productId]
  const { addToCart } = useCart()

  if (!product) {
    navigate('/store')
    return null
  }

  const relatedProducts = product.related.map(id => products[id])

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/store" className="hover:text-gray-900">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative">
            <div 
              className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
            </div>
            <button 
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4">
              <ProductRating rating={product.rating} />
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-2xl font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500">+ Free Shipping</span>
            </div>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <button 
              className="mt-8 flex w-full items-center justify-center rounded-full bg-pink-500 px-8 py-3 font-medium text-white hover:bg-pink-600 sm:w-auto"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              ADD TO CART
            </button>

            {/* Tabs */}
            <div className="mt-12">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`border-b-2 py-4 text-sm font-medium ${
                      activeTab === 'description'
                        ? 'border-pink-500 text-pink-500'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`border-b-2 py-4 text-sm font-medium ${
                      activeTab === 'reviews'
                        ? 'border-pink-500 text-pink-500'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    Reviews (0)
                  </button>
                </nav>
              </div>
              <div className="mt-8">
                {activeTab === 'description' && (
                  <p className="text-gray-600">{product.description}</p>
                )}
                {activeTab === 'reviews' && (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Related products</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/store/product/${relatedProduct.id}`}
                className="group"
                onClick={() => {
                  window.scrollTo(0, 0)
                  setActiveTab('description')
                }}
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">
                  {relatedProduct.name}
                </h3>
                <div className="mt-1">
                  <ProductRating rating={relatedProduct.rating} />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  ${relatedProduct.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

