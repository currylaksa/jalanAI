// screens/PlannerScreen.tsx
// Gemini chatbot screen.
// Collects user preferences (e.g., destination, budget, travel dates) and generates a trip itinerary.
// Sends and receives data from Gemini API (via utils/gemini.ts).

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
// import { sendToGemini } from '../utils/gemini'; // Import Gemini helper
// import { checkWeather } from '../utils/weather'; // Import Weather helper

const PlannerScreen = ({ navigation }: any) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // --- TODO: Call Gemini API --- 
    // try {
    //   const geminiResponse = await sendToGemini(inputText);
    //   const botMessage = { role: 'bot', text: geminiResponse }; // Adjust based on API response structure
    //   setMessages(prev => [...prev, botMessage]);

    //   // --- TODO: Check weather based on itinerary (optional) ---
    //   // const weatherInfo = await checkWeather(geminiResponse.location, geminiResponse.date);
    //   // console.log("Weather:", weatherInfo);

    //   // --- TODO: Navigate to ItineraryScreen with generated plan ---
    //   // navigation.navigate('Itinerary', { itinerary: geminiResponse });
    // } catch (error) {
    //   console.error("Error interacting with Gemini:", error);
    //   const errorMessage = { role: 'bot', text: 'Sorry, I encountered an error.' };
    //   setMessages(prev => [...prev, errorMessage]);
    // }
    // --- Placeholder Response --- 
    const placeholderResponse = { role: 'bot', text: `Okay, planning a trip based on: "${userMessage.text}". This is a placeholder response.` };
    setMessages(prev => [...prev, placeholderResponse]);
    // --- End Placeholder ---
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <ScrollView style={styles.chatArea}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Tell me about your dream trip..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

export default PlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  chatArea: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1eaff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    maxWidth: '80%',
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
});
