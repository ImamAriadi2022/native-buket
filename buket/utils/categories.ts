export type CategoryType = 
  | 'money'
  | 'snack'
  | 'fresh'
  | 'artificial'
  | 'mini'
  | 'cosmetic'
  | 'graduation'
  | 'hijab';

export const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'money': return 'Bouquet Uang';
    case 'snack': return 'Bouquet Snack';
    case 'fresh': return 'Bouquet Bunga Segar';
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
    description: 'Beautiful artificial flower arrangements',
    image: require('@/assets/images/categories/artificial/artificial-1.jpg'),
    itemCount: 8,
  },
  {
    id: 'hijab',
    name: 'Buket Hijab',
    description: 'Elegant hijab gift bouquets',
    image: require('@/assets/images/categories/hijab/hijab-1.jpg'),
    itemCount: 5,
  },
  {
    id: 'cosmetic',
    name: 'Buket Kosmetik',
    description: 'Beauty and skincare gift bouquets',
    image: require('@/assets/images/categories/cosmetic/cosmetic-1.jpg'),
    itemCount: 6,
  },
  {
    id: 'mini',
    name: 'Buket Mini',
    description: 'Cute mini gift bouquets',
    image: require('@/assets/images/categories/mini/mini-1.jpg'),
    itemCount: 4,
  },
  {
    id: 'snack',
    name: 'Buket Snack',
    description: 'Delicious snack arrangements',
    image: require('@/assets/images/categories/snack/snack-1.jpg'),
    itemCount: 7,
  },
  {
    id: 'graduation',
    name: 'Buket Wisuda',
    description: 'Special graduation bouquets',
    image: require('@/assets/images/categories/graduation/graduation-1.jpg'),
    itemCount: 5,
  },
  {
    id: 'money',
    name: 'Buket Uang',
    description: 'Creative money gift bouquets',
    image: require('@/assets/images/categories/money/money-1.jpg'),
    itemCount: 3,
  }
];
