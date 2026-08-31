import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 0,
    location: "Mendoza Capital, Argentina",
    companyName: "Freelance",
    role: "Fullstack Developer",
    startDate: "Diciembre 2025",
    finishDate: "Actual",
    description: [
      "Diseñé e integré un sistema de atención al cliente automatizado con Agentes IA (Open AI API) para la gestión fluida de conversaciones, automatizando el seguimiento de pedidos y la resolución de consultas recurrentes.",
      "Desarrolle un sistema de gestión de inventario y punto de venta (POS) multicaja que se integra con el sistema de atención al cliente, digitalizando el control de ventas/compras y centralizando el stock en tiempo real.",
    ],
  },
  {
    id: 1,
    location: "Remoto",
    companyName: "Integrity Solutions",
    role: "Frontend Developer",
    startDate: "Enero 2024",
    finishDate: "Agosto 2024",
    description: [
      "Ejecuté la migración de un software legacy a React y Next.js, logrando mejoras significativas en tiempos de carga y sentando las bases para escalar el producto.",
      "Refactoricé código heredado aplicando mejores prácticas, reduciendo la deuda técnica y facilitando el mantenimiento futuro del proyecto.",
    ],
  },
];
