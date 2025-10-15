import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/constants";

const NonDeveloperPortfolio = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen blueprint-grid"
      style={{
        backgroundColor: "hsl(var(--blueprint-bg))",
        color: "hsl(var(--blueprint-fg))",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] py-16">
        {/* Hero Section */}
        <section className="grid grid-cols-12 gap-[2vw] min-h-[80vh] items-center">
          <div className="col-span-12">
            <h1
              className="font-display text-[clamp(5rem,12vw,10rem)] leading-[0.9] mb-4"
              style={{ color: "hsl(var(--blueprint-fg))" }}
            >
              Matt Williams
            </h1>
            <h2
              className="font-bold text-[clamp(2rem,5vw,3.5rem)]"
              style={{ color: "hsl(var(--blueprint-fg))" }}
            >
              Full-Stack Engineer
            </h2>
          </div>
        </section>

        {/* About Section */}
        <section
          className="grid grid-cols-12 gap-[2vw] py-24 border-t"
          style={{ borderColor: "hsl(var(--blueprint-fg))" }}
        >
          <div className="col-span-12">
            <h2 className="font-bold text-[clamp(2rem,5vw,3.5rem)] mb-12">
              <span
                className="font-mono-code text-sm"
                style={{ color: "hsl(var(--blueprint-accent))" }}
              >
                // 01 /{" "}
              </span>
              ABOUT
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-base leading-[1.6] max-w-[65ch] mb-8">
              I build digital products that solve real problems. My work sits at
              the intersection of design and engineering, focusing on systems
              thinking, user experience, and technical excellence. Every project
              is an opportunity to create something that matters.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p
              className="font-mono-code text-xs mb-4"
              style={{ color: "hsl(var(--blueprint-fg))" }}
            >
              CORE COMPETENCIES:
            </p>
            <ul className="space-y-2 text-base">
              <li>• Front-End Architecture</li>
              <li>• UI/UX Design</li>
              <li>• API Development</li>
              <li>• Design Systems</li>
              <li>• Product Strategy</li>
            </ul>
          </div>
        </section>

        {/* Selected Works Section */}
        <section
          className="grid grid-cols-12 gap-[2vw] py-24 border-t"
          style={{ borderColor: "hsl(var(--blueprint-fg))" }}
        >
          <div className="col-span-12">
            <h2 className="font-bold text-[clamp(2rem,5vw,3.5rem)] mb-12">
              <span
                className="font-mono-code text-sm"
                style={{ color: "hsl(var(--blueprint-accent))" }}
              >
                // 02 /{" "}
              </span>
              SELECTED WORKS
            </h2>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="col-span-12 border-t py-12"
              style={{ borderColor: "hsl(var(--blueprint-fg))" }}
            >
              <div className="grid grid-cols-12 gap-[2vw]">
                <div className="col-span-12 md:col-span-8">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-bold text-2xl">{project.title}</h3>
                    <span
                      className="font-mono-code text-sm"
                      style={{ color: "hsl(var(--blueprint-fg))" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <p className="text-base leading-[1.6] max-w-[65ch] mb-6">
                    {project.description}
                  </p>
                  <p className="font-mono-code text-xs mb-6">
                    <span style={{ color: "hsl(var(--blueprint-fg))" }}>
                      STACK:{" "}
                    </span>
                    {project.stack}
                  </p>
                  <div className="flex gap-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-code text-sm border-2 border-transparent hover:border-current transition-all inline-flex items-center gap-2 px-4 py-2"
                      style={{ color: "hsl(var(--blueprint-fg))" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--blueprint-accent))")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--blueprint-fg))")
                      }
                    >
                      [ VIEW LIVE <ExternalLink size={14} /> ]
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-code text-sm border-2 border-transparent hover:border-current transition-all inline-flex items-center gap-2 px-4 py-2"
                      style={{ color: "hsl(var(--blueprint-fg))" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--blueprint-accent))")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "hsl(var(--blueprint-fg))")
                      }
                    >
                      [ GITHUB <ExternalLink size={14} /> ]
                    </a>
                  </div>
                  <details
                    className="mt-6"
                    open={expandedProject === index}
                    onToggle={(e) =>
                      setExpandedProject(
                        (e.target as HTMLDetailsElement).open ? index : null,
                      )
                    }
                  >
                    <summary
                      className="font-mono-code text-sm cursor-pointer hover:underline inline-block"
                      style={{ color: "hsl(var(--blueprint-fg))" }}
                    >
                      [ VIEW PROCESS ]
                    </summary>
                    <div
                      className="mt-4 pl-4 border-l-2"
                      style={{ borderColor: "hsl(var(--blueprint-accent))" }}
                    >
                      <p className="text-base leading-[1.6] max-w-[60ch]">
                        {project.process}
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section
          className="grid grid-cols-12 gap-[2vw] py-24 border-t"
          style={{ borderColor: "hsl(var(--blueprint-fg))" }}
        >
          <div className="col-span-12">
            <h2 className="font-bold text-[clamp(2rem,5vw,3.5rem)] mb-12">
              <span
                className="font-mono-code text-sm"
                style={{ color: "hsl(var(--blueprint-accent))" }}
              >
                // 03 /{" "}
              </span>
              CONTACT
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-xl leading-[1.6] max-w-[50ch] mb-12">
              Available for select projects. Let's create something remarkable.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:dark.moder.coder@gmail.com"
                className="font-bold text-2xl hover:underline inline-block"
                style={{ color: "hsl(var(--blueprint-fg))" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-accent))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-fg))")
                }
              >
                EMAIL
              </a>
              <a
                href="https://linkedin.com/in/matt-s-williams"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-2xl hover:underline inline-block"
                style={{ color: "hsl(var(--blueprint-fg))" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-accent))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-fg))")
                }
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/matt-wil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-2xl hover:underline inline-block"
                style={{ color: "hsl(var(--blueprint-fg))" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-accent))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--blueprint-fg))")
                }
              >
                GITHUB
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NonDeveloperPortfolio;
