export const es = {
  controls: {
    english: "Inglés",
    languageToEn: "Cambiar a inglés",
    languageToEs: "Cambiar a español",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    lightMode: "Modo claro",
  },
  header: {
    nav: {
      intro: "Introducción",
      about: "Sobre Mi",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      stack: "Tecnologías",
      contact: "Contacto",
    },
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  cvHeader: {
    profileAlt: "Foto de perfil de Bruno Sosa",
    role: "Desarrollador de Software",
    downloadCv: "Descargar CV",
    contactMe: "Contáctame",
    copied: "Copiado!",
  },
  about: {
    title: "Sobre Mi",
    paragraphs: [
      "Graduado de la Universidad Nacional de San Luis como Técnico en Web.",
      "Desarrollador Fullstack con experiencia en el diseño de aplicaciones web escalables, integración de servicios IA y migración de sistemas legacy. Experiencia colaborando en el liderazgo de equipos ágiles y entregando arquitecturas orientadas al rendimiento e impacto de negocio.",
    ],
  },
  experience: {
    title: "Experiencia",
  },
  projects: {
    title: "Mis Proyectos",
    coverAlt: (title: string) => `Portada de ${title}`,
  },
  education: {
    title: "Educación",
    degree: "Tecnicatura en Web",
    description:
      "Enfocado en el desarrollo de software para web y escritorio. Adquirí conocimientos en backend y frontend con metodologías profesionales y de trabajo en equipo.",
  },
  stack: {
    title: "Stack de Tecnologías",
  },
  contact: {
    title: "Contáctame",
    emailPlaceholder: "Tu correo",
    subjectPlaceholder: "Asunto",
    messagePlaceholder: "Mensaje",
    submit: "Enviar",
  },
  projectPage: {
    repository: "Repositorio",
    website: "Sitio web",
    category: "Categoría",
    year: "Año",
  },
  image: {
    loading: "Cargando imagen",
    error: "Imagen no disponible",
    defaultAlt: "Imagen del proyecto",
  },
};

export type Translations = typeof es;
