import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div className="relative flex flex-col min-h-full pb-24 pt-8">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-blue-400 font-medium mb-6">
            Dual Expertise
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">My Resumes</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the profile that best fits your requirements. You can view or download my highly specialized resumes below.
          </p>
        </motion.div>

        {/* Flex container for the two resumes */}
        <div className="flex flex-col xl:flex-row gap-8 items-stretch justify-center">
          
          {/* Data Analyst Resume Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Data Analyst
                </h2>
                <p className="text-sm text-gray-400 mt-1">Focused on BI, SQL, and Analytics</p>
              </div>
              <a 
                href="/Suman_Banerjee_DataAnalyst_Resume.pdf" 
                download="Suman_Banerjee_DataAnalyst_Resume.pdf"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download
              </a>
            </div>
            
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-800 bg-black">
              <iframe 
                src="/Suman_Banerjee_DataAnalyst_Resume.pdf#toolbar=0&navpanes=0" 
                className="w-full h-[600px] xl:h-[750px]"
                title="Data Analyst Resume"
              />
            </div>
          </motion.div>

          {/* AI/ML Resume Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  AI / ML Engineer
                </h2>
                <p className="text-sm text-gray-400 mt-1">Focused on Deep Learning, LLMs, & Python</p>
              </div>
              <a 
                href="/Suman_Banerjee_AI_ML_Resume.pdf" 
                download="Suman_Banerjee_AI_ML_Resume.pdf"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download
              </a>
            </div>
            
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-800 bg-black">
              <iframe 
                src="/Suman_Banerjee_AI_ML_Resume.pdf#toolbar=0&navpanes=0" 
                className="w-full h-[600px] xl:h-[750px]"
                title="AI ML Resume"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
