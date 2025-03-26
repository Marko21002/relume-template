"use client";
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq1 = (props: Faq1Props) => {
  const {
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container max-w-[800px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        <Accordion type="multiple" className="space-y-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-100 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors text-lg font-light">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-16 max-w-md text-center">
          <h4 className="mb-3 text-2xl font-light">{footerHeading}</h4>
          <p className="text-gray-600 mb-6">{footerDescription}</p>
          <Button
            {...button}
            className="px-8 py-3 rounded-full transition-all hover:opacity-90"
          >
            {button.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Faq1Defaults: Props = {
  heading: "Часто задаваемые вопросы",
  description: "Ответы на самые популярные вопросы о нашем сервисе",
  questions: [
    {
      title: "Могу ли я попробовать сервис перед оплатой?",
      answer:
        "Да! Вы можете протестировать наш сервис на бесплатном тарифе, который включает в себя 2 проекта. Неразмещенные проекты будут ограничены двумя страницами, но вы можете приобрести тариф сайта для каждого проекта, чтобы разблокировать до 100 статических страниц и дополнительные страницы CMS.",
    },
    {
      title: "Что такое проект?",
      answer:
        "Проект — это веб-сайт, который вы создаете в нашей системе. Вы можете опубликовать проекты на поддомене staging бесплатно, экспортировать код на платном тарифе или добавить тариф сайта для подключения собственного домена и разблокировки функций хостинга.",
    },
    {
      title: "Какую нагрузку выдерживает хостинг?",
      answer:
        "Наш хостинг автоматически масштабируется для обработки миллионов одновременных посещений. Все тарифы обслуживаются через CDN и оптимизированы для максимальной производительности, загружая сайты за миллисекунды.",
    },
    {
      title: "Какую поддержку вы предоставляете?",
      answer:
        "Мы предоставляем быструю поддержку по электронной почте для платных аккаунтов и приоритетную помощь для командных аккаунтов. Поддержка сообщества доступна для бесплатных аккаунтов.",
    },
    {
      title: "Сколько времени нужно, чтобы освоить платформу?",
      answer:
        "Если вы новичок в создании сайтов, наши видеоуроки помогут вам быстро освоиться. Если вы уже знакомы с концепциями CSS и блочной моделью, вы будете чувствовать себя как дома.",
    },
  ],
  footerHeading: "Остались вопросы?",
  footerDescription:
    "Свяжитесь с нами, и мы поможем вам разобраться со всеми вопросами",
  button: {
    title: "Связаться с нами",
    variant: "secondary",
  },
};
