export const projects = [
  {
    title: "Business Website Rebuild",
    client: "Anker Tattoo & Piercing",
    year: "2025",
    challenge:
      "Modernize and rebuild an outdated underperforming website to improve user experience and SEO",
    solution:
      "Implemented a design system with reusable components, improved navigation architecture, and UI/UX enhancements",
    results: [
      "80% increase in SEO online visibility",
      "Total sales growth of 35%",
      "2x faster page loads",
    ],
    image: "/projects/anker.png",
    link: "https://anker-tattoo.de",
  },
  {
    title: "Full-Stack Ratings App",
    client: "Myself",
    year: "2024",
    challenge:
      "Design and develop a full-stack application to allow users to rate and save movies",
    solution:
      "Built with Python, Jinja2 and SQLAlchemy; implemented profile creation, login and dynamic content rendering",
    results: [
      "Tested with 500+ movies",
      "local database",
      "Modularized OOP design for scalability",
    ],
    image: "/projects/popcorn1.png",
    link: "...",
  },
];

export const devProjects: Record<string, any> = {
  "anker-tattoo.md": {
    title: "Business Website Rebuild",
    description:
      "Modernized and rebuilt an outdated underperforming website to improve user experience and SEO",
    tech: [
      "Next.js",
      "Supabase",
      "Cloudflare",
      "Typescript",
      "Tailwind",
      "Next-intl",
    ],
    github: "github.com/matt-will/anker-freiburg",
    demo: "www.anker-tattoo.de",
  },
  "popcorn-picker.md": {
    title: "Movie Ratings App",
    description:
      "A full-stack web application for users to rate and save movies to their profile",
    tech: ["Python", "SQLAlchemy", "Jinja2"],
    github: "github.com/matt-wil/popcornPickerV2",
    demo: "...",
  },
  "portfolio-site.md": {
    title: "Interactive Portfolio",
    description:
      "The very site you are looking at - a neovim-inspired experience",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    github: "github.com/matt-wil/portfolio-website-v2",
    demo: "www.matt-williams.net",
  },
};

export const currentWork = [
  {
    name: "Anker Organiser",
    description:
      "A notion like application with a Chat-room, Calendar and Kanban.",
    tech: ["Flutter", "C++", "Dart"],
  },
  {
    name: "AI-Sous",
    description:
      "An AI based cooking application to give you recipes based on what ingredients you list.",
    tech: ["Next.js", "TypeScript", "Gemini API"],
  },
];

export const learning = [
  {
    name: "Rust",
    description:
      "Learning Rust for systems programming and performance-critical applications.",
    resources: ["The Rust Programming Language Book", "Excercism", "Youtube"],
  },
  {
    name: "C++",
    description: "Learning C++ for game development and systems programming.",
    resources: ["Unity", "Youtube", "Excercism"],
  },
];

export const files = [
  { name: "README.md", icon: "", type: "markdown" },
  { name: "about.lua", icon: "", type: "lua" },
  { name: "contact.md", icon: "", type: "markdown" },
  { name: "projects/", icon: "", type: "directory" },
  { name: "projects/anker-tattoo.md", icon: "", type: "markdown" },
  { name: "projects/popcorn-picker.md", icon: "", type: "markdown" },
  { name: "projects/portfolio-site.md", icon: "", type: "markdown" },
];
