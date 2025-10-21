import { devProjects as projects } from "@/lib/constants";

interface ProjectBufferProps {
  filename: string;
}

export const ProjectBuffer = ({ filename }: ProjectBufferProps) => {
  const project = projects[filename];

  if (!project) {
    return <div className="text-dev-red">Error: Project not found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="text-dev-mauve">
        {"<!-- "}
        {filename}
        {" -->"}
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-dev-blue"># {project.title}</h2>

        <p className="text-dev-text">{project.description}</p>

        <div className="pt-2">
          <div className="text-dev-yellow">## Tech Stack</div>
          <ul className="pl-4 pt-1 space-y-1">
            {project.tech.map((tech: string) => (
              <li key={tech} className="text-dev-text">
                <span className="text-dev-green">- </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <div className="text-dev-yellow">## Links</div>
          <div className="pl-4 pt-1 space-y-1">
            <div>
              <span className="text-dev-green">- </span>
              <span className="text-dev-subtext">GitHub: </span>
              <a
                href={`https://${project.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-blue underline hover:text-dev-sapphire"
              >
                {project.github}
              </a>
            </div>
            <div>
              <span className="text-dev-green">- </span>
              <span className="text-dev-subtext">Demo: </span>
              <a
                href={`https://${project.demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dev-blue underline hover:text-dev-sapphire"
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
