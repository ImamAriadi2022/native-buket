import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <ThemedText style={styles.title}>Create Account</ThemedText>
        <ThemedText style={styles.subtitle}>Join Florist Saa' today</ThemedText>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={Colors.light.text}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={Colors.light.text}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.light.text}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.light.text}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.registerButton}>
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginLink}>
          <ThemedText style={styles.loginText}>Already have an account? Login</ThemedText>
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
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
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
  registerButton: {
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
  loginLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: Colors.light.tint,
  },
});
