import React from 'react';
import type { Property, AIAnalysis } from '../types';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
  onAnalyze: () => void;
  onViewOnMap: (property: Property) => void;
  isAnalyzing: boolean;
  analysisResult: AIAnalysis | null;
  isOverlay: boolean;
}

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6.273 8.273l2.828 2.828M8.273 6.273l2.828-2.828M12 2v2M12 20v2M22 12h-2M4 12H2M17.727 6.273l-2.828 2.828M15.727 17.727l-2.828-2.828M12 17.727a6 6 0 100-12 6 6 0 000 12z" />
    </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const AnalysisSection: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className={`text-md font-semibold text-${color}-400 mb-2`}>{title}</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose, onAnalyze, onViewOnMap, isAnalyzing, analysisResult, isOverlay }) => {
  const content = (
    <>
        <div className="relative mb-4">
            <img 
                src={`https://picsum.photos/seed/${property.id}/400/250`} 
                alt="Property placeholder" 
                className="rounded-lg w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <span className="text-2xl font-bold text-white drop-shadow-md">SAR {property.price.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">Placeholder image. This app cannot access your local files or Google Drive.</p>
        </div>

        <div className="space-y-4 px-4 pb-4">
          <div className="text-sm bg-gray-900 p-3 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-gray-200 mb-1">Description</h3>
            <p className="text-gray-300 leading-relaxed">{property.features}</p>
          </div>

          <div className="border-t border-gray-700 pt-4 space-y-3">
             {isOverlay && (
                <button
                    onClick={() => onViewOnMap(property)}
                    className="w-full flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    <MapPinIcon />
                    View on Map
                </button>
             )}
            <button
              onClick={onAnalyze}
              disabled={isAnalyzing}
              className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <SparklesIcon />
              {isAnalyzing ? 'Analyzing with AI...' : 'Analyze Description'}
            </button>
          </div>
          
          {isAnalyzing && (
            <div className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            </div>
          )}

          {analysisResult && (
            <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 space-y-4 animate-fade-in">
                <h3 className="text-lg font-bold text-gray-100">AI Analysis</h3>
                <AnalysisSection title="Highlights" items={analysisResult.highlights} color="green" />
                <AnalysisSection title="Key Features" items={analysisResult.keyFeatures} color="cyan" />
                <AnalysisSection title="Potential Red Flags" items={analysisResult.redFlags} color="red" />
            </div>
          )}
        </div>
    </>
  );

  if(isOverlay) {
    return (
        <div className="flex flex-col h-full bg-gray-800">
            {/* Sticky Header for Mobile */}
            <div className="sticky top-0 bg-gray-800/80 backdrop-blur-sm z-10 p-2 border-b border-gray-700">
                <div className="flex justify-between items-center">
                    <button onClick={onClose} className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700">
                        <BackIcon />
                    </button>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-cyan-400 truncate">{property.housingProject}</h2>
                        <p className="text-xs text-gray-400">{property.area}</p>
                    </div>
                    {/* Placeholder for actions */}
                    <div className="w-10"></div>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto">
                {content}
            </div>
        </div>
    )
  }

  // Desktop Layout
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-cyan-400 truncate pr-2">{property.housingProject}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon />
        </button>
      </div>
      <div className="flex-grow overflow-y-auto pr-2">
        {content}
      </div>
    </div>
  );
};