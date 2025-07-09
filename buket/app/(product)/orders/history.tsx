import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { CartItem, Order, OrderStatus } from '@/types';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const orders: Order[] = [
	{
		id: '1',
		date: '2025-07-08',
		status: 'Delivered',
		items: [{ ...products[6], quantity: 1 } as CartItem],
		totalAmount: 270000,
		trackingNumber: 'JNE123456789',
	},
	{
		id: '2',
		date: '2025-07-07',
		status: 'Shipping',
		items: [
			{ ...products[2], quantity: 2 } as CartItem,
			{ ...products[4], quantity: 1 } as CartItem,
		],
		totalAmount: 550000,
		trackingNumber: 'JNE987654321',
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
				return '#F44336';
			default:
				return '#666';
		}
	};

	return (
		<View
			style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}
		>
			<ThemedText style={styles.statusText}>{status}</ThemedText>
		</View>
	);
};

export default function OrderHistoryScreen() {
	return (
		<ThemedView style={styles.container}>
			<View style={styles.header}>
				<ThemedText style={styles.headerTitle}>Order History</ThemedText>
			</View>

			<ScrollView style={styles.ordersList}>
				{orders.map((order) => (
					<TouchableOpacity
						key={order.id}
						style={styles.orderCard}
						onPress={() => router.push(`/orders/${order.id}`)}
					>
						<View style={styles.orderHeader}>
							<View>
								<ThemedText style={styles.orderId}>
									Order #{order.id}
								</ThemedText>
								<ThemedText style={styles.orderDate}>
									{order.date}
								</ThemedText>
							</View>
							<StatusBadge status={order.status} />
						</View>

						<View style={styles.itemsList}>
							{order.items.map((item) => (
								<View key={item.id} style={styles.orderItem}>
									<Image
										source={item.image}
										style={styles.itemImage}
									/>
									<View style={styles.itemInfo}>
										<ThemedText style={styles.itemName}>
											{item.name}
										</ThemedText>
										<ThemedText style={styles.itemQuantity}>
											{item.quantity}x Rp{' '}
											{item.price.toLocaleString()}
										</ThemedText>
									</View>
								</View>
							))}
						</View>

						<View style={styles.orderFooter}>
							<View>
								<ThemedText style={styles.trackingLabel}>
									Tracking Number:
								</ThemedText>
								<ThemedText style={styles.trackingNumber}>
									{order.trackingNumber}
								</ThemedText>
							</View>
							<ThemedText style={styles.totalAmount}>
								Rp {order.totalAmount.toLocaleString()}
							</ThemedText>
						</View>
					</TouchableOpacity>
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
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	ordersList: {
		flex: 1,
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
	orderId: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	orderDate: {
		fontSize: 14,
		color: '#666',
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
	itemsList: {
		marginBottom: 16,
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
	orderFooter: {
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
		paddingTop: 16,
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
	totalAmount: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.light.tint,
	},
});
