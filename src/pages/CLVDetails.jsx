import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CLVDetails = () => {
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
          <span className="inline-block bg-pink-500/20 text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Predictive Analytics
          </span>
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Completed
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Customer Lifetime Value Analysis
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          An end-to-end business intelligence pipeline leveraging RFM segmentation, Gradient Boosting machine learning, and an interactive Streamlit dashboard.
        </p>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="/clv_final.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View Documentation
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
              <span className="p-2 bg-pink-500/20 text-pink-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </span>
              The Main Idea
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Retail businesses often have massive customer bases, but not all customers contribute equally to revenue. Analyzing a dataset of over 805k transactions from 5,878 customers, this project seeks to systematically identify which customers are valuable (Champions), which are likely to churn (At Risk), and which require different marketing strategies. By converting raw transactional data into customer-level intelligence, businesses can optimize their marketing spend and retention efforts.
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
              <span className="p-2 bg-rose-500/20 text-rose-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </span>
              Methodology & Workflow
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">RFM Segmentation</h3>
                  <p className="text-muted">Calculated Recency (days since last purchase), Frequency (number of unique invoices), and Monetary value (total revenue) for each customer. Customers were then grouped into logical business segments like "Champions", "Loyal Customers", and "Churned".</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">CLV Estimation & Pareto Analysis</h3>
                  <p className="text-muted">Estimated the Customer Lifetime Value using purchase behavior and lifespan. The project successfully verified the Pareto Principle: the top 20% of the customer base generated 77.24% of the total revenue.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Machine Learning & Dashboard</h3>
                  <p className="text-muted">Trained Random Forest, XGBoost, and Gradient Boosting models to predict a customer's CLV tier (Low, Medium, High). The Gradient Boosting model achieved a 97.70% accuracy. The entire pipeline was then deployed to an interactive Streamlit dashboard for business stakeholders.</p>
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
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Core Application</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Python</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Streamlit</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Pandas</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Scikit-learn</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Gradient Boosting</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">XGBoost</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Random Forest</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Data Visualization</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Plotly</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Matplotlib</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Seaborn</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CLVDetails;
