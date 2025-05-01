// screens/MapScreen.tsx
// Displays Google Map with cultural points of interest (POIs).
// Users can click markers to view info and add locations to their itinerary.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Alert } from 'react-native';
// import MapView, { Marker, Callout } from 'react-native-maps'; // Import Map components
// import { culturalPOIs } from '../utils/mapData'; // Import POI data

// --- Placeholder MapView --- 
// Remove this when react-native-maps is installed and configured
const PlaceholderMapView = ({ children, ...props }: any) => (
  <View style={styles.mapPlaceholder} {...props}>
    <Text style={styles.mapPlaceholderText}>Map Placeholder</Text>
    <Text style={styles.mapPlaceholderSubText}>Install and configure 'react-native-maps'</Text>
    {/* Render markers conceptually */} 
    {/* {React.Children.map(children, child => 
      child.type.displayName === 'Marker' && (
        <Text style={{fontSize: 10}}>📍 {child.props.title}</Text>
      )
    )} */} 
  </View>
);
const PlaceholderMarker = (props: any) => <View />; // Dummy component
PlaceholderMarker.displayName = 'Marker';
const PlaceholderCallout = ({ children }: any) => <View>{children}</View>; // Dummy component
// --- End Placeholder MapView ---

const MapScreen = ({ navigation }: any) => {
  const [pointsOfInterest, setPointsOfInterest] = useState<any[]>([]);

  useEffect(() => {
    // --- TODO: Load POIs, potentially dynamically based on region ---
    // setPointsOfInterest(culturalPOIs);
    // --- Placeholder Data ---
    setPointsOfInterest([
      { id: '1', title: 'Petronas Towers', description: 'Iconic twin towers', coordinate: { latitude: 3.1578, longitude: 101.7119 } },
      { id: '2', title: 'Batu Caves', description: 'Limestone hill with temples', coordinate: { latitude: 3.2379, longitude: 101.6840 } },
      { id: '3', title: 'Melaka Historic City', description: 'UNESCO World Heritage Site', coordinate: { latitude: 2.1944, longitude: 102.2486 } },
    ]);
    // --- End Placeholder ---
  }, []);

  const handleAddToItinerary = (poi: any) => {
    // --- TODO: Implement logic to add POI to the current or a new itinerary ---
    // This might involve navigating back to Planner/Itinerary screen or using a global state/context
    Alert.alert('Add to Itinerary', `Add ${poi.title} to your trip? (Placeholder)`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Malaysia</Text>
      <PlaceholderMapView
        style={styles.map}
        // --- TODO: Set initial region based on user location or default ---
        initialRegion={{
          latitude: 3.1390, // Approx center of Peninsular Malaysia
          longitude: 101.6869,
          latitudeDelta: 5.0, // Zoom level
          longitudeDelta: 5.0,
        }}
      >
        {pointsOfInterest.map(poi => (
          <PlaceholderMarker
            key={poi.id}
            coordinate={poi.coordinate}
            title={poi.title}
            description={poi.description}
          >
            <PlaceholderCallout>
              <View style={styles.calloutView}>
                <Text style={styles.calloutTitle}>{poi.title}</Text>
                <Text>{poi.description}</Text>
                <Button title="Add to Trip" onPress={() => handleAddToItinerary(poi)} />
              </View>
            </PlaceholderCallout>
          </PlaceholderMarker>
        ))}
      </PlaceholderMapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center', // Map takes up space
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8, // Adjust height as needed
  },
  mapPlaceholder: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  mapPlaceholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
   mapPlaceholderSubText: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  calloutView: {
    padding: 10,
    minWidth: 150,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
