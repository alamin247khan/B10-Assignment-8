import React from 'react'

const categories = [
  'All Products',
  'phones',
  'computers', 
  'smart watches',
  'chargers',
  'power banks'
]

export default function CategorySidebar({ activeCategory, onCategoryChange }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg transition-colors ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}
