import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Kaizen</h3>
            <p className="text-gray-400">Решаем бизнес-проблемы с помощью метода непрерывного совершенствования</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <ul className="space-y-2">
              <li>jony905052@gmail.com</li>
              <li>+998 90 011 50 52</li>
              <li>г. Ташкент, ул. Сергели</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Социальные сети</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kaizen Company. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

