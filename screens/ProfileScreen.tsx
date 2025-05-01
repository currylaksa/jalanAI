// screens/ProfileScreen.tsx
// Shows user details and past trips.
// Pulls data from Firebase Auth and Firestore.

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
// import { getCurrentUser, getUserTrips, signOutUser } from '../utils/firebase'; // Import Firebase helpers

const ProfileScreen = ({ navigation }: any) => {
  const [user, setUser] = useState<any>(null); // State for user auth data
  const [pastTrips, setPastTrips] = useState<any[]>([]); // State for user's trips

  useEffect(() => {
    // --- TODO: Fetch current user and their past trips from Firebase ---
    // const currentUser = getCurrentUser();
    // setUser(currentUser);
    // if (currentUser) {
    //   getUserTrips(currentUser.uid)
    //     .then(setPastTrips)
    //     .catch(console.error);
    // }
    // --- Placeholder Data ---
    setUser({ email: 'user@example.com', uid: '12345abc' });
    setPastTrips([
      { id: 'trip1', title: 'Penang Getaway', date: '2024-12-10' },
      { id: 'trip2', title: 'Sabah Adventure', date: '2024-08-05' },
    ]);
    // --- End Placeholder ---
  }, []);

  const handleSignOut = () => {
    // --- TODO: Implement sign out using Firebase Auth ---
    // signOutUser()
    //   .then(() => {
    //     // Navigate to Landing or Auth screen after sign out
    //     navigation.replace('Landing'); // Or your Auth flow entry point
    //   })
    //   .catch(error => {
    //     console.error("Sign out error:", error);
    //     alert('Failed to sign out.');
    //   });
    alert('Placeholder: Sign Out Clicked!');
    // navigation.replace('Landing'); // Example navigation after sign out
  };

  const viewTripDetails = (tripId: string) => {
    // Navigate to ItineraryScreen to view the details of a past trip
    navigation.navigate('Itinerary', { tripId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      {user ? (
        <View style={styles.userInfoSection}>
          <Text style={styles.userInfoText}>Email: {user.email}</Text>
          {/* Add other user details here */} 
        </View>
      ) : (
        <Text>Loading user info...</Text>
      )}

      <Text style={styles.sectionTitle}>Past Trips</Text>
      {pastTrips.length > 0 ? (
        <FlatList
          data={pastTrips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tripItem}>
              <Text style={styles.tripTitle}>{item.title}</Text>
              <Text style={styles.tripDate}>{new Date(item.date).toLocaleDateString()}</Text>
              <Button title="View Details" onPress={() => viewTripDetails(item.id)} />
            </View>
          )}
        />
      ) : (
        <Text>No past trips found.</Text>
      )}

      <View style={styles.signOutButtonContainer}>
        <Button title="Sign Out" onPress={handleSignOut} color="#FF6347" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userInfoSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  tripItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  tripDate: {
    fontSize: 14,
    color: '#666',
  },
  signOutButtonContainer: {
    marginTop: 30,
  },
});
