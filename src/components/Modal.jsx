import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modal({ onConfirm, onCancel, totalCost }) {
  const navigate = useNavigate()

  const handleConfirm = () => {
    onConfirm()
    navigate('/')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Payment Successfully</h2>
          <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
          <p className="text-lg font-semibold mb-6">Total: ${totalCost.toFixed(2)}</p>
          <button 
            onClick={handleConfirm}
            className="btn btn-primary w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
