"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface EarnSectionProps {
  userData: {
    adsLimit: number
    todayAds: number
    referralCount: number
  }
  onAdWatched: () => void
  onSectionChange: (section: string) => void
}

export default function EarnSection({ userData, onAdWatched, onSectionChange }: EarnSectionProps) {
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

  const completionPercentage = (userData.todayAds / userData.adsLimit) * 100
  const tasksRemaining = userData.adsLimit - userData.todayAds
  const referralPercentage = Math.min((userData.referralCount / 10) * 100, 100)

  return (
    <section className="container mx-auto px-4 py-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">Earn Rewards</h2>
        <p className="text-muted-foreground">Complete tasks and refer friends to earn money</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Card className="card-hover shadow-lg border-0">
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold text-primary mb-4">Today's Tasks</CardTitle>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total Tasks:</span>
                  <span className="font-semibold">{userData.adsLimit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Completed:</span>
                  <span className="font-semibold text-green-600">{userData.todayAds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Remaining:</span>
                  <span className="font-semibold text-red-500">{tasksRemaining}</span>
                </div>
              </div>

              <div className="mb-6">
                <Progress value={completionPercentage} className="h-2" />
                <p className="text-right text-sm mt-1 text-muted-foreground">
                  {completionPercentage.toFixed(0)}% Completed
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={onAdWatched} className="w-full" disabled={tasksRemaining <= 0}>
                  {tasksRemaining > 0 ? (
                    <>
                      Start Earning
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </>
                  ) : (
                    "All Tasks Completed"
                  )}
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="card-hover shadow-lg border-0">
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold text-primary mb-4">Refer & Earn</CardTitle>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total Referrals:</span>
                  <span className="font-semibold">{userData.referralCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Goal:</span>
                  <span className="font-semibold">10</span>
                </div>
              </div>

              <div className="mb-6">
                <Progress value={referralPercentage} className="h-2" />
                <p className="text-right text-sm mt-1 text-muted-foreground">
                  {referralPercentage.toFixed(0)}% of Goal
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={() => onSectionChange("refer")} className="w-full" variant="secondary">
                  Invite Friends
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
