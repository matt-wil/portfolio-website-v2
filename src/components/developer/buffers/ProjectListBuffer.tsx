import { devProjects, currentWork, learning } from "@/lib/constants";

const projectFiles = Object.keys(devProjects);

export const ProjectsListBuffer = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: Completed Projects */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-cat-blue">
          # Completed Projects
        </h2>
        <p className="text-cat-text">
          Select a file from the fuzzy finder (Ctrl+P) to view its details.
        </p>

        <ul className="pl-4 pt-1 space-y-1">
          {projectFiles.map((filename) => (
            <li key={filename} className="text-cat-text">
              <span className="text-cat-green">- </span>
              {filename}
              <span className="text-cat-subtext ml-2">
                ({devProjects[filename].title})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Current Work */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-cat-blue"># Current Work</h2>
        <ul className="pl-4 pt-1 space-y-2">
          {currentWork.map((project) => (
            <li key={project.name}>
              <div className="font-bold text-cat-text">
                <span className="text-cat-green">- </span>
                {project.name}
              </div>
              <p className="pl-6 text-cat-subtext">{project.description}</p>
              <div className="pl-6 text-xs text-cat-mauve">
                Tech: {project.tech.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 3: Learning */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-cat-blue">
          # Learning & Exploring
        </h2>
        <ul className="pl-4 pt-1 space-y-2">
          {learning.map((item) => (
            <li key={item.name}>
              <div className="font-bold text-cat-text">
                <span className="text-cat-green">- </span>
                {item.name}
              </div>
              <p className="pl-6 text-cat-subtext">{item.description}</p>
              <div className="pl-6 text-xs text-cat-mauve">
                Resources: {item.resources.join(", ")}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
