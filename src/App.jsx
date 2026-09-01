import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Services from './pages/Services';
import Resume from './pages/Resume';
import HireMe from './pages/HireMe';
import HireMeDetails from './pages/HireMeDetails';
import VedaAIDetails from './pages/VedaAIDetails';
import EduProDetails from './pages/EduProDetails';
import SalesForecastingDetails from './pages/SalesForecastingDetails';
import FraudDetectionDetails from './pages/FraudDetectionDetails';
import CLVDetails from './pages/CLVDetails';
import PowerBIDetails from './pages/PowerBIDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const linkClass = ({ isActive }) => 
    `transition-colors px-3 py-2 rounded-lg ${isActive ? 'text-white bg-white/10' : 'hover:text-white hover:bg-white/5'}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-950/10 backdrop-blur-md">
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <div className="font-bold text-2xl tracking-tighter text-white">SB.</div>
        <div className="flex gap-2 text-sm font-medium text-gray-400 items-center">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/hire-me" className={linkClass}>Hire Me</NavLink>
        </div>
      </nav>
    </header>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-12">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/veda-ai" element={<VedaAIDetails />} />
            <Route path="/project/edupro" element={<EduProDetails />} />
            <Route path="/project/sales-forecasting" element={<SalesForecastingDetails />} />
            <Route path="/project/fraud-detection" element={<FraudDetectionDetails />} />
            <Route path="/project/clv" element={<CLVDetails />} />
            <Route path="/project/powerbi/:id" element={<PowerBIDetails />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/hire-me/:id" element={<HireMeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
