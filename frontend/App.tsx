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

// Import Colors
import { Colors } from '@/constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: Colors.lightGray,
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
          tabBarIcon: () => '�',
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
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
