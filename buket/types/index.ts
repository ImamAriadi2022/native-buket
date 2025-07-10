export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors?: string[];
  sizes?: string[];
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  emoji: string;
  color: string;
  screen: string;
  itemCount: number;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Order {
  id: number;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
}
