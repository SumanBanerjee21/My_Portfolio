import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'powerbi',
      title: 'Power BI Dashboard Development',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
      gradient: 'from-yellow-500 to-orange-600',
      description: 'Transform your raw, messy data (Excel, SQL) into automated, interactive Power BI dashboards. I build visually stunning reports that allow you to track KPIs and make immediate data-driven decisions.',
      target: 'Ideal for SMBs, e-commerce, and agencies.',
      price: 'Starting at $300 / dashboard'
    },
    {
      id: 'ai-chatbots',
      title: 'Custom AI Assistants & Chatbots',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Leverage cutting-edge LLMs (Google Gemini, OpenAI) to build tailored AI chatbots for your business. Automate customer support, internal Q&A, or analyze large documents instantly.',
      target: 'Ideal for customer service automation and internal knowledge bases.',
      price: 'Starting at $500 / project'
    },
    {
      id: 'web-apps',
      title: 'Lightweight Data Web Apps',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Need a custom calculator, data viewer, or segmentation tool? I build fast, interactive internal web applications using Python and Streamlit—no expensive full-stack team required.',
      target: 'Ideal for non-technical founders and internal HR/Sales teams.',
      price: 'Starting at $400 / app'
    },
    {
      id: 'predictive',
      title: 'Predictive Analytics & Forecasting',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg>,
      gradient: 'from-purple-500 to-pink-600',
      description: 'Stop guessing and start predicting. I build custom Machine Learning models to forecast future trends like next quarter\'s sales, customer churn risk, or customer lifetime value (CLV).',
      target: 'Ideal for retail, SaaS, and proactive e-commerce businesses.',
      price: 'Starting at $1,000 / model'
    },
    {
      id: 'data-cleaning',
      title: 'Data Cleaning & Insight Reporting',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Have collected data but lack the technical skills to analyze it? I take raw data dumps, clean them rigorously using Python/SQL, and deliver a comprehensive Exploratory Data Analysis (EDA) report.',
      target: 'Ideal for researchers, marketers, and early-stage startups.',
      price: 'Starting at $200 / dataset'
    }
  ];

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
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-blue-400 font-medium mb-6">
            Available for Freelance & Consulting
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-6">Freelance Services</h1>
          <p className="text-xl text-muted leading-relaxed">
            I offer specialized consulting and development services for businesses looking to leverage their data and integrate AI into their workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-500 group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-gray-800 mt-auto">
                <p className="text-xs font-medium text-gray-500 mb-4">{service.target}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                </div>
                <a 
                  href={`mailto:suman.banerjee.in.cs@gmail.com?subject=Consulting Inquiry: ${service.title}`}
                  className="inline-flex items-center justify-center w-full bg-white text-black hover:bg-gray-200 font-bold py-2.5 px-4 rounded-xl transition-colors text-sm shadow-lg"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
