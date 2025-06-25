import React from 'react'
import { ComposedChart, Bar, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import productsData from '../data/products.json'

export default function Stats() {
  const categoryStats = productsData.reduce((acc, product) => {
    const category = product.category
    if (!acc[category]) {
      acc[category] = { name: category, count: 0, totalPrice: 0, avgRating: 0, ratings: [] }
    }
    acc[category].count += 1
    acc[category].totalPrice += product.price
    acc[category].ratings.push(product.rating)
    return acc
  }, {})

  const data = Object.values(categoryStats).map(cat => ({
    name: cat.name.charAt(0).toUpperCase() + cat.name.slice(1),
    Count: cat.count,
    AvgPrice: Math.round(cat.totalPrice / cat.count),
    Rating: Math.round((cat.ratings.reduce((a, b) => a + b, 0) / cat.ratings.length) * 10) / 10
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Statistics</h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-[796px] mx-auto px-2">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Product Category Statistics</h2>
          <div className="h-64 sm:h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Count" fill="#8B5CF6" name="Product Count" />
                <Area type="monotone" dataKey="AvgPrice" fill="#A78BFA" stroke="#8B5CF6" name="Avg Price ($)" />
                <Line type="monotone" dataKey="Rating" stroke="#EF4444" strokeWidth={3} name="Avg Rating" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
