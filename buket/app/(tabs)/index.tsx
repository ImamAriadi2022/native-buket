import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { products } from '@/data/products';
import { categories } from '@/utils/categories';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const featuredProducts = [
	products[6], // Artificial bouquet
	products[14], // Hijab bouquet
	products[11], // Cosmetic bouquet
	products[9], // Mini bouquet
	products[2], // Snack bouquet
];

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<ScrollView style={styles.content}>
				{/* Categories Section */}
				<View style={styles.section}>
					<ThemedText style={styles.sectionTitle}>Categories</ThemedText>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.categoriesContainer}>
						{categories.map((category) => (
							<TouchableOpacity
								key={category.id}
								style={styles.categoryCard}
								onPress={() => router.push(`/category/${category.id}`)}>
								<Image source={category.image} style={styles.categoryImage} />
								<ThemedText style={styles.categoryName}>{category.name}</ThemedText>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Featured Products */}
				<View style={styles.section}>
					<ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.productsContainer}>
						{featuredProducts.map((product) => (
							<TouchableOpacity
								key={product.id}
								style={styles.productCard}
								onPress={() => router.push(`/product/${product.id}`)}>
								<Image source={product.image} style={styles.productImage} />
								<View style={styles.productInfo}>
									<ThemedText style={styles.productName}>{product.name}</ThemedText>
									<ThemedText style={styles.productPrice}>
										Rp {product.price.toLocaleString()}
									</ThemedText>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Special Offers */}
				<View style={styles.section}>
					<ThemedText style={styles.sectionTitle}>Special Offers</ThemedText>
					<View style={styles.offersContainer}>
						<TouchableOpacity style={styles.offerCard}>
							<Image
								source={require('@/assets/images/products/wedding/wedding-1.jpg')}
								style={styles.offerImage}
							/>
							<View style={styles.offerOverlay}>
								<ThemedText style={styles.offerTitle}>Wedding Collection</ThemedText>
								<ThemedText style={styles.offerSubtitle}>Up to 20% Off</ThemedText>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={styles.offerCard}>
							<Image
								source={require('@/assets/images/products/graduation/graduation-1.jpg')}
								style={styles.offerImage}
							/>
							<View style={styles.offerOverlay}>
								<ThemedText style={styles.offerTitle}>Graduation Special</ThemedText>
								<ThemedText style={styles.offerSubtitle}>Starting at Rp 350.000</ThemedText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
	section: {
		padding: 16,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 12,
	},
	// Categories
	categoriesContainer: {
		paddingHorizontal: 8,
	},
	categoryCard: {
		alignItems: 'center',
		marginHorizontal: 8,
		width: 100,
	},
	categoryImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 8,
	},
	categoryName: {
		fontSize: 14,
		textAlign: 'center',
	},
	// Products
	productsContainer: {
		paddingHorizontal: 8,
	},
	productCard: {
		marginHorizontal: 8,
		width: 160,
		backgroundColor: '#fff',
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: Platform.select({ android: 4, ios: 0 }),
	},
	productImage: {
		width: 160,
		height: 160,
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
	},
	productInfo: {
		padding: 12,
	},
	productName: {
		fontSize: 14,
		fontWeight: '600',
		marginBottom: 4,
	},
	productPrice: {
		fontSize: 14,
		color: Colors.dark.text,
	},
	// Offers
	offersContainer: {
		flexDirection: 'column',
		gap: 16,
	},
	offerCard: {
		height: 160,
		borderRadius: 12,
		overflow: 'hidden',
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: Platform.select({ android: 4, ios: 0 }),
	},
	offerImage: {
		width: '100%',
		height: '100%',
	},
	offerOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	offerTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	offerSubtitle: {
		color: '#fff',
		fontSize: 14,
	},
});
