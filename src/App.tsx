import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

// Add necessary styles for animations
import './animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <Demo />
          <Testimonials />
          <FAQ />
          <GetStarted />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;