import React, { useState } from 'react';
import type { FilterState, ParsedProperty, Property } from '../types';
import { Modal } from './Modal';
import { extractPropertyFromText, getPropertyCoordinates } from '../services/geminiService';


interface FilterPanelProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  areas: string[];
  bedrooms: (number | 'all')[];
  propertyCount: number;
  isOverlay: boolean;
  onClose?: () => void;
  onAddProperty: (property: Property) => void;
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

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6.273 8.273l2.828 2.828M8.273 6.273l2.828-2.828M12 2v2M12 20v2M22 12h-2M4 12H2M17.727 6.273l-2.828 2.828M15.727 17.727l-2.828-2.828M12 17.727a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
);

const samplePost = `FOR SALE in Hittin district!

Amazing offer on a beautiful 3-bedroom duplex apartment in The Boulevard project. Features a huge open-plan living space and premium marble flooring. The project has a private cinema and gardens. Perfect for a family.

Price is SAR 2,100,000. Serious buyers only, please DM.`;

const AiSimulationModal: React.FC<{
    onClose: () => void;
    onAddProperty: (property: Property) => void;
}> = ({ onClose, onAddProperty }) => {
    const [postText, setPostText] = useState(samplePost);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [parsedResult, setParsedResult] = useState<ParsedProperty | null>(null);

    const handleAnalyze = async () => {
        setIsAnalyzing(true);
        setError(null);
        setParsedResult(null);
        try {
            const result = await extractPropertyFromText(postText);
            setParsedResult(result);
        } catch (err) {
            setError("The AI failed to analyze the text. Please try modifying it or try again.");
            console.error(err);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleAddToMap = async () => {
        if (!parsedResult) return;

        try {
            const coordinatesMap = await getPropertyCoordinates([parsedResult.housingProject]);
            const coords = coordinatesMap[parsedResult.housingProject];
            const isValidCoords = coords && typeof coords.lat === 'number' && typeof coords.lng === 'number';
            const location = isValidCoords ? coords : { lat: 24.7136, lng: 46.6753 };
            
            const newProperty: Property = {
              ...parsedResult,
              id: `social-${Date.now()}`,
              location,
              imageUrl: `https://picsum.photos/seed/social-${Date.now()}/400/250`,
            };
            
            onAddProperty(newProperty);
            onClose();
        } catch (err) {
            setError("Could not get coordinates for this property. It cannot be added to the map.");
            console.error(err);
        }
    };
    
    return (
        <>
            <h3 className="text-lg font-bold text-cyan-400">Live AI Simulation: Finding Deals on Facebook</h3>
            <p className="mt-2 text-sm text-gray-300">
                Due to Facebook's strict privacy rules, direct integration isn't possible. This simulation shows how our AI can analyze a social media post in real-time to find new properties.
            </p>
            <div className="mt-4 space-y-4">
                <div>
                    <label htmlFor="post-text" className="block text-sm font-semibold text-gray-200 mb-1">Sample Facebook Post (Editable)</label>
                    <textarea
                        id="post-text"
                        rows={8}
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                </div>
                
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    <SparklesIcon />
                  {isAnalyzing ? 'Analyzing Post...' : 'Analyze Post with AI'}
                </button>
                
                {isAnalyzing && (
                    <div className="flex justify-center items-center p-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                        <p className="ml-3 text-gray-300">AI is reading the post...</p>
                    </div>
                )}

                {error && <p className="text-center text-red-400 bg-red-900/50 p-2 rounded-md">{error}</p>}
                
                {parsedResult && (
                    <div className="space-y-3 animate-fade-in">
                        <h4 className="font-semibold text-gray-100">AI Extraction Result:</h4>
                        <pre className="bg-gray-900 p-3 rounded-lg text-xs text-cyan-300 overflow-x-auto">
                            {JSON.stringify(parsedResult, null, 2)}
                        </pre>
                        <button
                            onClick={handleAddToMap}
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                        >
                            Add to Map
                        </button>
                    </div>
                )}
            </div>
            
            <div className="mt-6 text-right">
                <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Close
                </button>
            </div>
        </>
    )
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters, areas, bedrooms, propertyCount, isOverlay, onClose, onAddProperty }) => {
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
                <AiSimulationModal onClose={() => setIsModalOpen(false)} onAddProperty={onAddProperty} />
            </Modal>
        </div>
    );
};
