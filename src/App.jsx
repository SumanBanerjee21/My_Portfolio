import React, { useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from 'react-router-dom';

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
import LogisticsLabelPrintingDetails from './pages/LogisticsLabelPrintingDetails';


/* =========================================================
   SCROLL TO TOP
========================================================= */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


/* =========================================================
   SUBTLE MOUSE FOLLOW GLOW
========================================================= */
const MouseGlow = () => {
  const glowRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const supportsFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;

    if (!supportsFinePointer) {
      glow.style.display = 'none';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const handlePointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      glow.style.opacity = '1';
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      'pointermove',
      handlePointerMove,
      { passive: true }
    );

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      );

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="
        fixed
        left-0
        top-0
        z-[2]
        pointer-events-none
        w-72
        h-72
        -ml-36
        -mt-36
        rounded-full
        opacity-0
        blur-3xl
        transition-opacity
        duration-200
      "
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(59,130,246,0.28) 0%,
            rgba(96,165,250,0.18) 22%,
            rgba(59,130,246,0.08) 45%,
            transparent 72%
          )
        `,
        boxShadow:
          '0 0 80px rgba(59,130,246,0.18)'
      }}
    />
  );
};
/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `transition-colors px-3 py-2 rounded-lg ${
      isActive
        ? 'text-white bg-white/10'
        : 'hover:text-white hover:bg-white/5'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-950/10 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">

        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Suman Logo"
            className="w-10 h-10 rounded-full border border-gray-700/50 shadow-lg"
          />
        </div>

        <div className="hidden md:flex gap-1 lg:gap-2 text-sm font-medium text-gray-400 items-center">

          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/certificates" className={linkClass}>
            Certificates
          </NavLink>

          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>

          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>

          <NavLink to="/hire-me" className={linkClass}>
            Hire Me
          </NavLink>

        </div>

        {/* Mobile menu indicator */}
        <div className="md:hidden text-gray-400 text-xs">
          Menu
        </div>

      </nav>
    </header>
  );
};


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <Router>

      <ScrollToTop />

      {/* Global mouse-follow ambient light */}
      <MouseGlow />

      <div className="min-h-screen flex flex-col bg-background text-foreground relative">

        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">

          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<LandingPage />}
            />

            {/* Main Pages */}
            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/certificates"
              element={<Certificates />}
            />

            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/resume"
              element={<Resume />}
            />

            <Route
              path="/hire-me"
              element={<HireMe />}
            />

            <Route
              path="/hire-me/:id"
              element={<HireMeDetails />}
            />

            {/* Project Details */}
            <Route
              path="/project/veda-ai"
              element={<VedaAIDetails />}
            />

            <Route
              path="/project/edupro"
              element={<EduProDetails />}
            />

            <Route
              path="/project/sales-forecasting"
              element={<SalesForecastingDetails />}
            />

            <Route
              path="/project/fraud-detection"
              element={<FraudDetectionDetails />}
            />

            <Route
              path="/project/clv"
              element={<CLVDetails />}
            />

            <Route
              path="/project/powerbi/:id"
              element={<PowerBIDetails />}
            />

            <Route
              path="/project/logistics-label-printing"
              element={<LogisticsLabelPrintingDetails />}
            />

          </Routes>

        </main>

      </div>

    </Router>
  );
}

export default App;