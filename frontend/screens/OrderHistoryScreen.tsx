import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderHistoryScreen = () => {
  const orders = [
    {
      id: 'BK001',
      date: '15 Jan 2024',
      status: 'Dikirim',
      statusColor: Colors.secondary,
      items: [
        {
          name: 'Buket Wisuda Premium',
          image: require('@/assets/images/products/graduation/graduation-1.jpg'),
          quantity: 1,
          price: 150000,
        },
        {
          name: 'Kartu Ucapan',
          image: require('@/assets/images/products/graduation/graduation-2.jpg'),
          quantity: 1,
          price: 15000,
        },
      ],
      total: 165000,
      trackingNumber: 'BK123456789',
    },
    {
      id: 'BK002',
      date: '12 Jan 2024',
      status: 'Selesai',
      statusColor: Colors.primary,
      items: [
        {
          name: 'Buket Money Deluxe',
          image: require('@/assets/images/products/money/money-1.jpg'),
          quantity: 1,
          price: 200000,
        },
      ],
      total: 200000,
      trackingNumber: 'BK987654321',
    },
    {
      id: 'BK003',
      date: '10 Jan 2024',
      status: 'Dibatalkan',
      statusColor: '#FF5252',
      items: [
        {
          name: 'Buket Wedding Elegant',
          image: require('@/assets/images/products/wedding/wedding-1.jpg'),
          quantity: 1,
          price: 350000,
        },
      ],
      total: 350000,
      trackingNumber: null,
    },
  ];

  const getStatusStyle = (color: string) => ({
    backgroundColor: color,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Riwayat Pesanan</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderId}>#{order.id}</Text>
                <Text style={styles.orderDate}>{order.date}</Text>
              </View>
              <View style={getStatusStyle(order.statusColor)}>
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
            </View>

            <View style={styles.itemsContainer}>
              {order.items.map((item, index) => (
                <View key={index} style={styles.itemRow}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.itemPriceRow}>
                      <Text style={styles.itemQuantity}>{item.quantity}x</Text>
                      <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.orderFooter}>
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalAmount}>{formatPrice(order.total)}</Text>
              </View>
              <View style={styles.actionButtons}>
                {order.trackingNumber && (
                  <TouchableOpacity style={styles.trackButton}>
                    <Text style={styles.trackButtonText}>Lacak Paket</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.detailButton}>
                  <Text style={styles.detailButtonText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  filterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  itemsContainer: {
    padding: 15,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  itemPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemQuantity: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  orderFooter: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackButton: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  detailButton: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default OrderHistoryScreen;
