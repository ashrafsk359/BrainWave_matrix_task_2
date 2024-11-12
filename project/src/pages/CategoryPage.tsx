import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const categoryProducts = {
  electronics: [
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
      title: "Samsung Galaxy S21",
      price: 69999,
      originalPrice: 79999,
      discount: 13,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
      rating: 4.7,
      category: "electronics"
    }
  ],
  laptops: [
    {
      id: 3,
      title: "MacBook Pro 14",
      price: 149999,
      originalPrice: 169999,
      discount: 12,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
      rating: 4.9,
      category: "laptops"
    }
  ]
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const products = category ? categoryProducts[category as keyof typeof categoryProducts] || [] : [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default CategoryPage;