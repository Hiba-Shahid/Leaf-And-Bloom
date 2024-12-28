export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Jones",
        image: "https://img.freepik.com/free-photo/closeup-portrait-fashionable-young-woman-grey-hat-coat-walking-street-city-park-brunette-hair-smiling-cheerful-mood-elegant-outlook_197531-2171.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
        text: "Simply Natural has the best selection of plants I've ever seen. Their customer service is outstanding!",
      },
      {
        name: "Jennifer Lee",
        image: "https://img.freepik.com/free-photo/picture-beautiful-pretty-girl-her-twenties-waking-outdoors-vibrant-street-enjoying-nice-summer-day-smiling-joyfully-people-summertime-youth-travel-lifestyle-concept_343059-2899.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
        text: "I love how easy it is to find the perfect plant for my space. The quality is always excellent.",
      },
    ]
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600">{testimonial.text}</p>
                  <p className="mt-2 font-medium text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  