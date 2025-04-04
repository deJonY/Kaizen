"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Users, LineChart } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Технические решения",
      description:
        "Оптимизация технических процессов, внедрение новых технологий и автоматизация рутинных задач для повышения эффективности вашего бизнеса.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Кадровые решения",
      description:
        "Развитие корпоративной культуры, повышение вовлеченности сотрудников и создание эффективных команд для достижения бизнес-целей.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-600" />,
      title: "Стратегические решения",
      description:
        "Разработка и внедрение долгосрочных стратегий развития, анализ рынка и конкурентов, оптимизация бизнес-процессов.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
            Наши <span className="text-blue-600">услуги</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для различных бизнес-проблем, используя методологию Kaizen
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

