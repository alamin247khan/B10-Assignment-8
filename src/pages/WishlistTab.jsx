import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function WishlistTab() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleMoveToCart = (item) => {
    if (item.availability) {
      addToCart(item)
      removeFromWishlist(item.product_id)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map(item => (
            <div key={item.product_id} className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <img 
                src={item.product_image} 
                alt={item.product_title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.product_title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-lg font-semibold text-purple-600">${item.price}</p>
                <span className={`badge ${item.availability ? 'badge-success' : 'badge-error'} mt-2`}>
                  {item.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto mt-3 sm:mt-0">
                <button 
                  onClick={() => handleMoveToCart(item)}
                  disabled={!item.availability}
                  className={`btn btn-primary btn-sm flex-1 sm:flex-none ${!item.availability ? 'btn-disabled' : ''}`}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item.product_id)}
                  className="btn btn-error btn-sm flex-1 sm:flex-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
