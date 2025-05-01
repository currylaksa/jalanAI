// components/Button.tsx
// Reusable styled button component.

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: object; // Allow passing custom styles
  textStyle?: object; // Allow passing custom text styles
  variant?: 'primary' | 'secondary' | 'danger'; // Example variants
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
  variant = 'primary',
}) => {
  const getBackgroundColor = () => {
    if (disabled) return '#cccccc';
    switch (variant) {
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#dc3545';
      case 'primary':
      default:
        return '#007AFF';
    }
  };

  const getTextColor = () => {
    if (disabled) return '#888888';
    // Could adjust based on variant if needed, e.g., dark text on light button
    return '#ffffff';
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getBackgroundColor() },
        style, // Apply custom styles
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    minHeight: 48, // Ensure consistent height
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
