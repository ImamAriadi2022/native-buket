import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.logoContainer}>
        <ThemedText style={styles.title}>Florist Saa'</ThemedText>
        <ThemedText style={styles.subtitle}>Sign in to continue</ThemedText>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={Colors.light.text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.light.text}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.loginButton}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerLink}>
          <ThemedText style={styles.registerText}>Don't have an account? Register</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: Colors.light.tint,
  },
});
