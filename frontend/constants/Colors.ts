export const Colors = {
  primary: '#2E7D32',        // Hijau tua
  secondary: '#4CAF50',      // Hijau medium
  accent: '#66BB6A',         // Hijau muda
  light: '#E8F5E8',         // Hijau sangat muda
  background: '#F1F8E9',     // Background hijau muda
  success: '#388E3C',        // Hijau sukses
  warning: '#FFC107',        // Kuning untuk warning
  error: '#F44336',          // Merah untuk error
  text: '#1B5E20',           // Hijau gelap untuk text
  textSecondary: '#2E7D32',  // Hijau medium untuk text secondary
  white: '#FFFFFF',
  gray: '#757575',
  lightGray: '#F5F5F5',
  
  // Gradient colors
  gradient: {
    primary: ['#2E7D32', '#4CAF50'],
    secondary: ['#66BB6A', '#81C784'],
    light: ['#E8F5E8', '#F1F8E9'],
  },
  
  // Card colors
  card: {
    graduation: '#E8F5E8',
    wedding: '#F0F8F0',
    money: '#E6F7E6',
    snack: '#F5F9F5',
    artificial: '#EDF7ED',
    cosmetic: '#F8FDF8',
    mini: '#F3F8F3',
  },
  
  // Status colors
  status: {
    pending: '#FFC107',
    processing: '#2196F3',
    shipped: '#FF9800',
    delivered: '#4CAF50',
    cancelled: '#F44336',
  }
};

export const getColorByCategory = (category: string): string => {
  switch (category) {
    case 'graduation':
      return Colors.card.graduation;
    case 'wedding':
      return Colors.card.wedding;
    case 'money':
      return Colors.card.money;
    case 'snack':
      return Colors.card.snack;
    case 'artificial':
      return Colors.card.artificial;
    case 'cosmetic':
      return Colors.card.cosmetic;
    case 'mini':
      return Colors.card.mini;
    default:
      return Colors.light;
  }
};
