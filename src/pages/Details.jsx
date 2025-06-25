import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import RatingStars from '../components/RatingStars'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'


export default function Details() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const { addToWishlist, isInWishlist } = useWishlist()
  const product = productsData.find(p => p.product_id === id)

  const handleAddToCart = () => {
    if (product && product.availability) {
      addToCart(product)
    }
  }

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product)
    }
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-8 pb-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Product Details</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 px-2">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative mt-[-150px]">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{product.product_title}</h2>
              <p className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">${product.price}</p>
              <div className="flex items-center gap-2 mb-4">
                <RatingStars rating={product.rating} />
                <span className="text-gray-500">({product.rating})</span>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-4">
                <span className={`badge ${product.availability ? 'badge-success' : 'badge-error'} mb-4`}>
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Specifications:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.availability}
                  className={`btn btn-primary w-full sm:w-auto ${!product.availability ? 'btn-disabled' : ''}`}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={handleAddToWishlist}
                  disabled={isInWishlist(product.product_id)}
                  className={`btn btn-outline btn-secondary w-full sm:w-auto mt-2 sm:mt-0 ${isInWishlist(product.product_id) ? 'btn-disabled' : ''}`}
                >
                  {isInWishlist(product.product_id) ? 'In Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
