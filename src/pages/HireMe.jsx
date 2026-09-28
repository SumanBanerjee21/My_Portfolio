import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hireMeRoles } from '../data/hireMeData';

const HireMe = () => {
  return (
    <div className="relative flex flex-col min-h-full pb-24 pt-8">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Hire Me</h1>
          <p className="text-xl text-muted max-w-2xl">
            I'm available for freelance, contract, and full-time roles in the following areas.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {hireMeRoles.map((role, idx) => (
            <div 
              key={role.id}
              className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gray-500 group"
            >
              {/* Left Icon Square */}
              <div className={`w-24 h-24 shrink-0 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105`}>
                <span className="text-white font-black text-xl tracking-widest">{role.shortName}</span>
              </div>
              
              {/* Right Content */}
              <div className="flex flex-col flex-1 h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {role.description}
                </p>
                <Link 
                  to={`/hire-me/${role.id}`}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 w-max mt-auto border-b border-transparent hover:border-blue-300 pb-0.5"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
