import Collection from "../components/Collection";


export default function About() {
    const team = [
      {
        name: "Jessica Gordon",
        role: "Founder & CEO",
        image: "https://img.freepik.com/free-photo/curly-girl-with-laptop_144627-5454.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
        socials: ["facebook", "twitter", "instagram", "linkedin"]
      },
      {
        name: "Bryan Jones",
        role: "Plant Expert",
        image: "https://img.freepik.com/free-photo/african-american-student-walking-park_1303-12720.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
        socials: ["facebook", "twitter", "instagram", "linkedin"]
      },
      {
        name: "Angela Mike",
        role: "Marketing Head",
        image: "https://img.freepik.com/premium-photo/beautiful-fashion-woman-sitting-chair_133748-675.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid",
        socials: ["facebook", "twitter", "instagram", "linkedin"]
      }
    ]
  
    return (
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative min-h-[500px] w-full bg-cover bg-center pt-16" 
       style={{ 
         backgroundImage: 'url("https://img.freepik.com/premium-photo/blue-background-with-dried-plants-blue-background_90189-9656.jpg?uid=R179044268&ga=GA1.1.1014397423.1734098381&semt=ais_hybrid")',
       }}>
    <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
    <div className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-white lg:text-5xl">About Us</h1>
        <p className="mt-4 text-lg text-white/90">
          We Work Hard To Provide You The Best Quality Plants And Succulents
        </p>
        <button className="mt-8 rounded-full bg-pink-500 px-8 py-3 text-white hover:bg-pink-600">
          Read More
        </button>
      </div>
    </div>
  </div>
  
        {/* Our Company Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">Our Company</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content here', making it look like
              readable English.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="text-gray-600">
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or randomised words which don't
                  look even slightly believable.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <p className="text-gray-600">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                  anything embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Our Team Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                  src={member.image}
                    alt={member.name}
                    className="mx-auto h-48 w-48 rounded-full object-cover"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    {member.socials.map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <Collection />
      </div>
    )
  }
  
  