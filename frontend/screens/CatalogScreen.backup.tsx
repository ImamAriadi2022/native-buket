import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HijabCategories } from '../assets';

const CatalogScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const hijabCategories = HijabCategories;
    { 
      id: 1, 
      name: 'Hijab Segi Empat', 
      screen: 'SegiEmpat', 
      color: '#FFE5E5', 
      emoji: '🔸',
      image: require('../assets/Segi empat/jilbab segi empat bela square.jpeg'),
      price: 'Rp 89.000',
      description: 'Hijab segi empat premium dengan bahan berkualitas'
    },
    { 
      id: 2, 
      name: 'Hijab Pashmina Kaos', 
      screen: 'PashminaKaos', 
      color: '#E5F3FF', 
      emoji: '🧶',
      image: require('../assets/Pashmina kaos/eadd2ca7-08dd-4ec1-bede-0312a4a470a1.jpeg'),
      price: 'Rp 65.000',
      description: 'Pashmina kaos yang nyaman dan mudah diatur'
    },
    { 
      id: 3, 
      name: 'Hijab Sport', 
      screen: 'Sport', 
      color: '#FFF0E5', 
      emoji: '⚽',
      image: require('../assets/Sport/fc77081c-5aa2-4714-82ad-931dd588051d.jpeg'),
      price: 'Rp 75.000',
      description: 'Hijab sport untuk aktivitas olahraga'
    },
    { 
      id: 4, 
      name: 'Hijab Bergo', 
      screen: 'Bergo', 
      color: '#F0FFE5', 
      emoji: '🧕',
      image: require('../assets/Bergo/Hijab Instan Bergo.jpeg'),
      price: 'Rp 55.000',
      description: 'Hijab bergo instant yang praktis'
    },
    { 
      id: 5, 
      name: 'Hijab Syar\'i', 
      screen: 'Syari', 
      color: '#F5E5FF', 
      emoji: '🕌',
      image: require('../assets/Syar_i/SQUARE HIJAB SYAR_I poly cotton_ Polycotton square hijab _ square hijab _ Hijab long square sya_i_ plain hijab _ Plain square hijab _.jpeg'),
      price: 'Rp 95.000',
      description: 'Hijab syar\'i dengan coverage maksimal'
    },
    { 
      id: 6, 
      name: 'Hijab Khimar', 
      screen: 'Khimar', 
      color: '#FFE5F0', 
      emoji: '👑',
      image: require('../assets/icon.png'),
      price: 'Rp 85.000',
      description: 'Hijab khimar elegan dan sopan'
    },
    { 
      id: 7, 
      name: 'Hijab Turban', 
      screen: 'Turban', 
      color: '#E5FFFF', 
      emoji: '👒',
      image: require('../assets/Turban/585cae96-c781-4287-abb3-c88fd7819448.jpeg'),
      price: 'Rp 70.000',
      description: 'Hijab turban modern dan stylish'
    },
    { 
      id: 8, 
      name: 'Hijab Hoodie', 
      screen: 'Hoodie', 
      color: '#FFFFE5', 
      emoji: '🧥',
      image: require('../assets/Hoodie/Modefa Instant Criss-Cross Hoodie Jersey Hijab – Brown.jpeg'),
      price: 'Rp 125.000',
      description: 'Hijab hoodie untuk gaya kasual'
    },
    { 
      id: 9, 
      name: 'Hijab Layer', 
      screen: 'Layer', 
      color: '#E5FFE5', 
      emoji: '📚',
      image: require('../assets/Layer/Babesandbasicloop instant shawl by Naelofarhijab.jpeg'),
      price: 'Rp 80.000',
      description: 'Hijab layer dengan tampilan berlapis'
    },
    { 
      id: 10, 
      name: 'Pashmina Voal', 
      screen: 'PashminaVoal', 
      color: '#FFE5E5', 
      emoji: '🌸',
      image: require('../assets/Pashmina voal/Nyari pashmina yang mudah dibentuk & bahannya halus + gak bikin gerah_ _Kheva shawl jawabannya 😍__New! Kheva Shawl - Rp 65_000_Detail cek @khevamauzakatalog __#khevashawlkhevamauza.jpeg'),
      price: 'Rp 65.000',
      description: 'Pashmina voal halus dan adem'
    },
    { 
      id: 11, 
      name: 'Pashmina Ceruty', 
      screen: 'PashminaCeruty', 
      color: '#E5E5FF', 
      emoji: '✨',
      image: require('../assets/Ceruty/6faebe3d-6c35-4876-808b-d259a91aa827.jpeg'),
      price: 'Rp 70.000',
      description: 'Pashmina ceruty dengan tekstur premium'
    },
    { 
      id: 12, 
      name: 'Pashmina Crinkle', 
      screen: 'Crinkle', 
      color: '#F0E5FF', 
      emoji: '〰️',
      image: require('../assets/Crinkle/f8f3e621-9039-4c17-9a0a-0145db906996.jpeg'),
      price: 'Rp 60.000',
      description: 'Pashmina crinkle dengan efek kerut alami'
    },
    { 
      id: 13, 
      name: 'Pashmina Satin', 
      screen: 'Satin', 
      color: '#E5FFF0', 
      emoji: '💎',
      image: require('../assets/Satin/dfaf7af2-2dcf-4942-a3f2-9c5683f83d57.jpeg'),
      price: 'Rp 85.000',
      description: 'Pashmina satin dengan kilau elegan'
    },
    { 
      id: 14, 
      name: 'Pashmina Plisket', 
      screen: 'Plisket', 
      color: '#FFF5E5', 
      emoji: '📄',
      image: require('../assets/Plisket/Pashmina ceruty baby doll Hijab Pashmina Plisket Pleats Ceruti Hijab.jpeg'),
      price: 'Rp 75.000',
      description: 'Pashmina plisket dengan detail pleats'
    },
  ];

  const renderHijabItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => {
        setSelectedCategory(item.id);
        navigation.navigate(item.screen);
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.categoryImage} />
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.addToCartText}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.categoryPrice}>{item.price}</Text>
          <Text style={styles.categoryEmoji}>{item.emoji}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Katalog Hijab</Text>
          <Text style={styles.headerSubtitle}>Koleksi hijab terlengkap untuk gaya Anda</Text>
        </View>
        <TouchableOpacity 
          style={styles.cartIcon}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartText}>🛒</Text>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={hijabCategories}
        renderItem={renderHijabItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#FF6B6B',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
    marginTop: 5,
  },
  cartIcon: {
    position: 'relative',
    padding: 10,
  },
  cartText: {
    fontSize: 24,
    color: 'white',
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF1744',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 150,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addToCartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    fontSize: 16,
  },
  categoryInfo: {
    padding: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
    lineHeight: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  categoryEmoji: {
    fontSize: 18,
  },
});

export default CatalogScreen;
