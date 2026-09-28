import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FraudDetectionDetails = () => {
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
          <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Machine Learning
          </span>
          <span className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Completed
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Advanced Fraud Detection
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
          An enterprise-scale machine learning system that processes over 6.36 million financial transactions to identify fraud, overcoming severe class imbalances.
        </p>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="https://github.com/SumanBanerjee21/Fraud_Detection_Assignment" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
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
              <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              The Challenge
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Financial fraud detection is a classic "needle in a haystack" problem. With a dataset of over 6,362,620 transactions, fraudulent events accounted for less than 1% of the total data. Training standard machine learning models on this highly imbalanced data typically results in models that simply predict "Not Fraud" for everything—achieving 99% accuracy but entirely missing the actual fraud (100% false negatives). This project utilizes advanced sampling and boosting techniques to solve this.
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
              <span className="p-2 bg-teal-500/20 text-teal-400 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </span>
              Methodology & Performance
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Class Imbalance Handling</h3>
                  <p className="text-muted">Applied SMOTE (Synthetic Minority Over-sampling Technique) to artificially synthesize new examples of the minority class (fraudulent transactions). This forced the models to recognize the geometric boundaries of fraud rather than ignoring it.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">XGBoost Classification</h3>
                  <p className="text-muted">Utilized Extreme Gradient Boosting (XGBoost) as the core ML engine. By leveraging gradient boosted decision trees, the system was able to capture complex, non-linear interactions between transaction amounts, balances, and types.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Results & Validation</h3>
                  <p className="text-muted">The final model achieved a phenomenal <strong>99.98% AUC</strong> and a <strong>98.7% Recall</strong> rate. In fraud detection, high recall is critical because the cost of a false negative (missed fraud) is far higher than a false positive. Missed frauds were reduced to &lt;2% in validation.</p>
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
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">XGBoost</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Scikit-learn</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">SMOTE</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Data Processing</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Python 3.8+</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Pandas</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">NumPy</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Environment</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Jupyter Notebook</span>
                  <span className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium">Google Colab</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <p className="text-emerald-200/80 text-sm leading-relaxed">
                <strong>Performance Matrix:</strong><br/>
                AUC: 99.98%<br/>
                Recall: 98.7%<br/>
                Precision: ~17%<br/>
                F1-score: ~29%
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionDetails;
