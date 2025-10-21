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
    image: "/projects/popcorn.png",
  },
];

export const devProjects: Record<string, any> = {
  "ecommerce-platform.md": {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    github: "github.com/yourname/ecommerce",
    demo: "demo.ecommerce.dev",
  },
  "ai-chatbot.md": {
    title: "AI-Powered Chatbot",
    description:
      "Intelligent conversational AI with natural language processing",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket"],
    github: "github.com/yourname/ai-chatbot",
    demo: "chatbot.demo.dev",
  },
  "portfolio-site.md": {
    title: "Interactive Portfolio",
    description:
      "The very site you are looking at - a neovim-inspired experience",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    github: "github.com/yourname/portfolio",
    demo: "yourname.dev",
  },
};

export const files = [
  { name: "README.md", icon: "", type: "markdown" },
  { name: "about.lua", icon: "", type: "lua" },
  { name: "projects/", icon: "", type: "directory" },
  { name: "projects/ecommerce-platform.md", icon: "", type: "markdown" },
  { name: "projects/ai-chatbot.md", icon: "", type: "markdown" },
  { name: "projects/portfolio-site.md", icon: "", type: "markdown" },
];
