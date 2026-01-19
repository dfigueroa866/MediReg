
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  onNavigate: (view: AppView) => void;
  currentView: AppView;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-color bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">local_hospital</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main">
              {currentView === 'home' ? 'Clínica Vital' : 'MediReg'}
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
            >
              Citas
            </button>
            <button 
              onClick={() => onNavigate('registration')}
              className={`text-sm font-medium transition-colors ${currentView === 'registration' ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
            >
              Registro Médico
            </button>
            <button className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">Nosotros</button>
            <button className="inline-flex h-9 items-center justify-center rounded-lg bg-white border border-border-color px-4 text-sm font-medium text-text-main hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined mr-2 text-[18px]">support_agent</span>
              Soporte
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-text-secondary hover:text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
