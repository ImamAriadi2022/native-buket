import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface UserData {
  nama: string;
  nim: string;
  kelas: string;
  foto?: string;
}

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [imageError, setImageError] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // Fixed credentials for API photo fetch
  const API_NIM = '23040201';
  const API_PASSWORD = 'khoirunnisanurfadilah0904';

  useEffect(() => {
    // Auto fetch profile saat component mount
    fetchProfile(API_NIM, API_PASSWORD);
    return () => {
      // Cleanup
      setIsLoading(false);
      setImageError(false);
    };
  }, []);

  const fetchProfile = async (nim: string, kelas: string) => {
    try {
      console.log('Fetching profile for NIM:', nim, 'Kelas:', kelas);
      setImageError(false); // Reset error state

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `https://cloud-jalurlangitv2.ikraf.or.id/api/applms/tarik_data?password=${kelas}&nim=${nim}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Basic ' + btoa('adminx:adminx123'),
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log('API Response:', json);

      // Handle different response structures
      if (json.status && json.foto) {
        console.log('Foto URL ditemukan:', json.foto);
        setAvatarUrl(json.foto);
        setUserData({
          nama: json.nama || 'Unknown',
          nim: json.nim || nim,
          kelas: json.kelas || kelas,
          foto: json.foto
        });
      } else if (json.success && json.data) {
        // Alternative response structure
        console.log('Data ditemukan:', json.data);
        setUserData(json.data);
        if (json.data.foto) {
          setAvatarUrl(json.data.foto);
        }
      } else {
        console.warn('Tidak ada foto ditemukan dalam response');
        setAvatarUrl(null);
        setImageError(true);
        // Still set user data if available
        if (json.nama || json.nim) {
          setUserData({
            nama: json.nama || 'Unknown',
            nim: json.nim || nim,
            kelas: json.kelas || kelas
          });
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request timeout');
      } else {
        console.error('Gagal ambil foto:', error);
      }
      setAvatarUrl(null);
      setImageError(true);
    }
  };

  const handleLogin = async () => {
    // Validate email and password
    if (!email || !password) {
      Alert.alert('Error', 'Silakan isi email dan password');
      return;
    }

    // Check credentials (hardcoded: nama@gmail.com / 123)
    if (email !== 'nama@gmail.com' || password !== '123') {
      Alert.alert('Error', 'Email atau password salah');
      return;
    }

    setIsLoading(true);

    try {
      // Tunggu sebentar sebelum navigasi
      await new Promise(resolve => setTimeout(resolve, 500));
      navigation.replace('MainTabs');
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat login');
    } finally {
      setIsLoading(false);
    }
  };

  const renderHeaderImage = () => {
    if (!avatarUrl || imageError) {
      return (
        <Image 
          source={require('../assets/logo/logo-buket.png')} 
          style={styles.logo}
          defaultSource={require('../assets/logo/logo-buket.png')}
        />
      );
    }

    return (
      <Image 
        source={{ uri: avatarUrl }} 
        style={styles.logo}
        defaultSource={require('../assets/logo/logo-buket.png')}
        onError={() => {
          console.log('Error loading profile image');
          setImageError(true);
        }}
      />
    );
  };

  const fetchUserPhoto = async () => {
    // This function is kept for backward compatibility but not used
    // Profile is now fetched automatically on component mount
    await fetchProfile(API_NIM, API_PASSWORD);
  };

  const handleQuickFill = () => {
    setEmail('nama@gmail.com');
    setPassword('123');
  };

  const handleDemoLogin = () => {
    navigation.replace('MainTabs');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E7D32" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          {renderHeaderImage()}
          <Text style={styles.title}>BuketKu</Text>
          <Text style={styles.subtitle}>Selamat datang kembali</Text>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Masukkan email Anda"
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Masukkan password Anda"
              secureTextEntry
              editable={!isLoading}
            />
          </View>

          {/* User Data Display */}
          {/* {userData && (
            <View style={styles.userDataContainer}>
              <Text style={styles.userDataTitle}>Data Pengguna:</Text>
              {avatarUrl && !imageError && (
                <Image
                  source={{ uri: avatarUrl }}
                  style={styles.userPhoto}
                  resizeMode="cover"
                  onError={() => setImageError(true)}
                />
              )}
              <Text style={styles.userDataText}>Nama: {userData.nama}</Text>
              <Text style={styles.userDataText}>NIM: {userData.nim}</Text>
              <Text style={styles.userDataText}>Kelas: {userData.kelas}</Text>
              {imageError && (
                <Text style={styles.errorText}>Foto tidak dapat dimuat</Text>
              )}
            </View>
          )} */}

          {/* Login Button */}
          <TouchableOpacity
            style={[styles.loginButton, isLoading && styles.disabledButton]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Masuk</Text>
            )}
          </TouchableOpacity>

          {/* Helper Buttons */}
          <View style={styles.helperButtons}>
            <TouchableOpacity
              style={styles.helperButton}
              onPress={handleQuickFill}
              disabled={isLoading}
            >
              <Text style={styles.helperButtonText}>Isi Kredensial</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.helperButton}
              onPress={handleDemoLogin}
              disabled={isLoading}
            >
              <Text style={styles.helperButtonText}>Login Demo</Text>
            </TouchableOpacity>
          </View>

          {/* Help Text */}
          <View style={styles.helpContainer}>
            <Text style={styles.helpText}>
              Gunakan kredensial: nama@gmail.com / 123
            </Text>
            <Text style={styles.helpText}>
              Foto profil akan diambil dari API saat app dimuat
            </Text>
            <Text style={styles.helpText}>
              NIM: {API_NIM} | Password: {API_PASSWORD}
            </Text>
            {userData && (
              <Text style={styles.helpText}>
                Status: Data berhasil dimuat {avatarUrl ? '✅' : '❌ (tanpa foto)'}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  userDataContainer: {
    backgroundColor: '#f0f8f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  userDataTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 12,
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#2E7D32',
  },
  userDataText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  loginButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  helperButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  helperButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  helperButtonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  helpContainer: {
    alignItems: 'center',
  },
  helpText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginBottom: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default LoginScreen;