import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation functions
  const goToSearch = () => {
    navigation.navigate('Search');
  };

  const goToNotifications = () => {
    navigation.navigate('Notification');
  };

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const goToProductDetail = (product: any) => {
    navigation.navigate('ProductDetail', { product });
  };

  const goToSeller = (seller: any) => {
    navigation.navigate('Seller', { seller });
  };

  // Banner promo
  const banners = [
    { id: 1, title: 'Promo Hari Ini', subtitle: 'Diskon hingga 50%', color: '#FF6B6B' },
    { id: 2, title: 'Gratis Ongkir', subtitle: 'Minimal pembelian 100k', color: '#4ECDC4' },
    { id: 3, title: 'Flash Sale', subtitle: 'Berakhir dalam 2 jam', color: '#45B7D1' },
  ];

  // Kategori populer
  const categories = [
    { id: 1, name: 'Buket Wisuda', icon: '🎓', color: '#FFD93D' },
    { id: 2, name: 'Buket Wedding', icon: '💍', color: '#FF6B6B' },
    { id: 3, name: 'Buket Money', icon: '💰', color: '#4ECDC4' },
    { id: 4, name: 'Buket Snack', icon: '🍿', color: '#95E1D3' },
    { id: 5, name: 'Buket Artificial', icon: '🌸', color: '#F38BA8' },
    { id: 6, name: 'Buket Kosmetik', icon: '💄', color: '#A8DADC' },
    { id: 7, name: 'Buket Mini', icon: '🌺', color: '#FFB3BA' },
    { id: 8, name: 'Semua Kategori', icon: '📱', color: '#E2E2E2' },
  ];

  // Produk populer
  const popularProducts = [
    { id: 1, name: 'Buket Wisuda Premium', price: 'Rp 250.000', rating: 4.9, sold: 1200, image: '🎓', discount: 20 },
    { id: 2, name: 'Buket Wedding Elegan', price: 'Rp 450.000', rating: 4.8, sold: 850, image: '💍', discount: 15 },
    { id: 3, name: 'Buket Money Spesial', price: 'Rp 300.000', rating: 4.7, sold: 650, image: '💰', discount: 25 },
    { id: 4, name: 'Buket Snack Combo', price: 'Rp 180.000', rating: 4.6, sold: 920, image: '🍿', discount: 10 },
  ];

  // Flash sale products
  const flashSaleProducts = [
    { id: 1, name: 'Buket Mini Cute', originalPrice: 'Rp 80.000', salePrice: 'Rp 50.000', timeLeft: '01:23:45', stock: 5 },
    { id: 2, name: 'Buket Artificial Premium', originalPrice: 'Rp 150.000', salePrice: 'Rp 99.000', timeLeft: '01:23:45', stock: 12 },
    { id: 3, name: 'Buket Kosmetik Set', originalPrice: 'Rp 200.000', salePrice: 'Rp 140.000', timeLeft: '01:23:45', stock: 8 },
  ];

  const renderBanner = ({ item }: any) => (
    <View style={[styles.bannerCard, { backgroundColor: item.color }]}>
      <Text style={styles.bannerTitle}>{item.title}</Text>
      <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
    </View>
  );

  const renderCategory = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Catalog', { category: item.name })}
    >
      <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }: any) => (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.productImageContainer}>
        <Text style={styles.productImage}>{item.image}</Text>
        {item.discount > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}%</Text>
          </View>
        )}
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.productStats}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          </View>
          <Text style={styles.soldText}>{item.sold} terjual</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.locationText}>📍 Jakarta Selatan</Text>
            <Text style={styles.welcomeText}>Selamat datang di BuketKu</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIcon} onPress={goToNotifications}>
              <Text style={styles.headerIconText}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon} onPress={goToWishlist}>
              <Text style={styles.headerIconText}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.headerIcon}
              onPress={goToCart}
            >
              <Text style={styles.headerIconText}>🛒</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchContainer} onPress={goToSearch}>
          <Text style={styles.searchPlaceholder}>Cari buket impian kamu...</Text>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Banner Promo */}
      <View style={styles.section}>
        <FlatList
          data={banners}
          renderItem={renderBanner}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
        />
      </View>

      {/* Quick Access */}
      <View style={styles.section}>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessIcon}>💳</Text>
            <Text style={styles.quickAccessText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessIcon}>🎁</Text>
            <Text style={styles.quickAccessText}>Voucher</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessIcon}>🚚</Text>
            <Text style={styles.quickAccessText}>Lacak Pesanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessIcon}>📞</Text>
            <Text style={styles.quickAccessText}>Bantuan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Flash Sale */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>⚡ Flash Sale</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FlashSale')}>
            <Text style={styles.sectionSubtitle}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {flashSaleProducts.map((item) => (
            <TouchableOpacity key={item.id} style={styles.flashSaleCard}>
              <View style={styles.flashSaleImage}>
                <Text style={styles.flashSaleEmoji}>🔥</Text>
              </View>
              <Text style={styles.flashSaleName} numberOfLines={2}>{item.name}</Text>
              <Text style={styles.flashSaleOriginalPrice}>{item.originalPrice}</Text>
              <Text style={styles.flashSalePrice}>{item.salePrice}</Text>
              <View style={styles.flashSaleProgress}>
                <View style={[styles.flashSaleProgressBar, { width: `${(item.stock / 20) * 100}%` }]} />
              </View>
              <Text style={styles.flashSaleStock}>Tersisa {item.stock}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Kategori */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategori Pilihan</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          scrollEnabled={false}
        />
      </View>

      {/* Produk Populer */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>🔥 Produk Populer</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.productRow}
        />
      </View>

      {/* Rekomendasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Rekomendasi Untuk Anda</Text>
        <FlatList
          data={popularProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => `rec-${item.id}`}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.productRow}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2E7D32',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  headerIcon: {
    position: 'relative',
    padding: 8,
  },
  headerIconText: {
    fontSize: 20,
    color: 'white',
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
  },
  searchPlaceholder: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 14,
    color: '#999',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    fontSize: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  seeAllText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '600',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  bannerCard: {
    width: 280,
    height: 120,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quickAccessItem: {
    alignItems: 'center',
  },
  quickAccessIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  quickAccessText: {
    fontSize: 12,
    color: '#666',
  },
  flashSaleCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginLeft: 20,
    width: 140,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  flashSaleImage: {
    width: '100%',
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  flashSaleEmoji: {
    fontSize: 30,
  },
  flashSaleName: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
  },
  flashSaleOriginalPrice: {
    fontSize: 10,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  flashSalePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 8,
  },
  flashSaleProgress: {
    width: '100%',
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginBottom: 4,
  },
  flashSaleProgressBar: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: 2,
  },
  flashSaleStock: {
    fontSize: 10,
    color: '#666',
  },
  categoryCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 20,
  },
  categoryName: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
  productRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    width: '48%',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  productImage: {
    fontSize: 40,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
    lineHeight: 16,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 4,
  },
  productStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 10,
    color: '#666',
  },
  soldText: {
    fontSize: 10,
    color: '#666',
  },
});

export default HomeScreen;
