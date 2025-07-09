import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { categories } from '@/utils/categories';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

// Featured products for homepage
const featuredProducts = [
  products[5],  // Artificial bouquet
  products[13], // Premium Hijab bouquet
  products[9],  // Makeup bouquet
  products[7],  // Mini gift bouquet
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText style={styles.headerTitle}>Florist Saa'</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Your Thoughtful Gift Partner</ThemedText>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Shop by Category</ThemedText>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => router.push(`/category/${category.id}`)}>
                <Image source={category.image} style={styles.categoryImage} />
                <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}>
            {featuredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => router.push(`/product/${product.id}`)}>
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <ThemedText style={styles.productName}>{product.name}</ThemedText>
                  <ThemedText style={styles.productPrice}>
                    Rp {product.price.toLocaleString()}
                  </ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Special Offers */}
        <View style={[styles.section, styles.offersSection]}>
          <ThemedText style={styles.sectionTitle}>Special Offers</ThemedText>
          <View style={styles.offersGrid}>
            <TouchableOpacity style={styles.offerCard}>
              <Image
                source={require('@/assets/images/products/graduation/graduation-1.jpg')}
                style={styles.offerImage}
              />
              <View style={styles.offerOverlay}>
                <ThemedText style={styles.offerTitle}>Graduation Special</ThemedText>
                <ThemedText style={styles.offerSubtitle}>20% Off</ThemedText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.offerCard}>
              <Image
                source={require('@/assets/images/products/cosmetic/cosmetic-1.jpg')}
                style={styles.offerImage}
              />
              <View style={styles.offerOverlay}>
                <ThemedText style={styles.offerTitle}>Beauty Sets</ThemedText>
                <ThemedText style={styles.offerSubtitle}>Free Shipping</ThemedText>
              </View>
            </TouchableOpacity>
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
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.light.tint,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  categoryCard: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 100,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
  },
  productsContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    width: 160,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  offersSection: {
    paddingBottom: 30,
  },
  offersGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  offerCard: {
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  offerImage: {
    width: '100%',
    height: '100%',
  },
  offerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  offerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  offerSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
});
