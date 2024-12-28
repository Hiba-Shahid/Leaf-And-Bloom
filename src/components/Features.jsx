export default function Features() {
    const features = [
      {
        title: "Beautiful Plant Varieties",
        description: "Choose from our exclusive collection of beautiful plants",
        image: "https://img.freepik.com/free-photo/colorful-nepenthes-monkey-cup-hanging-from-pot-with-nature-blurry-background_23-2148058770.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
      },
      {
        title: "Trendy Cactus Varieties",
        description: "Explore our collection of trendy cactus plants",
        image: "https://img.freepik.com/free-photo/cactus-pot_144627-17737.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
      },
      {
        title: "Gardening Accessories",
        description: "Find the perfect accessories for your plants",
        image: "https://img.freepik.com/free-photo/green-watering-can-near-blooms-garden-equipment-box-near-wall_23-2148028796.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
      },
    ]
  
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-gray-50 p-6 transition-all hover:bg-white hover:shadow-lg"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto h-48 w-48 object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <button className="mt-4 text-sm font-medium text-pink-500 hover:text-pink-600">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  