// utils/mapData.ts
// Static or dynamic list of cultural POIs in Malaysia (e.g., Melaka, Penang, Sabah).
// Used in MapScreen to populate markers.

// Define an interface for Point of Interest
export interface PointOfInterest {
  id: string;
  title: string;
  description: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  category?: string; // e.g., 'Historic', 'Nature', 'Museum'
  imageUrl?: string; // Optional image for callout
}

// --- TODO: Replace with actual data, potentially fetched from a backend or CMS ---
export const culturalPOIs: PointOfInterest[] = [
  // Kuala Lumpur & Selangor
  {
    id: 'kl-01',
    title: 'Petronas Twin Towers',
    description: 'Iconic skyscrapers with a sky bridge & observation deck.',
    coordinate: { latitude: 3.1578, longitude: 101.7119 },
    category: 'Landmark',
    imageUrl: 'https://example.com/images/petronas.jpg', // Replace with actual URL
  },
  {
    id: 'kl-02',
    title: 'Batu Caves',
    description: 'Limestone hill featuring Hindu shrines & a large statue.',
    coordinate: { latitude: 3.2379, longitude: 101.6840 },
    category: 'Religious Site',
  },
  {
    id: 'kl-03',
    title: 'Merdeka Square (Dataran Merdeka)',
    description: 'Historic square where Malaysian independence was declared.',
    coordinate: { latitude: 3.1478, longitude: 101.6936 },
    category: 'Historic',
  },
  // Melaka
  {
    id: 'mkz-01',
    title: 'A Famosa Fort',
    description: 'Remains of a 16th-century Portuguese fortress.',
    coordinate: { latitude: 2.1933, longitude: 102.2506 },
    category: 'Historic',
  },
  {
    id: 'mkz-02',
    title: 'Jonker Street (Jalan Hang Jebat)',
    description: 'Famous for its night market, antiques, and food.',
    coordinate: { latitude: 2.1967, longitude: 102.2463 },
    category: 'Market',
  },
  // Penang
  {
    id: 'pen-01',
    title: 'George Town UNESCO World Heritage Site',
    description: 'Historic colonial city center with street art & diverse culture.',
    coordinate: { latitude: 5.4174, longitude: 100.3354 }, // Approximate center
    category: 'Historic',
  },
  {
    id: 'pen-02',
    title: 'Kek Lok Si Temple',
    description: 'One of the largest Buddhist temples in Southeast Asia.',
    coordinate: { latitude: 5.3998, longitude: 100.2736 },
    category: 'Religious Site',
  },
  // Add more POIs for Sabah, Sarawak, etc.
];

// --- TODO: Function to potentially fetch dynamic POIs ---
export const fetchDynamicPOIs = async (region?: string): Promise<PointOfInterest[]> => {
  console.warn('fetchDynamicPOIs not implemented, returning static data.');
  // In a real app, this would make an API call based on the region
  return Promise.resolve(culturalPOIs);
};
