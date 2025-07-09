import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TurbanScreen = ({ navigation }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton} onPress={() => setIsFavorite(!isFavorite)}>
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.categoryEmoji}>👒</Text>
        <Text style={styles.title}>Hijab Turban</Text>
        <Text style={styles.description}>
          Gaya hijab yang dililit ke kepala tanpa menjuntai, memberikan tampilan modis dan elegan.
        </Text>
      </View>

      <View style={styles.imageSection}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📸</Text>
          <Text style={styles.imagePlaceholderSubtext}>Foto Hijab Turban</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💎 Bahan Yang Tersedia</Text>
        <View style={styles.tagsContainer}>
          {['Katun Stretch', 'Spandek', 'Rayon', 'Kaos'].map((material, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{material}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Kelebihan</Text>
        {[
          'Stylish & modern',
          'Praktis dan cepat dipakai',
          'Cocok untuk wanita aktif dan fashionable',
          'Banyak digunakan oleh fashion influencer dan selebriti'
        ].map((advantage, index) => (
          <View key={index} style={styles.advantageItem}>
            <Text style={styles.checkIcon}>✅</Text>
            <Text style={styles.advantageText}>{advantage}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: '#FF6B6B' },
  backButton: { padding: 8 },
  backButtonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  favoriteButton: { padding: 8 },
  favoriteIcon: { fontSize: 24 },
  heroSection: { backgroundColor: '#FF6B6B', alignItems: 'center', paddingBottom: 30, paddingHorizontal: 20 },
  categoryEmoji: { fontSize: 48, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: 'white', textAlign: 'center', opacity: 0.9, lineHeight: 22 },
  imageSection: { padding: 20 },
  imagePlaceholder: { backgroundColor: 'white', borderRadius: 12, height: 200, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  imagePlaceholderText: { fontSize: 48, marginBottom: 10 },
  imagePlaceholderSubtext: { fontSize: 14, color: '#666' },
  section: { backgroundColor: 'white', marginHorizontal: 15, marginBottom: 15, padding: 20, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: '#FFE5E5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8, marginBottom: 8 },
  tagText: { fontSize: 14, color: '#333', fontWeight: '500' },
  advantageItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 },
  checkIcon: { fontSize: 16, marginRight: 10, marginTop: 2 },
  advantageText: { fontSize: 14, color: '#333', flex: 1, lineHeight: 20 },
});

export default TurbanScreen;
