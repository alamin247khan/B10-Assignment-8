import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'

export default function ProductCard({ product }) {
  const { product_id, product_title, product_image, price, rating, availability } = product

  return (
    <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow relative">
      <figure className="px-6 pt-6">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl h-48 w-full object-cover"
        />
        {!availability && (
          <div className="absolute top-4 right-4">
            <span className="badge badge-error text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{product_title}</h2>
        <p className="text-gray-600 text-lg font-medium">Price: ${price}</p>
        <div className="flex items-center gap-2">
          <RatingStars rating={rating} />
          <span className="text-sm text-gray-500">({rating})</span>
        </div>
        <div className="card-actions justify-start mt-4">
          <Link 
            to={`/product/${product_id}`}
            className="btn btn-outline btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
