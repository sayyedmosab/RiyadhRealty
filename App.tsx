import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { MapView } from './components/MapView';
import { FilterPanel } from './components/FilterPanel';
import { PropertyDetail } from './components/PropertyDetail';
import { Loader } from './components/Loader';
import { useProperties } from './hooks/useProperties';
import type { Property, FilterState, AIAnalysis, ParsedProperty, AppView } from './types';
import { analyzeDescriptionWithAI, extractPropertyFromImage, getPropertyCoordinates } from './services/geminiService';
import { UploadView } from './components/UploadView';
import { Modal } from './components/Modal';
import { BottomNav } from './components/BottomNav';
import { PropertyListView } from './components/PropertyListView';


const App: React.FC = () => {
  const { properties, setProperties, loading, error } = useProperties();
  const [filters, setFilters] = useState<FilterState>({
    area: 'all',
    priceRange: [0, 6000000],
    bedrooms: 'all',
    searchTerm: '',
  });
  
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysis | null>(null);
  
  // State for programmatically controlling the map
  const [mapCenter, setMapCenter] = useState<[number, number]>([24.7136, 46.6753]);
  const [mapZoom, setMapZoom] = useState<number>(11);

  // Mobile-specific state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [activeView, setActiveView] = useState<AppView>('map');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);


  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      const areaMatch = filters.area === 'all' || p.area === filters.area;
      const priceMatch = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
      const bedroomMatch = filters.bedrooms === 'all' || p.bedrooms === filters.bedrooms;
      
      const searchMatch = filters.searchTerm === '' ||
        (typeof p.housingProject === 'string' && p.housingProject.toLowerCase().includes(filters.searchTerm.toLowerCase())) ||
        (typeof p.features === 'string' && p.features.toLowerCase().includes(filters.searchTerm.toLowerCase()));
        
      return areaMatch && priceMatch && bedroomMatch && searchMatch;
    });
  }, [properties, filters]);

  const handlePropertySelect = useCallback((property: Property) => {
    setSelectedProperty(property);
    setAnalysisResult(null);
  }, []);
  
  const handleViewOnMap = useCallback((property: Property) => {
    setMapCenter([property.location.lat, property.location.lng]);
    setMapZoom(15);
    setActiveView('map'); // Switch to map view on mobile
    setSelectedProperty(null); // Close the detail view
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedProperty(null);
    setAnalysisResult(null);
  }, []);

  const handleAnalyze = async () => {
    if (!selectedProperty) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeDescriptionWithAI(selectedProperty.features);
      setAnalysisResult(result);
    } catch (err) {
      console.error("AI Analysis failed:", err);
      setAnalysisResult({
        highlights: [],
        redFlags: ["Failed to analyze the description. Please try again."],
        keyFeatures: [],
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleImageUploadAndProcess = async (files: File[]): Promise<{ success: number; failed: number }> => {
    let successCount = 0;
    let failedCount = 0;

    for (const file of files) {
      try {
        const reader = new FileReader();
        const fileReadPromise = new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const dataUrl = await fileReadPromise;
        const base64Data = dataUrl.split(',')[1];
        
        const parsedData: ParsedProperty = await extractPropertyFromImage(base64Data, file.type);
        
        const coordinatesMap = await getPropertyCoordinates([parsedData.housingProject]);
        const coords = coordinatesMap[parsedData.housingProject];
        const isValidCoords = coords && typeof coords.lat === 'number' && typeof coords.lng === 'number';
        const location = isValidCoords ? coords : { lat: 24.7136, lng: 46.6753 };
        
        const newProperty: Property = {
          ...parsedData,
          id: `upload-${file.name}-${Date.now()}`,
          location,
          imageUrl: dataUrl,
        };
        
        setProperties(prev => [...prev, newProperty]);
        successCount++;
      } catch (err) {
        console.error(`Failed to process file ${file.name}:`, err);
        failedCount++;
      }
    }
    
    if (successCount > 0) {
      setIsUploadOpen(false);
    }

    return { success: successCount, failed: failedCount };
  };
  
  const handleAddProperty = useCallback((newProperty: Property) => {
    setProperties(prev => [...prev, newProperty]);
    setMapCenter([newProperty.location.lat, newProperty.location.lng]);
    setMapZoom(16);
  }, [setProperties]);


  const uniqueAreas = useMemo(() => {
    const areas = new Set(properties.map(p => p.area));
    return ['all', ...Array.from(areas).sort()];
  }, [properties]);

  const uniqueBedroomCounts: (number | 'all')[] = useMemo(() => {
    const counts = new Set(properties.map(p => p.bedrooms).filter((b): b is number => b !== null));
    return ['all', ...Array.from(counts).sort((a,b) => a-b)];
  }, [properties]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
      <Header onUploadClick={() => setIsUploadOpen(true)} onFilterClick={() => setIsFilterPanelOpen(true)} />

      {loading && <Loader message="Initializing AI and loading property data..." />}
      {error && <div className="text-center p-4 text-red-400 bg-red-900">{error}</div>}
      
      <main className="flex-1 flex md:flex-row overflow-hidden relative">
        {/* --- Desktop Left Panel --- */}
        <div className="hidden md:block w-1/3 lg:w-1/4 h-full overflow-y-auto bg-gray-800 border-r border-gray-700 shadow-lg">
          {selectedProperty ? (
            <PropertyDetail
              property={selectedProperty}
              onClose={handleCloseDetail}
              onAnalyze={handleAnalyze}
              onViewOnMap={handleViewOnMap}
              isAnalyzing={isAnalyzing}
              analysisResult={analysisResult}
              isOverlay={false}
            />
          ) : (
            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              areas={uniqueAreas}
              bedrooms={uniqueBedroomCounts}
              propertyCount={filteredProperties.length}
              isOverlay={false}
              onAddProperty={handleAddProperty}
            />
          )}
        </div>
        
        {/* --- Main Content Area --- */}
        <div className="flex-1 h-full">
            {/* Desktop Map */}
            <div className="hidden md:block h-full w-full">
                <MapView properties={filteredProperties} onMarkerClick={handlePropertySelect} center={mapCenter} zoom={mapZoom} />
            </div>

             {/* Mobile View */}
            <div className="md:hidden h-full w-full">
               {activeView === 'map' && (
                  <MapView properties={filteredProperties} onMarkerClick={handlePropertySelect} center={mapCenter} zoom={mapZoom} />
               )}
               {activeView === 'list' && (
                  <PropertyListView properties={filteredProperties} onPropertySelect={handlePropertySelect} />
               )}
            </div>
        </div>

        {/* Mobile Bottom Nav */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 z-10">
          <BottomNav activeView={activeView} setActiveView={setActiveView} />
        </div>
      </main>

      {/* Mobile Property Detail Overlay */}
      {selectedProperty && (
         <div className="md:hidden absolute inset-0 z-50 bg-gray-800 animate-slide-in-up">
            <PropertyDetail
              property={selectedProperty}
              onClose={handleCloseDetail}
              onAnalyze={handleAnalyze}
              onViewOnMap={handleViewOnMap}
              isAnalyzing={isAnalyzing}
              analysisResult={analysisResult}
              isOverlay={true}
            />
         </div>
      )}

      {/* Mobile Filter Panel Overlay */}
       <Modal isOpen={isFilterPanelOpen} onClose={() => setIsFilterPanelOpen(false)} size="large">
        <div className="h-full bg-gray-800">
           <FilterPanel
                filters={filters}
                setFilters={setFilters}
                areas={uniqueAreas}
                bedrooms={uniqueBedroomCounts}
                propertyCount={filteredProperties.length}
                isOverlay={true}
                onClose={() => setIsFilterPanelOpen(false)}
                onAddProperty={handleAddProperty}
            />
        </div>
      </Modal>

      <Modal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} size="large">
        <UploadView onProcess={handleImageUploadAndProcess} onClose={() => setIsUploadOpen(false)} />
      </Modal>

    </div>
  );
};

export default App;