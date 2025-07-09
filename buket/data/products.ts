import { productImages } from '@/assets/images';
import { Product } from '@/types';

export const products: Product[] = [
  // Bouquet Uang
  {
    id: 1,
    category: 'money',
    name: 'Bouquet Uang 100K',
    price: 500000,
    description: 'Bouquet dari uang asli pecahan Rp 10.000, total Rp 100.000',
    image: productImages.money.money1,
  },
  {
    id: 2,
    category: 'money',
    name: 'Bouquet Uang 200K',
    price: 750000,
    description: 'Bouquet dari uang asli pecahan Rp 20.000, total Rp 200.000',
    image: productImages.money.money2,
  },

  // Bouquet Snack
  {
    id: 3,
    category: 'snack',
    name: 'Sweet Treats Bouquet',
    price: 150000,
    description: 'Berisi cokelat, permen, dan snack manis pilihan',
    image: productImages.snack.snack1,
  },
  {
    id: 4,
    category: 'snack',
    name: 'Premium Snack Bouquet',
    price: 250000,
    description: 'Kombinasi snack premium dan cokelat impor',
    image: productImages.snack.snack2,
  },

  // Bouquet Bunga Plastik
  {
    id: 5,
    category: 'artificial',
    name: 'Artificial Rose Bouquet',
    price: 350000,
    description: 'Buket bunga mawar artifisial premium',
    image: productImages.artificial.artificial1,
  },
  {
    id: 6,
    category: 'artificial',
    name: 'Mixed Artificial Bouquet',
    price: 400000,
    description: 'Kombinasi berbagai bunga artifisial premium',
    image: productImages.artificial.artificial2,
  },

  // Bouquet Mini
  {
    id: 7,
    category: 'mini',
    name: 'Mini Gift Bouquet',
    price: 150000,
    description: 'Buket kado mini yang lucu dan menggemaskan',
    image: productImages.mini.mini1,
  },
  {
    id: 8,
    category: 'mini',
    name: 'Mini Surprise Bouquet',
    price: 200000,
    description: 'Buket kado mini dengan kejutan di dalamnya',
    image: productImages.mini.mini2,
  },

  // Bouquet Kosmetik
  {
    id: 9,
    category: 'cosmetic',
    name: 'Skincare Bouquet',
    price: 450000,
    description: 'Buket berisi produk skincare premium',
    image: productImages.cosmetic.cosmetic1,
  },
  {
    id: 10,
    category: 'cosmetic',
    name: 'Makeup Bouquet',
    price: 500000,
    description: 'Buket berisi produk makeup branded',
    image: productImages.cosmetic.cosmetic2,
  },

  // Bouquet Wisuda
  {
    id: 11,
    category: 'graduation',
    name: 'Graduation Bouquet',
    price: 300000,
    description: 'Buket spesial untuk wisuda',
    image: productImages.graduation.graduation1,
  },
  {
    id: 12,
    category: 'graduation',
    name: 'Premium Graduation Bouquet',
    price: 450000,
    description: 'Buket wisuda premium dengan boneka wisuda',
    image: productImages.graduation.graduation2,
  },

  // Bouquet Hijab
  {
    id: 13,
    category: 'hijab',
    name: 'Basic Hijab Bouquet',
    price: 250000,
    description: 'Buket berisi hijab pilihan',
    image: productImages.hijab.hijab1,
  },
  {
    id: 14,
    category: 'hijab',
    name: 'Premium Hijab Bouquet',
    price: 350000,
    description: 'Buket berisi hijab premium',
    image: productImages.hijab.hijab2,
  },
];
