import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Diagnostico from './sections/Diagnostico';
import Propuestas from './sections/Propuestas';
import QuickWin from './sections/QuickWin';
import Impacto from './sections/Impacto';
import SobreMi from './sections/SobreMi';

function App() {
  const handleScrollToDiagnostico = () => {
    const element = document.getElementById('diagnostico');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-emt-bg font-sans overflow-x-hidden">
      <Navbar />
      <Hero onScrollDown={handleScrollToDiagnostico} />
      <Diagnostico />
      <Propuestas />
      <QuickWin />
      <Impacto />
      <SobreMi />
    </div>
  );
}

export default App;
