import LogoLoop from '../profile/LogoLoop';
import ProfileCard from '../profile/ProfileCard';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiVite,
  SiSupabase
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact color="#a3b3ff" />, title: "React" },
  { node: <SiHtml5 color="#a3b3ff" />, title: "HTML" },
  { node: <SiCss3 color="#a3b3ff" />, title: "CSS" },
  { node: <SiJavascript color="#a3b3ff" />, title: "JavaScript" },
  { node: <SiTypescript color="#a3b3ff" />, title: "TypeScript" },
  { node: <SiTailwindcss color="#a3b3ff" />, title: "Tailwind CSS" },
  { node: <SiGit color="#a3b3ff" />, title: "Git" },
  { node: <SiVite color="#a3b3ff" />, title: "Vite" },
  { node: <SiSupabase color="#a3b3ff" />, title: "Supabase" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl poppins-bold text-white">About Me</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={stagger} 
          whileInView="visible" 
          initial="hidden" 
          viewport={{ once: true }} 
          className="glass-card glow-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-10"
        >
          {/* Left: Profile Card */}
          <motion.div variants={fadeLeft} className="flex justify-center md:justify-start">
            <ProfileCard />
          </motion.div>

          {/* Right: Bio */}
          <motion.div variants={stagger} className="flex-1 space-y-4 text-white">
            <motion.p variants={fadeUp} className="text-lg leading-relaxed poppins-regular">
              Hi! I'm <span className="gradient-text poppins-semibold">Rachelle Pantinople</span>, a passionate frontend developer dedicated to crafting clean, user-friendly, and responsive web applications. With a keen eye for design and a love for clean code, I transform ideas into beautiful interfaces. My goal is to create experiences that are not only visually appealing but also intuitive to use.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed poppins-extralight">
              My journey in web development has equipped me with expertise in modern frameworks and design tools. I specialize in HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS, while maintaining a strong foundation in UI/UX principles. Every project is an opportunity to blend creativity with technical excellence.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed poppins-extralight">
              When I'm not coding, you'll find me exploring new design trends to improve my skills. Beyond coding, I enjoy listening to music and mobile gaming.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Tech Logos Loop */}
        <motion.div 
          transition={{ duration: 0.8, delay: 0.3 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }} 
          className=" h-32 relative mt-5">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology stack"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
