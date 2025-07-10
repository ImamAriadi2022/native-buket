import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FavoriteScreen = ({ navigation }: any) => {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Buket Wisuda', category: 'graduation', emoji: '🎓', description: 'Sempurna untuk hari kelulusan' },
    { id: 2, name: 'Buket Pernikahan', category: 'wedding', emoji: '💒', description: 'Elegan untuk hari bahagia' },
    { id: 3, name: 'Buket Uang', category: 'money', emoji: '�', description: 'Hadiah unik dan berkesan' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorit Saya</Text>
        <Text style={styles.headerSubtitle}>Buket pilihan yang Anda sukai</Text>
      </View>

      {favorites.length > 0 ? (
        <View style={styles.favoritesContainer}>
          {favorites.map((item) => (
            <View key={item.id} style={styles.favoriteCard}>
              <TouchableOpacity
                style={styles.favoriteContent}
                onPress={() => navigation.navigate('Catalog')}
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
          <Text style={styles.emptyEmoji}>�</Text>
          <Text style={styles.emptyTitle}>Belum Ada Favorit</Text>
          <Text style={styles.emptyText}>
            Tambahkan buket favorit Anda dari katalog untuk kemudahan akses
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
            Tambahkan buket ke favorit untuk akses cepat dan mudah!
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>📱</Text>
          <Text style={styles.tipText}>
            Gunakan fitur search untuk menemukan buket yang Anda cari.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>🎁</Text>
          <Text style={styles.tipText}>
            Simpan buket untuk berbagai acara dan momen spesial.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: Colors.white,
    fontSize: 14,
    opacity: 0.9,
  },
  favoritesContainer: {
    padding: 15,
  },
  favoriteCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: Colors.accent,
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
    color: Colors.text,
    marginBottom: 4,
  },
  favoriteDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
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
    backgroundColor: Colors.white,
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
    color: Colors.text,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  browseCatalogButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseCatalogText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  tipsSection: {
    backgroundColor: Colors.white,
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
    color: Colors.text,
    marginBottom: 15,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light,
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: Colors.secondary,
  },
  tipIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  tipText: {
    fontSize: 14,
    color: Colors.textSecondary,
    flex: 1,
  },
});

export default FavoriteScreen;
