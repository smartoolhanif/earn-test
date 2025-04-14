"use client"

import { motion } from "framer-motion"

interface FooterProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Footer({ activeSection, onSectionChange }: FooterProps) {
  const navItems = [
    { id: "home", icon: "home", label: "Home" },
    { id: "earn", icon: "dollar-sign", label: "Earn" },
    { id: "withdraw", icon: "wallet", label: "Withdraw" },
    { id: "profile", icon: "user", label: "Profile" },
  ]

  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 z-40 gradient-bg text-white shadow-lg rounded-t-xl"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center px-3 py-1 rounded-lg ${
                activeSection === item.id ? "bg-white/20" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xl mb-1">
                {item.icon === "home" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                )}
                {item.icon === "dollar-sign" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                )}
                {item.icon === "wallet" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                )}
                {item.icon === "user" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </span>
              <span className="text-xs font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
