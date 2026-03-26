import type { Locale } from "@/lib/i18n";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  body: string[];
};

type SiteDictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    approach: string;
    estimate: string;
    blog: string;
    contact: string;
  };
  labels: {
    caseLabel: string;
    articleLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metricSupport: string;
    metricMarket: string;
    chips: string[];
    visualTitle: string;
    visualItems: string[];
    ctaHint: string;
  };
  proof: {
    title: string;
    subtitle: string;
    items: Array<{
      metric: string;
      context: string;
      note: string;
    }>;
  };
  serviceCards: Array<{ title: string; text: string }>;
  trust: {
    title: string;
    points: string[];
    ndaTitle: string;
    ndaText: string;
  };
  process: {
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  estimate: {
    title: string;
    subtitle: string;
    highlights: string[];
    projectType: string;
    complexity: string;
    timeline: string;
    integrations: string;
    submit: string;
    resultPrefix: string;
    resultSuffix: string;
    discussCta: string;
    discussAltCta: string;
    quickHint: string;
    options: {
      type: string[];
      complexity: string[];
      timeline: string[];
      integrations: string[];
    };
  };
  leadForm: {
    title: string;
    subtitle: string;
    projectType: string;
    contact: string;
    details: string;
    contactPlaceholder: string;
    detailsPlaceholder: string;
    submit: string;
    submitLoading: string;
    stickyCta: string;
    instantTitle: string;
    instantSubtitle: string;
    instantTelegram: string;
    instantWhatsapp: string;
    instantPoints: string[];
    privacyNote: string;
    success: string;
    error: string;
  };
  blog: {
    title: string;
    subtitle: string;
    allPosts: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookies: string;
  };
  footer: {
    rights: string;
    contactLabel: string;
  };
};

export const dictionaries: Record<Locale, SiteDictionary> = {
  ru: {
    meta: {
      title: "Xouston | Разработка приложений и digital-продуктов",
      description:
        "Разрабатываем мобильные приложения, сайты, Telegram-ботов и выделяем специалистов под задачи бизнеса.",
    },
    nav: {
      services: "Услуги",
      approach: "Подход",
      estimate: "Оценка",
      blog: "Блог",
      contact: "Контакты",
    },
    labels: {
      caseLabel: "Кейс",
      articleLabel: "Статья",
    },
    hero: {
      kicker: "Xouston Design Lab",
      title: "Мобильные и web-продукты, которые приводят клиентов",
      subtitle:
        "Берем задачу под ключ: от продуктовой идеи до запуска и поддержки. Для отдельных задач выделяем DevOps, дизайнеров и QA.",
      ctaPrimary: "Оставить заявку",
      ctaSecondary: "Быстрая оценка",
      metricSupport: "поддержка",
      metricMarket: "фокус рынков",
      chips: ["NDA-first delivery", "B2C growth", "EU-ready stack"],
      visualTitle: "Delivery pulse",
      visualItems: [
        "Прозрачные статусы по спринтам",
        "Еженедельные демо и ретро",
        "Фокус на KPI, а не на часы",
      ],
      ctaHint: "Ответ в течение 1 рабочего дня. Работаем по NDA.",
    },
    proof: {
      title: "Анонимные результаты по проектам под NDA",
      subtitle: "Показываем бизнес-эффект, даже если бренд раскрыть нельзя.",
      items: [
        {
          metric: "+34%",
          context: "конверсия в заявку",
          note: "B2C mobile-сервис за 10 недель",
        },
        {
          metric: "-41%",
          context: "ручных операций",
          note: "автоматизация через Telegram-бота",
        },
        {
          metric: "2.3x",
          context: "скорость релизов",
          note: "выделенная команда DevOps + QA",
        },
      ],
    },
    serviceCards: [
      {
        title: "Мобильная разработка",
        text: "iOS, Android и кроссплатформенные приложения для B2C и корпоративных сервисов.",
      },
      {
        title: "Сайты и web-платформы",
        text: "Быстрые сайты и панели управления с упором на SEO, скорость и конверсию.",
      },
      {
        title: "Telegram и торговые боты",
        text: "Автоматизация продаж, поддержки и внутренних операций через ботов и интеграции.",
      },
      {
        title: "Выделенные специалисты",
        text: "Подключаем отдельных экспертов: DevOps, UI/UX, QA и fullstack инженеров.",
      },
    ],
    trust: {
      title: "Почему нам доверяют",
      points: [
        "Фиксируем этапы, стоимость и критерии готовности в договоре",
        "Работаем короткими итерациями с прозрачным статусом",
        "Соблюдаем NDA и не раскрываем внутренние продукты клиента",
      ],
      ndaTitle: "Портфолио под NDA",
      ndaText:
        "Многие проекты не публичные. Вместо логотипов показываем обезличенные кейсы по отраслям и результатам: рост конверсии, ускорение процессов, снижение операционных затрат.",
    },
    process: {
      title: "Как выстроена работа",
      steps: [
        {
          title: "01. Discovery",
          text: "Разбираем бизнес-цель и фиксируем продуктовую гипотезу.",
        },
        {
          title: "02. Design & Architecture",
          text: "Собираем UX, визуал и техническую архитектуру под масштабирование.",
        },
        {
          title: "03. Delivery",
          text: "Реализуем, тестируем и запускаем релиз без потери качества.",
        },
      ],
    },
    estimate: {
      title: "Предварительная оценка проекта",
      subtitle: "Расчет ориентировочный. Точный бюджет даем после короткого брифа.",
      highlights: [
        "Диапазон учитывает дизайн, разработку и QA",
        "Срок и сложность влияют на итоговую стоимость",
        "После короткого созвона фиксируем коммерческое предложение",
      ],
      projectType: "Тип проекта",
      complexity: "Сложность",
      timeline: "Срок",
      integrations: "Интеграции",
      submit: "Получить оценку и план",
      resultPrefix: "Ориентировочный бюджет:",
      resultSuffix: "(диапазон)",
      discussCta: "Обсудить этот диапазон",
      discussAltCta: "WhatsApp",
      quickHint: "Кнопка отправит в мессенджер уже заполненный бриф с выбранными параметрами.",
      options: {
        type: ["Мобильное приложение", "Сайт", "Telegram-бот", "Выделенный специалист"],
        complexity: ["Базовая", "Средняя", "Высокая"],
        timeline: ["до 1 месяца", "1-3 месяца", "3+ месяца"],
        integrations: ["Минимум", "CRM/платежи", "Сложные API"],
      },
    },
    leadForm: {
      title: "Обсудим ваш проект",
      subtitle: "Отвечаем в течение рабочего дня.",
      projectType: "Тип проекта",
      contact: "Контакт (Telegram/WhatsApp/Email)",
      details: "Кратко о задаче",
      contactPlaceholder: "@username или +7...",
      detailsPlaceholder: "Что нужно сделать, сроки, есть ли референсы",
      submit: "Отправить заявку",
      submitLoading: "Отправляем...",
      stickyCta: "Оставить заявку",
      instantTitle: "Быстрый контакт без форм",
      instantSubtitle: "Откроем мессенджер с готовым сообщением. От тебя 1 клик.",
      instantTelegram: "Написать в Telegram",
      instantWhatsapp: "Написать в WhatsApp",
      instantPoints: ["Ответ в течение 1 рабочего дня", "NDA-first коммуникация", "Проектный процесс RU / EN"],
      privacyNote: "Нажимая кнопку, вы соглашаетесь на обработку данных для обратной связи.",
      success: "Заявка отправлена. Скоро свяжемся.",
      error: "Не удалось отправить заявку. Попробуйте позже.",
    },
    blog: {
      title: "Блог о разработке и запуске продуктов",
      subtitle: "Публикуем практические материалы для роста органического трафика и доверия.",
      allPosts: "Все статьи",
    },
    legal: {
      privacy: "Политика конфиденциальности",
      terms: "Пользовательское соглашение",
      cookies: "Cookie policy",
    },
    footer: {
      rights: "Все права защищены.",
      contactLabel: "Связь",
    },
  },
  en: {
    meta: {
      title: "Xouston | Mobile and Web Product Development",
      description:
        "We build mobile apps, websites, Telegram bots, and provide dedicated specialists for focused delivery.",
    },
    nav: {
      services: "Services",
      approach: "Approach",
      estimate: "Estimate",
      blog: "Blog",
      contact: "Contact",
    },
    labels: {
      caseLabel: "Case",
      articleLabel: "Article",
    },
    hero: {
      kicker: "Xouston Design Lab",
      title: "Digital products designed to convert and scale",
      subtitle:
        "From strategy and design to release and support. Need only one role? We provide focused experts in DevOps, QA, and product design.",
      ctaPrimary: "Submit request",
      ctaSecondary: "Quick estimate",
      metricSupport: "support",
      metricMarket: "market focus",
      chips: ["NDA-first delivery", "B2C growth", "EU-ready stack"],
      visualTitle: "Delivery pulse",
      visualItems: [
        "Transparent sprint-level reporting",
        "Weekly demos and feedback loops",
        "Outcome-first execution against KPIs",
      ],
      ctaHint: "Response within one business day. NDA-first collaboration.",
    },
    proof: {
      title: "Anonymized outcomes from NDA projects",
      subtitle: "Even when names are confidential, business impact can be measured.",
      items: [
        {
          metric: "+34%",
          context: "lead conversion",
          note: "B2C mobile product delivered in 10 weeks",
        },
        {
          metric: "-41%",
          context: "manual operations",
          note: "sales automation with Telegram bot flows",
        },
        {
          metric: "2.3x",
          context: "release velocity",
          note: "dedicated DevOps and QA enablement",
        },
      ],
    },
    serviceCards: [
      {
        title: "Mobile Development",
        text: "iOS, Android and cross-platform apps for B2C products and enterprise workflows.",
      },
      {
        title: "Web Platforms",
        text: "High-performance websites and dashboards focused on SEO and conversion.",
      },
      {
        title: "Telegram and Trading Bots",
        text: "Automation for sales, support, and internal operations with robust integrations.",
      },
      {
        title: "Dedicated Experts",
        text: "Add DevOps, UI/UX, QA, or fullstack talent as an extension of your team.",
      },
    ],
    trust: {
      title: "Why clients trust us",
      points: [
        "Clear contracts with scope, milestones and acceptance criteria",
        "Short delivery cycles with transparent progress reporting",
        "Strict NDA-first approach for internal and sensitive products",
      ],
      ndaTitle: "NDA-first case studies",
      ndaText:
        "A large share of our work is confidential. Instead of public logos, we present anonymized outcomes by industry, problem, and business impact.",
    },
    process: {
      title: "How we work",
      steps: [
        {
          title: "01. Discovery",
          text: "We align on business goals and shape a realistic product scope.",
        },
        {
          title: "02. Design & Architecture",
          text: "We craft UX and technical foundations optimized for growth.",
        },
        {
          title: "03. Delivery",
          text: "We build, test, and launch with quality and long-term maintainability.",
        },
      ],
    },
    estimate: {
      title: "Rough project estimate",
      subtitle: "This is a directional range. We provide a final quote after a short briefing.",
      highlights: [
        "Range includes design, development, and QA",
        "Timeline and complexity have the strongest impact",
        "After a short call, we prepare a fixed commercial offer",
      ],
      projectType: "Project type",
      complexity: "Complexity",
      timeline: "Timeline",
      integrations: "Integrations",
      submit: "Get estimate and rollout plan",
      resultPrefix: "Estimated budget:",
      resultSuffix: "(range)",
      discussCta: "Discuss this range",
      discussAltCta: "WhatsApp",
      quickHint: "The button sends a prefilled brief with selected options to messenger.",
      options: {
        type: ["Mobile app", "Website", "Telegram bot", "Dedicated specialist"],
        complexity: ["Basic", "Mid", "Advanced"],
        timeline: ["up to 1 month", "1-3 months", "3+ months"],
        integrations: ["Minimal", "CRM/payments", "Advanced APIs"],
      },
    },
    leadForm: {
      title: "Let us review your task",
      subtitle: "Response within one business day.",
      projectType: "Project type",
      contact: "Contact (Telegram/WhatsApp/Email)",
      details: "Project details",
      contactPlaceholder: "@username or +44...",
      detailsPlaceholder: "Scope, timeline, priorities, references",
      submit: "Send request",
      submitLoading: "Sending...",
      stickyCta: "Submit request",
      instantTitle: "Instant contact, no forms",
      instantSubtitle: "Open messenger with a prefilled message and send it in one tap.",
      instantTelegram: "Message via Telegram",
      instantWhatsapp: "Message via WhatsApp",
      instantPoints: ["Response within one business day", "NDA-first communication", "RU / EN project workflow"],
      privacyNote: "By submitting, you agree to data processing for project communication.",
      success: "Request sent. We will contact you shortly.",
      error: "Request failed. Please try again.",
    },
    blog: {
      title: "Product and engineering insights",
      subtitle: "Practical content to improve inbound traffic and conversion quality.",
      allPosts: "All posts",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
    },
    footer: {
      rights: "All rights reserved.",
      contactLabel: "Contact",
    },
  },
};

export const posts: Record<Locale, Post[]> = {
  ru: [
    {
      slug: "how-to-plan-mvp",
      title: "Как спланировать MVP за 2 недели",
      excerpt: "Пошаговая схема discovery, которая экономит бюджет и ускоряет запуск.",
      readTime: "6 мин",
      date: "2026-03-20",
      body: [
        "Быстрый MVP начинается не с кода, а с четкого понимания бизнес-рисков.",
        "Мы рекомендуем пройти короткий discovery-спринт: цель, метрики, критические сценарии.",
        "После этого можно запускать реализацию итерациями и не тратить бюджет на лишний функционал.",
      ],
    },
    {
      slug: "telegram-bots-for-sales",
      title: "Telegram-боты для продаж: где реальная польза",
      excerpt: "Разбираем, когда бот действительно повышает конверсию, а когда нет.",
      readTime: "5 мин",
      date: "2026-03-15",
      body: [
        "Бот эффективен, если закрывает узкое место: первичная квалификация или повторные касания.",
        "Важно заранее определить сценарии передачи диалога человеку и метрики качества лидов.",
        "В проектах с CRM-интеграцией бот чаще всего окупается быстрее простого лендинга.",
      ],
    },
  ],
  en: [
    {
      slug: "how-to-plan-mvp",
      title: "How to plan an MVP in two weeks",
      excerpt: "A practical discovery flow that saves budget and accelerates launch.",
      readTime: "6 min",
      date: "2026-03-20",
      body: [
        "A fast MVP starts with risk mapping, not with immediate coding.",
        "Use a short discovery sprint to define goals, metrics, and key user journeys.",
        "Then deliver in iterations and avoid building features that are not validated.",
      ],
    },
    {
      slug: "telegram-bots-for-sales",
      title: "Telegram bots for sales: where they actually work",
      excerpt: "A clear framework for deciding when bots improve conversion quality.",
      readTime: "5 min",
      date: "2026-03-15",
      body: [
        "Bots are useful when they remove a clear bottleneck, such as lead qualification.",
        "Define handoff scenarios to humans and set lead-quality metrics from day one.",
        "With CRM integrations, bots often create value faster than static lead forms.",
      ],
    },
  ],
};
