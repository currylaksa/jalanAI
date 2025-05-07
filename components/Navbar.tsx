// components/Navbar.tsx
// App navigation bar with Logo, About, Plan My Trip, and Login/Register links

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Platform,
  Dimensions,
  Modal
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the navigation type for TypeScript
type RootStackParamList = {
  Landing: undefined;
  About: undefined;
  Planner: undefined;
  Profile: undefined;
  // Add other screens as needed
};

const Navbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [menuVisible, setMenuVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 768;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateTo = (screen: keyof RootStackParamList) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <TouchableOpacity 
          style={styles.logoContainer}
          onPress={() => navigateTo('Landing')}
        >
          <Text style={styles.logoText}>JalanAI</Text>
        </TouchableOpacity>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <View style={styles.navLinks}>
            <TouchableOpacity onPress={() => navigateTo('About')}>
              <Text style={styles.navLinkText}>About</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigateTo('Planner')}>
              <Text style={styles.navLinkText}>Plan My Trip</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={() => navigateTo('Profile')}
            >
              <Text style={styles.loginButtonText}>Login / Register</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
        )}

        {/* Mobile Menu Modal */}
        {isMobile && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={menuVisible}
            onRequestClose={() => setMenuVisible(false)}
          >
            <View style={styles.menuModal}>
              <View style={styles.menuContent}>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setMenuVisible(false)}
                >
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => navigateTo('About')}
                >
                  <Text style={styles.menuItemText}>About</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => navigateTo('Planner')}
                >
                  <Text style={styles.menuItemText}>Plan My Trip</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.menuItem, styles.loginMenuItem]}
                  onPress={() => navigateTo('Profile')}
                >
                  <Text style={styles.loginMenuItemText}>Login / Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#26A69A',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLinkText: {
    fontSize: 16,
    color: '#37474F',
    marginHorizontal: 16,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 16,
  },
  loginButtonText: {
    color: '#1c1c1e',
    fontSize: 16,
    fontWeight: '600',
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    fontSize: 28,
    color: '#26A69A',
  },
  menuModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContent: {
    width: '70%',
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'absolute',
    right: 0,
    paddingTop: 50,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#37474F',
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: 18,
    color: '#37474F',
  },
  loginMenuItem: {
    marginTop: 16,
    backgroundColor: '#FFA500',
    borderRadius: 8,
    borderBottomWidth: 0,
    paddingHorizontal: 16,
  },
  loginMenuItemText: {
    color: '#1c1c1e',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  }
});