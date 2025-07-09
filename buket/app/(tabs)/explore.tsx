import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { Product } from '@/types';
import { categories } from '@/utils/categories';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const trendingProducts = [
  products[6],  // Artificial bouquet
  products[14], // Hijab bouquet
  products[11], // Cosmetic bouquet
  products[9],  // Mini bouquet
  products[2],  // Snack bouquet
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemedView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search bouquets..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Popular Categories */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Popular Categories</ThemedText>
        <View style={styles.categoriesGrid}>
          {categories.slice(0, 4).map((category) => (
            <TouchableOpacity 
              key={category.id}
              style={styles.categoryCard}
              onPress={() => router.push(`/category/${category.id}`)}>
              <Image source={category.image} style={styles.categoryImage} />
              <View style={styles.categoryContent}>
                <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                <ThemedText style={styles.categoryDescription}>{category.description}</ThemedText>
                <ThemedText style={styles.itemCount}>{category.itemCount} items</ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Trending Products */}
      <FlatList<Product>
        data={trendingProducts}
        numColumns={2}
        contentContainerStyle={styles.productsGrid}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productCard}
            onPress={() => router.push(`/product/${item.id}`)}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText style={styles.productPrice}>
                Rp {item.price.toLocaleString()}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <ThemedText style={styles.sectionTitle}>Trending Now</ThemedText>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: Platform.select({ android: 4, ios: 0 }),
  },
  categoryImage: {
    width: '100%',
    height: 120,
  },
  categoryContent: {
    padding: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  itemCount: {
    fontSize: 12,
    color: Colors.dark.text,
  },
  productsGrid: {
    padding: 16,
    gap: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: Platform.select({ android: 4, ios: 0 }),
  },
  productImage: {
    width: '100%',
    height: 160,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: Colors.dark.text,
  },
});
