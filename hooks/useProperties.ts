import { useState, useEffect } from 'react';
import type { Property, Coordinates } from '../types';
import { parsePropertiesCSV, getPropertyCoordinates } from '../services/geminiService';
import { RAW_CSV_DATA } from '../data/propertyData';

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        setError(null);
        setLoading(true);
        
        // Step 1: Parse CSV data into structured JSON using AI
        const parsedData = await parsePropertiesCSV(RAW_CSV_DATA);

        // Step 2: Get coordinates for each housing project using AI
        const projectNames = [...new Set(parsedData.map(p => p.housingProject))];
        const coordinatesMap = await getPropertyCoordinates(projectNames);

        // Step 3: Combine data and add unique IDs
        const combinedProperties: Property[] = parsedData.map((p, index) => {
          const coords = coordinatesMap[p.housingProject];
          
          // Add robust validation for coordinates to prevent map errors
          const isValidCoords = coords && typeof coords.lat === 'number' && typeof coords.lng === 'number';

          const location: Coordinates = isValidCoords
            ? { lat: coords.lat, lng: coords.lng }
            : { lat: 24.7136, lng: 46.6753 }; // Default to Riyadh center if coords are missing or invalid

          return {
            ...p,
            id: `${p.fileName}-${index}`,
            location,
          };
        });

        setProperties(combinedProperties);
      } catch (err) {
        console.error("Failed to process property data:", err);
        setError("Could not load property data. The AI service may be unavailable. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndProcessData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { properties, setProperties, loading, error };
};
