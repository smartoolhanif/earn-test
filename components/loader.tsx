"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-16 h-16"
      >
        <div className="absolute inset-0 rounded border-4 border-primary border-t-transparent"></div>
      </motion.div>
    </motion.div>
  )
}
