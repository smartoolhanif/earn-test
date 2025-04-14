"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface NavbarProps {
  userData: {
    firstName: string
    lastName: string
    username: string
    balance: number
    photoUrl: string
  }
}

export default function Navbar({ userData }: NavbarProps) {
  return (
    <motion.nav
      className="bg-primary text-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full overflow-hidden border-2 border-white"
          >
            <Image
              src={userData.photoUrl || "/placeholder.svg"}
              alt="Profile Picture"
              width={50}
              height={50}
              className="object-cover"
            />
          </motion.div>
          <div>
            <motion.h3
              className="font-bold text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {userData.firstName} {userData.lastName}
            </motion.h3>
            <motion.p
              className="text-sm text-primary-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ${userData.balance.toFixed(2)}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
