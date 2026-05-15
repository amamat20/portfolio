import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiArrowUp } from "react-icons/hi"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-[#39FF14] text-[#050505] rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:scale-110 transition-all duration-200"
        >
          <HiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}