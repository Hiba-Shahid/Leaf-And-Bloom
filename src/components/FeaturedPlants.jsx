import { Link } from 'react-router-dom'

export default function FeaturedPlants() {
  const plants = [
    {
      id: 'aloe-vera',
      name: "Aloe Vera Plant",
      price: "$12.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0UUqrWZuFwAaKbrLGIgQFOnWSujI6yAg6A&s",
    },
    {
      id: 'snake-plant',
      name: "Snake Plant",
      price: "$15.99",
      image: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022042.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
    },
    {
      id: 'peace-lily',
      name: "Peace Lily",
      price: "$18.99",
      image: "https://img.freepik.com/free-photo/beautiful-blooming-white-flowers-spathiphyllum_23-2147924826.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
    },
    {
      id: 'spider-plant',
      name: "Spider Plant",
      price: "$9.99",
      image: "https://img.freepik.com/free-photo/beautiful-potted-plant-pot-white-table_1142-42166.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
    },
    {
      id: 'zz-plant',
      name: "ZZ Plant",
      price: "$24.99",
      image: "https://img.freepik.com/premium-photo/zanzibar-plant-black-pot_267395-786.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
    },
    {
      id: 'monstera',
      name: "Monstera",
      price: "$29.99",
      image: "https://img.freepik.com/premium-photo/close-up-fresh-green-leaves-table_1048944-22018829.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900">Featured Plants</h2>
        <p className="mt-2 text-center text-gray-600">
          Check out our most popular plants this season
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {plants.map((plant) => (
            <Link
              key={plant.id}
              to={`/store/product/${plant.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">{plant.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plant.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


