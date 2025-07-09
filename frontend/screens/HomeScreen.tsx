import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

  const popularCategories = [
    { id: 1, name: 'Hijab Segi Empat', screen: 'SegiEmpat', emoji: '🔸' },
    { id: 2, name: 'Hijab Pashmina Kaos', screen: 'PashminaKaos', emoji: '🧶' },
    { id: 3, name: 'Hijab Sport', screen: 'Sport', emoji: '⚽' },
    { id: 4, name: 'Hijab Bergo', screen: 'Bergo', emoji: '🧕' },
    { id: 5, name: 'Hijab Syar\'i', screen: 'Syari', emoji: '🕌' },
    { id: 6, name: 'Hijab Khimar', screen: 'Khimar', emoji: '👑' },
  ];

  const tips = [
    {
      id: 1,
      title: 'Tips Memilih Hijab Sesuai Bentuk Wajah',
      description: 'Pilih hijab yang sesuai dengan bentuk wajah Anda untuk tampilan yang optimal.',
      color: '#FFE5E5'
    },
    {
      id: 2,
      title: 'Cara Merawat Hijab Agar Awet',
      description: 'Rawat hijab dengan benar agar tetap indah dan tahan lama.',
      color: '#E5F3FF'
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.welcomeText}>Selamat Datang di</Text>
            <Text style={styles.appName}>HijabEase</Text>
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
        <Text style={styles.subtitle}>Temukan gaya hijab yang sempurna untuk Anda</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategori Populer</Text>
        <View style={styles.categoriesGrid}>
          {popularCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => navigation.navigate(category.screen)}
            >
              <Text style={styles.categoryEmoji}>{category.emoji}</Text>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips & Inspirasi</Text>
        {tips.map((tip) => (
          <View key={tip.id} style={[styles.tipCard, { backgroundColor: tip.color }]}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipText}>{tip.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistik Aplikasi</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Jenis Hijab</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Tips & Tutorial</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>50k+</Text>
            <Text style={styles.statLabel}>Pengguna</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  appName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#F8F9FA',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryText: {
    color: '#495057',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
  tipCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
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
});

export default HomeScreen;
