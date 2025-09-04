import React from 'react';
import type { Property } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertyListViewProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
}

export const PropertyListView: React.FC<PropertyListViewProps> = ({ properties, onPropertySelect }) => {
  return (
    <div className="h-full w-full bg-gray-900 overflow-y-auto p-4">
        <div className="space-y-4 max-w-2xl mx-auto">
            {properties.map(property => (
                <PropertyCard 
                    key={property.id}
                    property={property}
                    onClick={() => onPropertySelect(property)}
                />
            ))}
        </div>
        {properties.length === 0 && (
             <div className="flex items-center justify-center h-full text-gray-500">
                <p>No properties match your current filters.</p>
            </div>
        )}
    </div>
  );
};