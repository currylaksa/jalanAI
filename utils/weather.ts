// utils/weather.ts
// Utility for checking weather conditions using OpenWeather API.
// Used in PlannerScreen to recommend alternate indoor/outdoor activities.

// --- TODO: Sign up for OpenWeather API and get an API key ---
const OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherParams {
  lat?: number;
  lon?: number;
  q?: string; // City name
}

// --- Placeholder Function (Implement with actual API call) ---
export const checkWeather = async (location: string | { lat: number; lon: number }): Promise<any> => {
  let params: WeatherParams = {};
  if (typeof location === 'string') {
    params.q = location;
  } else if (typeof location === 'object' && location.lat && location.lon) {
    params.lat = location.lat;
    params.lon = location.lon;
  }

  if (!params.q && !(params.lat && params.lon)) {
    console.error('Invalid location provided for weather check.');
    return Promise.reject('Invalid location');
  }

  const url = `${BASE_URL}?${params.lat ? `lat=${params.lat}&lon=${params.lon}` : `q=${params.q}`}&appid=${OPENWEATHER_API_KEY}&units=metric`;

  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   // --- TODO: Extract relevant weather info (e.g., temp, description, rain) ---
  //   return {
  //     temp: data.main?.temp,
  //     description: data.weather?.[0]?.description,
  //     rain: data.rain?.[ '1h'] || 0, // Rain volume for the last 1 hour
  //     icon: data.weather?.[0]?.icon,
  //     // Add more fields as needed
  //   };
  // } catch (error) {
  //   console.error("Error fetching weather data:", error);
  //   throw error;
  // }

  console.warn('OpenWeather checkWeather not implemented');
  // --- Placeholder Response ---
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  return {
    temp: 28,
    description: "scattered clouds (placeholder)",
    rain: 0,
    icon: "03d",
  };
  // --- End Placeholder ---
};
