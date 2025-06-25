import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6 md:mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}
