import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FavoriteScreen = ({ navigation }: any) => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Hijab Segi Empat', screen: 'SegiEmpat', emoji: '🔸', description: 'Klasik dan fleksibel' },
    { id: 2, name: 'Hijab Pashmina Voal', screen: 'PashminaVoal', emoji: '🌸', description: 'Ringan dan elegan' },
    { id: 3, name: 'Hijab Syar\'i', screen: 'Syari', emoji: '🕌', description: 'Sesuai syariat Islam' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorit Saya</Text>
        <Text style={styles.headerSubtitle}>Hijab yang Anda sukai</Text>
      </View>

      {favorites.length > 0 ? (
        <View style={styles.favoritesContainer}>
          {favorites.map((item) => (
            <View key={item.id} style={styles.favoriteCard}>
              <TouchableOpacity
                style={styles.favoriteContent}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Text style={styles.favoriteEmoji}>{item.emoji}</Text>
                <View style={styles.favoriteInfo}>
                  <Text style={styles.favoriteName}>{item.name}</Text>
                  <Text style={styles.favoriteDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFavorite(item.id)}
              >
                <Text style={styles.removeButtonText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>💝</Text>
          <Text style={styles.emptyTitle}>Belum Ada Favorit</Text>
          <Text style={styles.emptyText}>
            Tambahkan hijab favorit Anda dari katalog untuk kemudahan akses
          </Text>
          <TouchableOpacity
            style={styles.browseCatalogButton}
            onPress={() => navigation.navigate('Catalog')}
          >
            <Text style={styles.browseCatalogText}>Jelajahi Katalog</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>Tips Favorit</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>💡</Text>
          <Text style={styles.tipText}>
            Tambahkan hijab ke favorit untuk akses cepat dan mudah!
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>📱</Text>
          <Text style={styles.tipText}>
            Gunakan fitur search untuk menemukan hijab yang Anda cari.
          </Text>
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  favoritesContainer: {
    padding: 15,
  },
  favoriteCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  favoriteEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  favoriteInfo: {
    flex: 1,
  },
  favoriteName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  favoriteDescription: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 15,
  },
  removeButtonText: {
    fontSize: 18,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  browseCatalogButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseCatalogText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  tipsSection: {
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
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  tipIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
});

export default FavoriteScreen;
