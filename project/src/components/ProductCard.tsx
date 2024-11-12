import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function ProductCard(props: Product) {
  const { image, title, price, originalPrice, discount, rating } = props;
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: props });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative">
      <button className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
      </button>
      
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      
      <h3 className="font-medium text-gray-800 mb-2 truncate font-display">{title}</h3>
      
      {rating && (
        <div className="flex items-center gap-1 mb-2">
          <div className="bg-green-600 text-white text-sm px-2 py-0.5 rounded flex items-center">
            {rating} <Star className="w-3 h-3 ml-1 fill-current" />
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold text-lg">₹{price.toLocaleString()}</span>
        <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
        <span className="text-sm text-green-600 font-medium">{discount}% off</span>
      </div>
      
      <div className="text-sm text-gray-500">Free delivery</div>
      
      <button 
        onClick={handleAddToCart}
        className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}