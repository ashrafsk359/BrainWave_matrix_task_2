export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating?: number;
  category: string;
}