import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    const newTotal = getTotalCost() + product.price
    if (newTotal > 1000) {
      toast.error(`Cannot add ${product.product_title}. Cart limit of $1000 would be exceeded!`)
      return
    }
    setCartItems(prev => [...prev, { ...product, cartId: Date.now() + Math.random() }])
    toast.success(`${product.product_title} added to cart!`)
  }

  const removeFromCart = (cartId) => {
    const item = cartItems.find(item => item.cartId === cartId)
    setCartItems(prev => prev.filter(item => item.cartId !== cartId))
    if (item) {
      toast.info(`${item.product_title} removed from cart`)
    }
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cartItems')
  }

  const sortCartByPrice = () => {
    setCartItems(prev => [...prev].sort((a, b) => b.price - a.price))
  }

  const getTotalCost = (items = cartItems) => {
    return items.reduce((total, item) => total + item.price, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    sortCartByPrice,
    getTotalCost,
    cartCount: cartItems.length
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
