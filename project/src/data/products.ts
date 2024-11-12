import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?auto=format&fit=crop&w=500&q=80',
    title: 'Apple iPhone 13 Pro Max (128GB)',
    price: 109999,
    originalPrice: 129900,
    discount: 15,
    category: 'Electronics',
    description: 'A15 Bionic chip, Pro camera system, Super Retina XDR display',
    rating: 4.8
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=500&q=80',
    title: 'Noise Cancelling Wireless Headphones',
    price: 24999,
    originalPrice: 29999,
    discount: 17,
    category: 'Electronics',
    description: 'Premium sound quality with active noise cancellation',
    rating: 4.5
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80',
    title: 'Premium Smart Watch Series 7',
    price: 35999,
    originalPrice: 44999,
    discount: 20,
    category: 'Electronics',
    description: 'Advanced health monitoring and fitness tracking',
    rating: 4.6
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80',
    title: 'Gaming Laptop RTX 4070',
    price: 129999,
    originalPrice: 149999,
    discount: 13,
    category: 'Computers',
    description: 'High-performance gaming with ray tracing',
    rating: 4.7
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1606293459339-c0657cb85b1a?auto=format&fit=crop&w=500&q=80',
    title: 'Smart LED TV 65"',
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    category: 'TVs & Appliances',
    description: '4K Ultra HD with HDR support',
    rating: 4.5
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80',
    title: 'Premium Cotton T-Shirt',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: 'Fashion',
    description: 'Comfortable fit with pure cotton fabric',
    rating: 4.3
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80',
    title: 'Gift Box Collection',
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    category: 'Gifts',
    description: 'Premium gift collection for special occasions',
    rating: 4.4
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=500&q=80',
    title: 'Smart Home Hub',
    price: 4999,
    originalPrice: 5999,
    discount: 17,
    category: 'Home',
    description: 'Control your home with voice commands',
    rating: 4.2
  }
];