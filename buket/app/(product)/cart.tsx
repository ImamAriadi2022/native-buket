import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const cartItems = [
  {
    id: 1,
    name: 'Premium Flower Bouquet',
    price: 250000,
    quantity: 1,
    image: require('../../assets/images/buket bunga plastik/717e95ddf76b8651e2c4f4d94118b5aa.jpg'),
  },
  // Add more items...
];

export default function CartScreen() {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Shopping Cart</ThemedText>
      </View>

      <ScrollView style={styles.cartList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            
            <View style={styles.itemInfo}>
              <ThemedText style={styles.itemName}>{item.name}</ThemedText>
              <ThemedText style={styles.itemPrice}>
                Rp {item.price.toLocaleString()}
              </ThemedText>
              
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <ThemedText style={styles.quantityButtonText}>-</ThemedText>
                </TouchableOpacity>
                <ThemedText style={styles.quantity}>{item.quantity}</ThemedText>
                <TouchableOpacity style={styles.quantityButton}>
                  <ThemedText style={styles.quantityButtonText}>+</ThemedText>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.deleteButton}>
              <ThemedText style={styles.deleteButtonText}>×</ThemedText>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <ThemedText style={styles.summaryLabel}>Subtotal</ThemedText>
          <ThemedText style={styles.summaryValue}>
            Rp {totalPrice.toLocaleString()}
          </ThemedText>
        </View>
        <View style={styles.summaryRow}>
          <ThemedText style={styles.summaryLabel}>Shipping</ThemedText>
          <ThemedText style={styles.summaryValue}>Rp 20.000</ThemedText>
        </View>
        <View style={styles.separator} />
        <View style={styles.summaryRow}>
          <ThemedText style={styles.totalLabel}>Total</ThemedText>
          <ThemedText style={styles.totalValue}>
            Rp {(totalPrice + 20000).toLocaleString()}
          </ThemedText>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <ThemedText style={styles.checkoutButtonText}>Proceed to Checkout</ThemedText>
        </TouchableOpacity>
      </View>
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
  itemName: {
    fontSize: 16,
    marginBottom: 4,
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
});
