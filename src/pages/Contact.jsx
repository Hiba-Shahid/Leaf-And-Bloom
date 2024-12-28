import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-[300px] w-full bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://img.freepik.com/free-photo/composed-fern-leaves-pink_23-2147694244.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid")',
        }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-4xl font-bold text-white lg:text-5xl">Contact Us</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Contact Details</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="mt-1 text-gray-600">1569 2nd Ave, New York,</p>
                    <p className="text-gray-600">NY 10028, USA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <p className="mt-1 text-gray-600">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 flex-shrink-0 text-pink-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">Our Email</h3>
                    <p className="mt-1 text-gray-600">info@example.com</p>
                    <p className="text-gray-600">support@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Find Us</h2>
              <div className="mt-4 h-[300px] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9729764177024!2d-73.95005492342243!3d40.77612623491365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29a5e9e99%3A0x4a01c8df6fb3cb!2s1569%202nd%20Ave%2C%20New%20York%2C%20NY%2010028!5e0!3m2!1sen!2sus!4v1690568309026!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Send Us a Message</h2>
            <form className="mt-6 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-pink-500 px-8 py-3 text-white transition-colors hover:bg-pink-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

