import { Product } from '@/types';

export const products: Product[] = [
  // Bouquet Uang
  {
    id: 1,
    category: 'money',
    name: 'Bouquet Uang 100K',
    price: 500000,
    description: 'Bouquet dari uang asli pecahan Rp 10.000, total Rp 100.000',
    image: require('@/assets/images/categories/money/money-1.jpg'),
  },
  {
    id: 2,
    category: 'money',
    name: 'Bouquet Uang 200K',
    price: 750000,
    description: 'Bouquet dari uang asli pecahan Rp 20.000, total Rp 200.000',
    image: require('@/assets/images/categories/money/money-2.jpg'),
  },

  // Bouquet Snack
  {
    id: 3,
    category: 'snack',
    name: 'Sweet Treats Bouquet',
    price: 150000,
    description: 'Berisi cokelat, permen, dan snack manis pilihan',
    image: require('@/assets/images/categories/snack/snack-1.jpg'),
  },
  {
    id: 4,
    category: 'snack',
    name: 'Premium Snack Bouquet',
    price: 250000,
    description: 'Kombinasi snack premium dan cokelat impor',
    image: require('@/assets/images/categories/snack/snack-2.jpg'),
  },

  // Bouquet Bunga Segar
  {
    id: 5,
    category: 'fresh',
    name: 'Wedding Rose Bouquet',
    price: 750000,
    description: 'Bunga mawar segar untuk pernikahan',
    image: require('@/assets/images/categories/fresh/fresh-1.jpg'),
  },
  {
    id: 6,
    category: 'fresh',
    name: 'Mixed Fresh Flowers',
    price: 500000,
    description: 'Rangkaian bunga segar campuran',
    image: require('@/assets/images/categories/fresh/fresh-2.jpg'),
  },

  // Bouquet Bunga Artificial
  {
    id: 7,
    category: 'artificial',
    name: 'Eternal Rose Bouquet',
    price: 300000,
    description: 'Bunga mawar artificial yang tahan lama',
    image: require('@/assets/images/categories/artificial/artificial-1.jpg'),
  },
  {
    id: 8,
    category: 'artificial',
    name: 'Premium Artificial Mix',
    price: 400000,
    description: 'Rangkaian bunga artificial premium',
    image: require('@/assets/images/categories/artificial/artificial-2.jpg'),
  },

  // Bouquet Kado Mini
  {
    id: 9,
    category: 'mini',
    name: 'Mini Love Package',
    price: 200000,
    description: 'Bouquet mini dengan boneka kecil dan surat cinta',
    image: require('@/assets/images/categories/mini/mini-1.jpg'),
  },
  {
    id: 10,
    category: 'mini',
    name: 'Mini Surprise Box',
    price: 250000,
    description: 'Bouquet mini dengan parfum dan aksesoris',
    image: require('@/assets/images/categories/mini/mini-2.jpg'),
  },

  // Bouquet Kosmetik
  {
    id: 11,
    category: 'cosmetic',
    name: 'Skincare Package',
    price: 450000,
    description: 'Bouquet berisi produk skincare premium',
    image: require('@/assets/images/categories/cosmetic/cosmetic-1.jpg'),
  },
  {
    id: 12,
    category: 'cosmetic',
    name: 'Beauty Essential Box',
    price: 350000,
    description: 'Bouquet berisi lipstik dan makeup essentials',
    image: require('@/assets/images/categories/cosmetic/cosmetic-2.jpg'),
  },

  // Bouquet Wisuda
  {
    id: 13,
    category: 'graduation',
    name: 'Graduation Special',
    price: 350000,
    description: 'Bouquet wisuda dengan boneka toga dan ucapan',
    image: require('@/assets/images/categories/graduation/graduation-1.jpg'),
  },
  {
    id: 14,
    category: 'graduation',
    name: 'Graduation Deluxe',
    price: 500000,
    description: 'Bouquet wisuda premium dengan bunga dan boneka besar',
    image: require('@/assets/images/categories/graduation/graduation-2.jpg'),
  },

  // Bouquet Hijab
  {
    id: 15,
    category: 'hijab',
    name: 'Hijab Rose Bouquet',
    price: 300000,
    description: 'Bouquet dari hijab premium dilipat seperti mawar',
    image: require('@/assets/images/categories/hijab/hijab-1.jpg'),
  },
  {
    id: 16,
    category: 'hijab',
    name: 'Premium Hijab Collection',
    price: 450000,
    description: 'Koleksi hijab premium dalam bentuk bouquet',
    image: require('@/assets/images/categories/hijab/hijab-2.jpg'),
  },
];
