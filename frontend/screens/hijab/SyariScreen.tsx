import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HijabImages } from '../../assets';

const SyariScreen = ({ navigation }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const materials = ['Wolfis', 'Ceruty Baby Doll', 'Diamond Crepe'];
  const styles_list = ['Islami', 'Formal', 'Ngaji', 'Kajian', 'Sehari-hari'];
  const advantages = [
    'Menutup dada hingga pinggang atau lutut',
    'Nyaman dipakai seharian',
    'Banyak pilihan warna soft & earth tone',
    'Cocok untuk wanita muslimah yang ingin tampil lebih tertutup namun tetap elegan'
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
        <Text style={styles.categoryEmoji}>🕌</Text>
        <Text style={styles.title}>Hijab Syar'i</Text>
        <Text style={styles.description}>
          Hijab panjang menutupi dada dan punggung, memberikan tampilan anggun, sopan, dan sesuai syariat.
        </Text>
      </View>

      <View style={styles.imageSection}>
        <Image 
          source={HijabImages.hijab.syari} 
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
        <Text style={styles.sectionTitle}>🕌 Tips Syar'i</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Pilihan Panjang</Text>
          <Text style={styles.tipText}>
            Pilih panjang yang sesuai dengan aktivitas - hingga pinggang untuk aktivitas ringan, hingga lutut untuk lebih tertutup.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Kombinasi Warna</Text>
          <Text style={styles.tipText}>
            Pilih warna earth tone seperti coklat, krem, atau abu-abu untuk tampilan yang elegan dan tidak mencolok.
          </Text>
        </View>
      </View>

      {/* Price and Action Section */}
      <View style={styles.priceSection}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Harga</Text>
          <Text style={styles.priceValue}>Rp 95.000</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.addToCartButton}
            onPress={() => {
              Alert.alert('Berhasil', 'Hijab Syar\'i ditambahkan ke keranjang!');
            }}
          >
            <Text style={styles.addToCartButtonText}>🛒 Tambah ke Keranjang</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buyNowButton}
            onPress={() => {
              navigation.navigate('Checkout');
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
    paddingBottom: 100,
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

export default SyariScreen;
