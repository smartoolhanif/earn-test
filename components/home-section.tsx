"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface HomeSectionProps {
  userData: {
    firstName: string
    lastName: string
    totalEarnings: number
    totalAdsWatched: number
  }
  onSectionChange: (section: string) => void
}

export default function HomeSection({ userData, onSectionChange }: HomeSectionProps) {
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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="col-span-1 md:col-span-2">
          <Card className="overflow-hidden card-hover">
            <CardContent className="p-6 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">
                    Welcome {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-muted-foreground mb-4">Start Earning Money Now</p>
                  <Button onClick={() => onSectionChange("earn")} className="rounded-full" size="lg">
                    Earn Now
                  </Button>
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Earn Money"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-primary text-primary-foreground card-hover h-full">
            <CardContent className="p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
              </div>
              <h3 className="text-2xl font-bold">${userData.totalEarnings.toFixed(2)}</h3>
              <p className="opacity-80">Total Earnings</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="bg-zinc-900 text-white card-hover h-full">
            <CardContent className="p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{userData.totalAdsWatched}</h3>
              <p className="opacity-80">Total Ads Watched</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
