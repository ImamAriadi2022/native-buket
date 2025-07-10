import { BouquetCategories } from '@/assets';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SellerScreen = () => {
  const [selectedTab, setSelectedTab] = useState('products');

  const seller = {
    name: 'BuketKu Store',
    verified: true,
    rating: 4.9,
    responseTime: '< 1 jam',
    joinDate: 'Bergabung 2 tahun yang lalu',
    location: 'Jakarta Selatan',
    followers: 1250,
    products: 45,
    logo: require('@/assets/images/icon.png'),
    description: 'Toko buket terpercaya dengan kualitas premium dan pelayanan terbaik. Kami menyediakan berbagai macam buket untuk berbagai acara spesial Anda.',
  };

  const sellerStats = [
    { label: 'Produk', value: seller.products },
    { label: 'Pengikut', value: seller.followers },
    { label: 'Rating', value: seller.rating },
    { label: 'Respons', value: seller.responseTime },
  ];

  const sellerProducts = BouquetCategories.slice(0, 6); // Show first 6 products

  const renderProducts = () => (
    <ScrollView contentContainerStyle={styles.productsGrid}>
      {sellerProducts.map((product) => (
        <TouchableOpacity key={product.id} style={styles.productCard}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName} numberOfLines={2}>
              {product.name}
            </Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={styles.productMeta}>
              <Text style={styles.productRating}>⭐ 4.8</Text>
              <Text style={styles.productSold}>100+ terjual</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderInfo = () => (
    <View style={styles.infoContainer}>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Deskripsi Toko</Text>
        <Text style={styles.infoText}>{seller.description}</Text>
      </View>
      
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Informasi Toko</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Lokasi</Text>
          <Text style={styles.infoValue}>{seller.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Bergabung</Text>
          <Text style={styles.infoValue}>{seller.joinDate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Waktu Respons</Text>
          <Text style={styles.infoValue}>{seller.responseTime}</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Kebijakan Toko</Text>
        <Text style={styles.infoText}>
          • Garansi kualitas produk{'\n'}
          • Pengiriman aman dan cepat{'\n'}
          • Layanan pelanggan 24/7{'\n'}
          • Kemasan premium dan aman{'\n'}
          • Customisasi sesuai request
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Toko</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Bagikan</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Seller Header */}
        <View style={styles.sellerHeader}>
          <Image source={seller.logo} style={styles.sellerLogo} />
          <View style={styles.sellerInfo}>
            <View style={styles.sellerNameContainer}>
              <Text style={styles.sellerName}>{seller.name}</Text>
              {seller.verified && (
                <Text style={styles.verifiedBadge}>✓</Text>
              )}
            </View>
            <Text style={styles.sellerLocation}>{seller.location}</Text>
            <View style={styles.sellerRating}>
              <Text style={styles.ratingText}>⭐ {seller.rating}</Text>
              <Text style={styles.responseTime}>{seller.responseTime}</Text>
            </View>
          </View>
        </View>

        {/* Seller Stats */}
        <View style={styles.statsContainer}>
          {sellerStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>+ Ikuti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>💬 Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'products' && styles.activeTab]}
            onPress={() => setSelectedTab('products')}
          >
            <Text style={[styles.tabText, selectedTab === 'products' && styles.activeTabText]}>
              Produk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'info' && styles.activeTab]}
            onPress={() => setSelectedTab('info')}
          >
            <Text style={[styles.tabText, selectedTab === 'info' && styles.activeTabText]}>
              Info Toko
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {selectedTab === 'products' ? renderProducts() : renderInfo()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shareButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
  },
  sellerHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sellerLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  sellerInfo: {
    flex: 1,
  },
  sellerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sellerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  verifiedBadge: {
    backgroundColor: Colors.primary,
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 10,
  },
  sellerLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  sellerRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginRight: 15,
  },
  responseTime: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  followButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  followButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatButton: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
  chatButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
  },
  productMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productRating: {
    fontSize: 12,
    color: '#666',
  },
  productSold: {
    fontSize: 12,
    color: '#666',
  },
  infoContainer: {
    padding: 20,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});

export default SellerScreen;
