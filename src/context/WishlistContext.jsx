import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlistItems')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (product) => {
    const existingItem = wishlistItems.find(item => item.product_id === product.product_id)
    
    if (existingItem) {
      toast.warning(`${product.product_title} is already in wishlist!`)
      return
    }
    
    setWishlistItems(prev => [...prev, product])
    toast.success(`${product.product_title} added to wishlist!`)
  }

  const removeFromWishlist = (productId) => {
    const item = wishlistItems.find(item => item.product_id === productId)
    setWishlistItems(prev => prev.filter(item => item.product_id !== productId))
    if (item) {
      toast.info(`${item.product_title} removed from wishlist`)
    }
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.product_id === productId)
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    wishlistCount: wishlistItems.length
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}
