import { useState, useEffect } from 'react';
import type { Property } from '../types';
import { preprocessedProperties } from '../data/propertyData';

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = () => {
      try {
        setError(null);
        setLoading(true);
        
        // Directly use the pre-processed, local data. This is extremely fast.
        // The data is already cleaned and deduplicated.
        
        // A minimal timeout prevents UI blocking on large datasets and ensures a smooth render.
        setTimeout(() => {
          setProperties(preprocessedProperties);
          setLoading(false);
        }, 50);

      } catch (err) {
        console.error("Failed to load pre-processed property data:", err);
        setError("Could not load property data due to an internal error.");
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { properties, setProperties, loading, error };
};
