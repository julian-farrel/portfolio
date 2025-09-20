"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function BlockchainStats() {
  const [stats, setStats] = useState({
    smartContracts: 0,
    totalValueLocked: 0,
    transactionsProcessed: 0,
    gasOptimized: 0,
  })

  const finalStats = {
    smartContracts: 25,
    totalValueLocked: 12.8,
    transactionsProcessed: 45000,
    gasOptimized: 35,
  }

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats({
          smartContracts: Math.floor(finalStats.smartContracts * progress),
          totalValueLocked: Number.parseFloat((finalStats.totalValueLocked * progress).toFixed(1)),
          transactionsProcessed: Math.floor(finalStats.transactionsProcessed * progress),
          gasOptimized: Math.floor(finalStats.gasOptimized * progress),
        })

        if (currentStep >= steps) {
          clearInterval(interval)
          setStats(finalStats)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }

    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Blockchain Impact</h2>
          <p className="text-muted-foreground">Real metrics from deployed smart contracts and dApps</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stats.smartContracts}+</div>
              <div className="text-sm text-muted-foreground">Smart Contracts Deployed</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">${stats.totalValueLocked}M</div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                {stats.transactionsProcessed.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Transactions Processed</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stats.gasOptimized}%</div>
              <div className="text-sm text-muted-foreground">Gas Optimization</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
