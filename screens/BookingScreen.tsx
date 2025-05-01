// screens/BookingScreen.tsx
// Allows users to book hotels, flights, local guides, and tours.
// Booking info is saved to Firestore under the user’s profile.

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
// import { saveBookingToFirestore } from '../utils/firebase'; // Import Firebase helper

const BookingScreen = ({ route, navigation }: any) => {
  // const { itinerary } = route.params; // Get itinerary details if passed

  const handleBook = (serviceType: string) => {
    // --- TODO: Implement actual booking logic (potentially linking to external services or just saving intent) ---
    const bookingDetails = {
      type: serviceType,
      // Add relevant details from itinerary or user input
      timestamp: new Date(),
      // tripId: itinerary?.tripId // Link to the specific trip if available
    };

    // --- TODO: Save booking details to Firestore ---
    // saveBookingToFirestore(bookingDetails)
    //   .then(() => {
    //     Alert.alert('Booking Confirmed', `${serviceType} booking added to your profile.`);
    //     // Optionally navigate somewhere else, e.g., back to itinerary or profile
    //     // navigation.navigate('Profile');
    //   })
    //   .catch(error => {
    //     console.error(`Error booking ${serviceType}:`, error);
    //     Alert.alert('Booking Failed', `Could not save ${serviceType} booking.`);
    //   });
    Alert.alert('Placeholder Booking', `${serviceType} booking initiated (placeholder).`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Book Your Trip Services</Text>

      {/* Display summary of the trip if available */} 
      {/* {itinerary && <Text style={styles.subtitle}>Based on: {itinerary.title}</Text>} */} 

      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Flights</Text>
        {/* Add flight search/booking UI elements here */} 
        <Button title="Find & Book Flights" onPress={() => handleBook('Flights')} />
      </View>

      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Hotels</Text>
        {/* Add hotel search/booking UI elements here */} 
        <Button title="Find & Book Hotels" onPress={() => handleBook('Hotels')} />
      </View>

      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Tours & Activities</Text>
        {/* Add tour search/booking UI elements here */} 
        <Button title="Book Tours" onPress={() => handleBook('Tours')} />
      </View>

      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Local Guides</Text>
        {/* Add guide search/booking UI elements here */} 
        <Button title="Hire a Local Guide" onPress={() => handleBook('Guides')} />
      </View>

    </ScrollView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  serviceSection: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
