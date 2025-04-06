"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="grid gap-10 lg:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
              О методе <span className="text-blue-600">Kaizen</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kaizen — японская философия, которая фокусируется на непрерывном
              совершенствовании процессов, продуктов и услуг. В переводе с
              японского "кай" означает "изменение", а "дзен" — "хорошо" или "к
              лучшему".
            </p>
            <p className="text-lg text-gray-600">
              Наша компания применяет принципы Kaizen для решения
              бизнес-проблем, помогая организациям достигать постоянного
              улучшения через небольшие, последовательные изменения, которые в
              совокупности приводят к значительным результатам.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/40 z-10" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h3 className="text-4xl font-bold text-white text-center drop-shadow-lg">
                Постоянное совершенствование
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
