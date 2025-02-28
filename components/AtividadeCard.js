import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

const AtividadeCard = ({ title, rating, image }) => {
  const theme = useTheme();
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i < rating ? "star" : "star-outline"}
          size={20}
          color={i < rating ? "#FFD700" : "#E0E0E0"} // Yellow for filled stars
        />
      );
    }
    return stars;
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.surface }]}>{title}</Text>
        <View style={styles.ratingContainer}>
          {renderStars()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: '2%',
    marginVertical: '2%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '100%', 
    width: '100%',
  },
  image: {
    width: '20%', 
    height: '80%', 
  },
  textContainer: {
    marginLeft: '5%',
    width: '75%', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default AtividadeCard;
