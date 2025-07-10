// Bouquet Product Images
export const BouquetImages = {
  graduation: {
    graduation1: require('./images/products/graduation/graduation-1.jpg'),
    graduation2: require('./images/products/graduation/graduation-2.jpg'),
  },
  wedding: {
    wedding1: require('./images/products/wedding/wedding-1.jpg'),
    wedding2: require('./images/products/wedding/wedding-2.jpg'),
  },
  money: {
    money1: require('./images/products/money/money-1.jpg'),
    money2: require('./images/products/money/money-2.jpg'),
  },
  snack: {
    snack1: require('./images/products/snack/snack-1.jpg'),
    snack2: require('./images/products/snack/snack-2.jpg'),
  },
  artificial: {
    artificial1: require('./images/products/artificial/artificial-1.jpg'),
    artificial2: require('./images/products/artificial/artificial-2.jpg'),
  },
  cosmetic: {
    cosmetic1: require('./images/products/cosmetic/cosmetic-1.jpg'),
    cosmetic2: require('./images/products/cosmetic/cosmetic-2.jpg'),
  },
  mini: {
    mini1: require('./images/products/mini/mini-1.jpg'),
    mini2: require('./images/products/mini/mini-2.jpg'),
  },
};

// App Icons and Logo
export const AppImages = {
  logo: require('./images/icon.png'), // Using icon.png as logo
  splashIcon: require('./images/splash-icon.png'),
  favicon: require('./images/favicon.png'),
  icon: require('./images/icon.png'),
  adaptiveIcon: require('./images/adaptive-icon.png'),
};

// Helper function to get image by category and index
export const getBouquetImage = (category: string, index: number = 1) => {
  const images = BouquetImages[category as keyof typeof BouquetImages];
  if (!images) return null;
  
  const imageKey = `${category}${index}` as keyof typeof images;
  return images[imageKey] || Object.values(images)[0];
};

// Bouquet category data with images
export const BouquetCategories = [
  {
    id: 1,
    name: 'Buket Graduation Premium',
    description: 'Buket wisuda dengan bunga segar dan dekorasi premium untuk momen spesial',
    price: 'Rp 150.000',
    emoji: '🎓',
    color: '#E8F5E8',
    screen: 'GraduationDetail',
    image: BouquetImages.graduation.graduation1,
    category: 'graduation'
  },
  {
    id: 2,
    name: 'Buket Wedding Romantic',
    description: 'Buket pernikahan romantis dengan mawar merah untuk hari bahagia',
    price: 'Rp 250.000',
    emoji: '💍',
    color: '#F0F8F0',
    screen: 'WeddingDetail',
    image: BouquetImages.wedding.wedding1,
    category: 'wedding'
  },
  {
    id: 3,
    name: 'Buket Money Celebration',
    description: 'Buket uang untuk perayaan dan hadiah spesial berbagai acara',
    price: 'Rp 100.000',
    emoji: '💰',
    color: '#E6F7E6',
    screen: 'MoneyDetail',
    image: BouquetImages.money.money1,
    category: 'money'
  },
  {
    id: 4,
    name: 'Buket Snack Party',
    description: 'Buket snack untuk pesta dan acara santai dengan berbagai pilihan',
    price: 'Rp 80.000',
    emoji: '🍿',
    color: '#F5F9F5',
    screen: 'SnackDetail',
    image: BouquetImages.snack.snack1,
    category: 'snack'
  },
  {
    id: 5,
    name: 'Buket Artificial Rose',
    description: 'Buket mawar artifisial yang tahan lama dan cantik',
    price: 'Rp 95.000',
    emoji: '🌸',
    color: '#EDF7ED',
    screen: 'ArtificialDetail',
    image: BouquetImages.artificial.artificial1,
    category: 'artificial'
  },
  {
    id: 6,
    name: 'Buket Cosmetic Beauty',
    description: 'Buket produk kecantikan untuk hadiah spesial wanita',
    price: 'Rp 160.000',
    emoji: '💄',
    color: '#F8FDF8',
    screen: 'CosmeticDetail',
    image: BouquetImages.cosmetic.cosmetic1,
    category: 'cosmetic'
  },
  {
    id: 7,
    name: 'Buket Mini Cute',
    description: 'Buket mini lucu untuk hadiah kecil dan momen spesial',
    price: 'Rp 45.000',
    emoji: '🌺',
    color: '#F3F8F3',
    screen: 'MiniDetail',
    image: BouquetImages.mini.mini1,
    category: 'mini'
  },
];
