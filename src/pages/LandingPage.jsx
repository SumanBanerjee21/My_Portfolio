import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % photos.length);
  };
  const photos = [
    '/images/Resume_Recent_Photo.png', // Professional
    '/images/1.jpg', // Casual 1
    '/images/2.jpg', // Casual 2
    '/images/3.jpg'
  ];

  return (
    <div className="relative flex flex-col min-h-full">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center lg:items-start pt-12 pb-24">
      {/* Left Text Section */}
      <div className="lg:w-1/2 flex flex-col gap-8 lg:sticky lg:top-32 h-fit">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-gray-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Open to work & relocate
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Suman Banerjee
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
            Data Analyst <br />
            <span className="text-blue-400 font-medium">Machine Learning</span> & AI Enthusiast <br />
            Full Stack Explorer
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <a href="mailto:suman.banerjee.in.cs@gmail.com" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Get in touch
          </a>
          <a href="https://github.com/SumanBanerjee21" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-800 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/suman-banerjee-394822261/" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-800 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Right Image Stack Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 relative h-[400px] md:h-[500px]">
        {photos.map((photo, idx) => {
          // Calculate offset relative to the active card
          const offset = (idx - activeCardIndex + photos.length) % photos.length;
          
          // Define the z-index so the active card is always on top
          const zIndex = photos.length - offset;
          
          // Only show up to 3 cards behind the active one to avoid clutter
          const isVisible = offset < 4;
          if (!isVisible) return null;

          // Define specific rotations for the stacked cards so their corners peak out uniquely
          const rotations = [0, 4, -3, 6];
          const yOffsets = [0, 20, 40, 60];
          const scales = [1, 0.95, 0.9, 0.85];

          return (
            <motion.div
              key={photo}
              onClick={handleNextCard}
              className={`absolute w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl cursor-pointer ${offset === 0 ? 'hover:border-gray-500' : ''}`}
              initial={false}
              animate={{
                scale: scales[offset],
                y: yOffsets[offset],
                rotate: rotations[offset],
                zIndex: zIndex,
                opacity: offset === 0 ? 1 : (1 - offset * 0.15)
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <img 
                src={photo} 
                alt={`Suman Photo ${idx}`} 
                className={`w-full h-full object-cover select-none ${idx === 0 || idx === 3 ? 'object-top' : 'object-center'}`} 
                draggable="false"
              />
              
              {/* Optional overlay for the active card */}
              {offset === 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">
                    {idx === 0 ? 'Professional' : 'Casual'}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
