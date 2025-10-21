import { devProjects, currentWork, learning } from "@/lib/constants";

const projectFiles = Object.keys(devProjects);

export const ProjectsListBuffer = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: Completed Projects */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-dev-blue">
          # Completed Projects
        </h2>
        <p className="text-dev-text">
          Select a file from the fuzzy finder (Ctrl+P) to view its details.
        </p>

        <ul className="pl-4 pt-1 space-y-1">
          {projectFiles.map((filename) => (
            <li key={filename} className="text-dev-text">
              <span className="text-dev-green">- </span>
              {filename}
              <span className="text-dev-subtext ml-2">
                ({devProjects[filename].title})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Current Work */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-dev-blue"># Current Work</h2>
        <ul className="pl-4 pt-1 space-y-2">
          {currentWork.map((project) => (
            <li key={project.name}>
              <div className="font-bold text-dev-text">
                <span className="text-dev-green">- </span>
                {project.name}
              </div>
              <p className="pl-6 text-dev-subtext">{project.description}</p>
              <div className="pl-6 text-xs text-dev-mauve">
                Tech: {project.tech.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3: Learning */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-dev-blue">
          # Learning & Exploring
        </h2>
        <ul className="pl-4 pt-1 space-y-2">
          {learning.map((item) => (
            <li key={item.name}>
              <div className="font-bold text-dev-text">
                <span className="text-dev-green">- </span>
                {item.name}
              </div>
              <p className="pl-6 text-dev-subtext">{item.description}</p>
              <div className="pl-6 text-xs text-dev-mauve">
                Resources: {item.resources.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
