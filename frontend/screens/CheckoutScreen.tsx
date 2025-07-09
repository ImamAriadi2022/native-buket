import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CheckoutScreen = ({ route, navigation }: any) => {
  const { items, total } = route.params;
  const [selectedPayment, setSelectedPayment] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const paymentMethods = [
    { id: 'bca', name: 'Transfer BCA', fee: 0 },
    { id: 'mandiri', name: 'Transfer Mandiri', fee: 0 },
    { id: 'dana', name: 'DANA', fee: 2500 },
    { id: 'gopay', name: 'GoPay', fee: 2500 },
    { id: 'cod', name: 'Bayar di Tempat (COD)', fee: 5000 },
  ];

  const shippingMethods = [
    { id: 'reguler', name: 'Reguler (3-5 hari)', fee: 15000 },
    { id: 'express', name: 'Express (1-2 hari)', fee: 25000 },
    { id: 'same_day', name: 'Same Day', fee: 35000 },
  ];

  const getSelectedPaymentFee = () => {
    const payment = paymentMethods.find(p => p.id === selectedPayment);
    return payment ? payment.fee : 0;
  };

  const getSelectedShippingFee = () => {
    const shipping = shippingMethods.find(s => s.id === selectedShipping);
    return shipping ? shipping.fee : 0;
  };

  const getFinalTotal = () => {
    return total + getSelectedPaymentFee() + getSelectedShippingFee();
  };

  const handleProcessPayment = () => {
    if (!selectedPayment || !selectedShipping || !address || !phone) {
      Alert.alert('Data Tidak Lengkap', 'Mohon lengkapi semua data yang diperlukan');
      return;
    }

    Alert.alert(
      'Konfirmasi Pembayaran',
      `Total: Rp ${getFinalTotal().toLocaleString()}\n\nApakah Anda yakin ingin melanjutkan?`,
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Ya, Bayar', 
          onPress: () => {
            Alert.alert(
              'Pembayaran Berhasil!',
              'Terima kasih! Pesanan Anda sedang diproses.',
              [{ text: 'OK', onPress: () => navigation.navigate('MainTabs') }]
            );
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Order Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ringkasan Pesanan</Text>
          {items.map((item: any) => (
            <View key={item.id} style={styles.orderItem}>
              <Image source={item.image} style={styles.orderItemImage} />
              <View style={styles.orderItemDetails}>
                <Text style={styles.orderItemName}>{item.name}</Text>
                <Text style={styles.orderItemPrice}>
                  {item.quantity}x Rp {item.price.toLocaleString()}
                </Text>
              </View>
              <Text style={styles.orderItemTotal}>
                Rp {(item.price * item.quantity).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* Shipping Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukkan alamat lengkap"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nomor telepon"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Shipping Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Metode Pengiriman</Text>
          {shippingMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodOption,
                selectedShipping === method.id && styles.selectedMethod
              ]}
              onPress={() => setSelectedShipping(method.id)}
            >
              <View style={styles.methodInfo}>
                <Text style={styles.methodName}>{method.name}</Text>
                <Text style={styles.methodFee}>Rp {method.fee.toLocaleString()}</Text>
              </View>
              <View style={[
                styles.radio,
                selectedShipping === method.id && styles.radioSelected
              ]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
          {paymentMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodOption,
                selectedPayment === method.id && styles.selectedMethod
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <View style={styles.methodInfo}>
                <Text style={styles.methodName}>{method.name}</Text>
                {method.fee > 0 && (
                  <Text style={styles.methodFee}>+Rp {method.fee.toLocaleString()}</Text>
                )}
              </View>
              <View style={[
                styles.radio,
                selectedPayment === method.id && styles.radioSelected
              ]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Price Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rincian Harga</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Subtotal Produk</Text>
            <Text style={styles.priceValue}>Rp {total.toLocaleString()}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Biaya Pengiriman</Text>
            <Text style={styles.priceValue}>Rp {getSelectedShippingFee().toLocaleString()}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Biaya Pembayaran</Text>
            <Text style={styles.priceValue}>Rp {getSelectedPaymentFee().toLocaleString()}</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>Rp {getFinalTotal().toLocaleString()}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.payButton} onPress={handleProcessPayment}>
          <Text style={styles.payButtonText}>
            Bayar Rp {getFinalTotal().toLocaleString()}
          </Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderItemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  orderItemDetails: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  orderItemPrice: {
    fontSize: 12,
    color: '#666',
  },
  orderItemTotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  },
  methodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedMethod: {
    borderColor: '#FF6B6B',
    backgroundColor: '#fff5f5',
  },
  methodInfo: {
    flex: 1,
  },
  methodName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  methodFee: {
    fontSize: 12,
    color: '#666',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  radioSelected: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FF6B6B',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 14,
    color: '#333',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 8,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  payButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
