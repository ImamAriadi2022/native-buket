import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    // Animasi fade in dan scale
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate ke login setelah 3 detik
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Text style={styles.logoEmoji}>🌸</Text>
        <Text style={styles.appName}>BuketKu</Text>
        <Text style={styles.tagline}>Wujudkan Momen Spesial Anda</Text>
        
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBar}>
            <Animated.View 
              style={[
                styles.loadingProgress,
                {
                  opacity: fadeAnim,
                }
              ]}
            />
          </View>
          <Text style={styles.loadingText}>Memuat aplikasi...</Text>
        </View>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 BuketKu</Text>
        <Text style={styles.footerSubtext}>Wujudkan momen spesial Anda</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 120,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    fontStyle: 'italic',
    marginBottom: 50,
    textAlign: 'center',
  },
  loadingContainer: {
    width: 200,
    alignItems: 'center',
  },
  loadingBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 15,
  },
  loadingProgress: {
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  loadingText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  footerSubtext: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
  },
});

export default SplashScreen;
