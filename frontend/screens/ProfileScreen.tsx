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
    { id: 2, icon: '❤️', title: 'Favorit Saya', subtitle: 'Hijab yang disimpan', action: () => navigation.navigate('Favorite') },
    { id: 3, icon: '�', title: 'Pesanan Saya', subtitle: 'Riwayat pembelian', action: () => navigation.navigate('Cart') },
    { id: 4, icon: '�📚', title: 'Tutorial Tersimpan', subtitle: 'Lihat tutorial favorit' },
    { id: 5, icon: '⚙️', title: 'Pengaturan', subtitle: 'Atur preferensi aplikasi' },
    { id: 6, icon: '❓', title: 'Bantuan', subtitle: 'FAQ dan dukungan' },
    { id: 7, icon: '📞', title: 'Hubungi Kami', subtitle: 'Kontak developer' },
    { id: 8, icon: '⭐', title: 'Beri Rating', subtitle: 'Rating aplikasi di store' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileInitials}>HE</Text>
        </View>
        <Text style={styles.userName}>Pengguna HijabEase</Text>
        <Text style={styles.userEmail}>user@hijabease.com</Text>
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
        <Text style={styles.aboutTitle}>Tentang HijabEase</Text>
        <Text style={styles.aboutText}>
          HijabEase adalah aplikasi yang membantu Anda menemukan gaya hijab yang sesuai 
          dengan bentuk wajah dan preferensi Anda. Temukan tutorial, tips, dan inspirasi 
          hijab terbaik di sini.
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
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#FF6B6B',
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
    color: '#FF6B6B',
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
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
    color: '#333',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  menuArrow: {
    fontSize: 20,
    color: '#999',
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
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
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
    borderColor: '#FF6B6B',
  },
  logoutText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
