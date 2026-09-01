import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { hireMeRoles } from '../data/hireMeData';

const HireMeDetails = () => {
  const { id } = useParams();
  const role = hireMeRoles.find(r => r.id === id);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!role) {
    return <Navigate to="/hire-me" replace />;
  }

  const otherRoles = hireMeRoles.filter(r => r.id !== id);

  return (
    <div className="relative flex flex-col min-h-full pb-24 pt-8">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <Link 
          to="/hire-me"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transition-transform group-hover:-translate-x-1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to all roles
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Banner, Description, FAQ) */}
          <div className="flex-1">
            {/* Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-full h-64 md:h-80 rounded-3xl bg-gradient-to-br ${role.gradient} shadow-2xl flex items-center justify-center p-8 mb-8 relative overflow-hidden`}
            >
              {/* Subtle overlay patterns could go here */}
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
              <h1 className="text-4xl md:text-5xl font-black text-white text-center tracking-tight relative z-10 drop-shadow-lg">
                {role.title}
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {role.longDescription}
              </p>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {role.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-800">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-gray-200">{faq.q}</span>
                      <motion.svg 
                        animate={{ rotate: openFaqIndex === idx ? 180 : 0 }}
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0 ml-4"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 pb-4 text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sticky Box) */}
          <div className="w-full lg:w-[400px] shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sticky top-24 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{role.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Availability</p>
                <h3 className="text-xl font-bold text-white mb-6">Schedule via Mail or Call</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`mailto:suman.banerjee.in.cs@gmail.com?subject=Inquiry regarding ${role.title} role`}
                    className="flex items-center justify-center gap-2 w-full bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-xl transition-colors shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><polyline points="m22,7 12,14 2,7"></polyline></svg>
                    Send an Email
                  </a>
                  
                  <a 
                    href="tel:+919832128998"
                    className="flex items-center justify-center gap-2 w-full bg-gray-800/50 border border-gray-700 hover:border-gray-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +91 98321 28998
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  {role.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Explore Other Roles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-gray-800"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRoles.map(other => (
              <Link 
                to={`/hire-me/${other.id}`}
                key={other.id}
                className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-500 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${other.gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <span className="text-white font-bold text-xs tracking-wider">{other.shortName}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{other.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{other.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HireMeDetails;
