"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );
      console.log("EmailJS muvaffaqiyatli:", result);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: any) {
      console.error("EmailJS xatosi:", err.text || err.message || err);
      setError("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
            Свяжитесь с <span className="text-blue-600">нами</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Готовы решить проблемы вашего бизнеса? Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid gap-10 lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Отправьте нам сообщение</CardTitle>
              <CardDescription>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-green-800">
                  <p className="font-medium">Спасибо за ваше сообщение!</p>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Опишите вашу бизнес-проблему"
                      required
                      className="min-h-[120px]"
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-red-800">{error}</div>}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">aljonsherqulov@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Телефон</h3>
                <p className="text-gray-600 mt-1">+998 94 612 15 87</p>
                <p className="text-gray-600">Пн-Пт, 9:00-18:00</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Адрес</h3>
                <p className="text-gray-600 mt-1">г. Ташкент, ул. Сергели</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}