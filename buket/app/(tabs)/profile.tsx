import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.profileImage}
          />
          <ThemedText style={styles.userName}>John Doe</ThemedText>
          <ThemedText style={styles.userEmail}>john.doe@example.com</ThemedText>
          <TouchableOpacity style={styles.editButton}>
            <ThemedText style={styles.editButtonText}>Edit Profile</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Order Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>12</ThemedText>
            <ThemedText style={styles.statLabel}>Orders</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>5</ThemedText>
            <ThemedText style={styles.statLabel}>In Cart</ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText style={styles.statNumber}>3</ThemedText>
            <ThemedText style={styles.statLabel}>Wishlist</ThemedText>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <ThemedText style={styles.menuSectionTitle}>My Orders</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Current Orders</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Order History</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <ThemedText style={styles.menuSectionTitle}>Account Settings</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Address Book</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Payment Methods</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Notifications</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Privacy Settings</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <ThemedText style={styles.menuSectionTitle}>Help & Support</ThemedText>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>Customer Service</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <ThemedText style={styles.menuItemText}>FAQs</ThemedText>
            <ThemedText style={styles.menuItemArrow}>→</ThemedText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <ThemedText style={styles.logoutButtonText}>Log Out</ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.light.tint,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e0e0e0',
  },
  menuSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemArrow: {
    fontSize: 18,
    color: '#666',
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
