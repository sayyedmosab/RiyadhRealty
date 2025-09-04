import React, { useState } from 'react';
import type { FilterState } from '../types';
import { Modal } from './Modal';

interface FilterPanelProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  areas: string[];
  bedrooms: (number | 'all')[];
  propertyCount: number;
  isOverlay: boolean;
  onClose?: () => void;
}

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M`;
  }
  return `${Math.round(price / 1000)}k`;
};

const SocialIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 12.06c0-5.76-4.74-10.5-10.5-10.5S1.5 6.3 1.5 12.06c0 5.25 3.84 9.63 8.82 10.38V15.1H7.83v-3.03h2.49v-2.31c0-2.46 1.47-3.81 3.72-3.81 1.05 0 2.16.18 2.16.18v2.58h-1.32c-1.2 0-1.56.72-1.56 1.5v1.86h2.88l-.45 3.03h-2.43v7.35c4.98-.75 8.82-5.13 8.82-10.38Z"></path>
    </svg>
);


export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters, areas, bedrooms, propertyCount, isOverlay, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], value] }));
    };
    
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setFilters(prev => ({ ...prev, priceRange: [value, prev.priceRange[1]] }));
    };

    return (
        <div className="p-4 space-y-6 h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                 <h2 className="text-xl font-bold text-cyan-400">Filter Properties</h2>
                 {isOverlay && (
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                 )}
            </div>
            
            <div className="flex-grow space-y-6 overflow-y-auto pr-2">
                <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">Search by Name/Feature</label>
                    <input
                        type="text"
                        id="search"
                        value={filters.searchTerm}
                        onChange={(e) => setFilters(f => ({ ...f, searchTerm: e.target.value }))}
                        placeholder="e.g., Malqa Residence, rooftop lounge..."
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>

                <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-1">District / Area</label>
                    <select
                        id="area"
                        value={filters.area}
                        onChange={(e) => setFilters(f => ({ ...f, area: e.target.value }))}
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500"
                    >
                        {areas.map(area => (
                            <option key={area} value={area}>{area === 'all' ? 'All Areas' : area}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Bedrooms</label>
                    <div className="grid grid-cols-4 gap-2">
                        {bedrooms.map(bed => (
                            <button
                                key={bed}
                                onClick={() => setFilters(f => ({ ...f, bedrooms: bed }))}
                                className={`px-2 py-2 text-sm rounded-md transition-colors ${filters.bedrooms === bed ? 'bg-cyan-600 text-white font-bold' : 'bg-gray-700 hover:bg-gray-600'}`}
                            >
                                {bed === 'all' ? 'All' : bed}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                    <div className="text-center text-lg font-semibold text-cyan-300 mb-2">
                        SAR {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
                    </div>
                    <div className="space-y-3">
                         <div>
                            <label className="text-xs text-gray-400">Min Price</label>
                            <input
                                type="range"
                                min="0"
                                max="5900000"
                                step="100000"
                                value={filters.priceRange[0]}
                                onChange={handleMinPriceChange}
                                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer range-thumb:bg-cyan-500"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-400">Max Price</label>
                            <input
                                type="range"
                                id="price"
                                min="100000"
                                max="6000000"
                                step="100000"
                                value={filters.priceRange[1]}
                                onChange={handlePriceChange}
                                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-4 space-y-3">
                 <div className="text-center text-lg font-medium">
                    <span className="text-cyan-400 font-bold">{propertyCount}</span> properties found
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-lg"
                >
                    <SocialIcon />
                    Sync with Facebook Groups
                </button>
                {isOverlay && (
                    <button 
                        onClick={onClose} 
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                        Done
                    </button>
                )}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className="text-lg font-bold text-cyan-400">Conceptual Feature: Social Media Sync</h3>
                <p className="mt-2 text-sm text-gray-300">
                    This feature demonstrates how the app could find new housing opportunities by scanning social media.
                </p>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-gray-100">How it would work:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-400 space-y-1">
                        <li>Requires a secure, server-side backend service.</li>
                        <li>You would securely authenticate your Facebook account.</li>
                        <li>The service would monitor specified housing groups for new posts.</li>
                        <li>AI would parse posts to extract details like price, location, and features.</li>
                        <li>AI would also scan comments for fraud warnings to filter out scams.</li>
                    </ul>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                    Directly implementing this in a frontend-only web application is not feasible due to security and technical limitations (CORS, API policies).
                </p>
                <div className="mt-6 text-right">
                    <button onClick={() => setIsModalOpen(false)} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Got it!
                    </button>
                </div>
            </Modal>
        </div>
    );
};