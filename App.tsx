// App.tsx
// Main app entry point.
// Wraps the navigation container and sets up Firebase context if needed.

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation'; // Import the main navigator
// import { initializeFirebase } from './utils/firebase'; // Potentially initialize Firebase here if needed early

// --- TODO: Initialize Firebase or other global services here if required ---
// initializeFirebase(); 

export default function App() {
  return (
    <>
      {/* Use the main Navigation component */}
      <Navigation />
      {/* Style the status bar (optional) */}
      <StatusBar style="auto" />
    </>
  );
}
