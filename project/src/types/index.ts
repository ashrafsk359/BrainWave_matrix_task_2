export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  description?: string;
  rating?: number;
}