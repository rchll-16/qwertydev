const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      
      <div className="relative z-10 text-left md:text-center max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-white poppins-regular tracking-wide text-lg mb-4">
            Hi, I'm Rachelle 👋
          </p>
        </div>
        
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl poppins-bold mb-6 opacity-0 animate-fade-in glow-text"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="gradient-text">Frontend Developer</span>
        </h1>
        
        <p 
          className="text-gray-400 poppins-extralight text-lg md:text-xl mb-10 max-w-xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          I build modern, user-focused web experiences that combine beautiful design with clean, efficient code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}>
          
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-purple-400 rounded-full poppins-medium text-sm btn-glow-hover hover:shadow-purple-500/70 transition-all"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 bg-transparent text-white rounded-full poppins-medium text-sm btn-glow-hover border border-purple-400"
          >
            Contact Me
          </button>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="animate-float">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
