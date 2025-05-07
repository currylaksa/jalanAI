// screens/LandingPage.tsx
// Modified to use local asset icons instead of external images that are causing errors

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  Dimensions 
} from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');
const cardWidth = width > 768 ? width / 3 - 30 : width - 40;

// Use icon.png which we know exists instead of trying to load the destination images
const destinations = [
  {
    id: '1',
    name: 'Langkawi',
    description: 'Discover pristine beaches and lush rainforests on Malaysia\'s jewel island.',
    // Using the icon.png that we know exists
    image: require('../assets/icon.png') 
  },
  {
    id: '2',
    name: 'Melaka',
    description: 'Explore a UNESCO World Heritage city with rich colonial history and vibrant culture.',
    image: require('../assets/icon.png')
  },
  {
    id: '3',
    name: 'Sabah',
    description: 'Climb Mount Kinabalu and encounter orangutans in their natural habitat.',
    image: require('../assets/icon.png')
  },
];

const LandingPage = ({ navigation }: any) => {
  return (
    <View style={styles.wrapper}>
      <Navbar />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.headline}>Discover Malaysia Your Way — Personalized by AI</Text>
          
          <View style={styles.heroVisuals}>
            {/* Use a colored background instead of trying to load an image */}
            <View 
              style={{
                width: '80%',
                height: '100%',
                backgroundColor: '#80CBC4',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>
                Discover Malaysia
              </Text>
            </View>
          </View>
          
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('Planner')}
          >
            <Text style={styles.ctaButtonText}>Chat with our Travel Planner</Text>
          </TouchableOpacity>
        </View>

        {/* How it Works Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          
          <View style={styles.stepsContainer}>
            <View style={styles.step}>
              <View style={styles.stepIconContainer}>
                <Text style={styles.stepIcon}>💬</Text>
              </View>
              <Text style={styles.stepTitle}>Chat</Text>
              <Text style={styles.stepDescription}>Tell us what you love in a trip</Text>
            </View>
            
            <View style={styles.step}>
              <View style={styles.stepIconContainer}>
                <Text style={styles.stepIcon}>📋</Text>
              </View>
              <Text style={styles.stepTitle}>Get Plan</Text>
              <Text style={styles.stepDescription}>Receive AI-crafted itinerary</Text>
            </View>
            
            <View style={styles.step}>
              <View style={styles.stepIconContainer}>
                <Text style={styles.stepIcon}>✅</Text>
              </View>
              <Text style={styles.stepTitle}>Book Everything</Text>
              <Text style={styles.stepDescription}>Confirm all in one place</Text>
            </View>
            
            <View style={styles.step}>
              <View style={styles.stepIconContainer}>
                <Text style={styles.stepIcon}>🌟</Text>
              </View>
              <Text style={styles.stepTitle}>Enjoy</Text>
              <Text style={styles.stepDescription}>Make unforgettable memories</Text>
            </View>
          </View>
        </View>

        {/* Highlight Benefits Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose JalanAI?</Text>
          
          <View style={styles.benefitsContainer}>
            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>🧳</Text>
              <Text style={styles.benefitTitle}>One-Stop Travel Platform</Text>
              <Text style={styles.benefitDescription}>Plan, book, and organize your entire trip in one app</Text>
            </View>
            
            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>🤖</Text>
              <Text style={styles.benefitTitle}>Personalized by Gemini</Text>
              <Text style={styles.benefitDescription}>AI-powered recommendations tailored to your preferences</Text>
            </View>
            
            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>🌦️</Text>
              <Text style={styles.benefitTitle}>Weather-Aware Planning</Text>
              <Text style={styles.benefitDescription}>Real-time adjustments based on weather forecasts</Text>
            </View>
            
            <View style={styles.benefit}>
              <Text style={styles.benefitIcon}>🏮</Text>
              <Text style={styles.benefitTitle}>Cultural Discovery</Text>
              <Text style={styles.benefitDescription}>Immerse yourself in authentic Malaysian experiences</Text>
            </View>
          </View>
        </View>

        {/* Featured Destinations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.destinationsScrollView}
            contentContainerStyle={styles.destinationsContainer}
          >
            {destinations.map(destination => (
              <View key={destination.id} style={styles.destinationCard}>
                {/* Destination card with icon image and colored background */}
                <View style={{
                  width: '100%',
                  height: 150,
                  backgroundColor: destination.id === '1' ? '#4DB6AC' : 
                                  destination.id === '2' ? '#26A69A' : '#00897B',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image 
                    source={destination.image} 
                    style={{width: 60, height: 60}}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.destinationInfo}>
                  <Text style={styles.destinationName}>{destination.name}</Text>
                  <Text style={styles.destinationDescription}>{destination.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Get Started Section */}
        <View style={styles.getStartedSection}>
          <Text style={styles.getStartedTitle}>Ready to plan your Malaysian adventure?</Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('Planner')}
          >
            <Text style={styles.getStartedButtonText}>Start Planning</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Footer />
      </ScrollView>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  
  // Hero Section
  heroSection: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#26A69A',
    paddingTop: 60,
    paddingBottom: 50,
  },
  headline: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 800,
  },
  heroVisuals: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  heroMap: {
    width: '80%',
    height: '100%',
  },
  ctaButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#1c1c1e',
    fontSize: 18,
    fontWeight: '600',
  },
  
  // Section Styles
  section: {
    width: '100%',
    maxWidth: 1200,
    padding: 20,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 30,
    textAlign: 'center',
  },
  
  // How it Works
  stepsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  step: {
    width: width > 768 ? '22%' : '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepIcon: {
    fontSize: 30,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#37474F',
    textAlign: 'center',
  },
  
  // Benefits
  benefitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  benefit: {
    width: width > 768 ? '22%' : '45%',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  benefitIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 8,
    textAlign: 'center',
  },
  benefitDescription: {
    fontSize: 14,
    color: '#37474F',
    textAlign: 'center',
  },
  
  // Destinations
  destinationsScrollView: {
    width: '100%',
  },
  destinationsContainer: {
    paddingHorizontal: 10,
  },
  destinationCard: {
    width: cardWidth,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destinationImage: {
    width: '100%',
    height: 150,
  },
  destinationInfo: {
    padding: 15,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 5,
  },
  destinationDescription: {
    fontSize: 14,
    color: '#37474F',
  },
  
  // Get Started Section
  getStartedSection: {
    width: '100%',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#E0F2F1',
    marginTop: 20,
  },
  getStartedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 20,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  getStartedButtonText: {
    color: '#1c1c1e',
    fontSize: 18,
    fontWeight: '600',
  },
});
