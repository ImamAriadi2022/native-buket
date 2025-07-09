import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const paymentMethods = [
  { id: 1, name: 'Bank Transfer - BCA', icon: '🏦' },
  { id: 2, name: 'Bank Transfer - Mandiri', icon: '🏦' },
  { id: 3, name: 'DANA', icon: '💳' },
  { id: 4, name: 'OVO', icon: '💳' },
  { id: 5, name: 'GoPay', icon: '💳' },
];

const shippingMethods = [
  { id: 1, name: 'JNE Regular', price: 20000, estimate: '2-3 days' },
  { id: 2, name: 'JNE Express', price: 35000, estimate: '1-2 days' },
  { id: 3, name: 'Instant (GoSend)', price: 50000, estimate: '1-3 hours' },
];

export default function CheckoutScreen() {
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  const [selectedShipping, setSelectedShipping] = useState(shippingMethods[0].id);

  const handlePlaceOrder = () => {
    Alert.alert(
      "Order Placed!",
      "Thank you for your order. We'll process it right away!",
      [
        {
          text: "OK",
          onPress: () => router.push("/"),
        }
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}>
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
            <ThemedText style={styles.addressName}>Sarah Johnson</ThemedText>
            <ThemedText style={styles.addressPhone}>+62 812-3456-7890</ThemedText>
            <ThemedText style={styles.addressText}>
              Jl. Sudirman No. 123{'\n'}
              Jakarta Pusat, DKI Jakarta 10220{'\n'}
              Indonesia
            </ThemedText>
          </View>
        </View>

        {/* Shipping Method */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Shipping Method</ThemedText>
          {shippingMethods.map((method) => (
            <TouchableOpacity 
              key={method.id}
              style={[
                styles.optionCard,
                selectedShipping === method.id && styles.selectedOption
              ]}
              onPress={() => setSelectedShipping(method.id)}>
              <View style={styles.optionContent}>
                <View style={styles.optionMain}>
                  <ThemedText style={styles.optionName}>{method.name}</ThemedText>
                  <ThemedText style={styles.optionEstimate}>{method.estimate}</ThemedText>
                </View>
                <ThemedText style={styles.optionPrice}>
                  Rp {method.price.toLocaleString()}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Payment Method</ThemedText>
          {paymentMethods.map((method) => (
            <TouchableOpacity 
              key={method.id}
              style={[
                styles.optionCard,
                selectedPayment === method.id && styles.selectedOption
              ]}
              onPress={() => setSelectedPayment(method.id)}>
              <View style={styles.optionContent}>
                <View style={styles.optionMain}>
                  <ThemedText style={styles.optionIcon}>{method.icon}</ThemedText>
                  <ThemedText style={styles.optionName}>{method.name}</ThemedText>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Order Summary</ThemedText>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <ThemedText style={styles.summaryLabel}>Subtotal</ThemedText>
              <ThemedText style={styles.summaryValue}>Rp 1.150.000</ThemedText>
            </View>
            <View style={styles.summaryRow}>
              <ThemedText style={styles.summaryLabel}>Shipping</ThemedText>
              <ThemedText style={styles.summaryValue}>
                Rp {shippingMethods.find(m => m.id === selectedShipping)?.price.toLocaleString()}
              </ThemedText>
            </View>
            <View style={styles.separator} />
            <View style={styles.summaryRow}>
              <ThemedText style={styles.totalLabel}>Total</ThemedText>
              <ThemedText style={styles.totalValue}>Rp 1.170.000</ThemedText>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}>
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
    color: Colors.light.tint,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  changeButton: {
    color: Colors.light.tint,
    fontSize: 14,
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
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  addressText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  optionCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#e8f0fe',
    borderColor: Colors.light.tint,
    borderWidth: 1,
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  optionName: {
    fontSize: 16,
    flex: 1,
  },
  optionEstimate: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  optionPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.tint,
  },
  summaryCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
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
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
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
