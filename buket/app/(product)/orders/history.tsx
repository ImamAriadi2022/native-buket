import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

type OrderStatus = 'Delivered' | 'Shipping' | 'Processing' | 'Cancelled';

interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: any;
}

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  total: string;
  trackingNumber: string;
}

const orders: Order[] = [
  {
    id: '1',
    date: '2025-07-08',
    status: 'Delivered',
    items: [
      {
        id: '1',
        name: 'Premium Flower Bouquet',
        price: 'Rp 250.000',
        quantity: 1,
        image: require('../../assets/images/buket bunga plastik/717e95ddf76b8651e2c4f4d94118b5aa.jpg'),
      },
    ],
    total: 'Rp 270.000',
    trackingNumber: 'JNE123456789',
  },
];

const StatusBadge: React.FC<{ status: OrderStatus }> = ({ status }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return '#4CAF50';
      case 'shipping':
        return '#2196F3';
      case 'processing':
        return '#FF9800';
      case 'cancelled':
        return '#f44336';
      default:
        return '#666';
    }
  };

  return (
    <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
      <ThemedText style={styles.statusText}>{status}</ThemedText>
    </View>
  );
};

export default function OrderHistoryScreen() {
  const renderOrderItem = (item: OrderItem) => (
    <View key={item.id} style={styles.orderItem}>
      <Image source={item.image} style={styles.itemImage} contentFit="cover" />
      <View style={styles.itemInfo}>
        <ThemedText style={styles.itemName}>{item.name}</ThemedText>
        <ThemedText style={styles.itemQuantity}>
          Quantity: {item.quantity}
        </ThemedText>
        <ThemedText style={styles.itemPrice}>{item.price}</ThemedText>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ThemedText style={styles.backButtonText}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Order History</ThemedText>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <ThemedText style={styles.orderDate}>{order.date}</ThemedText>
                <ThemedText style={styles.orderNumber}>
                  Order #{order.id}
                </ThemedText>
              </View>
              <StatusBadge status={order.status} />
            </View>

            {order.items.map(renderOrderItem)}

            <View style={styles.orderFooter}>
              <View style={styles.totalContainer}>
                <ThemedText style={styles.totalLabel}>Total Amount</ThemedText>
                <ThemedText style={styles.totalAmount}>{order.total}</ThemedText>
              </View>

              <View style={styles.trackingContainer}>
                <ThemedText style={styles.trackingLabel}>
                  Tracking Number:
                </ThemedText>
                <ThemedText style={styles.trackingNumber}>
                  {order.trackingNumber}
                </ThemedText>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.trackButton}>
                  <ThemedText style={styles.buttonText}>Track Order</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailsButton}>
                  <ThemedText style={styles.buttonTextSecondary}>
                    View Details
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  trackingContainer: {
    marginBottom: 16,
  },
  trackingLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  trackingNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackButton: {
    flex: 1,
    backgroundColor: Colors.light.tint,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  detailsButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#444',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
