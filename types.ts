// FIX: Add and export the AppView type to resolve the import error in BottomNav.tsx.
export type AppView = 'map' | 'list';

export interface Property {
  id: string;
  area: string;
  fileName: string;
  housingProject: string;
  price: number;
  features: string;
  bedrooms: number | null;
  imageUrl?: string; // To store the actual uploaded image URL
  location: {
    lat: number;
    lng: number;
  };
}

export type ParsedProperty = Omit<Property, 'id' | 'location' | 'imageUrl'>;

export interface FilterState {
  area: string;
  priceRange: [number, number];
  bedrooms: number | 'all';
  searchTerm: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface AIAnalysis {
  highlights: string[];
  redFlags: string[];
  keyFeatures: string[];
}