export interface Skill {
  nombre: string;
  logo: string;
}

/**
 * Función que devuelve una lista de skills
 */
export function getSkills(): Skill[] {
  return [
    {
      nombre: "HTML5",
      logo: "html5",
    },
    {
      nombre: "Cypress",
      logo: "cypress",
    },
    {
      nombre: "CSS3",
      logo: "css3",
    },
    {
      nombre: "JavaScript",
      logo: "javascript",
    },
    {
      nombre: "TypeScript",
      logo: "typescript",
    },
    {
      nombre: "React",
      logo: "react",
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
      nombre: "TailwindCSS",
      logo: "tailwindcss",
    },
    {
      nombre: "Storybook",
      logo: "storybook",
    },
    {
      nombre: "Git",
      logo: "git",
    },
    {
      nombre: "GitHub",
      logo: "github",
    },
    {
      nombre: "MySQL",
      logo: "mysql",
    },
    {
      nombre: "MongoDB",
      logo: "mongodb",
    },
  ];
}
