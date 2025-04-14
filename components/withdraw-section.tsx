"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WithdrawSectionProps {
  userData: {
    balance: number
  }
  onWithdraw: (amount: number, method: string, address: string) => void
}

export default function WithdrawSection({ userData, onWithdraw }: WithdrawSectionProps) {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!amount || !method || !address) return

    onWithdraw(Number(amount), method, address)

    // Reset form
    setAmount("")
    setMethod("")
    setAddress("")
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">Withdraw Funds</h2>
        <p className="text-muted-foreground">Request a withdrawal to your preferred payment method</p>
      </motion.div>

      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-muted/50 rounded-lg px-8 py-4 text-center"
        >
          <h3 className="text-lg font-medium text-muted-foreground">Available Balance</h3>
          <p className="text-3xl font-bold text-green-600">${userData.balance.toFixed(2)}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <Card className="card-hover shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Request Withdrawal</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-method">Withdrawal Method</Label>
                <Select value={method} onValueChange={setMethod} required>
                  <SelectTrigger id="payment-method" className="w-full">
                    <SelectValue placeholder="Select a method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bkash">Bkash</SelectItem>
                    <SelectItem value="nagad">Nagad</SelectItem>
                    <SelectItem value="rocket">Rocket</SelectItem>
                    <SelectItem value="dogs">Dogs</SelectItem>
                    <SelectItem value="bot_make">Bot Make</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                    <SelectItem value="binance">Binance Pay ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="withdraw-amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="withdraw-amount"
                    type="number"
                    placeholder="Enter amount"
                    className="pl-7"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min={1}
                    max={userData.balance}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="withdraw-address">Withdrawal Address</Label>
                <Input
                  id="withdraw-address"
                  placeholder="Enter wallet address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={!amount || !method || !address || Number(amount) > userData.balance}
                >
                  Submit Withdrawal
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m16 12-4 4-4-4"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
