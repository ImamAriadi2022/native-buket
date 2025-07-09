import { Image } from 'expo-image';
import React from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';

const categories = [
  {
    id: 1,
    name: 'Buket Bunga',
    image: require('../../assets/images/buket bunga plastik/717e95ddf76b8651e2c4f4d94118b5aa.jpg'),
    description: 'Beautiful artificial flower arrangements',
    itemCount: 24,
  },
  {
    id: 2,
    name: 'Buket Hijab',
    image: require('../../assets/images/buket hijab/IMG-20250707-WA0020.jpg'),
    description: 'Stylish hijab gift sets',
    itemCount: 18,
  },
  {
    id: 3,
    name: 'Buket Kosmetik',
    image: require('../../assets/images/buket kosmetik - skincare/871c3b10ad835fa03c931e2ee1b17c63.jpg'),
    description: 'Beauty and skincare bundles',
    itemCount: 32,
  },
  {
    id: 4,
    name: 'Buket Mini',
    image: require('../../assets/images/buket mini/IMG-20250707-WA0023.jpg'),
    description: 'Small and cute gift arrangements',
    itemCount: 15,
  },
  {
    id: 5,
    name: 'Buket Snack',
    image: require('../../assets/images/buket snack/5e8890c482cde4cce912b1455a8daf05.jpg'),
    description: 'Delicious snack arrangements',
    itemCount: 28,
  },
];

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>

      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Categories</ThemedText>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchBar}>
            <IconSymbol size={20} name="magnifyingglass" color="#666" style={styles.searchIcon} />
            <ThemedText style={styles.searchText}>Search categories...</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => {
                // Navigate to category detail
              }}>
              <Image source={category.image} style={styles.categoryImage} contentFit="cover" />
              <View style={styles.categoryContent}>
                <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                <ThemedText style={styles.categoryDescription}>
                  {category.description}
                </ThemedText>
                <View style={styles.categoryFooter}>
                  <ThemedText style={styles.itemCount}>
                    {category.itemCount} items
                  </ThemedText>
                  <ThemedText style={styles.viewMore}>View →</ThemedText>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.featuredSection}>
          <ThemedText style={styles.sectionTitle}>Featured Collections</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.featuredCard}>
              <Image
                source={require('../../assets/images/buket wedding- anniversary/IMG-20250707-WA0030.jpg')}
                style={styles.featuredImage}
                contentFit="cover"
              />
              <View style={styles.featuredOverlay}>
                <ThemedText style={styles.featuredTitle}>Wedding Collection</ThemedText>
                <ThemedText style={styles.featuredSubtitle}>
                  Special arrangements for your special day
                </ThemedText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featuredCard}>
              <Image
                source={require('../../assets/images/buket wisuda/IMG-20250707-WA0035.jpg')}
                style={styles.featuredImage}
                contentFit="cover"
              />
              <View style={styles.featuredOverlay}>
                <ThemedText style={styles.featuredTitle}>Graduation Special</ThemedText>
                <ThemedText style={styles.featuredSubtitle}>
                  Celebrate achievements in style
                </ThemedText>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
    backgroundColor: Colors.light.background,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchText: {
    color: '#666',
  },
  content: {
    flex: 1,
  },
  categoriesGrid: {
    padding: 16,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: 160,
  },
  categoryContent: {
    padding: 16,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  categoryFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemCount: {
    fontSize: 12,
    color: '#666',
  },
  viewMore: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  featuredSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featuredCard: {
    width: 280,
    height: 180,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredSubtitle: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
});
