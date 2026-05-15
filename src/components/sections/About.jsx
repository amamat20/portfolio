import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3.69", label: "Current GPA" },
  { value: "5+", label: "Years Coding" },
  { value: "2", label: "Domains: Web & ML" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle="A passionate developer who loves building things that live on the web — and machines that learn."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-[#9CA3AF] leading-relaxed">
              <p>
                Hi! I'm{" "}
                <span className="text-[#F5F5F5] font-medium">
                  Bayu Putra Pamungkas
                </span>
                , a Fullstack Developer and Machine Learning Engineer based in
                Indonesia. I'm currently studying Informatics Engineering and
                building projects that combine modern web tech with intelligent
                systems.
              </p>
              <p>
                On the frontend, I love crafting clean, interactive UIs with
                React. On the backend, I work with Node.js and Python to build
                scalable APIs. And in the ML space, I experiment with TensorFlow
                and scikit-learn to solve real-world problems with data.
              </p>
              <p>
                When I'm not coding, I'm exploring new tech, contributing to
                open source, or obsessing over good UI design.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#39FF14] text-[#050505] font-semibold px-5 py-3 rounded-md hover:opacity-90 transition-all duration-200"
              >
                <HiDownload className="text-lg" />
                Download CV
              </a>

              <a
                href="https://github.com/amamat20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#1A1A1A] text-[#F5F5F5] px-5 py-3 rounded-md hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-200"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/40 transition-colors duration-300 group"
              >
                <p className="font-heading font-bold text-3xl text-[#39FF14] group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.6)] transition-all duration-300">
                  {stat.value}
                </p>
                <p className="text-[#9CA3AF] text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
