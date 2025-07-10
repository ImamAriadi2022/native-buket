import { BouquetCategories } from '@/assets';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReviewScreen = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const product = BouquetCategories[0]; // Example product

  const existingReviews = [
    {
      id: 1,
      userName: 'Sarah M.',
      rating: 5,
      date: '15 Jan 2024',
      comment: 'Buket wisuda sangat cantik dan fresh! Pelayanan juga sangat memuaskan. Recommended!',
      images: [require('@/assets/images/products/graduation/graduation-1.jpg')],
      helpful: 12,
    },
    {
      id: 2,
      userName: 'Dini K.',
      rating: 4,
      date: '12 Jan 2024',
      comment: 'Bagus sekali, sesuai dengan gambar. Pengiriman cepat dan aman.',
      images: [],
      helpful: 8,
    },
    {
      id: 3,
      userName: 'Ahmad R.',
      rating: 5,
      date: '10 Jan 2024',
      comment: 'Pelayanan excellent, buket sangat bagus untuk acara wisuda adik saya. Terima kasih!',
      images: [require('@/assets/images/products/graduation/graduation-2.jpg')],
      helpful: 15,
    },
  ];

  const renderStars = (rating: number, onPress?: (rating: number) => void) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => onPress && onPress(star)}
            disabled={!onPress}
          >
            <Text style={[styles.star, star <= rating && styles.activeStar]}>
              ⭐
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const submitReview = () => {
    if (selectedRating === 0 || reviewText.trim() === '') {
      alert('Mohon berikan rating dan tulis ulasan');
      return;
    }
    
    // Simulate review submission
    alert('Terima kasih atas ulasan Anda!');
    setSelectedRating(0);
    setReviewText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ulasan Produk</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Product Info */}
        <View style={styles.productSection}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={styles.overallRating}>
              {renderStars(5)}
              <Text style={styles.ratingText}>4.8 (24 ulasan)</Text>
            </View>
          </View>
        </View>

        {/* Write Review Section */}
        <View style={styles.writeReviewSection}>
          <Text style={styles.sectionTitle}>Tulis Ulasan</Text>
          <Text style={styles.ratingLabel}>Berikan rating:</Text>
          {renderStars(selectedRating, setSelectedRating)}
          
          <TextInput
            style={styles.reviewInput}
            placeholder="Bagikan pengalaman Anda dengan produk ini..."
            value={reviewText}
            onChangeText={setReviewText}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          
          <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
            <Text style={styles.submitButtonText}>Kirim Ulasan</Text>
          </TouchableOpacity>
        </View>

        {/* Existing Reviews */}
        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Ulasan Pelanggan</Text>
          
          {existingReviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewUserInfo}>
                  <Text style={styles.userName}>{review.userName}</Text>
                  <View style={styles.reviewMeta}>
                    {renderStars(review.rating)}
                    <Text style={styles.reviewDate}>{review.date}</Text>
                  </View>
                </View>
              </View>
              
              <Text style={styles.reviewComment}>{review.comment}</Text>
              
              {review.images.length > 0 && (
                <ScrollView horizontal style={styles.reviewImagesContainer}>
                  {review.images.map((image, index) => (
                    <Image key={index} source={image} style={styles.reviewImage} />
                  ))}
                </ScrollView>
              )}
              
              <View style={styles.reviewFooter}>
                <TouchableOpacity style={styles.helpfulButton}>
                  <Text style={styles.helpfulText}>👍 Membantu ({review.helpful})</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
  },
  productSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  overallRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  writeReviewSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  ratingLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  star: {
    fontSize: 24,
    color: '#ddd',
    marginRight: 5,
  },
  activeStar: {
    color: '#FFD700',
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    minHeight: 100,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewsSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
  },
  reviewItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 20,
    marginBottom: 20,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  reviewUserInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  reviewMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
  },
  reviewComment: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  reviewImagesContainer: {
    marginBottom: 15,
  },
  reviewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helpfulButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  helpfulText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ReviewScreen;
