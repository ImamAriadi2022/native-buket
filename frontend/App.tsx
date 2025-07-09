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
  FavoriteScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SplashScreen
} from './screens';

// Import hijab detail screens
import {
  BergoScreen,
  CrinkleScreen,
  HoodieScreen,
  KhimarScreen,
  LayerScreen,
  PashminaCerutyScreen,
  PashminaKaosScreen,
  PashminaVoalScreen,
  PlisketScreen,
  SatinScreen,
  SegiEmpatScreen,
  SportScreen,
  SyariScreen,
  TurbanScreen
} from './screens/hijab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
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
          tabBarIcon: () => '📚',
        }}
      />
      <Tab.Screen 
        name="Favorite" 
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorit',
          tabBarIcon: () => '❤️',
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
        <Stack.Screen name="SegiEmpat" component={SegiEmpatScreen} />
        <Stack.Screen name="PashminaKaos" component={PashminaKaosScreen} />
        <Stack.Screen name="Sport" component={SportScreen} />
        <Stack.Screen name="Bergo" component={BergoScreen} />
        <Stack.Screen name="Syari" component={SyariScreen} />
        <Stack.Screen name="Khimar" component={KhimarScreen} />
        <Stack.Screen name="Turban" component={TurbanScreen} />
        <Stack.Screen name="Hoodie" component={HoodieScreen} />
        <Stack.Screen name="Layer" component={LayerScreen} />
        <Stack.Screen name="PashminaVoal" component={PashminaVoalScreen} />
        <Stack.Screen name="PashminaCeruty" component={PashminaCerutyScreen} />
        <Stack.Screen name="Crinkle" component={CrinkleScreen} />
        <Stack.Screen name="Satin" component={SatinScreen} />
        <Stack.Screen name="Plisket" component={PlisketScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
