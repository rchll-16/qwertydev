import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 pt-10 md:pt-16 pb-8 border-t border-white/10"
      style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 text-white">

        {/* Brand */}
        <div>
          <h2 className="text-xl poppins-semibold gradient-text">
            Rachelle Pantinople
          </h2>
          <p className="text-sm text-gray-400 poppins-light mt-2 leading-relaxed">
            Aspiring Frontend Developer focused on building clean,
            responsive, and modern web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm poppins-semibold uppercase tracking-wider text-gray-300 mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-400 poppins-regular">
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm poppins-semibold uppercase tracking-wider text-gray-300 mb-4">
            Connect
          </h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/rchll-16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/pantinople-rachelle-a-165028246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:pantinoplerachelle16@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-300 poppins-light">
        © {new Date().getFullYear()} Rachelle Pantinople. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
