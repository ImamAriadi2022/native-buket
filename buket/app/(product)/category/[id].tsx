import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products as allProducts } from '@/data/products';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 2;
const gap = 16;
const itemWidth = (width - (gap * (numColumns + 1))) / numColumns;

const getCategoryTitle = (category: string): string => {
  switch (category) {
    case 'money': return 'Bouquet Uang';
    case 'snack': return 'Bouquet Snack';
    case 'fresh': return 'Bouquet Bunga Segar';
    case 'artificial': return 'Bouquet Bunga Artificial';
    case 'mini': return 'Bouquet Kado Mini';
    case 'cosmetic': return 'Bouquet Kosmetik';
    case 'graduation': return 'Bouquet Wisuda';
    case 'hijab': return 'Bouquet Hijab';
    default: return 'Produk';
  }
};

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const categoryProducts = useMemo(() => 
    allProducts.filter(p => p.category === id),
    [id]
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>{getCategoryTitle(id)}</ThemedText>
        <ThemedText style={styles.productCount}>{categoryProducts.length} products</ThemedText>
      </View>

      <FlatList
        data={categoryProducts}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.productCard, { width: itemWidth }]}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText style={styles.productPrice}>
                Rp {item.price.toLocaleString()}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  grid: {
    padding: gap,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: gap / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
