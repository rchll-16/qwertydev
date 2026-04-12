import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
	{
		title: "CodeWave",
		description:
			"A modern and responsive business landing page built with React, TypeScript, and Tailwind CSS. The project highlights clean UI design, smooth animations, and scalable component architecture. It includes sections such as hero, portfolio, testimonials, team, and contact, designed to create a professional and engaging user experience.",
		tech: ["React", "TypeScript", "Tailwind", "Vite"],
		liveUrl: "https://codewave-flame.vercel.app/",
		githubUrl: "https://github.com/rchll-16/codewave-digital-agency.git",
	},
	{
		title: "My First Portfolio Website",
		description:
			"Personal portfolio website showcasing my projects, skills, and development experience. Built with modern web technologies and responsive design to present my work in a clean and professional interface.",
		tech: ["React", "JavaScript", "Tailwind", "Vite"],
		liveUrl: "https://rachelle-pantinople.vercel.app/",
		githubUrl: "https://github.com/rchll-16/my-portfolio.git",
	},
	{
		title: "Molave Street Barbers (Capstone Project)",
		description:
			"A modern, responsive website built as a capstone project for Molave Street Barbers. The site features a clean design, service showcases, and intuitive navigation—focused on delivering a polished user experience across desktop and mobile devices.",
		tech: ["React", "JavaScript", "Tailwind", "Supabase", "Vite"],
		liveUrl: "https://molavestreetbarbers.vercel.app/",
		githubUrl: "https://github.com/rchll-16/molavestreetbarbers-.git",
	},
	{
		title: "Rapido IT Solutions (Commision)",
		description:
			"A professional and fully responsive corporate website developed for Rapido Solutions. Designed to clearly present the company’s services, brand identity, and contact information with a clean layout and smooth user experience across all devices.",
		tech: ["React", "JavaScript", "Tailwind", "Supabase", "Vite"],
		liveUrl: "https://rapidosolutions.tech/",
		githubUrl: "https://github.com/rchll-16/rapido-it-solution.git",
	},
	{
		title: "Flower Shop",
		description:
			"The Flower Shop is a static website designed to showcase a variety of flowers available for purchase. This website provides users with an easy-to-navigate interface to explore different flower types, view details, and make inquiries.",
		tech: ["HTML", "CSS", "JavaScript"],
		liveUrl: "https://rchll-16.github.io/Flower-Shop/",
		githubUrl: "https://github.com/rchll-16/Flower-Shop.git",
	},
	{
		title: "E-Commerce Web App",
		description:
			"An E-Commerce bookstore web application where users can browse, search, and purchase books online. Built with React, Node.js, and MongoDB — providing a smooth, and dynamic shopping experience.",
		tech: ["React", "JavaScript", "Node.js", "MongoDB"],
		liveUrl: "#",
		githubUrl: "https://github.com/rchll-16/e-commerce.git",
	},
	{
		title: "Chill N Grind (Commission)",
		description:
			"A clean user-friendly clothing site built with HTML and CSS. This static web project showcases a landing page, FAQ section, and styling using custom CSS.",
		tech: ["HTML", "CSS"],
		liveUrl: "https://rchll-16.github.io/clothingwebsite/main.html",
		githubUrl: "https://github.com/rchll-16/clothingwebsite.git",
	},
	{
		title: "Alpha Angelicum Academy (Commission)",
		description:
			"A clean and informative school website crafted with HTML and CSS. Featuring multiple pages—Home, About, Academic Programs, Offers, Contacts.",
		tech: ["HTML", "CSS"],
		liveUrl: "https://rchll-16.github.io/school-aaa/",
		githubUrl: "https://github.com/rchll-16/school-aaa.git",
	},
	{
		title: "Univerity of Eastern Pangasinan (Commission)",
		description:
			"A clean and informative school website built using HTML and CSS. Ideal for institutional presentation, this static site includes pages for home, about, academic programs, events, and contact details.",
		tech: ["HTML", "CSS"],
		liveUrl: "https://rchll-16.github.io/school-uep/",
		githubUrl: "https://github.com/rchll-16/school-uep.git",
	},
	{
		title: "Intramuros Cultural (Commision)",
		description:
			"A beautifully designed, static website showcasing the heritage sites of Intramuros using HTML, CSS, and high-quality images. Perfect for both educational presentation and visual storytelling of historical landmarks.",
		tech: ["HTML", "CSS"],
		liveUrl: "https://rchll-16.github.io/intramuros-website/",
		githubUrl: "https://github.com/rchll-16/intramuros-website.git",
	},
	{
		title: "Science Module (Commission)",
		description:
			"A clean, educational website designed to present various science topics using HTML and CSS. Perfect for sharing lesson modules such as the water cycle, biodiversity, pollution, and more in a readable, structured format.",
		tech: ["HTML", "CSS"],
		liveUrl: "https://rchll-16.github.io/science-lesson/main.html",
		githubUrl: "https://github.com/rchll-16/science-lesson.git",
	},
	{
		title: "Bini (Redesign)",
		description:
			"A clean, modern redesign project for BINI, focusing on visually appealing layout, and smooth user experience. Built entirely with HTML, CSS, and JavaScript — no frameworks, just handcrafted code.",
		tech: ["HTML", "CSS", "JavaScript"],
		liveUrl: "https://rchll-16.github.io/bini-redesign/main.html",
		githubUrl: "https://github.com/rchll-16/bini-redesign.git",
	},
]


const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl poppins-bold text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-2" />
          <p className="text-gray-400 poppins-regular mt-4 max-w-lg mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeInOut' }} // slow fade-in, staggered
              viewport={{ once: true }}
              className="relative p-6 rounded-xl group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)', 
                backdropFilter: 'blur(15px)',          
                WebkitBackdropFilter: 'blur(15px)',   
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl poppins-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-purple-400 to-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm poppins-light mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 poppins-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm poppins-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm poppins-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
