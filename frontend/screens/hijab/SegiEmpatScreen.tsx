import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HijabImages } from '../../assets';

const SegiEmpatScreen = ({ navigation }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const materials = ['Voal', 'Paris', 'Katun', 'Silk', 'Satin'];
  const styles_list = ['Formal', 'Kasual', 'Sekolah', 'Kerja', 'Kondangan'];
  const advantages = [
    'Mudah dibentuk dan dikreasikan',
    'Cocok untuk semua bentuk wajah',
    'Banyak variasi bahan dan motif',
    'Tampilan simple, anggun, dan rapi'
  ];

  const tutorials = [
    { id: 1, title: 'Tutorial Basic Segi Empat', duration: '3 menit' },
    { id: 2, title: 'Segi Empat untuk Wajah Bulat', duration: '4 menit' },
    { id: 3, title: 'Style Formal dengan Segi Empat', duration: '5 menit' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
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

      {/* Hero Section with Image */}
      <View style={styles.heroSection}>
        <Image 
          source={HijabImages.hijab.segiEmpat} 
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.categoryEmoji}>🔸</Text>
          <Text style={styles.title}>Hijab Segi Empat</Text>
          <Text style={styles.description}>
            Hijab klasik yang paling fleksibel dan digemari oleh semua kalangan.
          </Text>
          <View style={styles.priceSection}>
            <Text style={styles.price}>Rp 89.000</Text>
            <Text style={styles.originalPrice}>Rp 120.000</Text>
          </View>
        </View>
      </View>

      {/* Image Section */}
      <View style={styles.imageSection}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📸</Text>
          <Text style={styles.imagePlaceholderSubtext}>Foto Hijab Segi Empat</Text>
        </View>
      </View>

      {/* Materials Section */}
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

      {/* Styles Section */}
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

      {/* Advantages Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Kelebihan</Text>
        {advantages.map((advantage, index) => (
          <View key={index} style={styles.advantageItem}>
            <Text style={styles.checkIcon}>✅</Text>
            <Text style={styles.advantageText}>{advantage}</Text>
          </View>
        ))}
      </View>

      {/* Tutorials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎥 Tutorial & Tips</Text>
        {tutorials.map((tutorial) => (
          <TouchableOpacity key={tutorial.id} style={styles.tutorialItem}>
            <View style={styles.tutorialIcon}>
              <Text style={styles.playIcon}>▶️</Text>
            </View>
            <View style={styles.tutorialInfo}>
              <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
              <Text style={styles.tutorialDuration}>{tutorial.duration}</Text>
            </View>
            <Text style={styles.tutorialArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tips Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Tips Styling</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Untuk Pemula</Text>
          <Text style={styles.tipText}>
            Mulai dengan lipatan simple di kedua sisi, lalu sematkan dengan jarum pentul di bawah dagu.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Untuk Wajah Bulat</Text>
          <Text style={styles.tipText}>
            Buat volume di bagian atas kepala dan hindari terlalu ketat di pipi.
          </Text>
        </View>
      </View>        {/* Bottom spacing for floating buttons */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Floating Action Buttons */}
      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => {
          Alert.alert(
            'Ditambahkan ke Keranjang',
            'Hijab Segi Empat telah ditambahkan ke keranjang belanja',
            [
              { text: 'Lanjut Belanja', style: 'cancel' },
              { text: 'Lihat Keranjang', onPress: () => navigation.navigate('Cart') }
            ]
          );
        }}>
          <Text style={styles.addToCartText}>🛒 Tambah ke Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton} onPress={() => {
          const items = [{
            id: 1,
            name: 'Hijab Segi Empat Premium',
            price: 89000,
            quantity: 1,
            image: HijabImages.hijab.segiEmpat,
          }];
          navigation.navigate('Checkout', { 
            items: items, 
            total: 89000 
          });
        }}>
          <Text style={styles.buyNowText}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
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
    position: 'relative',
    height: 300,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
  },
  categoryEmoji: {
    fontSize: 48,
    marginBottom: 10,
    color: '#fff',
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
    marginBottom: 15,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  originalPrice: {
    fontSize: 16,
    color: '#ccc',
    textDecorationLine: 'line-through',
  },
  imageSection: {
    padding: 20,
  },
  imagePlaceholder: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagePlaceholderText: {
    fontSize: 48,
    marginBottom: 10,
  },
  imagePlaceholderSubtext: {
    fontSize: 14,
    color: '#666',
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
  tutorialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  tutorialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playIcon: {
    fontSize: 14,
  },
  tutorialInfo: {
    flex: 1,
  },
  tutorialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  tutorialDuration: {
    fontSize: 12,
    color: '#666',
  },
  tutorialArrow: {
    fontSize: 18,
    color: '#999',
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
  bottomSpacing: {
    height: 80,
  },
  floatingButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6B6B',
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    borderRadius: 25,
    marginLeft: 8,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SegiEmpatScreen;
