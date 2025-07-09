import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { CartItem } from '@/types';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

// Initial cart items with properly aliased image paths
const initialCartItems: CartItem[] = [
  { ...products[0], quantity: 1 },  // Money bouquet
  { ...products[2], quantity: 2 },  // Snack bouquet
  { ...products[4], quantity: 1 },  // Fresh flowers
  { ...products[12], quantity: 1 }, // Graduation bouquet
];

const getCategoryLabel = (category: string): string => {
  switch (category) {
    case 'money': return 'Bouquet Uang';
    case 'snack': return 'Bouquet Snack';
    case 'fresh': return 'Bouquet Bunga Segar';
    case 'artificial': return 'Bouquet Bunga Artificial';
    case 'mini': return 'Bouquet Kado Mini';
    case 'cosmetic': return 'Bouquet Kosmetik';
    case 'graduation': return 'Bouquet Wisuda';
    case 'hijab': return 'Bouquet Hijab';
    default: return 'Other';
  }
};

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + (increment ? 1 : -1)) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => setCartItems(items => items.filter(item => item.id !== id))
        }
      ]
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 20000;
  const grandTotal = totalPrice + shippingCost;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert("Empty Cart", "Please add items to your cart before checking out");
      return;
    }
    router.push("/checkout");
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Shopping Cart</ThemedText>
        <ThemedText style={styles.itemCount}>{cartItems.length} items</ThemedText>
      </View>

      <ScrollView style={styles.cartList}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCart}>
            <ThemedText style={styles.emptyCartText}>Your cart is empty</ThemedText>
            <TouchableOpacity 
              style={styles.continueShopping}
              onPress={() => router.back()}>
              <ThemedText style={styles.continueShoppingText}>Continue Shopping</ThemedText>
            </TouchableOpacity>
          </View>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              
              <View style={styles.itemInfo}>
                <ThemedText style={styles.categoryLabel}>
                  {getCategoryLabel(item.category)}
                </ThemedText>
                <ThemedText style={styles.itemName}>{item.name}</ThemedText>
                <ThemedText style={styles.itemPrice}>
                  Rp {item.price.toLocaleString()}
                </ThemedText>
                
                <View style={styles.quantityContainer}>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, false)}>
                    <ThemedText style={styles.quantityButtonText}>-</ThemedText>
                  </TouchableOpacity>
                  <ThemedText style={styles.quantity}>{item.quantity}</ThemedText>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, true)}>
                    <ThemedText style={styles.quantityButtonText}>+</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => removeItem(item.id)}>
                <ThemedText style={styles.deleteButtonText}>×</ThemedText>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Subtotal</ThemedText>
            <ThemedText style={styles.summaryValue}>
              Rp {totalPrice.toLocaleString()}
            </ThemedText>
          </View>
          <View style={styles.summaryRow}>
            <ThemedText style={styles.summaryLabel}>Shipping</ThemedText>
            <ThemedText style={styles.summaryValue}>Rp {shippingCost.toLocaleString()}</ThemedText>
          </View>
          <View style={styles.separator} />
          <View style={styles.summaryRow}>
            <ThemedText style={styles.totalLabel}>Total</ThemedText>
            <ThemedText style={styles.totalValue}>
              Rp {grandTotal.toLocaleString()}
            </ThemedText>
          </View>

          <TouchableOpacity 
            style={styles.checkoutButton}
            onPress={handleCheckout}>
            <ThemedText style={styles.checkoutButtonText}>Proceed to Checkout</ThemedText>
          </TouchableOpacity>
        </View>
      )}
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
  itemCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  categoryLabel: {
    fontSize: 12,
    color: Colors.light.tint,
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 16,
    fontSize: 16,
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 24,
    color: '#666',
  },
  summary: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  checkoutButton: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  continueShopping: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.light.tint,
  },
  continueShoppingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
