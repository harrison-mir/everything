"use client";

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MyShop</h1>
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800">🛒 Cart</button>
        </div>
      </header>

      {/* Product List */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          <div className="bg-white shadow rounded p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">Product Name</h3>
            <p className="text-gray-500 text-sm">Short product description.</p>
            <p className="text-blue-600 font-bold mt-2">$29.99</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          {/* Duplicate the card manually for demo purposes */}
          <div className="bg-white shadow rounded p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">Product Name</h3>
            <p className="text-gray-500 text-sm">Short product description.</p>
            <p className="text-blue-600 font-bold mt-2">$29.99</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          {/* Add more static cards here if needed */}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            3
          </button>
          <span className="px-3 py-1 text-gray-400">...</span>
          <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
