"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProfileSectionProps {
  userData: {
    firstName: string
    lastName: string
    username: string
    balance: number
    totalEarnings: number
    totalAdsWatched: number
    referralCount: number
    photoUrl: string
  }
}

export default function ProfileSection({ userData }: ProfileSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">User Profile</h2>
        <p className="text-muted-foreground">View your account information and statistics</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="md:col-span-4 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="w-full card-hover shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div whileHover={{ scale: 1.05 }} className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={userData.photoUrl || "/placeholder.svg"}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary">
                    {userData.firstName} {userData.lastName}
                  </h3>
                  <p className="text-muted-foreground mb-2">@{userData.username}</p>
                  <p className="font-medium">
                    Balance: <span className="text-green-600 font-bold">${userData.balance.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Card className="card-hover shadow-lg border-0 border-l-4 border-l-green-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-green-600 mb-2">Total Earnings</h3>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mr-2"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <span className="text-2xl font-bold">${userData.totalEarnings.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-hover shadow-lg border-0 border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-blue-600 mb-2">Total Ads Watched</h3>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500 mr-2"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span className="text-2xl font-bold">{userData.totalAdsWatched}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-hover shadow-lg border-0 border-l-4 border-l-amber-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-amber-600 mb-2">Total Referrals</h3>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-500 mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="text-2xl font-bold">{userData.referralCount}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
