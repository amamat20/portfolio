import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiArrowDown } from "react-icons/hi"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
})

const techStack = [
  "React",
  "Node.js",
  "Python",
  "TensorFlow",
  "PostgreSQL",
  "Docker",
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Glow Orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-green-400 text-sm font-medium tracking-widest uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="text-green-400">
              Bayu
            </span>
            <br />
            Putra Pamungkas
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-gray-400 text-lg mb-2"
          >
            Fullstack Developer & Machine Learning Engineer
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-md"
          >
            I build modern, scalable web applications and intelligent systems —
            bridging the gap between clean UI and powerful backend solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-4 mb-10"
          >

            <a
              href="#projects"
              className="bg-green-400 text-black font-semibold px-6 py-3 rounded-md hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-all duration-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-neutral-700 text-white px-6 py-3 rounded-md hover:border-green-400 hover:text-green-400 transition-all duration-200"
            >
              Contact Me
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex items-center gap-5"
          >

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-xl"
            >
              <FaLinkedin />
            </a>

          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-72 h-80 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col justify-between">

            {/* Top Row */}
            <div className="flex items-center justify-between">

              <div className="w-12 h-12 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center">
                <span className="font-bold text-green-400 text-lg">
                  B
                </span>
              </div>

              <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                Available
              </span>

            </div>

            {/* Name Block */}
            <div>
              <h3 className="font-bold text-white text-xl">
                Bayu Putra
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Fullstack & ML Engineer
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-gray-400 bg-black border border-neutral-700 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
              <span className="text-gray-400 text-xs">
                Projects
              </span>

              <span className="text-green-400 font-bold">
                10+
              </span>
            </div>

            {/* Corner Glow */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl pointer-events-none" />

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.a>

    </section>
  )
}