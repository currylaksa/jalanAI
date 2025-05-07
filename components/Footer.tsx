// components/Footer.tsx
// App footer with links to About, Privacy, Contact, and SDG 11 impact

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Linking,
  Dimensions
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the navigation type for TypeScript
type RootStackParamList = {
  About: undefined;
  Privacy: undefined;
  Contact: undefined;
  SDG11: undefined;
  // Add other screens as needed
};

const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 768;

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  const openExternalLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={isMobile ? styles.mobileLinksContainer : styles.linksContainer}>
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => navigateTo('About')}
        >
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
        
        <Text style={styles.separator}>|</Text>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => navigateTo('Privacy')}
        >
          <Text style={styles.linkText}>Privacy</Text>
        </TouchableOpacity>
        
        <Text style={styles.separator}>|</Text>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => navigateTo('Contact')}
        >
          <Text style={styles.linkText}>Contact</Text>
        </TouchableOpacity>
        
        <Text style={styles.separator}>|</Text>
        
        <TouchableOpacity 
          style={styles.linkItem}
          onPress={() => navigateTo('SDG11')}
        >
          <Text style={styles.linkText}>SDG 11 Impact</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          © {new Date().getFullYear()} JalanAI. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004D40',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  mobileLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  linkItem: {
    padding: 5,
  },
  linkText: {
    color: '#E0F2F1',
    fontSize: 14,
  },
  separator: {
    color: '#80CBC4',
    marginHorizontal: 5,
  },
  copyrightContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  copyrightText: {
    color: '#80CBC4',
    fontSize: 12,
  }
});