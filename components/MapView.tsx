import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Property } from '../types';

interface MapViewProps {
  properties: Property[];
  onMarkerClick: (property: Property) => void;
  center: [number, number];
  zoom: number;
}

const MapUpdater: React.FC<{ center: [number, number], zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, {
        animate: true,
        duration: 1,
    });
  }, [center, zoom, map]);
  return null;
};

// SVG for a villa or standalone house.
const houseIconSvg = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" class="w-8 h-8 drop-shadow-lg">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.25 8.25a.75.75 0 11-1.06 1.06l-1.12-1.12V21a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V11.97l-1.12 1.12a.75.75 0 01-1.06-1.06l8.25-8.25z" />
  </svg>
`;

// SVG for an apartment building.
const apartmentIconSvg = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" class="w-8 h-8 drop-shadow-lg">
    <path fill-rule="evenodd" d="M.75 4.5A.75.75 0 011.5 3.75h13.5a.75.75 0 01.75.75v15a.75.75 0 01-.75.75H1.5a.75.75 0 01-.75-.75v-15zM6 6.75A.75.75 0 016.75 6h3a.75.75 0 010 1.5h-3A.75.75 0 016 6.75zm0 3.75A.75.75 0 016.75 9.75h3a.75.75 0 010 1.5h-3A.75.75 0 016 10.5zm0 3.75A.75.75 0 016.75 13.5h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm6-6.75A.75.75 0 0112.75 6h3a.75.75 0 010 1.5h-3A.75.75 0 0112 6.75zm0 3.75A.75.75 0 0112.75 9.75h3a.75.75 0 010 1.5h-3A.75.75 0 0112 10.5zm0 3.75A.75.75 0 0112.75 13.5h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm0 3.75a.75.75 0 0112.75 17.25h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM12 17.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm-6 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    <path d="M18.75 3.75a.75.75 0 00-.75.75v15a.75.75 0 001.5 0v-15a.75.75 0 00-.75-.75zM22.5 3.75a.75.75 0 00-.75.75v15a.75.75 0 001.5 0v-15a.75.75 0 00-.75-.75z" />
  </svg>
`;

const createPropertyIcon = (property: Property) => {
  // Determine if a property is "new"
  const isNew = /new|brand new|new build/i.test(property.features);
  const color = isNew ? '#22c55e' : '#38bdf8'; // green-500 or sky-400

  // Determine property type and select icon
  let iconSvg;
  const description = `${property.housingProject.toLowerCase()} ${property.features.toLowerCase()}`;
  if (description.includes('apartment') || description.includes('شقة')) {
    iconSvg = apartmentIconSvg(color);
  } else {
    // Default to house icon for villas, duplexes, etc.
    iconSvg = houseIconSvg(color);
  }

  return new L.DivIcon({
    html: iconSvg,
    className: '', // important to clear default styling
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const MapLegend = () => (
  <div className="leaflet-bottom leaflet-right">
    <div className="leaflet-control leaflet-bar bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg border border-gray-600 shadow-xl text-white text-xs w-40">
      <h4 className="font-bold text-sm text-cyan-400 border-b border-gray-600 pb-1 mb-2">Legend</h4>
      <div className="space-y-2">
          <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: apartmentIconSvg('#e0e0e0') }} />
              <span>Apartment</span>
          </div>
          <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: houseIconSvg('#e0e0e0') }} />
              <span>Villa / House</span>
          </div>
      </div>
      <div className="pt-2 mt-2 border-t border-gray-600 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
          <span>New Listing</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-sky-400 flex-shrink-0" />
          <span>Standard Listing</span>
        </div>
      </div>
    </div>
  </div>
);


export const MapView: React.FC<MapViewProps> = ({ properties, onMarkerClick, center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <MapUpdater center={center} zoom={zoom} />
      {properties.map(property => (
         <Marker 
          key={property.id} 
          position={[property.location.lat, property.location.lng]}
          eventHandlers={{
            click: () => onMarkerClick(property),
          }}
          icon={createPropertyIcon(property)}
        >
          <Popup>
            <div className="p-1">
              <h3 className="font-bold text-md text-cyan-600">{property.housingProject}</h3>
              <p className="text-sm text-gray-500">{property.area}</p>
              <p className="text-lg font-semibold text-gray-800 mt-1">
                {typeof property.price === 'number'
                  ? `SAR ${property.price.toLocaleString()}`
                  : 'Price not available'
                }
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapLegend />
    </MapContainer>
  );
};
