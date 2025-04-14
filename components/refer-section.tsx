"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

interface ReferSectionProps {
  userData: {
    referralCount: number
  }
}

export default function ReferSection({ userData }: ReferSectionProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const referralLink = "https://t.me/your_bot?start=ABC123"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}`, "_blank")
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">🚀 Referral Program</h2>
        <p className="text-muted-foreground">Share your referral link and earn rewards for every friend who joins!</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Card className="card-hover shadow-lg border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Your Referral Link</h3>
              <div className="flex items-center space-x-2">
                <Input value={referralLink} readOnly className="bg-muted" />
                <Button onClick={copyToClipboard} variant="outline" className="shrink-0">
                  {copied ? (
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
                      className="mr-2"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  ) : (
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
                      className="mr-2"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Share this link with your friends to earn rewards when they join!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="card-hover shadow-lg border-0">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-bold mb-4">Share on Telegram</h3>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={shareOnTelegram} className="rounded-full px-6" size="lg">
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
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                  Share on Telegram
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center"
      >
        <Card className="card-hover shadow-lg border-0 w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Total Referrals</h3>
            <div className="text-4xl font-bold text-green-600 mb-2">{userData.referralCount}</div>
            <p className="text-sm text-muted-foreground">Keep sharing to increase your earnings!</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
