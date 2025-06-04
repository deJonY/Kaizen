"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const handleTelegramRedirect = () => {
    window.open("https://t.me/newnorcoz", "_blank", "noopener,noreferrer");
  };
  
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 max-w-3xl">
            Решаем бизнес-проблемы методом <span className="text-blue-600">Kaizen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            Возникают проблемы в вашем бизнесе — будь то технические, кадровые или стратегические — мы поможем найти
            эффективное решение с помощью метода Kaizen. Доверьтесь нашему опыту, как это делают крупные
            предприниматели!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://t.me/Only_BMW_M_Power/" target="_blank">
              <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Связаться с нами <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

