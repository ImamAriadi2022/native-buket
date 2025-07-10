import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    Alert.alert(
      'Keluar dari Aplikasi',
      'Apakah Anda yakin ingin keluar?',
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Keluar', 
          style: 'destructive',
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }
        }
      ]
    );
  };

  const menuItems = [
    { id: 1, icon: '👤', title: 'Edit Profil', subtitle: 'Ubah informasi pribadi' },
    { id: 2, icon: '❤️', title: 'Wishlist', subtitle: 'Buket yang disimpan', action: () => navigation.navigate('Wishlist') },
    { id: 3, icon: '📦', title: 'Riwayat Pesanan', subtitle: 'Lihat pesanan Anda', action: () => navigation.navigate('OrderHistory') },
    { id: 4, icon: '🔔', title: 'Notifikasi', subtitle: 'Pengaturan notifikasi', action: () => navigation.navigate('Notification') },
    { id: 5, icon: '⭐', title: 'Ulasan Saya', subtitle: 'Kelola ulasan produk', action: () => navigation.navigate('Review') },
    { id: 6, icon: '🏪', title: 'Toko Favorit', subtitle: 'Toko yang diikuti', action: () => navigation.navigate('Seller') },
    { id: 7, icon: '⚙️', title: 'Pengaturan', subtitle: 'Atur preferensi aplikasi' },
    { id: 8, icon: '❓', title: 'Bantuan', subtitle: 'FAQ dan dukungan' },
    { id: 9, icon: '📞', title: 'Hubungi Kami', subtitle: 'Kontak developer' },
    { id: 10, icon: '⭐', title: 'Beri Rating', subtitle: 'Rating aplikasi di store' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileInitials}>BK</Text>
        </View>
        <Text style={styles.userName}>Pengguna BuketKu</Text>
        <Text style={styles.userEmail}>user@buketku.com</Text>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.menuItem}
            onPress={item.action || (() => {})}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>Tentang BuketKu</Text>
        <Text style={styles.aboutText}>
          BuketKu adalah aplikasi yang membantu Anda menemukan buket yang sempurna 
          untuk berbagai momen spesial. Temukan koleksi buket terbaik untuk graduation, 
          wedding, dan berbagai acara penting lainnya.
        </Text>
        <Text style={styles.versionText}>Versi 1.0.0</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>🚪 Keluar dari Aplikasi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9',
  },
  header: {
    backgroundColor: '#2E7D32',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  menuSection: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 3,
    borderTopColor: '#66BB6A',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B5E20',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#2E7D32',
  },
  menuArrow: {
    fontSize: 20,
    color: '#66BB6A',
  },
  aboutSection: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 3,
    borderTopColor: '#66BB6A',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#2E7D32',
    lineHeight: 20,
    marginBottom: 15,
  },
  versionText: {
    fontSize: 12,
    color: '#66BB6A',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 30,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  logoutText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
