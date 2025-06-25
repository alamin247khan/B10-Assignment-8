import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CartTab from './CartTab'
import WishlistTab from './WishlistTab'

export default function Dashboard() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('cart')
  
  useEffect(() => {
    // Check if there's a tab parameter in the URL
    const params = new URLSearchParams(location.search)
    const tabParam = params.get('tab')
    if (tabParam === 'wishlist') {
      setActiveTab('wishlist')
    }
  }, [location])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 max-w-[796px] mx-auto px-2">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          
          <div className="flex justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'cart'
                  ? 'bg-white text-purple-600'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600'
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'wishlist'
                  ? 'bg-white text-purple-600'
                  : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600'
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'cart' ? <CartTab /> : <WishlistTab />}
      </div>
    </div>
  )
}
