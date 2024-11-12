import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Policy</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Social</h3>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 EasyBuy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;