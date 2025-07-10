import { Product } from '../types';

export const bouquetProducts: Product[] = [
  // Graduation Bouquets
  {
    id: 1,
    name: 'Buket Graduation Premium',
    description: 'Buket wisuda dengan bunga segar dan dekorasi premium',
    price: 'Rp 150.000',
    image: 'graduation-1.jpg',
    category: 'graduation',
    rating: 4.8,
    reviews: 45,
    colors: ['Gold', 'Silver', 'Blue'],
    sizes: ['S', 'M', 'L'],
    isPopular: true
  },
  {
    id: 2,
    name: 'Buket Graduation Classic',
    description: 'Buket wisuda klasik dengan sentuhan elegan',
    price: 'Rp 120.000',
    image: 'graduation-2.jpg',
    category: 'graduation',
    rating: 4.6,
    reviews: 32,
    colors: ['White', 'Cream', 'Pink'],
    sizes: ['S', 'M'],
    isNew: true
  },
  
  // Wedding Bouquets
  {
    id: 3,
    name: 'Buket Wedding Romantic',
    description: 'Buket pernikahan romantis dengan mawar merah',
    price: 'Rp 250.000',
    image: 'wedding-1.jpg',
    category: 'wedding',
    rating: 4.9,
    reviews: 67,
    colors: ['Red', 'Pink', 'White'],
    sizes: ['M', 'L', 'XL'],
    isPopular: true
  },
  {
    id: 4,
    name: 'Buket Wedding Elegant',
    description: 'Buket pernikahan elegan dengan bunga campuran',
    price: 'Rp 200.000',
    image: 'wedding-2.jpg',
    category: 'wedding',
    rating: 4.7,
    reviews: 38,
    colors: ['White', 'Cream', 'Pastel'],
    sizes: ['M', 'L']
  },
  
  // Money Bouquets
  {
    id: 5,
    name: 'Buket Money Celebration',
    description: 'Buket uang untuk perayaan dan hadiah spesial',
    price: 'Rp 100.000',
    image: 'money-1.jpg',
    category: 'money',
    rating: 4.5,
    reviews: 28,
    colors: ['Gold', 'Green', 'Red'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 6,
    name: 'Buket Money Luxury',
    description: 'Buket uang mewah dengan dekorasi premium',
    price: 'Rp 180.000',
    image: 'money-2.jpg',
    category: 'money',
    rating: 4.8,
    reviews: 22,
    colors: ['Gold', 'Silver'],
    sizes: ['M', 'L'],
    isNew: true
  },
  
  // Snack Bouquets
  {
    id: 7,
    name: 'Buket Snack Party',
    description: 'Buket snack untuk pesta dan acara santai',
    price: 'Rp 80.000',
    image: 'snack-1.jpg',
    category: 'snack',
    rating: 4.4,
    reviews: 56,
    colors: ['Colorful', 'Pastel'],
    sizes: ['S', 'M', 'L'],
    isPopular: true
  },
  {
    id: 8,
    name: 'Buket Snack Premium',
    description: 'Buket snack premium dengan pilihan makanan berkualitas',
    price: 'Rp 120.000',
    image: 'snack-2.jpg',
    category: 'snack',
    rating: 4.6,
    reviews: 34,
    colors: ['Mixed', 'Chocolate'],
    sizes: ['M', 'L']
  },
  
  // Artificial Bouquets
  {
    id: 9,
    name: 'Buket Artificial Rose',
    description: 'Buket mawar artifisial yang tahan lama',
    price: 'Rp 95.000',
    image: 'artificial-1.jpg',
    category: 'artificial',
    rating: 4.3,
    reviews: 41,
    colors: ['Red', 'Pink', 'White', 'Yellow'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 10,
    name: 'Buket Artificial Mixed',
    description: 'Buket bunga artifisial campuran berbagai jenis',
    price: 'Rp 110.000',
    image: 'artificial-2.jpg',
    category: 'artificial',
    rating: 4.5,
    reviews: 29,
    colors: ['Mixed', 'Pastel', 'Bright'],
    sizes: ['M', 'L']
  },
  
  // Cosmetic Bouquets
  {
    id: 11,
    name: 'Buket Cosmetic Beauty',
    description: 'Buket produk kecantikan untuk hadiah spesial',
    price: 'Rp 160.000',
    image: 'cosmetic-1.jpg',
    category: 'cosmetic',
    rating: 4.7,
    reviews: 33,
    colors: ['Pink', 'Gold', 'Silver'],
    sizes: ['S', 'M'],
    isNew: true
  },
  {
    id: 12,
    name: 'Buket Cosmetic Luxury',
    description: 'Buket kosmetik mewah dengan brand terkenal',
    price: 'Rp 220.000',
    image: 'cosmetic-2.jpg',
    category: 'cosmetic',
    rating: 4.9,
    reviews: 18,
    colors: ['Luxury', 'Premium'],
    sizes: ['M', 'L'],
    isPopular: true
  },
  
  // Mini Bouquets
  {
    id: 13,
    name: 'Buket Mini Cute',
    description: 'Buket mini lucu untuk hadiah kecil',
    price: 'Rp 45.000',
    image: 'mini-1.jpg',
    category: 'mini',
    rating: 4.2,
    reviews: 52,
    colors: ['Pink', 'Blue', 'Yellow'],
    sizes: ['XS', 'S']
  },
  {
    id: 14,
    name: 'Buket Mini Elegant',
    description: 'Buket mini elegan untuk momen spesial',
    price: 'Rp 65.000',
    image: 'mini-2.jpg',
    category: 'mini',
    rating: 4.4,
    reviews: 27,
    colors: ['White', 'Cream', 'Pastel'],
    sizes: ['S']
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return bouquetProducts.filter(product => product.category === category);
};

export const getPopularProducts = (): Product[] => {
  return bouquetProducts.filter(product => product.isPopular);
};

export const getNewProducts = (): Product[] => {
  return bouquetProducts.filter(product => product.isNew);
};

export const getProductById = (id: number): Product | undefined => {
  for (let i = 0; i < bouquetProducts.length; i++) {
    if (bouquetProducts[i].id === id) {
      return bouquetProducts[i];
    }
  }
  return undefined;
};
