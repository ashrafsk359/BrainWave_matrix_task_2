import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Gift, Laptop, ShoppingBag, Home, Shirt } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone, path: '/category/electronics' },
  { name: 'Fashion', icon: Shirt, path: '/category/fashion' },
  { name: 'Home', icon: Home, path: '/category/home' },
  { name: 'Gifts', icon: Gift, path: '/category/gifts' },
  { name: 'Laptops', icon: Laptop, path: '/category/laptops' },
  { name: 'Deals', icon: ShoppingBag, path: '/category/deals' },
];

export function Categories() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="flex flex-col items-center gap-1 min-w-[100px] text-gray-700 hover:text-primary transition-colors"
            >
              <category.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;