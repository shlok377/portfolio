import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './components/ReactBits/SplitText';
import SpotlightCard from './components/ReactBits/SpotlightCard';
import Waves from './components/ReactBits/Waves';
import ShinyText from './components/ReactBits/ShinyText';
import { Github, Linkedin, Instagram, Mail, ExternalLink, Code } from 'lucide-react';

function App() {
  const name = "SHLOK DALSANIA";
  const tagline = "Computer Engineering Student & Passionate Developer";

  const projects = [
    {
      name: "Luminara",
      description: "An AI-powered study companion application that plans your syllabus, summarizes your notes, tests your knowledge, and protects your focus.",
      tech: "Python, Ollama, Langchain, PyQt6",
      link: "https://www.youtube.com/watch?v=ZYNFM1JGaqw",
      repo: "https://github.com/shlok377/luminara"
    },
    {
      name: "SWSPL Website",
      description: "Crafted the official website for Sarvaswam Wellness Services PVT LTD.",
      tech: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS",
      link: "https://sarvaswam.com/",
      repo: "#"
    },
    {
      name: "Llama3.2 Chatbot",
      description: "A chatbot that can answer your questions and provide information about the company using CSV data.",
      tech: "Python, Ollama, Langchain, CSV",
      link: "#",
      repo: "https://github.com/shlok377/llama3.2-chatbot"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          SD<span className="text-primary">.</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold"
        >
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <Waves 
              lineColor="rgba(168, 85, 247, 0.3)"
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={30}
              waveAmpY={15}
              friction={0.9}
              tension={0.01}
              maxCursorMove={100}
              xGap={20}
              yGap={40}
            />
          </div>

          <div className="text-center z-10 pointer-events-none">
            <SplitText
              text={name}
              className="text-6xl md:text-9xl font-black tracking-tighter mb-4"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-zinc-500 text-sm md:text-base uppercase tracking-[0.3em] max-w-2xl mx-auto font-medium"
            >
              {tagline}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">About Me</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I am a Computer Engineering Student at SCET Surat. I am a passionate developer who loves to create exceptional digital experiences. I am a fast adapter, quick learner and a team player.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/shlok377" target="_blank" className="p-3 bg-zinc-800/50 rounded-xl hover:bg-primary transition-colors group">
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/shlok-dalsania-71a5b73a6/" target="_blank" className="p-3 bg-zinc-800/50 rounded-xl hover:bg-primary transition-colors group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:shlokdalsania.co25d1@scet.ac.in" className="p-3 bg-zinc-800/50 rounded-xl hover:bg-primary transition-colors group">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </SpotlightCard>

            <div className="grid grid-rows-2 gap-6">
              <SpotlightCard className="flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-black text-primary">3+</span>
                <span className="text-zinc-500 uppercase tracking-widest text-xs mt-2 font-bold">Projects</span>
              </SpotlightCard>
              <SpotlightCard className="flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-black text-primary">2+</span>
                <span className="text-zinc-500 uppercase tracking-widest text-xs mt-2 font-bold">Happy Clients</span>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">Portfolio</h2>
              <h3 className="text-4xl font-black tracking-tighter">FEATURED WORK</h3>
            </div>
            <a href="https://github.com/shlok377" target="_blank" className="text-zinc-500 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors flex items-center gap-2">
              View All <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <SpotlightCard key={index} className="flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div className="flex gap-2">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" className="p-2 bg-zinc-800/50 rounded-lg hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.repo !== "#" && (
                      <a href={project.repo} target="_blank" className="p-2 bg-zinc-800/50 rounded-lg hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">{project.name}</h4>
                <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {project.tech.split(', ').map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800/50 text-[10px] uppercase tracking-widest font-bold text-zinc-400 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
          <SpotlightCard className="relative overflow-hidden group">
            <div className="relative z-10 text-center py-12">
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                READY TO <span className="text-primary">COLLABORATE?</span>
              </h3>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                I am always open to new opportunities and interesting projects. Feel free to reach out!
              </p>
              <a 
                href="mailto:shlokdalsania.co25d1@scet.ac.in"
                className="inline-block px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32 rounded-full group-hover:bg-primary/30 transition-colors" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] -ml-32 -mb-32 rounded-full group-hover:bg-primary/30 transition-colors" />
          </SpotlightCard>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <ShinyText 
          text={`© ${new Date().getFullYear()} Shlok Dalsania • Crafted with Passion`} 
          className="text-[10px] uppercase tracking-[0.2em] font-bold"
        />
      </footer>
    </div>
  );
}

export default App;
