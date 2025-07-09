import { categoryImages } from '@/assets/images';

export type CategoryType = 
  | 'money'
  | 'snack'
  | 'artificial'
  | 'mini'
  | 'cosmetic'
  | 'graduation'
  | 'hijab';

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'money': return 'Bouquet Uang';
    case 'snack': return 'Bouquet Snack';
    case 'artificial': return 'Bouquet Bunga Artificial';
    case 'mini': return 'Bouquet Kado Mini';
    case 'cosmetic': return 'Bouquet Kosmetik';
    case 'graduation': return 'Bouquet Wisuda';
    case 'hijab': return 'Bouquet Hijab';
    default: return 'Other';
  }
};

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  image: any;
  itemCount: number;
}

export const categories: Category[] = [
  {
    id: 'artificial',
    name: 'Buket Bunga',
    description: 'Buket bunga artifisial premium',
    image: categoryImages.artificial,
    itemCount: 8,
  },
  {
    id: 'hijab',
    name: 'Buket Hijab',
    description: 'Buket berisi hijab pilihan',
    image: categoryImages.hijab,
    itemCount: 5,
  },
  {
    id: 'cosmetic',
    name: 'Buket Kosmetik',
    description: 'Buket berisi produk skincare dan makeup',
    image: categoryImages.cosmetic,
    itemCount: 6,
  },
  {
    id: 'mini',
    name: 'Buket Mini',
    description: 'Buket kado mini yang lucu',
    image: categoryImages.mini,
    itemCount: 4,
  },
  {
    id: 'snack',
    name: 'Buket Snack',
    description: 'Buket berisi snack pilihan',
    image: categoryImages.snack,
    itemCount: 7,
  },
  {
    id: 'graduation',
    name: 'Buket Wisuda',
    description: 'Buket spesial untuk wisuda',
    image: categoryImages.graduation,
    itemCount: 5,
  },
  {
    id: 'money',
    name: 'Buket Uang',
    description: 'Buket dari uang asli',
    image: categoryImages.money,
    itemCount: 3,
  }
];
