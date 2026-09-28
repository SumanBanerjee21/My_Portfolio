import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const powerBiData = {
  'amazon-sales': {
    title: 'Amazon Sales Analysis',
    badge: 'Business Intelligence',
    file: '/powerbi/Amazon Sales Analysis.pbit',
    description: 'A comprehensive PowerBI dashboard analyzing Amazon sales metrics, product performance, and revenue trends to drive data-informed e-commerce strategies.',
    methodology: [
      { step: 'Data Modeling', desc: 'Imported and modeled raw Amazon sales data to establish robust table relationships for filtering.' },
      { step: 'DAX Calculations', desc: 'Authored custom DAX measures for YTD sales, profit margins, and dynamic growth metrics.' },
      { step: 'Visualization', desc: 'Designed interactive charts to identify seasonal trends and top-performing product categories.' }
    ],
    features: ['DAX', 'Data Modeling', 'E-Commerce Analytics']
  },
  'credit-card': {
    title: 'Credit Card Financial Report',
    badge: 'Financial Analytics',
    file: '/powerbi/Credit_Card_Report.pbit',
    description: 'In-depth financial reporting dashboard tracking credit card transactions, risk metrics, and customer spending patterns.',
    methodology: [
      { step: 'Data Cleansing', desc: 'Processed raw credit card transaction data to handle missing values and normalize spending categories.' },
      { step: 'Risk Metrics', desc: 'Calculated default rates, revolving balances, and high-risk demographic clusters using DAX.' },
      { step: 'Dashboard Design', desc: 'Created an executive-level dashboard for quick financial health monitoring.' }
    ],
    features: ['Finance', 'Risk Assessment', 'Executive Dashboard']
  },
  'ecommerce': {
    title: 'E-Commerce Sales Analysis',
    badge: 'Business Intelligence',
    file: '/powerbi/Ecommerce Sales Analysis.pbit',
    description: 'Interactive PowerBI dashboard dissecting multi-channel e-commerce sales, visualizing profitability, and identifying growth opportunities.',
    methodology: [
      { step: 'Multi-Channel Integration', desc: 'Combined sales data from various digital storefronts into a unified data model.' },
      { step: 'Profitability Analysis', desc: 'Built measures to track net profit vs gross revenue across different shipping regions.' },
      { step: 'Interactive Drill-downs', desc: 'Implemented drill-down capabilities allowing users to explore data from global regions down to specific product SKUs.' }
    ],
    features: ['Data Integration', 'Profitability Tracking', 'Interactive Visuals']
  },
  'paralympics': {
    title: 'Paralympics Data Visualization',
    badge: 'Sports Analytics',
    file: '/powerbi/Paraympics.pbit',
    description: 'Engaging visual data story built in PowerBI exploring Paralympics historical data, athlete achievements, and global participation metrics.',
    methodology: [
      { step: 'Historical Data Aggregation', desc: 'Gathered decades of Paralympics participation and medal data.' },
      { step: 'Geospatial Mapping', desc: 'Utilized PowerBI map visuals to display global medal distributions and country participation.' },
      { step: 'Data Storytelling', desc: 'Structured the dashboard to flow as a narrative, highlighting the growth of the games over time.' }
    ],
    features: ['Data Storytelling', 'Geospatial Maps', 'Historical Trends']
  },
  'securitisation': {
    title: 'Securitisation Risk Dashboard',
    badge: 'Risk Management',
    file: '/powerbi/Securitisation_Risk_Dashboard.pbit',
    description: 'Financial risk management dashboard designed to monitor and evaluate securitisation risks, loan pools, and tranche performances.',
    methodology: [
      { step: 'Loan Pool Analysis', desc: 'Aggregated complex loan pool data to visualize outstanding balances and interest rates.' },
      { step: 'Tranche Performance', desc: 'Modeled financial tranches to monitor risk exposure and payment waterfalls.' },
      { step: 'Stress Testing Visuals', desc: 'Built scenario-based visual indicators to show portfolio resilience under different default rates.' }
    ],
    features: ['Complex Data Modeling', 'Financial Tranches', 'Stress Testing']
  },
  'zenith': {
    title: 'Zenith Sales Performance',
    badge: 'Enterprise Analytics',
    file: '/powerbi/Zenith_sales.pbit',
    description: 'Enterprise sales dashboard visualizing Zenith\'s team performance, regional sales distributions, and revenue target achievements.',
    methodology: [
      { step: 'Sales Rep Tracking', desc: 'Created a relational model linking sales representatives to their closed deals and regional targets.' },
      { step: 'Target vs Actual', desc: 'Utilized bullet charts and gauge visuals to cleanly display performance against quarterly KPIs.' },
      { step: 'Dynamic Filtering', desc: 'Added advanced slicers for executives to filter performance by team, region, and product line.' }
    ],
    features: ['KPI Tracking', 'Sales Teams', 'Dynamic Slicers']
  },
  'hr-analytics': {
    title: 'HR Analytics Dashboard',
    badge: 'Human Resources',
    file: '/powerbi/hr analysis.pbit',
    description: 'Human Resources dashboard providing insights into workforce demographics, employee attrition, and performance metrics to optimize talent management.',
    methodology: [
      { step: 'Demographic Modeling', desc: 'Mapped employee data to track age, gender, and department distributions.' },
      { step: 'Attrition Analysis', desc: 'Calculated attrition rates using DAX to identify departments with high turnover.' },
      { step: 'Performance Correlation', desc: 'Visualized the relationship between employee training hours, tenure, and performance ratings.' }
    ],
    features: ['Attrition Tracking', 'Demographics', 'Workforce Optimization']
  }
};

const PowerBIDetails = () => {
  const { id } = useParams();
  const project = powerBiData[id];

  if (!project) {
    return <div className="text-white text-center py-20">Project not found.</div>;
  }

  return (
    <div className="flex flex-col min-h-full pb-24 pt-8">
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {project.badge}
          </span>
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Completed
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex gap-4 mt-8">
          <a 
            href={project.file} 
            download
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-black rounded-lg font-bold transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download PowerBI Template (.pbit)
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </span>
              Development Process
            </h2>
            
            <div className="space-y-6">
              {project.methodology.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">{idx + 1}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.step}</h3>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>

        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-gray-800 rounded-2xl p-6 shadow-lg sticky top-24"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Tools & Features</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Software</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Power BI Desktop</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Power Query</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Core Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">{f}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-200/80 text-sm leading-relaxed">
                <strong className="text-yellow-400 block mb-1">How to view:</strong> 
                Download the `.pbit` file and open it using Power BI Desktop. You may need to provide the underlying dataset if prompted by the template.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PowerBIDetails;
