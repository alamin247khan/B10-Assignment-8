import React from 'react'
import bannerImg from '../assets/banner.jpg'

export default function Banner() {
  return (
    <div className="hero min-h-[500px] bg-purple-600 text-white relative">
      <div className="hero-content text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Upgrade Your Tech with Gadget Heaven
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 opacity-90">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button 
            onClick={() => {
              const productsSection = document.getElementById('products-section')
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn btn-white text-purple-600 mb-35 px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute -bottom-100 left-1/2 transform -translate-x-1/2 w-full px-4">
        <div className="w-full max-w-[1000px] mx-auto h-[300px] sm:h-[400px] md:h-[550px] bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-4">
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
