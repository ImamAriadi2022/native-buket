import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HijabImages } from '../../assets';

const PashminaKaosScreen = ({ navigation }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const materials = ['Kaos Spandek', 'Rayon Stretch'];
  const styles_list = ['Santai', 'Rumahan', 'Olahraga', 'Kuliah'];
  const advantages = [
    'Sangat nyaman, adem di kulit',
    'Elastis dan mudah dibentuk',
    'Tidak licin saat dipakai',
    'Cocok untuk hijab instan, bergo, atau ciput'
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.categoryEmoji}>🧶</Text>
        <Text style={styles.title}>Hijab Pashmina Kaos</Text>
        <Text style={styles.description}>
          Hijab paling nyaman untuk aktivitas harian dan luar ruangan.
        </Text>
      </View>

      <View style={styles.imageSection}>
        <Image 
          source={HijabImages.hijab.pashminaKaos} 
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💎 Bahan Yang Tersedia</Text>
        <View style={styles.tagsContainer}>
          {materials.map((material, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{material}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👗 Cocok Untuk Gaya</Text>
        <View style={styles.tagsContainer}>
          {styles_list.map((style, index) => (
            <View key={index} style={[styles.tag, styles.styleTag]}>
              <Text style={styles.tagText}>{style}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Kelebihan</Text>
        {advantages.map((advantage, index) => (
          <View key={index} style={styles.advantageItem}>
            <Text style={styles.checkIcon}>✅</Text>
            <Text style={styles.advantageText}>{advantage}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Tips Perawatan</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Cara Mencuci</Text>
          <Text style={styles.tipText}>
            Cuci dengan air dingin dan deterjen lembut. Hindari pemutih untuk menjaga elastisitas bahan.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Penyimpanan</Text>
          <Text style={styles.tipText}>
            Lipat dengan rapi atau gantung untuk menghindari kusut dan menjaga bentuk.
          </Text>
        </View>
      </View>

      {/* Price and Action Section */}
      <View style={styles.priceSection}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Harga</Text>
          <Text style={styles.priceValue}>Rp 65.000</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.addToCartButton}
            onPress={() => {
              Alert.alert('Berhasil', 'Produk ditambahkan ke keranjang!');
            }}
          >
            <Text style={styles.addToCartButtonText}>🛒 Tambah ke Keranjang</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buyNowButton}
            onPress={() => {
              Alert.alert('Beli Sekarang', 'Fitur checkout akan segera tersedia!');
            }}
          >
            <Text style={styles.buyNowButtonText}>💳 Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.floatingButtonText}>🛒</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 100, // Extra space for floating button
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#FF6B6B',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    fontSize: 24,
  },
  heroSection: {
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  categoryEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 22,
  },
  imageSection: {
    padding: 20,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  section: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  styleTag: {
    backgroundColor: '#E5F3FF',
  },
  tagText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  advantageItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkIcon: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 2,
  },
  advantageText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: '#F0F8FF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  priceSection: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  priceLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#FF6B6B',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  floatingButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default PashminaKaosScreen;
