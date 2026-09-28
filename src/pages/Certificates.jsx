import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ item }) => {
  const [showLearned, setShowLearned] = useState(false);

  const getGradient = (category) => {
    switch (category) {
      case 'Internships Certificate':
        return 'from-blue-600 to-cyan-700';
      case 'Courses Certificates':
        return 'from-purple-600 to-pink-700';
      case 'Results':
        return 'from-emerald-600 to-teal-800';
      default:
        return 'from-gray-700 to-gray-900';
    }
  };

  return (
    <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col group">
      {/* Top Half: Document Cover Design */}
      <div className="relative h-48 w-full overflow-hidden shrink-0 bg-gray-900">
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(item.category)} opacity-90 transition-transform duration-700 group-hover:scale-110`}></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        
        {/* Document Info Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-700 group-hover:scale-105">
          <div className="w-12 h-12 mb-3 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md px-4 line-clamp-2">{item.title}</h3>
          <p className="text-white/80 text-[10px] font-bold mt-2 tracking-widest uppercase drop-shadow-sm">{item.organization}</p>
        </div>

        {/* Bottom Dark Gradient for category tag contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full w-max tracking-wider uppercase shadow-sm border border-white/10">
            {item.category}
          </span>
        </div>
      </div>

      {/* Bottom Half: Details */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-lg font-semibold text-white mb-1">{item.organization}</h4>
        <p className="text-blue-400 text-sm font-medium mb-4">{item.date}</p>
        <p className="text-muted text-sm mb-6 flex-1">
          {item.description}
        </p>
        
        {item.link && (
          <div className="border-t border-gray-800 pt-4 mt-auto flex items-center justify-between">
            <a href={item.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-2 w-max">
              View Credential
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            {item.learned && (
              <button 
                onClick={() => setShowLearned(!showLearned)}
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all ${showLearned ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' : 'bg-transparent border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'}`}
              >
                {showLearned ? 'Close' : 'What I Learned'}
              </button>
            )}
          </div>
        )}

        {/* Expandable "What I Learned" Section */}
        {showLearned && item.learned && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            className="text-sm text-gray-300 bg-gray-900/80 p-4 rounded-xl border border-gray-800 shadow-inner"
          >
            <p className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.3 7 8.7 2.7c.9-.7 2.3-.7 3.2 0L17.3 7"></path><path d="M2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6"></path><path d="M8 21v-4"></path><path d="M16 21v-4"></path></svg>
              Key Takeaways
            </p>
            <p className="leading-relaxed">{item.learned}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'All',
    'Courses Certificates',
    'Internships Certificate',
    'Results'
  ];

  const items = [
    // INTERNSHIPS
    {
      title: 'Zeetheta Internship',
      organization: 'Zeetheta',
      category: 'Internships Certificate',
      description: 'Data analytics internship certificate.',
      learned: 'Focused on financial data modeling and securitization workflows. I learned how to clean complex financial datasets and derive actionable, real-world business insights.',
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', 
      date: 'Aug 1, 2026',
      link: '/Zeetheta_Certificate.pdf'
    },
    {
      title: 'Codec Internship',
      organization: 'Codec',
      category: 'Internships Certificate',
      description: 'Official internship certificate from Codec.',
      learned: 'Gained comprehensive experience in data analytics techniques, developing statistical reports, data visualization, and identifying business trends using Python and PowerBI.',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      date: 'Nov 20, 2025 - Dec 20, 2025',
      link: '/Codec Internship Certificate.pdf'
    },
    {
      title: 'NextGen Technohub Internship',
      organization: 'NextGen Technohub',
      category: 'Internships Certificate',
      description: 'Internship certification from NextGen Technohub.',
      learned: 'Mastered end-to-end data analysis. I wrote complex database queries with MySQL, processed data with Python, and built highly interactive dashboards with PowerBI.',
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      date: 'Mar 5, 2026 - Jun 5, 2026',
      link: '/NextGen_Technohub_certificate (1).pdf'
    },
    {
      title: 'Prodigy Internship',
      organization: 'Prodigy',
      category: 'Internships Certificate',
      description: 'Official internship completion certificate.',
      learned: 'Focused deeply on Machine Learning. I learned to build predictive ML models, perform critical feature engineering, and evaluate model performance for real-world scenarios.',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      date: 'Aug 1, 2025 - Aug 31, 2025',
      link: '/Prodigy Internship certificate.pdf'
    },
    {
      title: 'Unified Mentor Internship',
      organization: 'Unified Mentor',
      category: 'Internships Certificate',
      description: 'Internship certification from Unified Mentor.',
      learned: 'Practiced data preprocessing and Exploratory Data Analysis (EDA). I learned how to turn raw data into structured insights and deliver data-driven business recommendations.',
      imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      date: 'Mar 1, 2026 - Jun 1, 2026',
      link: '/Unified mentor Internship certificate.pdf'
    },

    // COURSES
    {
      title: 'Introduction to Data Analytics',
      organization: 'Coursera',
      category: 'Courses Certificates',
      description: 'Comprehensive certification covering data analytics fundamentals.',
      learned: 'Learned the foundational principles of data analytics, the complete data life cycle, how to ethically prepare and process data, and structured analytical thinking.',
      imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', 
      date: 'Jul 18, 2026',
      link: '/Coursera_Introduction to data analytics.pdf'
    },
    {
      title: 'IBM Excel for Data Analysis',
      organization: 'Coursera / IBM',
      category: 'Courses Certificates',
      description: 'Certification in Excel basics and data analysis.',
      learned: 'Mastered advanced Excel functions, pivot tables, and VLOOKUPs, learning how to effectively clean, organize, and analyze data quickly without writing code.',
      imageSrc: 'https://images.unsplash.com/photo-1555949963-aa79dcee9811?q=80&w=2070&auto=format&fit=crop',
      date: 'Jul 26, 2026',
      link: '/IBM_Coursera_Excel.pdf'
    },

    // RESULTS
    {
      title: 'B.Tech 8th Semester Result',
      organization: 'University of Kalyani',
      category: 'Results',
      description: 'Official B.Tech 8th Semester academic results.',
      imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      date: 'Jul 17, 2026',
      link: '/Btech_8th_Sem_Result.pdf'
    },
    {
      title: 'Diploma Certificate',
      organization: 'State Council',
      category: 'Results',
      description: 'Official Diploma Certificate in Computer Science & Technology.',
      imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      date: 'Feb 20, 2024',
      link: '/Diploma_Certificate.pdf'
    },
    {
      title: 'Diploma Final Sem Marksheet',
      organization: 'State Council',
      category: 'Results',
      description: 'Final semester marksheet for Diploma.',
      imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      date: 'Sep 11, 2023',
      link: '/Diploma_Final_Sem_Marksheet.pdf'
    },
    {
      title: '10th Grade Marksheet',
      organization: 'Board of Education',
      category: 'Results',
      description: 'Official 10th grade marksheet.',
      imageSrc: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      date: '2018',
      link: '/10thMarksheet.pdf'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(p => p.category === activeCategory);

  return (
    <div className="relative flex flex-col min-h-full">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-full pb-24 pt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Internships & Certificates</h1>
          <p className="text-xl text-muted">Professional experience and continuous learning.</p>
        </div>

        {/* Custom Dropdown Filter */}
        <div className="relative w-full md:w-64 z-20">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-gray-900/60 backdrop-blur-md border border-gray-700/50 text-white py-3 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer text-sm font-medium transition-shadow hover:shadow-lg shadow-black/20"
          >
            <span className="truncate">{activeCategory}</span>
            <motion.svg 
              animate={{ rotate: isDropdownOpen ? 180 : 0 }} 
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0 ml-2"
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 left-0 mt-2 z-20 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl py-2"
              >
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 ${activeCategory === cat ? 'text-blue-400 bg-blue-500/10' : 'text-gray-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
      >
        {filteredItems.map((item, idx) => (
          <CertificateCard key={idx} item={item} />
        ))}
      </motion.div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p className="text-xl">No records found in this category.</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Certificates;
