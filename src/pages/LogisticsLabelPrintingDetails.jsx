import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Printer,
  FileText,
  Building2,
  MapPin,
  Package,
  CreditCard,
  Database,
  Server,
  ShieldCheck,
  Layers3,
  CheckCircle2,
  Workflow,
  MonitorSmartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsLabelPrintingDetails = () => {
  const features = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Company Branding',
      description:
        'Users can add their company logo and branding information to create professional shipment labels.',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Docket & Shipment Details',
      description:
        'Enter docket numbers and shipment locations directly through the dashboard.',
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: 'Multi-Box Label Generation',
      description:
        'Generate the required number of labels based on the shipment box quantity.',
    },
    {
      icon: <Printer className="w-5 h-5" />,
      title: 'Thermal Printing Support',
      description:
        'Designed around common logistics label dimensions used with thermal and label printers.',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Print-Ready PDF',
      description:
        'Generate PDF documents using the selected label dimensions and required number of pages.',
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'Online Payment',
      description:
        'Integrated Razorpay payment flow for subscription and paid-plan functionality.',
    },
  ];

  const workflow = [
    'User signs in to the logistics platform.',
    'Company information and branding are configured.',
    'Docket number, location and box quantity are entered.',
    'The required label dimensions are selected.',
    'The system generates the corresponding labels.',
    'Users can preview the generated PDF before printing.',
    'The PDF can be saved or sent to the printer.',
  ];

  const technologies = [
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: 'Frontend',
      value: 'React + Vite',
    },
    {
      icon: <Layers3 className="w-5 h-5" />,
      title: 'UI & Styling',
      value: 'Tailwind CSS',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: 'Backend',
      value: 'Node.js + Express',
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Database',
      value: 'MongoDB',
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'Payment',
      value: 'Razorpay',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Authentication',
      value: 'User Authentication & Protected Workflows',
    },
  ];

  return (
    <div className="w-full">
      {/* Back to Projects */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gray-900/50 backdrop-blur-xl p-8 md:p-12 mb-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-blue-500/10 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold border border-teal-400/30 bg-teal-400/10 text-teal-300">
              Business Automation
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-semibold border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              LIVE
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Logistics Label Printing
          </h1>

          <p className="max-w-4xl text-lg md:text-xl leading-8 text-gray-300">
            A real-world logistics automation platform designed to simplify
            shipment label generation, branding, PDF creation and printing
            workflows for logistics and fulfillment operations.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://logistics-labels.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Platform
            </a>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Real World Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center justify-center text-red-300">
                <Workflow className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Real-World Problem
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-7">
              <p>
                Logistics and fulfillment teams frequently need to create
                shipment labels containing information such as company
                identity, docket number, destination and box quantity.
              </p>

              <p>
                When this process is handled manually, generating multiple
                labels, maintaining consistent formatting and preparing files
                for thermal printing can become repetitive and inefficient.
              </p>

              <p>
                This project was built to turn that workflow into a
                centralized web-based process where the required shipment
                information can be entered once and converted into
                print-ready labels.
              </p>
            </div>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                The Solution
              </h2>
            </div>

            <p className="text-gray-300 leading-7">
              The platform provides a dashboard-driven workflow for creating
              logistics labels. Users can configure company branding, enter
              shipment information, specify the number of boxes, select the
              required label size and generate a print-ready PDF.
            </p>

            <p className="text-gray-300 leading-7 mt-4">
              The system is designed so that the generated document follows
              the selected label dimensions, making it suitable for practical
              label-printing workflows rather than being just a visual demo.
            </p>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-300">
                <Printer className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.05,
                  }}
                  className="rounded-2xl border border-gray-700/50 bg-gray-950/40 p-5 hover:border-teal-400/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-300">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-sm leading-6 text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How It Works */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-300">
                <Workflow className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                How It Works
              </h2>
            </div>

            <div className="space-y-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-gray-800 bg-gray-950/30 p-4"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  <p className="text-gray-300 leading-6 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* My Contribution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
                <Layers3 className="w-5 h-5" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                What I Built
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-7">
              <p>
                I developed the application as a complete web-based workflow,
                connecting the user interface with backend services and
                persistent data storage.
              </p>

              <p>
                The implementation covers the label-generation workflow,
                company branding, authentication, label-size selection,
                PDF-based output, printing workflow and payment integration.
              </p>

              <p>
                The goal was to build something that addresses an actual
                operational requirement rather than creating a purely
                portfolio-oriented demo.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-7"
          >
            <h2 className="text-xl font-bold text-white mb-6">
              Project Overview
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Category
                </p>
                <p className="text-gray-200">Business Automation</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Status
                </p>
                <p className="text-emerald-300">Live</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Deployment
                </p>
                <p className="text-gray-200">
                  Vercel + Render
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Database
                </p>
                <p className="text-gray-200">MongoDB</p>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-7"
          >
            <h2 className="text-xl font-bold text-white mb-6">
              Technology Stack
            </h2>

            <div className="space-y-4">
              {technologies.map((technology) => (
                <div
                  key={technology.title}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-gray-700/50 flex items-center justify-center text-cyan-300">
                    {technology.icon}
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      {technology.title}
                    </p>
                    <p className="text-sm text-gray-200 mt-1">
                      {technology.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Label Sizes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl p-7"
          >
            <h2 className="text-xl font-bold text-white mb-5">
              Supported Label Sizes
            </h2>

            <div className="flex flex-wrap gap-2">
              {[
                '2 × 3',
                '3 × 4',
                '4 × 4',
                '4 × 6',
                '100 × 150 mm',
                'A6',
              ].map((size) => (
                <span
                  key={size}
                  className="px-3 py-2 rounded-lg border border-gray-700 bg-gray-950/50 text-sm text-gray-300"
                >
                  {size}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Live Platform */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 p-7"
          >
            <h2 className="text-xl font-bold text-white mb-3">
              Try the Platform
            </h2>

            <p className="text-sm leading-6 text-gray-400 mb-5">
              Explore the live logistics label printing application and see
              the workflow in action.
            </p>

            <a
              href="https://logistics-labels.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-gray-950 font-semibold hover:bg-gray-200 transition-colors"
            >
              Open Live Platform
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default LogisticsLabelPrintingDetails;