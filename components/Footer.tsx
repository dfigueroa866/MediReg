
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-color py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-lg">local_hospital</span>
            </div>
            <span className="font-bold text-text-main">Clínica Vital</span>
          </div>
          
          <p className="text-sm text-text-secondary">
            © 2024 Clínica Vital. Todos los derechos reservados.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
