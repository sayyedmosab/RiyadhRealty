import React from 'react';
import type { Property } from '../types';

const BedIcon = () => (
    <svg className="h-5 w-5 mr-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M19 9.5A2.5 2.5 0 0016.5 7h-13A2.5 2.5 0 001 9.5v7A2.5 2.5 0 003.5 19h13a2.5 2.5 0 002.5-2.5v-7zM2 9.5A1.5 1.5 0 013.5 8h13A1.5 1.5 0 0118 9.5v.5H2v-.5zM15 12a1 1 0 01-1-1H6a1 1 0 110-2h8a1 1 0 110 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg className="h-5 w-5 mr-1.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.22.655-.369.255-.149.533-.32.81-.518.277-.198.567-.41.85-.645.284-.236.562-.49.82-.756l.012-.012a7.037 7.037 0 002.121-4.162c.158-.52.23-1.043.23-1.574 0-2.828-2.22-5.143-5.005-5.143s-5.005 2.315-5.005 5.143c0 .531.072 1.054.23 1.574.368 1.213.987 2.333 1.737 3.322l.012.012c.258.266.536.52.82.756.283.235.573.447.85.645.277.198.555.369.81.518.255.149.469.269.655.369a5.741 5.741 0 00.28.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
);


export const PropertyCard: React.FC<{ property: Property, onClick: () => void }> = ({ property, onClick }) => {
    return (
        <div
            onClick={onClick}
            role="button"
            aria-label={`View details for ${property.housingProject}`}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-700 transition-all duration-300 ease-in-out hover:border-cyan-500 hover:shadow-cyan-500/20 hover:-translate-y-1 active:scale-[0.98] active:bg-gray-700/50"
        >
            <img 
                src={`https://picsum.photos/seed/${property.id}/400/250`} 
                alt="Property placeholder"
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
                <h3 className="font-bold text-xl text-cyan-400 leading-tight truncate">{property.housingProject}</h3>
                
                <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span className="flex items-center">
                        <LocationIcon />
                        {property.area}
                    </span>
                    {property.bedrooms && (
                        <span className="flex items-center bg-gray-700 px-2 py-1 rounded-full">
                            <BedIcon />
                            {property.bedrooms} Bedrooms
                        </span>
                    )}
                </div>
                
                <div className="border-t border-gray-700 pt-3">
                    <p className="text-2xl font-bold text-white text-right">
                        {typeof property.price === 'number'
                          ? `SAR ${property.price.toLocaleString()}`
                          : 'Price not available'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}