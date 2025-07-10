import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      title: 'Pesanan Sedang Diproses',
      message: 'Buket Wisuda Premium Anda sedang disiapkan oleh BuketKu Store',
      time: '2 jam yang lalu',
      isRead: false,
      icon: '📦',
    },
    {
      id: 2,
      type: 'promo',
      title: 'Flash Sale Berakhir 1 Jam Lagi!',
      message: 'Jangan sampai terlewat diskon hingga 50% untuk semua buket wedding',
      time: '5 jam yang lalu',
      isRead: false,
      icon: '🔥',
    },
    {
      id: 3,
      type: 'order',
      title: 'Pesanan Telah Dikirim',
      message: 'Buket Money Deluxe Anda telah dikirim dengan no. resi BK123456789',
      time: '1 hari yang lalu',
      isRead: true,
      icon: '🚚',
    },
    {
      id: 4,
      type: 'promo',
      title: 'Promo Spesial Hari Valentine',
      message: 'Dapatkan gratis kartu ucapan romantis untuk setiap pembelian buket',
      time: '2 hari yang lalu',
      isRead: true,
      icon: '💖',
    },
    {
      id: 5,
      type: 'info',
      title: 'Update Aplikasi Tersedia',
      message: 'Perbarui aplikasi BuketKu untuk mendapatkan fitur terbaru',
      time: '3 hari yang lalu',
      isRead: true,
      icon: '🔄',
    },
  ];

  const getNotificationStyle = (type: string, isRead: boolean) => {
    return {
      backgroundColor: isRead ? '#f5f5f5' : '#fff',
      borderLeftColor: type === 'order' ? Colors.primary : type === 'promo' ? '#FF6B35' : Colors.secondary,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifikasi</Text>
        <TouchableOpacity style={styles.markAllButton}>
          <Text style={styles.markAllText}>Tandai Semua</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationItem,
              getNotificationStyle(notification.type, notification.isRead),
            ]}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.notificationIcon}>{notification.icon}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={[styles.notificationTitle, !notification.isRead && styles.unreadTitle]}>
                {notification.title}
              </Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {!notification.isRead && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  markAllButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  markAllText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  unreadTitle: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    marginLeft: 10,
    alignSelf: 'center',
  },
});

export default NotificationScreen;
