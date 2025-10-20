interface ProjectBufferProps {
  filename: string;
}

const projects: Record<string, any> = {
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

export const ProjectBuffer = ({ filename }: ProjectBufferProps) => {
  const project = projects[filename];

  if (!project) {
    return <div className="text-cat-red">Error: Project not found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="text-cat-mauve">
        {"<!-- "}
        {filename}
        {" -->"}
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-cat-blue"># {project.title}</h2>

        <p className="text-cat-text">{project.description}</p>

        <div className="pt-2">
          <div className="text-cat-yellow">## Tech Stack</div>
          <ul className="pl-4 pt-1 space-y-1">
            {project.tech.map((tech: string) => (
              <li key={tech} className="text-cat-text">
                <span className="text-cat-green">- </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <div className="text-cat-yellow">## Links</div>
          <div className="pl-4 pt-1 space-y-1">
            <div>
              <span className="text-cat-green">- </span>
              <span className="text-cat-subtext">GitHub: </span>
              <a
                href={`https://${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cat-blue underline hover:text-cat-sapphire"
              >
                {project.github}
              </a>
            </div>
            <div>
              <span className="text-cat-green">- </span>
              <span className="text-cat-subtext">Demo: </span>
              <a
                href={`https://${project.demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cat-blue underline hover:text-cat-sapphire"
              >
                {project.demo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
