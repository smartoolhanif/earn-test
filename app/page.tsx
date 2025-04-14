"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomeSection from "@/components/home-section"
import EarnSection from "@/components/earn-section"
import ReferSection from "@/components/refer-section"
import WithdrawSection from "@/components/withdraw-section"
import ProfileSection from "@/components/profile-section"
import Loader from "@/components/loader"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState({
    firstName: "Md Shajahan",
    lastName: "Abir",
    username: "shajahanabir",
    balance: 100,
    totalEarnings: 250,
    totalAdsWatched: 25,
    referralCount: 5,
    photoUrl: "https://placehold.co/150",
    adsLimit: 10,
    todayAds: 6,
    todayEarning: 30,
  })
  const { toast } = useToast()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAdWatched = () => {
    // Simulate ad watching
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setUserData((prev) => ({
        ...prev,
        balance: prev.balance + 5,
        totalEarnings: prev.totalEarnings + 5,
        totalAdsWatched: prev.totalAdsWatched + 1,
        todayAds: prev.todayAds + 1,
        todayEarning: prev.todayEarning + 5,
      }))
      toast({
        title: "Ad Watched Successfully",
        description: "You earned $5 for watching the ad!",
        variant: "success",
      })
    }, 2000)
  }

  const handleWithdraw = (amount: number, method: string, address: string) => {
    if (amount > userData.balance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough balance for this withdrawal.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setUserData((prev) => ({
        ...prev,
        balance: prev.balance - amount,
      }))
      toast({
        title: "Withdrawal Successful",
        description: `$${amount} has been sent to your ${method} account.`,
        variant: "success",
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <Loader />}

      <Navbar userData={userData} />

      <main className="flex-grow pb-24">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomeSection userData={userData} onSectionChange={handleSectionChange} />
            </motion.div>
          )}

          {activeSection === "earn" && (
            <motion.div
              key="earn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EarnSection userData={userData} onAdWatched={handleAdWatched} onSectionChange={handleSectionChange} />
            </motion.div>
          )}

          {activeSection === "refer" && (
            <motion.div
              key="refer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ReferSection userData={userData} />
            </motion.div>
          )}

          {activeSection === "withdraw" && (
            <motion.div
              key="withdraw"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WithdrawSection userData={userData} onWithdraw={handleWithdraw} />
            </motion.div>
          )}

          {activeSection === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProfileSection userData={userData} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer activeSection={activeSection} onSectionChange={handleSectionChange} />

      <motion.div className="fixed bottom-24 right-4 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => handleSectionChange("refer")}
          className="bg-primary text-white rounded-full flex items-center px-4 py-3 shadow-lg"
        >
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
            className="mr-2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="font-semibold">Refer & Earn</span>
        </button>
      </motion.div>
    </div>
  )
}
