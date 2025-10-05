"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NotFoundImage from "../../public/404.png";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={NotFoundImage}
          alt="404 Not Found"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-raleway font-semibold leading-tight mt-8">
          Ошибка 404
        </h1>
        <p className="text-neutral-600 mt-4 max-w-md mx-auto">
          Эта страница не существует. Проверьте наличие ошибок или вернитесь на
          предыдущую страницу.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
        >
          Вернуться на главную
        </Link>
        <div className="mt-16 text-left max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Документация</h3>
            <p className="text-neutral-600 mt-2">
              Узнайте, как интегрировать наши инструменты с вашим приложением.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Блог</h3>
            <p className="text-neutral-600 mt-2">
              Прочитайте наши последние новости и статьи.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
