// Product Categories
export type BouquetCategory = 
  | 'money'      // Bouquet Uang
  | 'snack'      // Bouquet Snack
  | 'fresh'      // Bouquet Bunga Segar
  | 'artificial' // Bouquet Bunga Artificial
  | 'mini'       // Bouquet Kado Mini
  | 'cosmetic'   // Bouquet Kosmetik
  | 'graduation' // Bouquet Wisuda
  | 'hijab';     // Bouquet Hijab

// Order Status
export type OrderStatus = 'Delivered' | 'Shipping' | 'Processing' | 'Cancelled';

// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: any; // For require() image source
  category: BouquetCategory;
}

// Cart Types
export interface CartItem extends Product {
  quantity: number;
}

// Order Types
export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: CartItem[];
  totalAmount: number;
  trackingNumber: string;
}

// Address Types
export interface Address {
  name: string;
  phone: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

// Shipping Types
export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  duration: string;
  provider: string;
}

// Payment Types
export interface PaymentMethod {
  id: number;
  name: string;
  type: 'bank_transfer' | 'e_wallet' | 'credit_card';
  icon: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  image: any;
  description?: string;
}
