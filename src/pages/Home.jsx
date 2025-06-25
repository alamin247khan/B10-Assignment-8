import React, { useState, useMemo } from 'react'
import Banner from '../components/Banner'
import CategorySidebar from '../components/CategorySidebar'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [showAll, setShowAll] = useState(false)

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Products') {
      return productsData
    }
    return productsData.filter(product => product.category === activeCategory)
  }, [activeCategory])

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6)

  return (
    <div>
      <Banner />
      <div id="products-section" className="container mx-auto px-4 py-8 mt-[200px] sm:mt-[300px] md:mt-[400px]">
        <h1 className='font-extrabold text-center text-2xl sm:text-3xl md:text-5xl p-4 md:p-10'>Explore Cutting-Edge Gadgets</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <CategorySidebar 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map(product => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
            {filteredProducts.length > 6 && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="btn btn-primary"
                >
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
