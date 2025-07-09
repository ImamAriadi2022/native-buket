import { Image } from 'expo-image';
import React from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

const categories = [
	{
		id: 1,
		name: 'Buket Bunga',
		image: require('../../assets/images/buket bunga plastik/5ce2f301eddc6162ae6b3e6119c51b5c-removebg-preview.png'),
	},
	{
		id: 2,
		name: 'Buket Hijab',
		image: require('../../assets/images/buket hijab/8c06ccf6512d633813849201987e05fb-removebg-preview.png'),
	},
	{
		id: 3,
		name: 'Buket Kosmetik',
		image: require('../../assets/images/buket kosmetik - skincare/6b17240d3e7d2c3aef695f2677c304fa-removebg-preview.png'),
	},
	{
		id: 4,
		name: 'Buket Mini',
		image: require('../../assets/images/buket mini/fc46852efcab79ac5af7eed359f81df4-removebg-preview.png'),
	},
	{
		id: 5,
		name: 'Buket Snack',
		image: require('../../assets/images/buket snack/6aa4e37ce964cf12a075ed8606645404-removebg-preview.png'),
	},
];

const featuredProducts = [
	{
		id: '1',
		name: 'Premium Flower Bouquet',
		price: 'Rp 250.000',
		image: require('../../assets/images/buket bunga plastik/717e95ddf76b8651e2c4f4d94118b5aa.jpg'),
	},
	{
		id: '2',
		name: 'Elegant Hijab Set',
		price: 'Rp 180.000',
		image: require('../../assets/images/buket hijab/IMG-20250707-WA0020.jpg'),
	},
	{
		id: '3',
		name: 'Skincare Package',
		price: 'Rp 350.000',
		image: require('../../assets/images/buket kosmetik - skincare/871c3b10ad835fa03c931e2ee1b17c63.jpg'),
	},
	{
		id: '4',
		name: 'Mini Surprise Box',
		price: 'Rp 150.000',
		image: require('../../assets/images/buket mini/IMG-20250707-WA0023.jpg'),
	},
] as const;

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.headerTop}>
					<View>
						<ThemedText style={styles.welcomeText}>Welcome to</ThemedText>            <ThemedText style={styles.headerTitle}>Florist Saa'</ThemedText>
					</View>
					<TouchableOpacity onPress={() => {}} style={styles.cartButton}>
						<IconSymbol name="cart.fill" size={24} color={Colors.light.tint} />
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.searchBar}>
					<IconSymbol name="magnifyingglass" size={20} color="#666" style={styles.searchIcon} />
					<ThemedText style={styles.searchText}>Search products...</ThemedText>
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{/* Categories */}
				<View style={styles.sectionContainer}>
					<View style={styles.sectionHeader}>
						<ThemedText style={styles.sectionTitle}>Categories</ThemedText>
						<TouchableOpacity>
							<ThemedText style={styles.seeAllButton}>See All</ThemedText>
						</TouchableOpacity>
					</View>

					<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
						{categories.map((category) => (
							<TouchableOpacity key={category.id} style={styles.categoryItem}>
								<Image source={category.image} style={styles.categoryImage} contentFit="contain" />
								<ThemedText style={styles.categoryName}>{category.name}</ThemedText>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Special Offers */}
				<View style={styles.sectionContainer}>
					<TouchableOpacity style={styles.specialOfferBanner}>
						<Image
							source={require('../../assets/images/buket wedding- anniversary/IMG-20250707-WA0030.jpg')}
							style={styles.specialOfferImage}
							contentFit="cover"
						/>
						<View style={styles.specialOfferOverlay}>
							<ThemedText style={styles.specialOfferTitle}>Special Wedding Offer</ThemedText>
							<ThemedText style={styles.specialOfferSubtitle}>Get 20% off on wedding sets</ThemedText>
						</View>
					</TouchableOpacity>
				</View>

				{/* Featured Products */}
				<View style={styles.sectionContainer}>
					<View style={styles.sectionHeader}>
						<ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>
						<TouchableOpacity>
							<ThemedText style={styles.seeAllButton}>See All</ThemedText>
						</TouchableOpacity>
					</View>

					<View style={styles.productsGrid}>
						{featuredProducts.map((product) => (
							<TouchableOpacity key={product.id} style={styles.productCard}>
								<Image source={product.image} style={styles.productImage} contentFit="cover" />
								<View style={styles.productInfo}>
									<ThemedText style={styles.productName} numberOfLines={2}>
										{product.name}
									</ThemedText>
									<ThemedText style={styles.productPrice}>{product.price}</ThemedText>
								</View>
							</TouchableOpacity>
						))}
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
	header: {
		padding: 16,
		paddingTop: Platform.OS === 'ios' ? 60 : 16,
		backgroundColor: Colors.light.background,
	},
	headerTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	welcomeText: {
		fontSize: 16,
		color: '#666',
	},
	headerTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	cartButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#f0f0f0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchBar: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		padding: 12,
		borderRadius: 8,
	},
	searchIcon: {
		marginRight: 8,
	},
	searchText: {
		color: '#666',
	},
	content: {
		flex: 1,
	},
	sectionContainer: {
		marginBottom: 24,
	},
	sectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		marginBottom: 12,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	seeAllButton: {
		color: Colors.light.tint,
		fontSize: 14,
	},
	categoriesList: {
		paddingHorizontal: 16,
	},
	categoryItem: {
		alignItems: 'center',
		marginRight: 20,
		width: 80,
	},
	categoryImage: {
		width: 60,
		height: 60,
		marginBottom: 8,
	},
	categoryName: {
		fontSize: 12,
		textAlign: 'center',
	},
	specialOfferBanner: {
		margin: 16,
		borderRadius: 12,
		overflow: 'hidden',
		height: 160,
	},
	specialOfferImage: {
		width: '100%',
		height: '100%',
	},
	specialOfferOverlay: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	specialOfferTitle: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	specialOfferSubtitle: {
		color: '#fff',
		fontSize: 14,
		opacity: 0.8,
	},
	productsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 8,
	},
	productCard: {
		width: '45%',
		backgroundColor: '#fff',
		margin: 8,
		borderRadius: 8,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	productImage: {
		width: '100%',
		height: 160,
	},
	productInfo: {
		padding: 12,
	},
	productName: {
		fontSize: 14,
		marginBottom: 4,
		height: 40,
	},
	productPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.light.tint,
	},
});
