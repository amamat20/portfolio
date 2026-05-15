import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] bg-[#050505] flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="font-heading font-bold text-4xl text-[#F5F5F5]"
          >
            B<span style={{ color: "#39FF14", textShadow: "0 0 20px rgba(57,255,20,0.5)" }}>.</span>
          </motion.div>

          {/* Loading bar */}
          <div className="w-40 h-px bg-[#1A1A1A] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full"
              style={{
                background: "linear-gradient(90deg, #39FF14, #00FF99)",
                boxShadow: "0 0 8px rgba(57,255,20,0.5)",
              }}
            />
          </div>

          <p className="text-[#9CA3AF] text-xs tracking-widest uppercase">
            Loading portfolio...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}