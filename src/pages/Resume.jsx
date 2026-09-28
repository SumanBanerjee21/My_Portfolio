import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


/* =========================================================
   ICONS
========================================================= */

const DownloadIcon = () => (
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
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);


const PreviewIcon = () => (
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
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696C3.423 7.392 7.36 4 12 4c4.64 0 8.577 3.392 9.938 7.652a1 1 0 0 1 0 .696C20.577 16.608 16.64 20 12 20c-4.64 0-8.577-3.392-9.938-7.652Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);


const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


const ZoomOutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);


const ZoomInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);


/* =========================================================
   RESUME PREVIEW MODAL
========================================================= */

const ResumePreviewModal = ({
  resume,
  onClose
}) => {

  const [zoom, setZoom] = useState(100);


  /* Reset zoom whenever another resume is opened */
  useEffect(() => {
    setZoom(100);
  }, [resume]);


  /* ESC closes modal */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);


  /* Stop background scrolling */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  if (!resume) {
    return null;
  }


  const zoomOut = () => {
    setZoom((current) =>
      Math.max(50, current - 10)
    );
  };


  const zoomIn = () => {
    setZoom((current) =>
      Math.min(200, current + 10)
    );
  };


  const resetZoom = () => {
    setZoom(100);
  };


  /*
    Chrome/Edge PDF viewer understands the zoom
    fragment in most desktop environments.
  */
  const pdfSource =
    `${resume.file}#toolbar=0&navpanes=0&scrollbar=1&zoom=${zoom}`;


  return (
    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.2
        }}
        className="
          fixed
          inset-0
          z-[99999]
          bg-black/80
          backdrop-blur-xl
          flex
          items-start
          justify-center
          pt-[92px]
          pb-5
          px-4
          sm:px-6
        "
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >

        {/* =================================================
            CENTER MODAL
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 15
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 15
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut'
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[80vh]
            bg-[#111318]
            border
            border-gray-700/80
            rounded-2xl
            shadow-[0_25px_80px_rgba(0,0,0,0.7)]
            overflow-hidden
            flex
            flex-col
          "
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
        >

          {/* =================================================
              MODAL HEADER
          ================================================== */}

          <div
            className="
              relative
              z-20
              shrink-0
              min-h-[60px]
              px-4
              sm:px-5
              flex
              items-center
              justify-between
              gap-3
              border-b
              border-gray-800
              bg-[#111318]
            "
          >

            {/* Title */}

            <div className="min-w-0">

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-white
                  font-semibold
                  text-sm
                  sm:text-base
                "
              >

                <span
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    shrink-0
                    ${
                      resume.type === 'data'
                        ? 'bg-blue-500'
                        : 'bg-purple-500'
                    }
                  `}
                />

                <span className="truncate">
                  {resume.title}
                </span>

              </div>


              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                Resume Preview
              </p>

            </div>


            {/* =================================================
                CONTROLS
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-1.5
                sm:gap-2
                shrink-0
              "
            >

              {/* Zoom Out */}

              <button
                type="button"
                onClick={zoomOut}
                disabled={zoom <= 50}
                title="Zoom out"
                className="
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  hover:bg-white/15
                  border
                  border-white/10
                  text-gray-200
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  transition-all
                "
              >
                <ZoomOutIcon />
              </button>


              {/* Zoom Percentage */}

              <button
                type="button"
                onClick={resetZoom}
                title="Reset zoom"
                className="
                  h-8
                  min-w-[52px]
                  px-2
                  rounded-lg
                  bg-white/10
                  hover:bg-white/15
                  border
                  border-white/10
                  text-white
                  text-xs
                  font-semibold
                  transition-all
                "
              >
                {zoom}%
              </button>


              {/* Zoom In */}

              <button
                type="button"
                onClick={zoomIn}
                disabled={zoom >= 200}
                title="Zoom in"
                className="
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  hover:bg-white/15
                  border
                  border-white/10
                  text-gray-200
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                  transition-all
                "
              >
                <ZoomInIcon />
              </button>


              {/* Reset */}

              <button
                type="button"
                onClick={resetZoom}
                title="Reset zoom"
                className="
                  hidden
                  sm:inline-flex
                  h-8
                  px-3
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/5
                  hover:bg-white/10
                  border
                  border-white/10
                  text-gray-300
                  text-xs
                  font-medium
                  transition-all
                "
              >
                Reset
              </button>


              {/* Download */}

              <a
                href={resume.file}
                download={resume.downloadName}
                title="Download resume"
                className="
                  inline-flex
                  items-center
                  gap-2
                  h-8
                  px-3
                  rounded-lg
                  bg-white/10
                  hover:bg-white/15
                  border
                  border-white/10
                  text-white
                  text-xs
                  font-medium
                  transition-all
                "
              >
                <DownloadIcon />

                <span className="hidden md:inline">
                  Download
                </span>
              </a>


              {/* CLOSE */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close resume preview"
                title="Close"
                className="
                  relative
                  z-50
                  w-8
                  h-8
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  hover:bg-red-500/20
                  border
                  border-white/15
                  hover:border-red-400/40
                  text-gray-200
                  hover:text-white
                  transition-all
                  cursor-pointer
                "
              >
                <CloseIcon />
              </button>

            </div>

          </div>


          {/* =================================================
              PDF VIEWER
          ================================================== */}

          <div
            className="
              flex-1
              min-h-0
              overflow-hidden
              bg-[#252525]
              p-2
              sm:p-3
            "
          >

            <div
              className="
                relative
                w-full
                h-full
                rounded-xl
                overflow-hidden
                border
                border-gray-700
                bg-[#303030]
              "
            >

              <iframe
                key={`${resume.file}-${zoom}`}
                src={pdfSource}
                title={resume.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  border-0
                  bg-white
                "
              />

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
};


/* =========================================================
   MAIN RESUME PAGE
========================================================= */

const Resume = () => {

  const [selectedResume, setSelectedResume] = useState(null);


  const resumes = {

    data: {
      type: 'data',
      title: 'Data Analyst Resume',
      subtitle: 'Focused on BI, SQL, and Analytics',
      file: '/Suman_Banerjee_DataAnalyst_Resume.pdf',
      downloadName: 'Suman_Banerjee_DataAnalyst_Resume.pdf'
    },

    ai: {
      type: 'ai',
      title: 'AI / ML Engineer Resume',
      subtitle: 'Focused on Deep Learning, LLMs, & Python',
      file: '/Suman_Banerjee_AI_ML_Resume.pdf',
      downloadName: 'Suman_Banerjee_AI_ML_Resume.pdf'
    }

  };


  return (
    <div className="relative flex flex-col min-h-full pb-24 pt-8">

      {/* =================================================
          BACKGROUND
      ================================================== */}

      <div className="fixed inset-0 z-[0] pointer-events-none">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_40%)]
          "
        />

      </div>


      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            PAGE HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="
            mb-10
            md:mb-12
            text-center
          "
        >

          <div
            className="
              inline-flex
              items-center
              px-3
              py-1
              rounded-full
              border
              border-gray-800
              bg-gray-900/50
              text-xs
              text-blue-400
              font-medium
              mb-5
            "
          >
            Dual Expertise
          </div>


          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              text-white
              mb-4
            "
          >
            My Resumes
          </h1>


          <p
            className="
              text-sm
              md:text-lg
              text-muted
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Choose the profile that best fits your requirements. You can view or download my highly specialized resumes below.
          </p>

        </motion.div>



        {/* =================================================
            RESUME CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
            lg:gap-8
          "
        >

          {/* =================================================
              DATA ANALYST
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="
              w-full
              bg-gray-900/40
              backdrop-blur-xl
              border
              border-gray-700/50
              rounded-3xl
              p-4
              sm:p-5
              md:p-6
              shadow-2xl
            "
          >

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-4
              "
            >

              <div className="min-w-0">

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-blue-500
                      shrink-0
                    "
                  />

                  Data Analyst

                </h2>


                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-gray-400
                    mt-1
                  "
                >
                  Focused on BI, SQL, and Analytics
                </p>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  shrink-0
                "
              >

                <button
                  type="button"
                  onClick={() => setSelectedResume(resumes.data)}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-blue-500/10
                    hover:bg-blue-500/20
                    border
                    border-blue-400/20
                    hover:border-blue-400/40
                    text-blue-300
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-all
                    cursor-pointer
                  "
                >
                  <PreviewIcon />
                  Preview
                </button>


                <a
                  href={resumes.data.file}
                  download={resumes.data.downloadName}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-white/10
                    hover:bg-white/20
                    border
                    border-white/20
                    text-white
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-all
                  "
                >
                  <DownloadIcon />
                  Download
                </a>

              </div>

            </div>


            <div
              className="
                mt-5
                h-40
                sm:h-48
                rounded-2xl
                border
                border-gray-800
                bg-[#303030]
                overflow-hidden
                relative
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    bg-white
                    w-[120px]
                    sm:w-[140px]
                    h-[160px]
                    sm:h-[185px]
                    shadow-2xl
                    rounded-sm
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div className="text-center px-3">

                    <div className="text-[8px] sm:text-[9px] font-bold text-gray-800">
                      SUMAN BANERJEE
                    </div>

                    <div className="mt-1 text-[6px] sm:text-[7px] text-gray-500">
                      Data Analyst
                    </div>

                    <div className="mt-3 h-px bg-gray-300" />

                    <div className="mt-3 space-y-1">

                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded w-4/5" />
                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded w-3/4" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>



          {/* =================================================
              AI / ML ENGINEER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="
              w-full
              bg-gray-900/40
              backdrop-blur-xl
              border
              border-gray-700/50
              rounded-3xl
              p-4
              sm:p-5
              md:p-6
              shadow-2xl
            "
          >

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                justify-between
                gap-4
              "
            >

              <div className="min-w-0">

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-white
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-purple-500
                      shrink-0
                    "
                  />

                  AI / ML Engineer

                </h2>


                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-gray-400
                    mt-1
                  "
                >
                  Focused on Deep Learning, LLMs, & Python
                </p>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  shrink-0
                "
              >

                <button
                  type="button"
                  onClick={() => setSelectedResume(resumes.ai)}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-purple-500/10
                    hover:bg-purple-500/20
                    border
                    border-purple-400/20
                    hover:border-purple-400/40
                    text-purple-300
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-all
                    cursor-pointer
                  "
                >
                  <PreviewIcon />
                  Preview
                </button>


                <a
                  href={resumes.ai.file}
                  download={resumes.ai.downloadName}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    sm:px-4
                    py-2
                    rounded-xl
                    bg-white/10
                    hover:bg-white/20
                    border
                    border-white/20
                    text-white
                    text-xs
                    sm:text-sm
                    font-semibold
                    transition-all
                  "
                >
                  <DownloadIcon />
                  Download
                </a>

              </div>

            </div>


            <div
              className="
                mt-5
                h-40
                sm:h-48
                rounded-2xl
                border
                border-gray-800
                bg-[#303030]
                overflow-hidden
                relative
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    bg-white
                    w-[120px]
                    sm:w-[140px]
                    h-[160px]
                    sm:h-[185px]
                    shadow-2xl
                    rounded-sm
                    flex
                    items-center
                    justify-center
                  "
                >

                  <div className="text-center px-3">

                    <div className="text-[8px] sm:text-[9px] font-bold text-gray-800">
                      SUMAN BANERJEE
                    </div>

                    <div className="mt-1 text-[6px] sm:text-[7px] text-gray-500">
                      Machine Learning & AI
                    </div>

                    <div className="mt-3 h-px bg-gray-300" />

                    <div className="mt-3 space-y-1">

                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded w-4/5" />
                      <div className="h-1 bg-gray-300 rounded" />
                      <div className="h-1 bg-gray-300 rounded w-3/4" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          RESUME PREVIEW MODAL
      ====================================================== */}

      {selectedResume && (
        <ResumePreviewModal
          resume={selectedResume}
          onClose={() => setSelectedResume(null)}
        />
      )}

    </div>
  );
};


export default Resume;