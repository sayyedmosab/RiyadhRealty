import React from 'react';
import type { AppView } from '../types';

interface BottomNavProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10V7m0 0L5 5m4 2l6-3m-6 3l6 10" />
    </svg>
);

const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
);

export const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
    
    const NavButton: React.FC<{
        isActive: boolean,
        onClick: () => void,
        label: string,
        children: React.ReactNode
    }> = ({ isActive, onClick, label, children }) => {
        return (
            <button
                onClick={onClick}
                className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
            >
                {children}
                <span className="text-xs mt-1">{label}</span>
            </button>
        )
    };

    return (
        <nav className="bg-gray-800 border-t border-gray-700 flex shadow-lg">
            <NavButton isActive={activeView === 'map'} onClick={() => setActiveView('map')} label="Map">
                <MapIcon />
            </NavButton>
            <NavButton isActive={activeView === 'list'} onClick={() => setActiveView('list')} label="List">
                <ListIcon />
            </NavButton>
        </nav>
    )
}