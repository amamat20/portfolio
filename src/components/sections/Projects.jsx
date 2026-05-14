import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../../data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 py-24 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="My Work"
          title="Projects"
          subtitle="A selection of things I've built — from fullstack apps to ML pipelines."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/40 hover:shadow-[0_0_20px_rgba(57,255,20,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top */}
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center">
                    <span className="text-[#39FF14] text-lg font-heading font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9CA3AF] hover:text-[#39FF14] transition-colors duration-200"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9CA3AF] hover:text-[#39FF14] transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="text-base" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & description */}
                <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] mb-2 group-hover:text-[#39FF14] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9CA3AF] bg-[#050505] border border-[#1A1A1A] px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less toggle */}
        {projects.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="border border-[#1A1A1A] text-[#9CA3AF] px-6 py-3 rounded-md hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-200 font-medium"
            >
              {showAll ? "Show Less" : "Show All Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
