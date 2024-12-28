export default function Hero() {
    return (
      <div className="relative mt-16 bg-gray-50 px-4 py-16 min-h-[500px] w-full bg-cover bg-center pt-16" 
       style={{ 
         backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-assortment-colorful-leaves-with-copy-space_23-2148831216.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid")',
       }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-gray-500">Best Quality Plants</p>
              <h1 className="m-2 text-4xl font-bold text-gray-900 lg:text-5xl">
                Amazing Variety Of Plants Starting Just $6
              </h1>
             <a href="/store"> <button className="mt-8 rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-600">
                Shop Now
              </button></a>
            </div>
            <div className="relative">
              <img
                src=""
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  