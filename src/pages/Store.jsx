import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Star } from 'lucide-react'

const products = [
  {
    id: 'boncellensis-secullant',
    name: 'Boncellensis Secullant',
    price: 34.99,
    rating: 5,
    image: 'https://img.freepik.com/free-photo/colorful-nepenthes-monkey-cup-hanging-from-pot-with-nature-blurry-background_23-2148058770.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Featured'
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 29.99,
    rating: 4,
    image: 'https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022042.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Featured'
  },
  {
    id: 'money-plant',
    name: 'Money Plant',
    price: 24.99,
    rating: 5,
    image: 'https://img.freepik.com/premium-photo/money-plant-grows-from-coins-white-background_525574-2618.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Featured'
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera Plant',
    price: 19.99,
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UUqrWZuFwAaKbrLGIgQFOnWSujI6yAg6A&s',
    category: 'Indoor'
  },
  {
    id: 'bamboo-palm',
    name: 'Bamboo Palm',
    price: 39.99,
    rating: 5,
    image: 'https://img.freepik.com/free-photo/detail-green-leaf_23-2148211858.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Indoor'
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    price: 27.99,
    rating: 4,
    image: 'https://img.freepik.com/free-photo/beautiful-blooming-white-flowers-spathiphyllum_23-2147924826.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Indoor'
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    price: 32.99,
    rating: 5,
    image: 'https://img.freepik.com/premium-photo/zanzibar-plant-black-pot_267395-786.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Low Light'
  },
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    price: 45.99,
    rating: 5,
    image: 'https://img.freepik.com/premium-photo/close-up-fresh-green-leaves-table_1048944-22018829.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Large Plants'
  },
  {
    id: 'fiddle-leaf',
    name: 'Fiddle Leaf Fig',
    price: 49.99,
    rating: 4,
    image: 'https://img.freepik.com/premium-photo/ripe-fig-fruits-tree-branch_41471-6894.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid',
    category: 'Large Plants'
  }
]

function ProductCard({ product }) {
  return (
    <div className="group">
      <Link to={`/store/product/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
          <button className="absolute right-4 top-4 rounded-full bg-white p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            <Search className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <Link 
            to={`/store/product/${product.id}`}
            className="block text-sm font-medium text-gray-900 hover:text-pink-500"
          >
            {product.name}
          </Link>
          <div className="mt-1 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="mt-1 text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <button 
          className="rounded-full bg-pink-500 p-2 text-white shadow-sm transition-colors hover:bg-pink-600"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Featured', 'Indoor', 'Low Light', 'Large Plants']

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative min-h-[300px] w-full bg-cover bg-bottom bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://img.freepik.com/premium-photo/high-angle-view-leaves-against-white-background_1048944-298765.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">Store</h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Discover our collection of beautiful plants and bring nature into your home
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-24 rounded-lg bg-gray-50 p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Need help in choosing the right plants?
            </h2>
            <p className="mt-4 text-gray-600">
              Our experts are here to help you find the perfect plants for your space.
              Whether you're looking for low-maintenance options or statement pieces,
              we've got you covered.
            </p>
            <button className="mt-6 text-sm font-medium text-pink-500 hover:text-pink-600">
              Let us help →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

