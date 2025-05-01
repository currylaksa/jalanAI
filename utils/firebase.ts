// utils/firebase.ts
// Firebase initialization and helper functions for accessing Auth and Firestore.

// --- TODO: Install firebase SDK: `npx expo install firebase` ---
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// --- TODO: Add your Firebase config here ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase App
let app;
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApp();
// }

// Initialize Auth with persistence
// let auth;
// try {
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//   });
// } catch (error) {
//   // If initialization failed (e.g., in SSR or test environment), fallback or get existing instance
//   auth = getAuth(app);
// }

// Initialize Firestore
// const db = getFirestore(app);

// --- Placeholder Functions (Implement with actual Firebase logic) ---

// Auth Functions
export const getCurrentUser = () => {
  // return auth.currentUser;
  console.warn('Firebase getCurrentUser not implemented');
  return null; // Placeholder
};

export const signOutUser = async () => {
  // return auth.signOut();
  console.warn('Firebase signOutUser not implemented');
  return Promise.resolve(); // Placeholder
};

// Firestore Functions (Example: Trips)
export const saveTripToFirestore = async (tripId: string, tripData: any) => {
  // const tripRef = doc(db, 'trips', tripId);
  // return setDoc(tripRef, tripData, { merge: true }); // Use setDoc with merge to update or create
  console.warn('Firebase saveTripToFirestore not implemented');
  return Promise.resolve(); // Placeholder
};

export const getTripFromFirestore = async (tripId: string) => {
  // const tripRef = doc(db, 'trips', tripId);
  // const docSnap = await getDoc(tripRef);
  // return docSnap.exists() ? docSnap.data() : null;
  console.warn('Firebase getTripFromFirestore not implemented');
  return Promise.resolve(null); // Placeholder
};

export const getUserTrips = async (userId: string) => {
  // const tripsCol = collection(db, 'trips');
  // const q = query(tripsCol, where("userId", "==", userId)); // Assuming trips have a userId field
  // const querySnapshot = await getDocs(q);
  // return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.warn('Firebase getUserTrips not implemented');
  return Promise.resolve([]); // Placeholder
};

// Firestore Functions (Example: Bookings)
export const saveBookingToFirestore = async (bookingData: any) => {
  // // Assume bookingData includes userId
  // const bookingsCol = collection(db, 'users', bookingData.userId, 'bookings'); // Example structure
  // return addDoc(bookingsCol, bookingData);
  console.warn('Firebase saveBookingToFirestore not implemented');
  return Promise.resolve(); // Placeholder
};

// Export initialized services if needed elsewhere
// export { auth, db };
