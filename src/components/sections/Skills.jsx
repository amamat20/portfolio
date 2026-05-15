import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import { skills } from "../../data/skills"

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ml", label: "Machine Learning" },
  { key: "tools", label: "Tools & DevOps" },
]

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[#F5F5F5] text-sm font-medium">{name}</span>
        <span className="text-[#39FF14] text-xs font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.07 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(90deg, #39FF14, #00FF99)",
            boxShadow: "0 0 8px rgba(57,255,20,0.4)",
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="What I Know"
          title="Skills"
          subtitle="Technologies and tools I work with across the stack — from UI to models."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 hover:border-[#39FF14]/30 transition-colors duration-300"
            >
              <h3 className="font-heading font-semibold text-[#39FF14] text-sm uppercase tracking-widest mb-6">
                {cat.label}
              </h3>
              <div className="space-y-4">
                {skills[cat.key].map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}