// components/TripCard.tsx
// Card view for each trip suggestion or booking item.

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface TripCardProps {
  title: string;
  description?: string;
  imageUrl?: string; // Optional image URL
  date?: string;
  onPress?: () => void;
}

const TripCard: React.FC<TripCardProps> = ({
  title,
  description,
  imageUrl,
  date,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} disabled={!onPress}>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        {date && <Text style={styles.date}>{date}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden', // Ensures image corners are rounded if image is first
  },
  image: {
    width: '100%',
    height: 150, // Adjust height as needed
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});
