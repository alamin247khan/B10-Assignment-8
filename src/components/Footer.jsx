import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Gadget Heaven</h2>
          <p className="text-gray-600 text-sm sm:text-base px-2">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a>Product Support</a></li>
              <li><a>Order Tracking</a></li>
              <li><a>Shipping & Delivery</a></li>
              <li><a>Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a>About Us</a></li>
              <li><a>Careers</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a>Terms of Service</a></li>
              <li><a>Privacy Policy</a></li>
              <li><a>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
