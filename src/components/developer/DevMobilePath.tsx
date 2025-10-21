import { ReadmeBuffer } from "@/components/developer/buffers/ReadmeBuffer";
import { AboutBuffer } from "@/components/developer/buffers/AboutBuffer";
import { ProjectsListBuffer } from "@/components/developer/buffers/ProjectListBuffer";
import { ProjectBuffer } from "@/components/developer/buffers/ProjectBuffer";
import { ContactBuffer } from "@/components/developer/buffers/ContactBuffer";
import { devProjects } from "@/lib/constants";

const projectFilenames = Object.keys(devProjects);

const Divider = () => (
  <hr className="my-12 border-t-2 border-dashed border-dev-surface1" />
);

export const DevMobilePath = () => {
  return (
    <div className="min-h-screen bg-dev-base font-mono text-dev-text p-5 md:p-8 overflow-y-auto">
      {/* 1. Header/Intro */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-dev-blue">Matt Williams</h1>
        <p className="text-dev-subtext">Software Engineer</p>
        <p className="text-dev-text mt-4 text-sm">(Mobile-Friendly View)</p>
      </div>

      {/* 2. README Section */}
      <ReadmeBuffer />

      <Divider />

      {/* 3. ABOUT Section */}
      <AboutBuffer />

      <Divider />

      {/* 4. PROJECTS_LIST Section */}
      <ProjectsListBuffer />

      <Divider />

      {/* 5. INDIVIDUAL PROJECTS Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-dev-blue text-center mb-6">
          # Completed Project Details
        </h2>
        {projectFilenames.map((filename) => (
          <div
            key={filename}
            className="border border-dev-surface0 bg-dev-mantle p-4 rounded-lg shadow-lg"
          >
            <ProjectBuffer filename={filename} />
          </div>
        ))}
      </section>

      <Divider />

      {/* 6. CONTACT Section */}
      <ContactBuffer />
    </div>
  );
};
