// components/Header.tsx
// Shared top header used across screens.
// Can be customized with title, back button, profile icon etc.

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Example icon library

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showProfileButton?: boolean;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  showProfileButton = false,
  onProfilePress,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} style={styles.button}>
            {/* <Icon name="arrow-back" size={24} color="#007AFF" /> */}
            <Text style={styles.iconPlaceholder}>{'<'}</Text> 
          </TouchableOpacity>
        )}
        {!showBackButton && <View style={styles.placeholder} />} 

        <Text style={styles.title}>{title}</Text>

        {showProfileButton && (
          <TouchableOpacity onPress={onProfilePress} style={styles.button}>
            {/* <Icon name="person" size={24} color="#007AFF" /> */}
            <Text style={styles.iconPlaceholder}>{'👤'}</Text> 
          </TouchableOpacity>
        )}
         {!showProfileButton && <View style={styles.placeholder} />} 
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f8f8', // Match background or make transparent
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56, // Standard header height
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  button: {
    padding: 8,
  },
  placeholder: {
    width: 40, // Same width as button for balance
    height: 40,
  },
  iconPlaceholder: { // Style for text fallback if icons aren't used
    fontSize: 20,
    color: '#007AFF',
  }
});
