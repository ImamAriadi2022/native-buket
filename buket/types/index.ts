// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: any; // For require() image source
  category: string;
}

// Cart Types
export interface CartItem extends Product {
  quantity: number;
}

// Order Types
export interface Order {
  id: number;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  totalPrice: number;
  shippingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  createdAt: string;
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
  id: number;
  name: string;
  price: number;
  estimatedDays: string;
}

// Payment Types
export interface PaymentMethod {
  id: number;
  name: string;
  type: 'bank_transfer' | 'e_wallet' | 'credit_card';
}
