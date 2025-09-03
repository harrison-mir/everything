"use client";

import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import { ProductCard } from "./component/product-card";
import { Pagination } from "components/pagination";

export default function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dumyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products);
        });
    }, []);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header />

        {/* Product List */}
        <main className="p-6 max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            <ProductCard />

            {/* Add more static cards here if needed */}
          </div>
          
          {/* Pagination */}
          <Pagination />
        </main>
      </div>
    );
}
