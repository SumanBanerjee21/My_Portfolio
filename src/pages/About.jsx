import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const quotes = [
    { text: "Work hard, but build smart.", author: "Philosophy" },
    { text: "Good things require patience.", author: "Mindset" },
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "Data is the new oil. It’s valuable, but if unrefined it cannot really be used.", author: "Clive Humby" }
  ];

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
        className="mb-12"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">About Me</h1>
        <p className="text-xl text-muted">A little bit about my journey, what I do, and why I do it.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: About Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-3/5 text-muted text-lg/relaxed font-light space-y-6"
        >
          <p>Hi, I’m Suman.</p>
          <p>
            I like turning messy data into something that actually makes sense. Give me a spreadsheet full of missing values, inconsistent columns, strange patterns, and questionable formatting, and I'll probably spend far too much time figuring out why it looks the way it does.
          </p>
          <p>
            My journey started with Computer Science, but somewhere between writing code and working with data, I realized that I enjoy the part where numbers start telling a story. From Python and SQL to Power BI and Machine Learning, I like exploring a problem from different angles — clean the data, understand it, visualize it, build a model, question the results, and then try to make the solution better.
          </p>
          <p>
            I've worked on projects ranging from customer analytics and sales forecasting to Power BI dashboards and AI-powered applications. One of my favorite things about building projects is going beyond the notebook — taking an idea from “this might work” to something that can actually be used, demonstrated, and understood by someone other than the person who wrote the code.
          </p>
          <p>
            I've also spent time learning through internships and hands-on work in Data Analytics and Machine Learning. And yes, I've learned the hard way that sometimes the problem isn't the model, the algorithm, or even the code — it's that one innocent-looking column that somehow contains three different date formats.
          </p>
          <p>
            Currently, I'm focused on growing deeper in Data Analytics, Machine Learning, Business Intelligence, and AI-driven application development. I enjoy learning new technologies, experimenting with ideas, building things from scratch, and occasionally turning a “small project” into something considerably larger than I originally planned.
          </p>
          <p>
            When I'm not working with data, I'm usually exploring something new, working on a project, or trying to convince myself that the next feature will only take ten minutes. It rarely does.
          </p>

          <div className="mt-16 p-8 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-2xl">
            <p className="text-white font-medium text-xl italic mb-6">
              "I’m still learning, still building, and still breaking things occasionally — but every project leaves me with something I didn't know before. And that's probably the part I enjoy the most."
            </p>
            <p className="font-bold text-blue-400 text-lg">— Suman</p>
          </div>
        </motion.div>

        {/* Right Side: Quotes & Design */}
        <div className="lg:w-2/5 w-full lg:sticky lg:top-12 -mt-4 lg:-mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {quotes.map((q, idx) => {
              // Create slight random rotations for an organic, humanized feel
              const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
              const randomRotation = rotations[idx % rotations.length];
              
              return (
                <div 
                  key={idx} 
                  className={`relative p-8 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${randomRotation} hover:rotate-0`}
                >
                  <div className="text-5xl text-blue-500/20 absolute top-4 left-4 font-serif">"</div>
                  <p className="text-white/90 font-medium text-lg leading-relaxed z-10 relative pt-2">
                    {q.text}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-px flex-1 bg-gray-800"></div>
                    <p className="text-muted text-xs font-semibold tracking-widest uppercase">
                      {q.author}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
