export interface Skill {
  nombre: string;
  logo: string;
}

/**
 * Función que devuelve una lista de skills
 */
export function getSkills(): Skill[] {
  return [
    // Bases Web
    {
      nombre: "HTML5",
      logo: "html5",
    },
    {
      nombre: "CSS3",
      logo: "css",
    },

    // Lenguajes
    {
      nombre: "JavaScript",
      logo: "javascript",
    },
    {
      nombre: "TypeScript",
      logo: "typescript",
    },
    
    // Runtime
    {
      nombre: "Node.js",
      logo: "nodedotjs",
    },

    // Frameworks / Librerías Frontend
    {
      nombre: "React",
      logo: "react",
    },
    {
      nombre: "React Native",
      logo: "react",
    },
    {
      nombre: "Expo Go",
      logo: "expo",
    },
    {
      nombre: "Ionic",
      logo: "ionic",
    },
    {
      nombre: "Next.js",
      logo: "next.js",
    },
    {
      nombre: "Astro",
      logo: "astro",
    },
    {
      nombre: "Vite",
      logo: "vite",
    },

    // CMS
    {
      nombre: "WordPress",
      logo: "wordpress",
    },
    
    // Estilos
    {
      nombre: "TailwindCSS",
      logo: "tailwindcss",
    },

    // UI / Testing
    {
      nombre: "Figma",
      logo: "figma",
    },
    {
      nombre: "Storybook",
      logo: "storybook",
    },
    {
      nombre: "Cypress",
      logo: "cypress",
    },

    // Backend
    {
      nombre: "Express.js",
      logo: "express",
    },
    {
      nombre: "GraphQL",
      logo: "graphql",
    },

    // Bases de datos
    {
      nombre: "MySQL",
      logo: "mysql",
    },
    {
      nombre: "MongoDB",
      logo: "mongodb",
    },

    // Control de versiones
    {
      nombre: "Git",
      logo: "git",
    },
    {
      nombre: "GitHub",
      logo: "github",
    },
  ];
}
