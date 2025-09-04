import React from 'react';

interface HeaderProps {
  onFilterClick?: () => void;
  onUploadClick?: () => void;
}

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-8 w-6 md:w-8 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
);

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);


export const Header: React.FC<HeaderProps> = ({ onFilterClick, onUploadClick }) => {
  return (
    <header className="bg-gray-800 text-white shadow-md border-b border-gray-700 z-10">
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-3">
          <MapPinIcon />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Riyadh Realty <span className="text-cyan-400">Navigator</span>
          </h1>
        </div>
        
        {/* Desktop Upload Button */}
        <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-400">AI-Powered Property Explorer</span>
            <button
                onClick={onUploadClick}
                className="flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm shadow-md"
            >
                <UploadIcon />
                <span className="ml-2">Upload Ads</span>
            </button>
        </div>

         {/* Mobile Filter Button */}
        <div className="md:hidden">
            <button onClick={onFilterClick} className="p-2 rounded-md hover:bg-gray-700 transition-colors">
                <FilterIcon />
            </button>
        </div>
      </div>
    </header>
  );
};