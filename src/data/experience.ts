import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 0,
    location: {
      es: "Mendoza Capital, Argentina",
      en: "Mendoza Capital, Argentina",
    },
    companyName: "Freelance",
    role: "Fullstack Developer",
    startDate: { es: "Diciembre 2025", en: "December 2025" },
    finishDate: { es: "Actual", en: "Present" },
    description: [
      {
        es: "Diseñé e integré un sistema de atención al cliente automatizado con Agentes IA (Open AI API) para la gestión fluida de conversaciones, automatizando el seguimiento de pedidos y la resolución de consultas recurrentes.",
        en: "Designed and integrated an automated customer service system with AI Agents (OpenAI API) for seamless conversation management, automating order tracking and the resolution of recurring inquiries.",
      },
      {
        es: "Desarrollé un sistema de gestión de inventario y punto de venta (POS) multicaja que se integra con el sistema de atención al cliente, digitalizando el control de ventas/compras y centralizando el stock en tiempo real.",
        en: "Developed a multi-register inventory management and point of sale (POS) system that integrates with the customer service system, digitizing sales/purchase control and centralizing stock in real time.",
      },
    ],
  },
  {
    id: 1,
    location: { es: "Remoto", en: "Remote" },
    companyName: "Integrity Solutions",
    role: "Frontend Developer",
    startDate: { es: "Enero 2024", en: "January 2024" },
    finishDate: { es: "Agosto 2024", en: "August 2024" },
    description: [
      {
        es: "Ejecuté la migración de un software legacy a React y Next.js, logrando mejoras significativas en tiempos de carga y sentando las bases para escalar el producto.",
        en: "Led the migration of a legacy software product to React and Next.js, achieving significant load time improvements and laying the groundwork to scale the product.",
      },
      {
        es: "Refactoricé código heredado aplicando mejores prácticas, reduciendo la deuda técnica y facilitando el mantenimiento futuro del proyecto.",
        en: "Refactored legacy code applying best practices, reducing technical debt and making future maintenance of the project easier.",
      },
    ],
  },
];
