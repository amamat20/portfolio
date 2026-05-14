import { motion } from "framer-motion"

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <p className="text-neon text-xs font-medium tracking-widest uppercase mb-3">
        {label}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#9CA3AF] text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-px bg-neon" />
    </motion.div>
  )
}