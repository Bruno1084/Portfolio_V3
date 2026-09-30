import type { Translations } from "./es";

export const en: Translations = {
  controls: {
    english: "English",
    languageToEn: "Switch to English",
    languageToEs: "Switch to Spanish",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    lightMode: "Light mode",
  },
  header: {
    nav: {
      intro: "Introduction",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      stack: "Technologies",
      contact: "Contact",
    },
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  cvHeader: {
    profileAlt: "Bruno Sosa's profile picture",
    role: "Software Developer",
    downloadCv: "Download CV",
    contactMe: "Contact me",
    copied: "Copied!",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Web Development Technician graduated from Universidad Nacional de San Luis.",
      "Fullstack Developer with experience designing scalable web applications, integrating AI services and migrating legacy systems. Experienced in helping lead agile teams and delivering architectures focused on performance and business impact.",
    ],
  },
  experience: {
    title: "Experience",
  },
  projects: {
    title: "My Projects",
    coverAlt: (title: string) => `${title} cover`,
  },
  education: {
    title: "Education",
    degree: "Web Development Technician",
    description:
      "Focused on web and desktop software development. I gained backend and frontend knowledge through professional and teamwork methodologies.",
  },
  stack: {
    title: "Tech Stack",
  },
  contact: {
    title: "Contact Me",
    emailPlaceholder: "Your email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    submit: "Send",
  },
  projectPage: {
    repository: "Repository",
    website: "Website",
    category: "Category",
    year: "Year",
  },
  image: {
    loading: "Loading image",
    error: "Image not available",
    defaultAlt: "Project image",
  },
};
