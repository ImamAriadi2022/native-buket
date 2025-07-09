import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Images Carousel */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/products/artificial/artificial-1.jpg')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backButton}>
            <ThemedText style={styles.backButtonText}>←</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <ThemedText style={styles.productName}>Premium Flower Bouquet</ThemedText>
          <ThemedText style={styles.productPrice}>Rp 250.000</ThemedText>
          
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.rating}>⭐ 4.8</ThemedText>
            <ThemedText style={styles.reviews}>(120 reviews)</ThemedText>
          </View>

          <View style={styles.separator} />

          <ThemedText style={styles.descriptionTitle}>Description</ThemedText>
          <ThemedText style={styles.description}>
            Beautiful handcrafted bouquet made with premium artificial flowers. Perfect for special occasions,
            home decoration, or as a thoughtful gift. The flowers are carefully selected and arranged to create
            a stunning visual impact that lasts.
          </ThemedText>

          <View style={styles.separator} />

          {/* Specifications */}
          <ThemedText style={styles.specTitle}>Specifications</ThemedText>
          <View style={styles.specRow}>
            <ThemedText style={styles.specLabel}>Size</ThemedText>
            <ThemedText style={styles.specValue}>30 x 20 cm</ThemedText>
          </View>
          <View style={styles.specRow}>
            <ThemedText style={styles.specLabel}>Material</ThemedText>
            <ThemedText style={styles.specValue}>Premium Artificial Flowers</ThemedText>
          </View>
          <View style={styles.specRow}>
            <ThemedText style={styles.specLabel}>Weight</ThemedText>
            <ThemedText style={styles.specValue}>500g</ThemedText>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.wishlistButton}>
          <ThemedText style={styles.wishlistButtonText}>♡</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <ThemedText style={styles.addToCartButtonText}>Add to Cart</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: width,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    marginRight: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  specTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  specLabel: {
    fontSize: 14,
    color: '#666',
  },
  specValue: {
    fontSize: 14,
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  wishlistButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.light.tint,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  wishlistButtonText: {
    fontSize: 24,
    color: Colors.light.tint,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: Colors.light.tint,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
