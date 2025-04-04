"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "Благодаря методу Kaizen мы смогли оптимизировать наши бизнес-процессы и значительно увеличить производительность. Рекомендую эту компанию всем, кто стремится к постоянному совершенствованию.",
      author: "Александр Петров",
      position: "Генеральный директор, ТехноПром",
    },
    {
      quote:
        "Команда Kaizen помогла нам решить серьезные кадровые проблемы. Теперь у нас сплоченный коллектив, который эффективно работает на достижение общих целей.",
      author: "Елена Смирнова",
      position: "HR-директор, ИнноваГрупп",
    },
    {
      quote:
        "Стратегические решения, предложенные специалистами Kaizen, позволили нашей компании выйти на новый уровень развития и успешно конкурировать на международном рынке.",
      author: "Дмитрий Иванов",
      position: "Основатель, ГлобалТрейд",
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
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
            Нам <span className="text-blue-600">доверяют</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Отзывы наших клиентов о сотрудничестве с компанией Kaizen
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md bg-gray-50">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

