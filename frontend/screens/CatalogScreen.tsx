import { BouquetCategories } from '@/assets';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CatalogScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(BouquetCategories);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredData(BouquetCategories);
    } else {
      const filtered = BouquetCategories.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleAddToCart = (item: any) => {
    Alert.alert(
      'Berhasil!',
      `${item.name} berhasil ditambahkan ke keranjang`,
      [
        { text: 'Lanjut Belanja', style: 'cancel' },
        { text: 'Lihat Keranjang', onPress: () => navigation.navigate('Cart') }
      ]
    );
  };

  const renderBouquetItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => {
        setSelectedCategory(item.id);
        navigation.navigate(item.screen);
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.categoryImage} />
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addToCartText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.categoryPrice}>{item.price}</Text>
          <Text style={styles.categoryEmoji}>{item.emoji}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Katalog Buket</Text>
          <Text style={styles.headerSubtitle}>Koleksi buket terlengkap untuk momen spesial Anda</Text>
        </View>
        <TouchableOpacity 
          style={styles.cartIcon}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartText}>🛒</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={BouquetCategories}
        renderItem={renderBouquetItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
    marginTop: 5,
  },
  cartIcon: {
    position: 'relative',
    padding: 10,
  },
  cartText: {
    fontSize: 24,
    color: 'white',
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: Colors.error,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  imageContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  addToCartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: `${Colors.primary}E6`,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    fontSize: 16,
    color: 'white',
  },
  categoryInfo: {
    padding: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginBottom: 8,
    lineHeight: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.success,
  },
  categoryEmoji: {
    fontSize: 18,
  },
});

export default CatalogScreen;
