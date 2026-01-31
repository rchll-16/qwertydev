import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: FaFacebookF, link: "https://www.facebook.com/rachellep16" },
  { icon: FaGithub, link: "https://github.com/rchll-16" },
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/pantinople-rachelle-a-165028246/" },
  { icon: FaInstagram, link: "https://www.instagram.com/qwrty_rchll/" },
  { icon: FaTiktok, link: "https://www.tiktok.com/@qwerty_dev" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl poppins-bold">Get in Touch</motion.h2>
          <motion.div variants={fadeUp} className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-2" />
          <motion.p variants={fadeUp} className="text-gray-400 poppins-regular mt-4 max-w-lg mx-auto">
            Let’s connect and build something meaningful together
          </motion.p>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-xl group transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 poppins-regular text-gray-300"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <MdEmail className="text-purple-400" size={22} />
                <span className="break-all text-sm md:text-base">pantinoplerachelle16@gmail.com</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <MdPhone className="text-purple-400" size={22} />
                <span>+63 951 490 8319</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <MdLocationOn className="text-purple-400" size={22} />
                <span>Rizal, Philippines</span>
              </motion.div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex md:justify-end items-start"
            >
              <div>
                <motion.p variants={fadeUp} className="poppins-semibold mb-4 text-white">
                  Social Media
                </motion.p>
                <div className="flex gap-4">
                  {socials.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="p-3 rounded-full bg-white/10 border border-white/10
                                 hover:bg-purple-500/20 hover:scale-110
                                 transition-all duration-300"
                    >
                      <item.icon className="text-purple-400" size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
