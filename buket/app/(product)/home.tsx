import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const categories = [
  { 
    id: 1, 
    name: 'Buket Bunga', 
    image: require('@/assets/images/categories/artificial/artificial-1.jpg')
  },
  { 
    id: 2, 
    name: 'Buket Hijab', 
    image: require('@/assets/images/categories/hijab/hijab-1.jpg')
  },
  { 
    id: 3, 
    name: 'Buket Kosmetik', 
    image: require('@/assets/images/categories/cosmetic/cosmetic-1.jpg')
  },
  { 
    id: 4, 
    name: 'Buket Mini', 
    image: require('@/assets/images/categories/mini/mini-1.jpg')
  },
  { 
    id: 5, 
    name: 'Buket Snack', 
    image: require('@/assets/images/categories/snack/snack-1.jpg')
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Flower Bouquet',
    price: 'Rp 250.000',
    image: require('@/assets/images/categories/artificial/artificial-2.jpg'),
  },
  // Add more featured products...
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText style={styles.headerTitle}>Buket Store</ThemedText>
          <TouchableOpacity>
            <Image
              source={require('@/assets/images/icon.png')}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.searchIcon}
          />
          <ThemedText style={styles.searchText}>Search products...</ThemedText>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ThemedText style={styles.sectionTitle}>Categories</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <Image source={category.image} style={styles.categoryImage} />
                <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View style={styles.featuredContainer}>
          <ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>
          <View style={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <TouchableOpacity key={product.id} style={styles.productCard}>
                <Image source={product.image} style={styles.productImage} />
                <ThemedText style={styles.productName}>{product.name}</ThemedText>
                <ThemedText style={styles.productPrice}>{product.price}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchText: {
    color: '#666',
  },
  categoriesContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  categoryCard: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 100,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
  },
  featuredContainer: {
    marginVertical: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  productCard: {
    width: '45%',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});
