import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SalesForecastingDetails = () => {
  return (
    <div className="flex flex-col min-h-full pb-24 pt-8">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-block bg-rose-500/20 text-rose-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Deep Learning
          </span>
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Completed
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Hybrid Sales Forecasting
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          A predictive deep learning architecture combining LSTM and GRU models under a residual learning framework to forecast Reliance Industries’ stock and sales trends.
        </p>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="https://github.com/SumanBanerjee21/Sales_Forecasting_On_Reliance_Industries_Using_Hybrid" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            Source Code
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Main Idea */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="p-2 bg-rose-500/20 text-rose-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </span>
              The Challenge
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Financial time-series data like stock prices and corporate sales are notoriously noisy and volatile. Standard forecasting models often capture either the macro-trend correctly but fail on sudden spikes, or they overfit the noise and lose sight of the long-term trend. This project solves that dichotomy by splitting the forecasting into a two-stage correction problem.
            </p>
          </motion.section>

          {/* Under the Hood */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </span>
              Architecture Pipeline
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phase 1: LSTM Trend Model</h3>
                  <p className="text-muted">A Long Short-Term Memory (LSTM) network processes sliding window sequences generated from 10 years of normalized Yahoo Finance data. Its primary objective is to capture the macro-trend and low-frequency movements of the stock.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Residual Extraction</h3>
                  <p className="text-muted">Because the LSTM struggles with sudden spikes, the system calculates the residual error (Actual Value − LSTM Prediction). This residual time series represents the high-frequency variance that the LSTM couldn't explain.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phase 2: GRU Residual Model</h3>
                  <p className="text-muted">A Gated Recurrent Unit (GRU) model—chosen for its faster convergence and efficiency—is trained specifically on the residual sequence. The final hybrid forecast is then computed by adding the GRU's high-frequency correction term to the LSTM's trend prediction.</p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-gray-800 rounded-2xl p-6 shadow-lg sticky top-24"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Tools & Technologies</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Deep Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">TensorFlow / Keras</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">LSTM Networks</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">GRU Networks</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Data Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Pandas</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">NumPy</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">MinMax Scaling</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Dataset</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Yahoo Finance API</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">~10 Years Daily OHLCV</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SalesForecastingDetails;
