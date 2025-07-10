import { BouquetCategories } from '@/assets';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface FlashSaleProduct {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  stock: number;
  maxStock: number;
  image: any;
  sold: number;
  rating: number;
}

const FlashSaleScreen = ({ navigation }: any) => {
  const [timeLeft, setTimeLeft] = useState('01:23:45');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<FlashSaleProduct | null>(null);

  const flashSaleProducts: FlashSaleProduct[] = [
    {
      id: 1,
      name: 'Buket Wisuda Premium',
      originalPrice: 250000,
      salePrice: 175000,
      discount: 30,
      stock: 15,
      maxStock: 50,
      image: BouquetCategories[0]?.image || require('@/assets/images/products/graduation/graduation-1.jpg'),
      sold: 35,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Buket Wedding Elegant',
      originalPrice: 450000,
      salePrice: 315000,
      discount: 30,
      stock: 8,
      maxStock: 20,
      image: BouquetCategories[1]?.image || require('@/assets/images/products/wedding/wedding-1.jpg'),
      sold: 12,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Buket Money Deluxe',
      originalPrice: 300000,
      salePrice: 225000,
      discount: 25,
      stock: 22,
      maxStock: 40,
      image: BouquetCategories[2]?.image || require('@/assets/images/products/money/money-1.jpg'),
      sold: 18,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Buket Artificial Premium',
      originalPrice: 180000,
      salePrice: 126000,
      discount: 30,
      stock: 5,
      maxStock: 25,
      image: BouquetCategories[4]?.image || require('@/assets/images/products/artificial/artificial-1.jpg'),
      sold: 20,
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Buket Snack Combo',
      originalPrice: 150000,
      salePrice: 120000,
      discount: 20,
      stock: 30,
      maxStock: 50,
      image: BouquetCategories[6]?.image || require('@/assets/images/products/snack/snack-1.jpg'),
      sold: 20,
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Buket Kosmetik Set',
      originalPrice: 200000,
      salePrice: 140000,
      discount: 30,
      stock: 12,
      maxStock: 30,
      image: BouquetCategories[5]?.image || require('@/assets/images/products/cosmetic/cosmetic-1.jpg'),
      sold: 18,
      rating: 4.8,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const openProductModal = (product: FlashSaleProduct) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const addToCart = (product: FlashSaleProduct) => {
    setShowModal(false);
    // Simulate adding to cart
    alert(`${product.name} telah ditambahkan ke keranjang!`);
  };

  const buyNow = (product: FlashSaleProduct) => {
    setShowModal(false);
    navigation.navigate('Checkout', { product });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Kembali</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>⚡ Flash Sale</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>Berakhir dalam:</Text>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{timeLeft}</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.productsContainer}>
        {flashSaleProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productCard}
            onPress={() => openProductModal(product)}
          >
            <View style={styles.productImageContainer}>
              <Image source={product.image} style={styles.productImage} />
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{product.discount}%</Text>
              </View>
            </View>
            
            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>
              
              <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>{formatPrice(product.originalPrice)}</Text>
                <Text style={styles.salePrice}>{formatPrice(product.salePrice)}</Text>
              </View>
              
              <View style={styles.stockContainer}>
                <View style={styles.stockBar}>
                  <View
                    style={[
                      styles.stockProgress,
                      { width: `${(product.stock / product.maxStock) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.stockText}>Tersisa {product.stock}</Text>
              </View>
              
              <View style={styles.productMeta}>
                <Text style={styles.rating}>⭐ {product.rating}</Text>
                <Text style={styles.sold}>{product.sold} terjual</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Modal */}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedProduct && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Detail Produk</Text>
                  <TouchableOpacity onPress={() => setShowModal(false)}>
                    <Text style={styles.closeButton}>✕</Text>
                  </TouchableOpacity>
                </View>
                
                <Image source={selectedProduct.image} style={styles.modalImage} />
                
                <View style={styles.modalContent}>
                  <Text style={styles.modalProductName}>{selectedProduct.name}</Text>
                  
                  <View style={styles.modalPriceContainer}>
                    <Text style={styles.modalOriginalPrice}>
                      {formatPrice(selectedProduct.originalPrice)}
                    </Text>
                    <Text style={styles.modalSalePrice}>
                      {formatPrice(selectedProduct.salePrice)}
                    </Text>
                    <Text style={styles.modalDiscount}>
                      Hemat {selectedProduct.discount}%
                    </Text>
                  </View>
                  
                  <View style={styles.modalStockContainer}>
                    <Text style={styles.modalStockText}>
                      Stok tersisa: {selectedProduct.stock} buah
                    </Text>
                    <View style={styles.modalStockBar}>
                      <View
                        style={[
                          styles.modalStockProgress,
                          { width: `${(selectedProduct.stock / selectedProduct.maxStock) * 100}%` },
                        ]}
                      />
                    </View>
                  </View>
                  
                  <View style={styles.modalActions}>
                    <TouchableOpacity
                      style={styles.addToCartButton}
                      onPress={() => addToCart(selectedProduct)}
                    >
                      <Text style={styles.addToCartText}>+ Keranjang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buyNowButton}
                      onPress={() => buyNow(selectedProduct)}
                    >
                      <Text style={styles.buyNowText}>Beli Sekarang</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  backButton: {
    fontSize: 16,
    color: Colors.primary,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cartIcon: {
    fontSize: 24,
  },
  timerContainer: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  timerBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  scrollContainer: {
    flex: 1,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  priceContainer: {
    marginBottom: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  stockContainer: {
    marginBottom: 8,
  },
  stockBar: {
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    marginBottom: 4,
  },
  stockProgress: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 2,
  },
  stockText: {
    fontSize: 12,
    color: '#666',
  },
  productMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
  sold: {
    fontSize: 12,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 24,
    color: '#999',
  },
  modalImage: {
    width: '100%',
    height: 200,
  },
  modalContent: {
    padding: 20,
  },
  modalProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  modalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  modalOriginalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  modalSalePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginRight: 10,
  },
  modalDiscount: {
    backgroundColor: '#FF6B35',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  modalStockContainer: {
    marginBottom: 20,
  },
  modalStockText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  modalStockBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  modalStockProgress: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlashSaleScreen;
