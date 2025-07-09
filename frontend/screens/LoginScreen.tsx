import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HijabImages } from '../assets';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    if (isLogin) {
      // Login logic (simulasi)
      if (email === '' || password === '') {
        Alert.alert('Error', 'Mohon isi email dan password');
        return;
      }
      
      setIsLoading(true);
      
      // Simulasi loading untuk UX yang lebih baik
      setTimeout(() => {
        setIsLoading(false);
        
        // Validasi login dengan kredensial yang benar
        if (email === 'nama@gmail.com' && password === '123') {
          // Langsung navigasi ke MainTabs
          navigation.navigate('MainTabs');
        } else {
          Alert.alert('Error', 'Email atau password salah. Gunakan nama@gmail.com dengan password 123');
        }
      }, 1000);
    } else {
      // Register logic (simulasi)
      if (name === '' || email === '' || password === '') {
        Alert.alert('Error', 'Mohon isi semua field');
        return;
      }
      
      if (password.length < 6) {
        Alert.alert('Error', 'Password minimal 6 karakter');
        return;
      }
      
      // Simulasi register berhasil
      Alert.alert(
        'Registrasi Berhasil',
        'Akun Anda telah dibuat! Silakan login.',
        [{ text: 'OK', onPress: () => setIsLogin(true) }]
      );
    }
  };

  const handleGuestLogin = () => {
    Alert.alert(
      'Login sebagai Tamu',
      'Anda akan masuk sebagai tamu. Beberapa fitur mungkin terbatas.',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Lanjutkan', onPress: () => navigation.navigate('MainTabs') }
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Image source={HijabImages.icon} style={styles.logo} />
          <Text style={styles.appTitle}>HijabEase</Text>
          <Text style={styles.appSubtitle}>Temukan gaya hijab yang sempurna</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isLogin ? 'Masuk ke Akun Anda' : 'Buat Akun Baru'}
          </Text>

          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan nama lengkap"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            style={[styles.authButton, isLoading && styles.authButtonDisabled]} 
            onPress={handleAuth}
            disabled={isLoading}
          >
            <Text style={styles.authButtonText}>
              {isLoading ? 'Memproses...' : (isLogin ? 'Masuk' : 'Daftar')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.switchButton} 
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.switchButtonText}>
              {isLogin 
                ? 'Belum punya akun? Daftar disini' 
                : 'Sudah punya akun? Masuk disini'
              }
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>atau</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
            <Text style={styles.guestButtonText}>👤 Masuk sebagai Tamu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.demoButton} onPress={() => {
            setEmail('nama@gmail.com');
            setPassword('123');
            // Langsung navigasi ke MainTabs
            navigation.navigate('MainTabs');
          }}>
            <Text style={styles.demoButtonText}>🎯 Login Demo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickLoginButton} onPress={() => {
            setEmail('nama@gmail.com');
            setPassword('123');
          }}>
            <Text style={styles.quickLoginButtonText}>⚡ Isi Kredensial</Text>
          </TouchableOpacity>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📱 Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>📘 Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dengan melanjutkan, Anda menyetujui{'\n'}
            <Text style={styles.linkText}>Syarat & Ketentuan</Text> dan{' '}
            <Text style={styles.linkText}>Kebijakan Privasi</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#FF6B6B',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  appSubtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  authButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  authButtonDisabled: {
    backgroundColor: '#cccccc',
    opacity: 0.6,
  },
  authButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  switchButtonText: {
    color: '#FF6B6B',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    marginHorizontal: 15,
    color: '#666',
    fontSize: 14,
  },
  guestButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  guestButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  demoButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  demoButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  quickLoginButton: {
    backgroundColor: '#17a2b8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  quickLoginButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  socialButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#FF6B6B',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
