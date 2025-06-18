"use client";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/definitions";

const products: Product[] = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    price: 899,
    category: "Chairs",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    description: "Comfortable modern lounge chair with premium upholstery",
    inStock: true
  },
  {
    id: 2,
    name: "Minimalist Dining Table",
    price: 1299,
    category: "Tables",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Sleek dining table perfect for modern homes",
    inStock: true
  },
  {
    id: 3,
    name: "Luxury Sofa Set",
    price: 2499,
    category: "Sofas",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
    description: "Premium 3-seater sofa with exceptional comfort",
    inStock: false
  },
  {
    id: 4,
    name: "Oak Coffee Table",
    price: 649,
    category: "Tables",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
    description: "Handcrafted oak coffee table with natural finish",
    inStock: true
  },
  {
    id: 5,
    name: "Designer Bookshelf",
    price: 799,
    category: "Storage",
    image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg",
    description: "Modern bookshelf with clean lines and ample storage",
    inStock: true
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 549,
    category: "Chairs",
    image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg",
    description: "Professional office chair with lumbar support",
    inStock: true
  }
];

const categories = ["All", "Chairs", "Tables", "Sofas", "Storage"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      
      <section className="relative h-96 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our carefully curated selection of premium furniture pieces
          </p>
        </div>
      </section>

      <section className="py-8 px-6 border-b">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest furniture trends and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gris-secondary">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-black group-hover:text-gray-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gris-primary text-sm">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-black">${product.price}</span>
          <button 
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
              product.inStock
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}