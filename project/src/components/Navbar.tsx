import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();

  return (
    <nav className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex flex-col">
              <span className="text-white font-bold text-xl">EasyBuy</span>
              <span className="text-xs italic text-white/80">Shop Smart</span>
            </Link>
            
            <div className="relative hidden md:block w-[400px]">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full py-2 px-4 pr-10 rounded-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 bg-white px-5 py-1.5 text-primary font-medium">
              <User className="w-5 h-5" />
              Login
            </button>
            
            <button className="hidden md:flex items-center gap-2 text-white">
              <Heart className="w-5 h-5" />
              Wishlist
            </button>

            <Link to="/cart" className="flex items-center gap-2 text-white">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </div>
              <span className="hidden md:inline">Cart</span>
            </Link>

            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}