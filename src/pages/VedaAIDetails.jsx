import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VedaAIDetails = () => {
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
          <span className="inline-block bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Generative AI
          </span>
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Completed
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          VedaAI Teacher's Toolkit
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          An AI Assessment Pipeline that automates the extraction, mapping, and grading of handwritten student answer sheets using cutting-edge multimodal AI.
        </p>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="https://veda-ai-submission-silk.vercel.app/" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            Live Demo
          </a>
          <a 
            href="https://github.com/SumanBanerjee21/veda-ai-submission" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
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
              <span className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </span>
              The Main Idea
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Grading handwritten answer sheets is one of the most time-consuming tasks for educators. VedaAI is designed to solve this by creating an automated pipeline. A teacher simply uploads a scanned PDF of a student's handwritten answer sheet and the original question paper. The system then intelligently reads the handwriting, maps the answers to their respective questions, evaluates them for accuracy, and assigns marks automatically.
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
              <span className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </span>
              How It Works Under the Hood
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Extraction</h3>
                  <p className="text-muted">The application uses the Google Gemini Vision API to read handwritten question papers and automatically extract structured JSON lists containing questions and their sub-parts.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Mapping & Grading</h3>
                  <p className="text-muted">The vision model mathematically maps the handwritten answers on the uploaded sheet to their corresponding extracted questions. It then evaluates the student's answer for correctness and assigns partial or full marks.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dynamic Bounding Boxes</h3>
                  <p className="text-muted">To ensure transparency, the system automatically overlays precise CSS bounding boxes directly onto the scanned PDF image on the frontend, showing exactly where the student wrote the answer it just graded.</p>
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
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">React</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Tailwind CSS</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Backend & AI</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Google Gemini API</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Multimodal Vision</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Vercel (Frontend)</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Render (Backend)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-200/80 text-sm leading-relaxed">
                <strong className="text-yellow-400 block mb-1">Note on Demo:</strong> 
                As the backend is hosted on Render's free tier, initial cold starts may take up to 50 seconds to extract the first document.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VedaAIDetails;
