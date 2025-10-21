import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import Image from "next/image";
import { SectionHeading } from "@/components/brutalist/SectionHeading";
import { BrutalistHeader } from "@/components/brutalist/BrutalHeader";

export const BrutalistPath = () => {
  return (
    <div className="min-h-screen bg-brutalist-bg theme-brutalist font-sans">
      <BrutalistHeader />
      {/* Background Grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--brutalist-grid)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--brutalist-grid)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="grid min-h-screen grid-cols-12 gap-x-4 px-8 py-20">
          <motion.div
            className="col-span-12 flex flex-col justify-center lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-brutalist-hero leading-none text-brutalist-text">
              DESIGN
              <br />
              THAT
              <br />
              WORKS.
            </h1>
            <motion.h2
              className="mt-8 text-brutalist-h2 font-bold text-brutalist-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Pixel-perfect font-ends
              <br />
              backed by robust, full-stack solutions.
            </motion.h2>
          </motion.div>
          <div className="col-span-12 flex items-end lg:col-span-4">
            <div className="border-l-4 border-brutalist-accent pl-6 font-mono text-sm text-brutalist-text">
              <p className="mb-2 font-bold">AVAILABLE FOR</p>
              <p>Full-Stack Engineering</p>
              <p>Front-End Architecture</p>
              <p>UI/UX Design</p>
              <p>Graphic Design</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="grid grid-cols-12 gap-x-4 px-8 py-32">
          <div className="col-span-12 lg:col-span-7">
            <SectionHeading number="1" className="mb-8">
              Engineering with Intent
            </SectionHeading>
            <div className="space-y-6 text-xl leading-relaxed text-brutalist-text">
              <p>
                I believe great design is invisible. It doesn't call attention
                to itself—it solves problems, removes friction, and creates
                clarity.
              </p>
              <p>
                My approach combines strategic thinking with obsessive attention
                to detail. Every pixel serves a purpose. Every interaction has
                intent.
              </p>
              <p>
                I work at the intersection of technology and user experience,
                translating complex business problems into elegant, functional,
                and full-stack solutions.
              </p>
            </div>
          </div>
          <div className="col-span-12 mt-12 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <div className="border-l-4 border-brutalist-accent pl-6">
              <h3 className="mb-4 font-mono text-sm font-bold text-brutalist-text">
                TECH STACK
              </h3>
              <ul className="space-y-2 font-mono text-sm text-brutalist-text">
                <li>→ Python</li>
                <li>→ TypeScript</li>
                <li>→ React</li>
                <li>→ Node.js</li>
                <li>→ SQL</li>
                <li>→ Figma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="works" className="px-8 py-32">
          <SectionHeading number="2" className="mb-8">
            Selected Works
          </SectionHeading>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="grid grid-cols-12 gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Project Image */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="aspect-video w-full bg-gradient-to-br from-brutalist-text to-brutalist-grid grayscale hover:grayscale-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="col-span-12 lg:col-span-5">
                  <div className="flex items-start justify-between border-b-2 border-brutalist-text pb-4">
                    <h3 className="text-4xl font-bold text-brutalist-text">
                      {project.title}
                    </h3>
                    <span className="font-mono text-sm text-brutalist-text">
                      {project.year}
                    </span>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="mb-2 font-mono text-xs font-bold text-brutalist-text">
                        CLIENT
                      </h4>
                      <p className="text-lg text-brutalist-text">
                        {project.client}
                      </p>
                    </div>

                    <details className="group">
                      <summary className="cursor-pointer font-mono text-sm font-bold text-brutalist-accent hover:underline">
                        VIEW PROCESS →
                      </summary>
                      <div className="mt-4 space-y-4 border-l-4 border-brutalist-accent pl-4">
                        <div>
                          <h5 className="mb-1 font-mono text-xs font-bold text-brutalist-text">
                            CHALLENGE
                          </h5>
                          <p className="text-sm text-brutalist-text">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h5 className="mb-1 font-mono text-xs font-bold text-brutalist-text">
                            SOLUTION
                          </h5>
                          <p className="text-sm text-brutalist-text">
                            {project.solution}
                          </p>
                        </div>
                        <div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live
                          </a>
                        </div>
                        <div>
                          <h5 className="mb-1 font-mono text-xs font-bold text-brutalist-text">
                            RESULTS
                          </h5>
                          <ul className="space-y-1 text-sm text-brutalist-text">
                            {project.results.map((result) => (
                              <li key={result}>• {result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="col-span-12">
                    <hr className="border-t-2 border-brutalist-grid" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="border-t-4 border-brutalist-text px-8 py-32"
        >
          <SectionHeading number="3" className="mb-8">
            Contact
          </SectionHeading>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-4 font-mono text-lg text-brutalist-text">
                <a
                  href="mailto:dark.moder.coder@gmail.com"
                  className="block hover:text-brutalist-accent hover:underline"
                >
                  dark.moder.coder@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/matt-s-williams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-brutalist-accent hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/matt-wil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-brutalist-accent hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
