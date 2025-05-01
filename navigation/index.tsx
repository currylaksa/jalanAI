// navigation/index.tsx
// React Navigation stack.
// Handles routing between screens (Landing, Planner, Itinerary, Booking, Map, Profile).

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import LandingPage from '../screens/LandingPage';
import PlannerScreen from '../screens/PlannerScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import BookingScreen from '../screens/BookingScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Define the stack navigator
const Stack = createNativeStackNavigator();

// Define the App Navigator component
const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Landing" 
      screenOptions={{ 
        // headerShown: false, // Uncomment to hide header globally
        // You can add default header styles here
      }}
    >
      <Stack.Screen 
        name="Landing" 
        component={LandingPage} 
        options={{ headerShown: false }} // Hide header specifically for Landing page
      />
      <Stack.Screen 
        name="Planner" 
        component={PlannerScreen} 
        options={{ title: 'AI Trip Planner' }} // Set header title
      />
      <Stack.Screen 
        name="Itinerary" 
        component={ItineraryScreen} 
        options={{ title: 'Your Itinerary' }}
      />
      <Stack.Screen 
        name="Booking" 
        component={BookingScreen} 
        options={{ title: 'Book Services' }}
      />
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{ title: 'Explore Map' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'My Profile' }}
      />
      {/* Add other screens like Auth screens if needed */}
    </Stack.Navigator>
  );
};

// Main Navigation Container wrapper
const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* You could add Tab Navigator or Drawer Navigator here if needed */}
    </NavigationContainer>
  );
};

export default Navigation;
