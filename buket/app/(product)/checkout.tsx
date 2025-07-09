import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function CheckoutScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Checkout</ThemedText>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {/* Shipping Address */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Shipping Address</ThemedText>
            <TouchableOpacity>
              <ThemedText style={styles.changeButton}>Change</ThemedText>
            </TouchableOpacity>
          </View>
          <View style={styles.addressCard}>
            <ThemedText style={styles.addressName}>John Doe</ThemedText>
            <ThemedText style={styles.addressPhone}>+62 812-3456-7890</ThemedText>
            <ThemedText style={styles.addressText}>
              Jl. Sudirman No. 123{'\n'}
              Jakarta Pusat, DKI Jakarta 10220{'\n'}
              Indonesia
            </ThemedText>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Order Summary</ThemedText>
          <View style={styles.orderItem}>
            <ThemedText style={styles.orderItemName}>Premium Flower Bouquet</ThemedText>
            <ThemedText style={styles.orderItemQuantity}>1x</ThemedText>
            <ThemedText style={styles.orderItemPrice}>Rp 250.000</ThemedText>
          </View>
        </View>

        {/* Shipping Method */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Shipping Method</ThemedText>
          <TouchableOpacity style={styles.shippingOption}>
            <View style={styles.radioButton}>
              <View style={styles.radioButtonInner} />
            </View>
            <View style={styles.shippingInfo}>
              <ThemedText style={styles.shippingName}>JNE Regular</ThemedText>
              <ThemedText style={styles.shippingPrice}>Rp 20.000</ThemedText>
            </View>
            <ThemedText style={styles.estimatedTime}>2-3 days</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Payment Method</ThemedText>
          <TouchableOpacity style={styles.paymentOption}>
            <View style={styles.radioButton}>
              <View style={styles.radioButtonInner} />
            </View>
            <ThemedText style={styles.paymentName}>Bank Transfer</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Order Total */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <View style={styles.totalRow}>
            <ThemedText style={styles.totalLabel}>Subtotal</ThemedText>
            <ThemedText style={styles.totalValue}>Rp 250.000</ThemedText>
          </View>
          <View style={styles.totalRow}>
            <ThemedText style={styles.totalLabel}>Shipping</ThemedText>
            <ThemedText style={styles.totalValue}>Rp 20.000</ThemedText>
          </View>
          <View style={[styles.totalRow, styles.grandTotal]}>
            <ThemedText style={styles.grandTotalLabel}>Total</ThemedText>
            <ThemedText style={styles.grandTotalValue}>Rp 270.000</ThemedText>
          </View>
        </View>
        
        <TouchableOpacity style={styles.placeOrderButton}>
          <ThemedText style={styles.placeOrderButtonText}>Place Order</ThemedText>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  changeButton: {
    color: Colors.light.tint,
  },
  addressCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  addressPhone: {
    marginBottom: 8,
    color: '#666',
  },
  addressText: {
    lineHeight: 20,
    color: '#444',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderItemName: {
    flex: 1,
  },
  orderItemQuantity: {
    marginHorizontal: 16,
    color: '#666',
  },
  orderItemPrice: {
    fontWeight: 'bold',
  },
  shippingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.tint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.tint,
  },
  shippingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  shippingName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shippingPrice: {
    color: '#666',
  },
  estimatedTime: {
    color: Colors.light.tint,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
  },
  paymentName: {
    marginLeft: 12,
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalContainer: {
    marginBottom: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    color: '#666',
  },
  totalValue: {
    fontWeight: 'bold',
  },
  grandTotal: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  grandTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  placeOrderButton: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
