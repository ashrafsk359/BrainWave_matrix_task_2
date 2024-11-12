import React from 'react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    title: "iPhone 13 Pro",
    price: 99999,
    originalPrice: 119999,
    discount: 17,
    image: "https://images.unsplash.com/photo-1632661674596-618e45778c18?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    category: "electronics"
  },
  {
    id: 2,
    title: "MacBook Pro 14",
    price: 149999,
    originalPrice: 169999,
    discount: 12,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    category: "laptops"
  },
  {
    id: 3,
    title: "Sony WH-1000XM4",
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    category: "electronics"
  },
  {
    id: 4,
    title: "iPad Air",
    price: 54999,
    originalPrice: 59999,
    discount: 8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400",
    rating: 4.6,
    category: "electronics"
  }
];

export function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;