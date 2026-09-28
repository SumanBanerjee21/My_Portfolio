import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const photos = [
    {
      src: '/images/full-pocket.jpg',
      label: 'Casual',
      objectPosition: 'center'
    },
    {
      src: '/images/1.jpg',
      label: 'Casual',
      objectPosition: 'center'
    },
    {
      src: '/images/passport-professional.jpg',
      label: 'Professional',
      objectPosition: 'top'
    },
    {
      src: '/images/2.jpg',
      label: 'Casual',
      objectPosition: 'center'
    },
    {
      src: '/images/3.jpg',
      label: 'Casual',
      objectPosition: 'top'
    },
    {
      src: '/images/Resume_Recent_Photo.png',
      label: 'Professional',
      objectPosition: 'top'
    }
  ];

  const buildAreas = [
    {
      title: 'Data Analytics',
      description:
        'Turn raw data into clear insights using Python, SQL, Excel and Power BI.',
      gradient: 'from-yellow-400/20 to-orange-500/10',
      border: 'border-yellow-400/20',
      iconBg: 'bg-yellow-400/10',
      iconColor: 'text-yellow-300',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M7 16v-5" />
          <path d="M12 16V7" />
          <path d="M17 16v-8" />
        </svg>
      )
    },
    {
      title: 'Machine Learning',
      description:
        'Build practical models for forecasting, customer analytics, classification and prediction.',
      gradient: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-400/20',
      iconBg: 'bg-blue-400/10',
      iconColor: 'text-blue-300',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="m4.93 19.07 2.83-2.83" />
          <path d="m16.24 7.76 2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    },
    {
      title: 'Business Automation',
      description:
        'Simplify repetitive workflows with practical web-based tools and automation.',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-400/20',
      iconBg: 'bg-emerald-400/10',
      iconColor: 'text-emerald-300',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="7" height="5" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="16" rx="1" />
          <path d="M6.5 8v4" />
          <path d="M6.5 12h11" />
          <path d="M17.5 12v4" />
        </svg>
      )
    },
    {
      title: 'Full-Stack Solutions',
      description:
        'Build real-world applications with dashboards, integrations, payments and deployment.',
      gradient: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-400/20',
      iconBg: 'bg-purple-400/10',
      iconColor: 'text-purple-300',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" x2="10" y1="4" y2="20" />
        </svg>
      )
    }
  ];

  const featuredProjects = [
    {
      title: 'Logistics Label Printing',
      category: 'Business Automation',
      description:
        'A real-world web application built to simplify shipment label creation, PDF generation, branding and printing workflows.',
      gradient: 'from-teal-500/20 to-cyan-500/10',
      border: 'border-teal-400/20',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9V2h12v7" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect width="12" height="8" x="6" y="14" rx="1" />
          <path d="M6 18h12" />
        </svg>
      ),
      link: '/project/logistics-label-printing'
    },
    {
      title: 'Veda AI',
      category: 'AI Solution',
      description:
        'An AI-powered application focused on making information easier to access, understand and work with.',
      gradient: 'from-violet-500/20 to-blue-500/10',
      border: 'border-violet-400/20',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M4.93 4.93 7.05 7.05" />
          <path d="m16.95 16.95 2.12 2.12" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="m4.93 19.07 2.12-2.12" />
          <path d="m16.95 7.05 2.12-2.12" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      link: '/project/veda-ai'
    },
    {
      title: 'Customer Lifetime Value',
      category: 'Data Analytics',
      description:
        'A customer analytics project that uses purchasing behavior to understand customer value and support better business decisions.',
      gradient: 'from-blue-500/20 to-indigo-500/10',
      border: 'border-blue-400/20',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m7 15 4-4 3 3 6-7" />
        </svg>
      ),
      link: '/project/clv'
    },
    {
      title: 'Sales Forecasting',
      category: 'Machine Learning',
      description:
        'A machine learning project designed to identify sales patterns and estimate future demand from historical data.',
      gradient: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-400/20',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m5 16 4-5 3 3 6-7" />
          <path d="M18 7h2v2" />
        </svg>
      ),
      link: '/project/sales-forecasting'
    }
  ];

  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === activeCardIndex) {
      setActiveCardIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const getCardPosition = (index) => {
    const total = photos.length;
    const offset = (index - activeCardIndex + total) % total;

    const positions = [
      {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        blur: 0,
        opacity: 1
      },
      {
        x: 42,
        y: 24,
        scale: 0.97,
        rotate: 6,
        blur: 0.8,
        opacity: 0.82
      },
      {
        x: 76,
        y: 50,
        scale: 0.94,
        rotate: 11,
        blur: 1.5,
        opacity: 0.66
      },
      {
        x: -40,
        y: 22,
        scale: 0.96,
        rotate: -6,
        blur: 1.8,
        opacity: 0.72
      },
      {
        x: -72,
        y: 48,
        scale: 0.92,
        rotate: -11,
        blur: 2.8,
        opacity: 0.55
      },
      {
        x: 8,
        y: 74,
        scale: 0.88,
        rotate: 15,
        blur: 3.5,
        opacity: 0.35
      }
    ];

    return positions[offset];
  };

  return (
    <div className="relative flex flex-col min-h-full overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start pt-8 sm:pt-12 pb-16 sm:pb-20">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-7 lg:sticky lg:top-32 h-fit">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 text-xs text-gray-300 font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Open to work & relocate
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5">
              Suman Banerjee
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted font-light leading-relaxed">
              Data Analyst
              <br />

              <span className="text-blue-400 font-medium">
                Machine Learning
              </span>{' '}
              & AI Enthusiast

              <br />

              Full Stack Explorer
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a
              href="mailto:suman.banerjee.in.cs@gmail.com"
              className="px-5 sm:px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get in touch
            </a>

            <a
              href="https://github.com/SumanBanerjee21"
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-3 border border-gray-800 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.8-1.7 6.8-7.5a5.8 5.8 0 0 0-1.6-4.1c.2-.5.7-2-.2-4.1 0 0-1.3-.4-4.2 1.6a14.7 14.7 0 0 0-7.6 0C4.3-2.6 3-.2 3-.2c-.9 2.1-.4 3.6-.2 4.1A5.8 5.8 0 0 0 1.2 8c0 5.8 3.5 7.5 6.8 7.5A4.8 4.8 0 0 0 7 18v4" />
                <path d="M9 18c-4.5 2-5-2-7-2" />
              </svg>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/suman-banerjee-394822261/"
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-3 border border-gray-800 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — PLAYING CARD FAN */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

          <div
            className="
              relative
              w-[280px]
              sm:w-[320px]
              md:w-[360px]
              lg:w-[400px]
              h-[430px]
              sm:h-[470px]
              md:h-[510px]
              lg:h-[540px]
            "
          >
            {photos.map((photo, index) => {
              const position = getCardPosition(index);
              const isActive = index === activeCardIndex;

              return (
                <motion.div
                  key={photo.src}
                  onClick={() => handleCardClick(index)}
                  initial={false}
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                    rotate: position.rotate,
                    filter: `blur(${position.blur}px)`,
                    opacity: position.opacity,
                    zIndex:
                      photos.length -
                      (
                        (index - activeCardIndex + photos.length) %
                        photos.length
                      )
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 22,
                    mass: 0.8
                  }}
                  className={`
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    rounded-[28px]
                    overflow-hidden
                    border
                    border-gray-700/70
                    bg-gray-900
                    shadow-2xl
                    select-none
                    ${isActive ? 'cursor-pointer' : 'pointer-events-none'}
                  `}
                  style={{
                    transformOrigin: 'center top'
                  }}
                >
                  <img
                    src={photo.src}
                    alt={`Suman ${photo.label}`}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: photo.objectPosition
                    }}
                    draggable="false"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-5
                      sm:p-6
                      transition-opacity
                      duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    <span className="inline-flex text-white font-bold bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md">
                      {photo.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT I BUILD ================= */}
      <section className="relative z-10 pb-16 sm:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">
            What I Build
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Practical solutions with data, AI & technology.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {buildAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                ${item.border}
                bg-gradient-to-br
                ${item.gradient}
                bg-gray-900/40
                backdrop-blur-xl
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-900/60
              `}
            >
              <div
                className={`
                  w-10
                  h-10
                  rounded-xl
                  ${item.iconBg}
                  ${item.iconColor}
                  flex
                  items-center
                  justify-center
                  mb-4
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="relative z-10 pb-16 sm:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-2">
              Featured Projects
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              A few things I’ve built.
            </h2>

            <p className="text-sm text-gray-400 mt-2 max-w-2xl">
              A selection of projects where I’ve worked with data, AI,
              machine learning and real-world application development.
            </p>
          </div>

          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-300
              hover:text-white
              transition-colors
              shrink-0
            "
          >
            View All Projects

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                ${project.border}
                bg-gradient-to-br
                ${project.gradient}
                bg-gray-900/40
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-900/60
              `}
            >
              <div className="flex items-start justify-between gap-4 mb-5">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-black/20
                  border
                  border-white/5
                  flex
                  items-center
                  justify-center
                  text-gray-200
                  shrink-0
                ">
                  {project.icon}
                </div>

                <span className="
                  text-[11px]
                  uppercase
                  tracking-wider
                  text-gray-400
                  border
                  border-gray-700/70
                  bg-black/10
                  rounded-full
                  px-3
                  py-1
                ">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <Link
                to={project.link}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-white
                  group-hover:text-blue-300
                  transition-colors
                "
              >
                View Project

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CURRENTLY FOCUSED ON ================= */}
      <section className="relative z-10 pb-16 sm:pb-20">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            rounded-2xl
            border
            border-gray-800/80
            bg-gray-900/30
            backdrop-blur-xl
            px-5
            py-5
            sm:px-7
            sm:py-6
          "
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 font-semibold mb-1">
                Currently Focused On
              </p>

              <p className="text-sm sm:text-base text-gray-300">
                Building practical, data-driven digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">

              {[
                'Data Analytics',
                'Machine Learning',
                'AI Solutions',
                'Business Automation'
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    border
                    border-gray-700
                    bg-gray-900/70
                    text-xs
                    text-gray-300
                    whitespace-nowrap
                  "
                >
                  {item}
                </span>
              ))}

            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default LandingPage;