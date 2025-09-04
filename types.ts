export interface Property {
  id: string;
  area: string;
  fileName: string;
  housingProject: string;
  price: number;
  features: string;
  bedrooms: number | null;
  location: {
    lat: number;
    lng: number;
  };
}

export type ParsedProperty = Omit<Property, 'id' | 'location'>;

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

export type AppView = 'map' | 'list';
