import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  category: string;
}

const { width } = Dimensions.get('window');
const numColumns = 2;
const gap = 16;
const itemWidth = (width - (gap * (numColumns + 1))) / numColumns;

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Flower Bouquet',
    price: 'Rp 250.000',
    image: require('../../assets/images/buket bunga plastik/717e95ddf76b8651e2c4f4d94118b5aa.jpg'),
    category: 'Bunga Plastik',
  },
  // Add more products...
];

export default function CategoryScreen() {
  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} contentFit="cover" />
      <View style={styles.productInfo}>
        <ThemedText style={styles.productName} numberOfLines={2}>
          {item.name}
        </ThemedText>
        <ThemedText style={styles.productPrice}>{item.price}</ThemedText>
        <View style={styles.ratingContainer}>
          <ThemedText style={styles.rating}>⭐ 4.8</ThemedText>
          <ThemedText style={styles.sales}>(120)</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Buket Bunga</ThemedText>
        <TouchableOpacity style={styles.filterButton}>
          <ThemedText>Filter</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.filterChip, styles.activeFilterChip]}>
            <ThemedText style={styles.activeFilterText}>All</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <ThemedText style={styles.filterText}>Newest</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <ThemedText style={styles.filterText}>Popular</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <ThemedText style={styles.filterText}>Price: Low to High</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <ThemedText style={styles.filterText}>Price: High to Low</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filterButton: {
    padding: 8,
  },
  filtersContainer: {
    padding: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeFilterChip: {
    backgroundColor: Colors.light.tint,
  },
  filterText: {
    color: '#666',
  },
  activeFilterText: {
    color: '#fff',
  },
  productGrid: {
    padding: gap,
  },
  productCard: {
    width: itemWidth,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: gap,
    marginRight: gap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: itemWidth,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    marginRight: 4,
  },
  sales: {
    fontSize: 12,
    color: '#666',
  },
});
