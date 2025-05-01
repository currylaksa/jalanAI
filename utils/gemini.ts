// utils/gemini.ts
// Function to send messages to Gemini API.
// Handles formatting of prompts and returns structured itinerary responses.

// --- TODO: Install Google Generative AI SDK: `npm install @google/generative-ai` ---
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// --- TODO: Add your Gemini API Key (use environment variables in production!) ---
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

// --- TODO: Configure the Gemini model ---
const MODEL_NAME = "gemini-pro"; // Or other suitable model

// let genAI: GoogleGenerativeAI;
// try {
//   genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
// } catch (error) {
//   console.error("Failed to initialize GoogleGenerativeAI:", error);
//   // Handle initialization error appropriately
// }

// --- Placeholder Function (Implement with actual Gemini API call) ---
export const sendToGemini = async (prompt: string): Promise<any> => {
  // if (!genAI) {
  //   throw new Error("Gemini AI SDK not initialized.");
  // }

  // const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  // // --- TODO: Define safety settings (adjust as needed) ---
  // const safetySettings = [
  //   { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  //   { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  //   { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  //   { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  // ];

  // // --- TODO: Structure the prompt for itinerary generation ---
  // // Example: You might want to provide context or specific instructions
  // const fullPrompt = `
  //   You are a helpful Malaysian travel planning assistant named JalanAI.
  //   A user wants to plan a trip based on the following request: "${prompt}"
  //   Generate a suggested day-by-day itinerary in JSON format.
  //   The JSON should have a structure like: 
  //   { 
  //     "title": "Trip to [Location]", 
  //     "location": "[Primary Location]",
  //     "duration_days": [Number of days],
  //     "days": [ 
  //       { "day": 1, "theme": "[Optional Theme]", "activities": ["Activity 1", "Activity 2"] },
  //       { "day": 2, "theme": "[Optional Theme]", "activities": ["Activity 3", "Activity 4"] }
  //     ]
  //   }
  //   Focus on cultural experiences, sustainable travel options, and popular landmarks in Malaysia.
  //   Keep descriptions concise.
  // `;

  // try {
  //   const result = await model.generateContent(
  //     fullPrompt,
  //     // { safetySettings } // Apply safety settings if defined
  //   );
  //   const response = result.response;
  //   const responseText = response.text();

  //   // --- TODO: Parse the response text (assuming it's JSON as requested) ---
  //   try {
  //     const itineraryJson = JSON.parse(responseText);
  //     return itineraryJson;
  //   } catch (parseError) {
  //     console.error("Failed to parse Gemini response as JSON:", parseError);
  //     console.error("Raw Gemini response:", responseText);
  //     // Fallback: return raw text or a structured error
  //     return { error: "Failed to parse itinerary", rawResponse: responseText };
  //   }

  // } catch (error) {
  //   console.error("Error calling Gemini API:", error);
  //   throw error; // Re-throw the error to be handled by the caller
  // }

  console.warn('Gemini sendToGemini not implemented');
  // --- Placeholder Response ---
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
  return {
      title: `Placeholder Trip based on: ${prompt.substring(0, 20)}...`,
      location: "Kuala Lumpur (Placeholder)",
      duration_days: 2,
      days: [
        { day: 1, theme: "City Exploration", activities: ["Placeholder Activity 1", "Placeholder Activity 2"] },
        { day: 2, theme: "Culture & Shopping", activities: ["Placeholder Activity 3", "Placeholder Activity 4"] }
      ]
    };
  // --- End Placeholder ---
};
