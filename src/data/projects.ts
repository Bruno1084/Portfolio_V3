import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "gardenads",
    title: "GardenAds",
    subtitle: {
      es: "Performance marketing platform",
      en: "Performance marketing platform",
    },
    description: {
      es: "Plataforma para conectar marketing y revenue real...",
      en: "Platform that connects marketing with real revenue...",
    },
    repository_url: "https://github.com/Bruno1084/Portfolio_V3",
    website_url: "https://s02-26-equipo-03-web-app-developmen-green.vercel.app",
    category: { es: "Ecommerce Web", en: "E-commerce Website" },
    year: 2026,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/GardenAds_img1.jpg",
    content: [
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/GardenAds_img1.jpg",
        alt: {
          es: "Dashboard de GardenAds 1",
          en: "GardenAds dashboard 1",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Muchas empresas invierten en Google y Meta Ads, pero enfrentan un problema común: Los números de conversiones no siempre coinciden con los pagos reales en Stripe.",
          en: "Many companies invest in Google and Meta Ads, but they face a common problem: Conversion numbers don't always match the actual payments in Stripe.",
        },
      },
      {
        type: "list",
        items: [
          {
            es: "Eventos capturados desde campañas publicitarias",
            en: "Events captured from ad campaigns",
          },
          {
            es: "Confirmaciones reales de pago vía Stripe",
            en: "Actual payment confirmations via Stripe",
          },
          {
            es: "Validación server-side para mejorar la atribución",
            en: "Server-side validation to improve attribution",
          },
        ],
      },
      {
        type: "paragraph",
        text: {
          es: "El resultado: decisiones de marketing basadas en revenue real, no en estimaciones.",
          en: "The result: marketing decisions based on real revenue, not estimates.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/GardenAds_img2.jpg",
        alt: {
          es: "Dashboard de GardenAds 2",
          en: "GardenAds dashboard 2",
        },
      },
    ],
  },
  {
    id: 2,
    slug: "despensasystem",
    title: "Despensa System",
    subtitle: {
      es: "Pedidos por WhatsApp con IA",
      en: "AI-powered WhatsApp orders",
    },
    description: {
      es: "Plataforma de automatización de atención al cliente que recibe pedidos por WhatsApp mediante un asistente con IA y los centraliza en un panel de gestión.",
      en: "Customer service automation platform that takes orders over WhatsApp through an AI assistant and centralizes them in a management dashboard.",
    },
    repository_url: "",
    website_url: "https://despensasystem.netlify.app/",
    category: {
      es: "Automation Bot Service",
      en: "Automation Bot Service",
    },
    year: 2026,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/DespensaSystem_img1.jpg",
    content: [
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/DespensaSystem_img1.jpg",
        alt: {
          es: "Landing de Despensa System con una conversación de ejemplo en WhatsApp",
          en: "Despensa System landing page with a sample WhatsApp conversation",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Los almacenes, despensas y comercios de barrio reciben cada vez más pedidos por WhatsApp, pero atenderlos a mano implica estar pegado al celular, responder siempre las mismas consultas de precio y stock, y perder pedidos fuera del horario de atención.",
          en: "Grocery stores and neighborhood shops receive more and more orders over WhatsApp, but handling them by hand means being glued to the phone, answering the same price and stock questions over and over, and missing orders outside business hours.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El proyecto nació como un encargo freelance para un almacén local y, a partir de esa primera implementación, fue creciendo hasta convertirse en un servicio pensado para cualquier comercio de barrio. Hoy sigue en constante desarrollo, sumando funcionalidades a partir del uso real de los comercios.",
          en: "The project started as a freelance commission for a local grocery store and, building on that first implementation, grew into a service designed for any neighborhood shop. It is still under constant development, adding features based on how shops actually use it.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Despensa System automatiza ese flujo: el cliente escribe al WhatsApp del comercio como lo haría normalmente, sin instalar nada, y un asistente con IA le responde al instante, arma el pedido en la conversación y lo deja listo en un panel para que el comercio lo prepare.",
          en: "Despensa System automates that flow: customers message the shop's WhatsApp just as they normally would, without installing anything, and an AI assistant replies instantly, builds the order within the conversation and leaves it ready in a dashboard for the shop to prepare.",
        },
      },
      {
        type: "list",
        items: [
          {
            es: "Asistente con IA disponible 24/7 integrado con la API de WhatsApp, capaz de entender mensajes informales, con errores y abreviaturas",
            en: "24/7 AI assistant integrated with the WhatsApp API, able to understand informal messages with typos and abbreviations",
          },
          {
            es: "Consultas de precios y stock respondidas en tiempo real a partir del catálogo del comercio",
            en: "Price and stock questions answered in real time based on the shop's catalog",
          },
          {
            es: "Armado del pedido en la conversación, incluyendo forma de entrega (retiro o envío), dirección y medio de pago",
            en: "Order building within the conversation, including delivery method (pickup or delivery), address and payment method",
          },
          {
            es: "Panel de gestión que centraliza conversaciones, pedidos y productos, con la opción de tomar la conversación manualmente",
            en: "Management dashboard that centralizes conversations, orders and products, with the option to take over a conversation manually",
          },
          {
            es: "Seguimiento de estados del pedido, desde pendiente hasta entregado, e impresión de tickets",
            en: "Order status tracking, from pending to delivered, plus ticket printing",
          },
          {
            es: "Control de inventario con descuento automático de stock, alertas de faltantes y registro de ingresos, ajustes y salidas",
            en: "Inventory control with automatic stock deduction, low-stock alerts and a log of inflows, adjustments and outflows",
          },
        ],
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/DespensaSystem_img2.jpg",
        alt: {
          es: "Panel de gestión de Despensa System con la bandeja de conversaciones",
          en: "Despensa System management dashboard with the conversations inbox",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El resultado: el comercio sigue atendiendo como siempre, pero sin perder ventas fuera de horario y con todos sus pedidos organizados en un solo lugar.",
          en: "The result: shops keep serving customers as usual, but without losing sales after hours and with all their orders organized in one place.",
        },
      },
    ],
  },
  {
    id: 3,
    slug: "ayudahipodromos",
    title: "Ayuda Hipodromos",
    subtitle: { es: "Web de Concientización", en: "Awareness Website" },
    description: {
      es: "Web de divulgación de distintas causas sociales...",
      en: "Website raising awareness of different social causes...",
    },
    repository_url: "https://github.com/myjchamp/AyudaHipodromos",
    website_url: "https://ayudahipodromos.web.app/index.html",
    category: { es: "Divulgación Social", en: "Social Outreach" },
    year: 2026,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/AyudaHipodromos_img1.jpg",
    content: [
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/AyudaHipodromos_img1.jpg",
        alt: {
          es: "AyudaHipodromos Dashboard",
          en: "AyudaHipodromos dashboard",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "AyudaHipodromos surge de un movimiento en redes para difundir diferentes causas beneficas relacionadas a distintos hipodromos tanto de Argentina como de otros paises.",
          en: "AyudaHipodromos grew out of a social media movement to spread the word about different charitable causes related to racetracks in Argentina and other countries.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/AyudaHipodromos_img2.jpg",
        alt: {
          es: "Dashboard de AyudaHipodromos 2",
          en: "AyudaHipodromos dashboard 2",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Yo al igual que los otros dos participantes conocimos la propuesta por medio de redes sociales, y al ver que había una necesidad de organizar toda la información en un solo lugar, decidimos desarrollar esta sencilla página web. Nuestro objetivo fue presentar la información lo más clara posible, ayudar a contactar con los organizadores de cada causa y crear un espacio para dar creditos a la comunidad de artistas, divulagadores y usuarios.",
          en: "Like the other two contributors, I learned about the initiative through social media, and seeing the need to organize all the information in one place, we decided to build this simple website. Our goal was to present the information as clearly as possible, help people get in touch with the organizers of each cause and create a space to give credit to the community of artists, advocates and users.",
        },
      },
    ],
  },
  {
    id: 4,
    slug: "ncwings",
    title: "NCWings",
    subtitle: { es: "Web de compra de pasajes", en: "Flight booking website" },
    description: {
      es: "Plataforma web orientada a la compra y gestión de pasajes, con un flujo de usuario simple y enfocado en la experiencia de reserva.",
      en: "Web platform for buying and managing tickets, with a simple user flow focused on the booking experience.",
    },
    repository_url: "https://github.com/Bruno1084/NC_Wings",
    website_url: "",
    category: { es: "Reserva de Pasajes", en: "Ticket Booking" },
    year: 2024,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/NCWings_img1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          es: "NCWings fue desarrollado como un proyecto enfocado en simular el funcionamiento de una aerolínea. Permite a los usuarios explorar destinos, seleccionar vuelos y realizar reservas de manera intuitiva. El proyecto me permitió trabajar sobre la organización de vistas, la lógica de negocio y la estructura general de una aplicación web orientada al usuario final.",
          en: "NCWings was developed as a project focused on simulating how an airline works. It lets users explore destinations, select flights and make bookings intuitively. The project allowed me to work on view organization, business logic and the overall structure of a web application aimed at end users.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/NCWings_img1.jpg",
        alt: { es: "Dashboard de NCWings", en: "NCWings dashboard" },
      },
    ],
  },
  {
    id: 5,
    slug: "stockapp",
    title: "StockApp",
    subtitle: {
      es: "Aplicación de manejo de stock",
      en: "Stock management application",
    },
    description: {
      es: "Aplicación destinada al control y gestión de stock, orientada a pequeños comercios o emprendimientos.",
      en: "Application for stock control and management, aimed at small shops and businesses.",
    },
    repository_url: "https://github.com/Bruno1084/Java_StockApp",
    website_url: "",
    category: { es: "Aplicación de Stock", en: "Stock Application" },
    year: 2024,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/StockApp_img1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          es: "StockApp es una aplicación desarrollada para facilitar la gestión de productos, permitiendo registrar ingresos, egresos y consultar el estado del inventario. El proyecto se enfocó en la lógica de negocio y la persistencia de datos, reforzando conceptos clave de programación estructurada y orientación a objetos.",
          en: "StockApp is an application built to simplify product management, allowing users to record inflows and outflows and check the inventory status. The project focused on business logic and data persistence, reinforcing key concepts of structured and object-oriented programming.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/StockApp_img1.jpg",
        alt: { es: "Dashboard de StockApp", en: "StockApp dashboard" },
      },
    ],
  },
  {
    id: 6,
    slug: "verydeli",
    title: "VeryDeli",
    subtitle: { es: "Sistema de envíos", en: "Shipping system" },
    description: {
      es: "Sistema web orientado a la gestión de envíos y pedidos, pensado para optimizar procesos logísticos.",
      en: "Web system for managing shipments and orders, designed to optimize logistics processes.",
    },
    repository_url: "https://github.com/Bruno1084/VeryDeli-App",
    website_url: "",
    category: { es: "Web de Mudanzas", en: "Moving Services Website" },
    year: 2024,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/VeryDeliWeb_img1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          es: "VeryDeli fue concebido como un sistema para centralizar la información relacionada con envíos y entregas. El proyecto aborda la organización de pedidos, el seguimiento de estados y la presentación clara de la información al usuario. Fue una experiencia clave para trabajar sobre estructuras escalables y separación de responsabilidades.",
          en: "VeryDeli was conceived as a system to centralize information related to shipments and deliveries. The project covers order organization, status tracking and a clear presentation of information to the user. It was a key experience for working on scalable structures and separation of concerns.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/VeryDeliWeb_img1.jpg",
        alt: { es: "Login de VeryDeli", en: "VeryDeli login" },
      },
    ],
  },
  {
    id: 7,
    slug: "elbuhoweb",
    title: "ElBuho Web",
    subtitle: { es: "Ecommerce de ropa", en: "Clothing e-commerce" },
    description: {
      es: "Sitio web de comercio electrónico enfocado en la venta de indumentaria, con una estética clara y navegación sencilla.",
      en: "E-commerce website focused on selling clothing, with a clean look and simple navigation.",
    },
    repository_url: "https://github.com/Bruno1084/El-Buho-Web.github.io",
    website_url: "",
    category: { es: "Ecommerce Web", en: "E-commerce Website" },
    year: 2023,
    cover_image:
      "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/ElBuhoWeb_img1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          es: "El Buho Web es un ecommerce desarrollado con el objetivo de simular una tienda online de ropa. Incluye vistas de productos, estructura de catálogo y una experiencia de navegación orientada al usuario. El proyecto me permitió profundizar en diseño responsive, organización de componentes y presentación visual de contenido.",
          en: "El Buho Web is an e-commerce site built to simulate an online clothing store. It includes product views, a catalog structure and a user-oriented browsing experience. The project allowed me to go deeper into responsive design, component organization and visual content presentation.",
        },
      },
      {
        type: "image",
        url: "https://raw.githubusercontent.com/Bruno1084/Portfolio_V3/images/public/projects/ElBuhoWeb_img1.jpg",
        alt: { es: "Dashboard de ElBuho", en: "ElBuho dashboard" },
      },
    ],
  },
];
