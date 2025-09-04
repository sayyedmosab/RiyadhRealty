import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'default' | 'large';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = 'default' }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    default: 'max-w-md',
    large: 'max-w-3xl h-full md:h-auto md:max-h-[90vh] md:rounded-lg'
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center animate-fade-in"
      style={{ zIndex: 1000 }} // Use a high z-index to ensure it's above the Leaflet map.
      onClick={onClose}
    >
      <div 
        className={`bg-gray-700 text-gray-100 shadow-xl w-full flex flex-col ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {children}
      </div>
    </div>
  );
};