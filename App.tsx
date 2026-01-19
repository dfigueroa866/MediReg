
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import RegistrationView from './views/RegistrationView';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <LandingPage />
        ) : (
          <RegistrationView />
        )}
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
