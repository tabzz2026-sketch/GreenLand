import './App.css'
import heroImg from './assets/hero.png'
import img1 from './assets/1.webp'
import img2 from './assets/2.webp'
import img3 from './assets/3.webp'
import img4 from './assets/4.webp'
import logo from './assets/Logo.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img src={logo} alt="GreenLand Logo" className="h-12 w-auto" />
                <h1 className="text-2xl font-bold text-primary-700 hidden sm:block">GreenLand Stone Crusher</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-screen">
          {/* Image Grid */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 h-full z-0">
            <div className="relative overflow-hidden">
              <img src={img1} alt="Stone Crusher 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" loading="lazy" decoding="async" />
            </div>
            <div className="relative overflow-hidden">
              <img src={img2} alt="Stone Crusher 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" loading="lazy" decoding="async" />
            </div>
            <div className="relative overflow-hidden">
              <img src={img3} alt="Stone Crusher 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" loading="lazy" decoding="async" />
            </div>
            <div className="relative overflow-hidden">
              <img src={img4} alt="Stone Crusher 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer" loading="lazy" decoding="async" />
            </div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Quality Raw Materials for Construction
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-md">
                Serving Jammu & Kashmir with Premium Stone Aggregates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Get a Quote
                </a>
                <a href="#products" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors">
                  View Products
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl font-bold text-gray-900">About GreenLand Stone Crusher</h2>
            </div>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                GreenLand Stone Crusher is a leading provider of high-quality construction raw materials in Jammu & Kashmir. Located in Wuyan, Pampore, we have been serving the construction industry with premium stone aggregates and materials for years.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commitment to quality and customer satisfaction has made us a trusted name in the region. We use state-of-the-art crushing equipment to ensure consistent product quality that meets industry standards.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <p className="text-primary-800 font-semibold">Quality You Can Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of high-quality stone aggregates for all your construction needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img1} alt="Stone Dust" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stone Dust</h3>
                <p className="text-gray-600 mb-4">Fine stone dust perfect for concrete mixing and leveling applications</p>
                <div className="text-primary-600 font-semibold">Premium Quality</div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img2} alt="Coarse Aggregate" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coarse Aggregate</h3>
                <p className="text-gray-600 mb-4">High-quality coarse aggregates for foundation and structural work</p>
                <div className="text-primary-600 font-semibold">Various Sizes Available</div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img3} alt="Sand" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sand</h3>
                <p className="text-gray-600 mb-4">Clean, washed sand ideal for plastering and concrete work</p>
                <div className="text-primary-600 font-semibold">River & Pit Sand</div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img4} alt="Grit" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grit (6mm, 10mm)</h3>
                <p className="text-gray-600 mb-4">Small-sized stone grit for specialized construction applications</p>
                <div className="text-primary-600 font-semibold">Consistent Size</div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img1} alt="Kanker" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kanker (40mm, 60mm)</h3>
                <p className="text-gray-600 mb-4">Large aggregates for heavy construction and road work</p>
                <div className="text-primary-600 font-semibold">Heavy Duty</div>
              </div>
            </div>
            {/* Product 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={img2} alt="Crushed Stone" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Crushed Stone</h3>
                <p className="text-gray-600 mb-4">Premium crushed stone for various construction needs</p>
                <div className="text-primary-600 font-semibold">Custom Sizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
              <p className="text-gray-200">Consistent quality materials tested for industry standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-200">Quick and reliable delivery across J&K region</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Pricing</h3>
              <p className="text-gray-200">Best prices for premium quality construction materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-200">Experienced professionals to assist your requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for quotes, inquiries, or any questions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Greenland Stone Crusher, Wuyan Andernar Road, Jammu and Kashmir 191102</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">For orders and inquiries, call +91 9906673161 </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tell us about your requirements"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123456789!2d74.984855!3d34.033584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e22745e36eefeb%3A0xfbf462f9e35cf93d!2sGreenland%20stone%20crusher!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="GreenLand Stone Crusher Location"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="GreenLand Logo" className="h-12 w-auto" />
                <h3 className="text-2xl font-bold text-primary-400">GreenLand Stone Crusher</h3>
              </div>
              <p className="text-gray-400">Your trusted partner for quality construction raw materials in Jammu & Kashmir.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Area</h4>
              <p className="text-gray-400">Serving all across Jammu & Kashmir including Srinagar, Pampore, Anantnag, Pulwama, and surrounding regions.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2026 GreenLand Stone Crusher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
