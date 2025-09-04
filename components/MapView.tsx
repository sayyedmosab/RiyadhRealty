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

// This component will handle map view updates
const MapUpdater: React.FC<{ center: [number, number], zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    // FIX: The `pan` property is not a valid option for `setView`. The animation duration is controlled by the `duration` property at the top level of the options object.
    map.setView(center, zoom, {
        animate: true,
        duration: 1,
    });
  }, [center, zoom, map]);
  return null;
};

export const MapView: React.FC<MapViewProps> = ({ properties, onMarkerClick, center, zoom }) => {
  
  const getIconUrl = (projectId: string) => {
    let hash = 0;
    for (let i = 0; i < projectId.length; i++) {
        const char = projectId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    const hue = hash % 360;
    return `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-hsl(${hue}, 80%, 60%).png`;
  };

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
          icon={new L.Icon({
            iconUrl: getIconUrl(property.housingProject),
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })}
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
    </MapContainer>
  );
};