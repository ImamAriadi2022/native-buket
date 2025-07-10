import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import screens
import {
    CartScreen,
    CatalogScreen,
    CheckoutScreen,
    FlashSaleScreen,
    HomeScreen,
    LoginScreen,
    NotificationScreen,
    OrderHistoryScreen,
    ProductDetailScreen,
    ProfileScreen,
    ReviewScreen,
    SearchScreen,
    SellerScreen,
    SplashScreen,
    WishlistScreen
} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2E7D32',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tab.Screen 
        name="Catalog" 
        component={CatalogScreen}
        options={{
          tabBarLabel: 'Katalog',
          tabBarIcon: () => '💐',
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Cari',
          tabBarIcon: () => '🔍',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: () => '👤',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="FlashSale" component={FlashSaleScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Seller" component={SellerScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
