import { Link } from "react-router-dom";

export default function Collection() {
    const colors = ['orange', 'red', 'green', 'pink', 'yellow'];
    
    return (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Interested? Shop This Plant Collection!
          </h2>
          <Link to="/store"><button className="mt-8 rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-600">
            Shop Now
          </button></Link>
          <div className="mt-12 flex justify-center space-x-8">
            {colors.map((color, index) => (
              <div key={index} className="relative">
                <div className={`h-32 w-32 rounded-full bg-${color}-500`}></div>
                <div className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white shadow-lg"></div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
  
  
  