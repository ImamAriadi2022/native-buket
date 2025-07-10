import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductDetailScreen = ({ navigation, route }: any) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variants = [
    { id: 0, name: 'Ukuran S', price: 'Rp 250.000', stock: 15 },
    { id: 1, name: 'Ukuran M', price: 'Rp 350.000', stock: 8 },
    { id: 2, name: 'Ukuran L', price: 'Rp 450.000', stock: 3 },
  ];

  const reviews = [
    { id: 1, user: 'Sarah M.', rating: 5, comment: 'Buket sangat cantik dan berkualitas! Recommended banget!', date: '2 hari lalu' },
    { id: 2, user: 'Ahmad R.', rating: 4, comment: 'Packaging rapi, pengiriman cepat. Terima kasih!', date: '1 minggu lalu' },
    { id: 3, user: 'Lisa K.', rating: 5, comment: 'Sempurna untuk acara wisuda. Puas dengan hasilnya!', date: '2 minggu lalu' },
  ];

  const handleAddToCart = () => {
    Alert.alert(
      'Berhasil!',
      `${product.name} telah ditambahkan ke keranjang`,
      [{ text: 'OK', onPress: () => navigation.navigate('Cart') }]
    );
  };

  const handleBuyNow = () => {
    Alert.alert(
      'Checkout',
      'Lanjutkan ke pembayaran?',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Ya', onPress: () => navigation.navigate('Checkout') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail Produk</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.cartButton}>🛒</Text>
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <View style={styles.productImage}>
            <Text style={styles.productEmoji}>{product.image}</Text>
          </View>
          {product.discount > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{product.discount}% OFF</Text>
            </View>
          )}
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {product.rating}</Text>
            <Text style={styles.soldText}>• {product.sold} terjual</Text>
          </View>
          <Text style={styles.productPrice}>{product.price}</Text>
          
          {/* Variants */}
          <View style={styles.variantSection}>
            <Text style={styles.variantTitle}>Pilih Varian:</Text>
            <View style={styles.variantContainer}>
              {variants.map((variant) => (
                <TouchableOpacity
                  key={variant.id}
                  style={[
                    styles.variantButton,
                    selectedVariant === variant.id && styles.selectedVariant
                  ]}
                  onPress={() => setSelectedVariant(variant.id)}
                >
                  <Text style={[
                    styles.variantText,
                    selectedVariant === variant.id && styles.selectedVariantText
                  ]}>
                    {variant.name}
                  </Text>
                  <Text style={[
                    styles.variantPrice,
                    selectedVariant === variant.id && styles.selectedVariantText
                  ]}>
                    {variant.price}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionTitle}>Deskripsi Produk</Text>
            <Text style={styles.descriptionText}>
              Buket premium dengan kualitas terbaik. Dibuat dengan bahan-bahan pilihan dan dikemas dengan rapi. 
              Cocok untuk berbagai acara spesial seperti wisuda, ulang tahun, dan momen berkesan lainnya.
              {'\n\n'}
              Spesifikasi:
              {'\n'}• Bahan berkualitas tinggi
              {'\n'}• Kemasan mewah dan aman
              {'\n'}• Garansi kepuasan 100%
              {'\n'}• Gratis kartu ucapan
            </Text>
          </View>

          {/* Reviews */}
          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Ulasan Pembeli ({reviews.length})</Text>
            {reviews.map((review) => (
              <View key={review.id} style={styles.reviewItem}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewUser}>{review.user}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <View style={styles.reviewRating}>
                  <Text style={styles.reviewStars}>{'⭐'.repeat(review.rating)}</Text>
                </View>
                <Text style={styles.reviewComment}>{review.comment}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.seeAllReviews}>
              <Text style={styles.seeAllReviewsText}>Lihat Semua Ulasan</Text>
            </TouchableOpacity>
          </View>

          {/* Seller Info */}
          <View style={styles.sellerSection}>
            <Text style={styles.sellerTitle}>Informasi Toko</Text>
            <View style={styles.sellerInfo}>
              <View style={styles.sellerAvatar}>
                <Text style={styles.sellerAvatarText}>BK</Text>
              </View>
              <View style={styles.sellerDetails}>
                <Text style={styles.sellerName}>BuketKu Official Store</Text>
                <Text style={styles.sellerBadge}>✓ Toko Resmi</Text>
                <Text style={styles.sellerStats}>4.9 ⭐ • 15rb+ produk • Jakarta</Text>
              </View>
              <TouchableOpacity style={styles.visitStoreButton}>
                <Text style={styles.visitStoreText}>Kunjungi Toko</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>+ Keranjang</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowText}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    fontSize: 24,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 30,
  },
  productImage: {
    width: 250,
    height: 250,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productEmoji: {
    fontSize: 80,
  },
  discountBadge: {
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  soldText: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  variantSection: {
    marginBottom: 20,
  },
  variantTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  variantContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  variantButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: 100,
  },
  selectedVariant: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  variantText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  selectedVariantText: {
    color: 'white',
  },
  variantPrice: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
  },
  descriptionSection: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  reviewSection: {
    marginBottom: 20,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  reviewRating: {
    marginBottom: 5,
  },
  reviewStars: {
    fontSize: 12,
  },
  reviewComment: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  seeAllReviews: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  seeAllReviewsText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '600',
  },
  sellerSection: {
    marginBottom: 20,
  },
  sellerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sellerAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#2E7D32',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellerAvatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  sellerBadge: {
    fontSize: 12,
    color: '#2E7D32',
    marginVertical: 2,
  },
  sellerStats: {
    fontSize: 12,
    color: '#666',
  },
  visitStoreButton: {
    borderWidth: 1,
    borderColor: '#2E7D32',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  visitStoreText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: '600',
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  quantityButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#333',
  },
  quantityText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyNowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
