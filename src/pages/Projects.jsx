import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Half: Cover / Video */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-900 shrink-0">
        
        {/* Hover State (Video/Image) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}>
          {project.videoSrc ? (
            <video 
              ref={videoRef}
              src={project.videoSrc} 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-700"
            />
          ) : (
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700"
            />
          )}
        </div>

        {/* Default State (Gradient with text) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${project.gradientClass || 'from-blue-600 to-purple-700'} p-6 flex flex-col justify-between transition-opacity duration-500 z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full w-max tracking-wider uppercase">
            {project.status}
          </span>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/90 text-sm font-medium">{project.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* Bottom Half: Details */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag.name} className={`px-3 py-1 rounded-full text-xs font-semibold border ${tag.colorClass}`}>
              {tag.name}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
        <p className="text-muted text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
          <div className="flex gap-3">
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noreferrer" className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            )}
          </div>
          {project.detailsLink && (
            <Link to={project.detailsLink} className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'All',
    'Data analysis through Python and streamlit project',
    'PowerBI projects',
    'AI-Driven Solutions'
  ];

  const projects = [
    // AI-Driven Solutions
    {
      title: "VedaAI Teacher's Toolkit",
      category: 'AI-Driven Solutions',
      status: 'COMPLETED',
      shortDescription: 'AI Assessment Pipeline for grading answer sheets.',
      description: 'A full-stack application that automates the extraction, mapping, and grading of handwritten student answer sheets against question papers using multimodal AI (Google Gemini Vision). Built with React, Next.js, Tailwind CSS, and Python.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#0ea5e9] to-[#4f46e5]',
      tags: [
        { name: 'Generative AI', colorClass: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10' },
        { name: 'React & Next.js', colorClass: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' },
        { name: 'Python', colorClass: 'text-blue-400 border-blue-400/30 bg-blue-400/10' }
      ],
      links: { website: 'https://veda-ai-submission-silk.vercel.app/', github: 'https://github.com/SumanBanerjee21/veda-ai-submission' },
      detailsLink: '/project/veda-ai',

    },
    {
      title: "Hybrid Sales Forecasting",
      category: 'AI-Driven Solutions',
      status: 'COMPLETED',
      shortDescription: 'Predictive deep learning for Reliance stock/sales.',
      description: 'A Hybrid Deep Learning Forecasting System predicting Reliance Industries’ stock and sales trends. Combines LSTM for long-term trend learning and GRU for residual high-frequency fluctuation learning.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#f59e0b] to-[#dc2626]',
      tags: [
        { name: 'Deep Learning', colorClass: 'text-rose-400 border-red-400/30 bg-red-400/10' },
        { name: 'LSTM & GRU', colorClass: 'text-orange-400 border-orange-400/30 bg-orange-400/10' },
        { name: 'Time-Series', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' }
      ],
      links: { github: 'https://github.com/SumanBanerjee21/Sales_Forecasting_On_Reliance_Industries_Using_Hybrid' },
      detailsLink: '/project/sales-forecasting',

    },
    {
      title: "Advanced Fraud Detection",
      category: 'AI-Driven Solutions',
      status: 'COMPLETED',
      shortDescription: 'ML system analyzing 6.36M transactions.',
      description: 'A comprehensive fraud detection system identifying fraudulent financial transactions across over 6.36 million records. Achieved 99.98% AUC using XGBoost and SMOTE to handle severe class imbalance.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#10b981] to-[#047857]',
      tags: [
        { name: 'Machine Learning', colorClass: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
        { name: 'XGBoost', colorClass: 'text-teal-400 border-teal-400/30 bg-teal-400/10' },
        { name: 'Imbalanced Data', colorClass: 'text-green-400 border-green-400/30 bg-green-400/10' }
      ],
      links: { github: 'https://github.com/SumanBanerjee21/Fraud_Detection_Assignment' },
      detailsLink: '/project/fraud-detection',

    },

    // Python & Streamlit
    {
      title: "EduPro Student Segmentation",
      category: 'Data analysis through Python and streamlit project',
      status: 'COMPLETED',
      shortDescription: 'Streamlit app for course recommendations.',
      description: 'A Streamlit analytics application that aggregates transaction data into learner profiles. Utilizes K-Means clustering for student segmentation and delivers personalized course recommendations using content scoring.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#8b5cf6] to-[#6d28d9]',
      tags: [
        { name: 'Streamlit', colorClass: 'text-purple-400 border-purple-400/30 bg-purple-400/10' },
        { name: 'Clustering', colorClass: 'text-violet-400 border-violet-400/30 bg-violet-400/10' },
        { name: 'Data Analytics', colorClass: 'text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10' }
      ],
      links: { website: 'https://edupro-student-segmentation-lapuqd9zyyt5ezhaelbdzn.streamlit.app/', github: 'https://github.com/SumanBanerjee21/edupro-student-segmentation' },
      detailsLink: '/project/edupro',

    },
    {
      title: "Customer Lifetime Value Analysis",
      category: 'Data analysis through Python and streamlit project',
      status: 'COMPLETED',
      shortDescription: 'RFM segmentation and ML CLV prediction.',
      description: 'Analyzed an online retail dataset of 805k+ records to segment customers using RFM analysis. Estimated Customer Lifetime Value (CLV) and predicted customer tiers using Gradient Boosting (97.7% accuracy), deployed on an interactive Streamlit dashboard.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      gradientClass: 'from-[#ec4899] to-[#be185d]',
      tags: [
        { name: 'Python', colorClass: 'text-pink-400 border-pink-400/30 bg-pink-400/10' },
        { name: 'Streamlit', colorClass: 'text-rose-400 border-rose-400/30 bg-rose-400/10' },
        { name: 'RFM Analysis', colorClass: 'text-red-400 border-red-400/30 bg-red-400/10' }
      ],
      links: { website: '/clv_final.pdf' },
      detailsLink: '/project/clv',

    },

    // PowerBI Projects
    {
      title: 'Amazon Sales Analysis',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'In-depth dashboard for e-commerce insights.',
      description: 'A comprehensive PowerBI dashboard analyzing Amazon sales metrics, product performance, and revenue trends to drive data-informed e-commerce strategies.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#f59e0b] to-[#b45309]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'E-Commerce', colorClass: 'text-orange-400 border-orange-400/30 bg-orange-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/amazon-sales',

    },
    {
      title: 'Credit Card Financial Report',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Financial reporting and risk tracking.',
      description: 'In-depth financial reporting dashboard tracking credit card transactions, risk metrics, and customer spending patterns.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop',
      gradientClass: 'from-[#3b82f6] to-[#1d4ed8]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'Finance', colorClass: 'text-blue-400 border-blue-400/30 bg-blue-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/credit-card',

    },
    {
      title: 'E-Commerce Sales Analysis',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Multi-channel e-commerce visual analytics.',
      description: 'Interactive PowerBI dashboard dissecting multi-channel e-commerce sales, visualizing profitability, and identifying growth opportunities.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#10b981] to-[#047857]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'Data Visualization', colorClass: 'text-green-400 border-green-400/30 bg-green-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/ecommerce',

    },
    {
      title: 'Paralympics Data Visualization',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Historical insights into Paralympics data.',
      description: 'Engaging visual data story built in PowerBI exploring Paralympics historical data, athlete achievements, and global participation metrics.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1569083515437-0209df323869?q=80&w=1974&auto=format&fit=crop',
      gradientClass: 'from-[#8b5cf6] to-[#5b21b6]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'Sports Analytics', colorClass: 'text-purple-400 border-purple-400/30 bg-purple-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/paralympics',

    },
    {
      title: 'Securitisation Risk Dashboard',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Monitoring securitisation loan pools.',
      description: 'Financial risk management dashboard designed to monitor and evaluate securitisation risks, loan pools, and tranche performances.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#ef4444] to-[#991b1b]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'Risk Management', colorClass: 'text-red-400 border-red-400/30 bg-red-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/securitisation',

    },
    {
      title: 'Zenith Sales Performance',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Enterprise team sales distribution.',
      description: 'Enterprise sales dashboard visualizing Zenith\'s team performance, regional sales distributions, and revenue target achievements.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#0ea5e9] to-[#0369a1]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'Enterprise Analytics', colorClass: 'text-sky-400 border-sky-400/30 bg-sky-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/zenith',

    },
    {
      title: 'HR Analytics Dashboard',
      category: 'PowerBI projects',
      status: 'COMPLETED',
      shortDescription: 'Workforce demographics & attrition tracking.',
      description: 'Human Resources dashboard providing insights into workforce demographics, employee attrition, and performance metrics to optimize talent management.',
      videoSrc: '', 
      imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      gradientClass: 'from-[#14b8a6] to-[#0f766e]',
      tags: [
        { name: 'PowerBI', colorClass: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' },
        { name: 'HR Analytics', colorClass: 'text-teal-400 border-teal-400/30 bg-teal-400/10' }
      ],
      links: {},
      detailsLink: '/project/powerbi/hr-analytics',
      date: 'Aug 2026'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative flex flex-col min-h-full pb-24 pt-8">
      {/* Subtle White Faded Corners using CSS */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      {/* Added z-10 so the content sits on top of the background */}
      <div className="relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Projects</h1>
            <p className="text-xl text-muted">Recent work, data analytics, and creative projects.</p>
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
          key={activeCategory} // Forces re-animation when category changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-muted">
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
