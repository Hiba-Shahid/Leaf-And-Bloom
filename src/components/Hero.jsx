export default function Hero() {
    return (
      <div className="relative mt-16 bg-gray-50 px-4 py-16 min-h-[500px] w-full bg-cover bg-center pt-16" 
       style={{ 
         backgroundImage: 'url("	https://img.freepik.com/premium-photo/gardening-ba…ools-gray-stone-background_1039297-5528.jpg?w=740")',
       }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex text-center justify-center mt-[180px] ">
            <div>
              <p className="text-md font-medium text-gray-500">Best Quality Plants</p>
              <h1 className="m-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                Amazing Variety Of Plants Starting Just $6
              </h1>
             <a href="/store"> <button className="mt-6 rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-600">
                Shop Now
              </button></a>
            </div>
    
          </div>
        </div>
      </div>
    )
  }
  
  