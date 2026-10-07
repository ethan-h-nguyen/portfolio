type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  images?: { thumbnail?: string };
  challenges?: string[];
  impact?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Wavefront - GPU-Accelerated Digital Twin System',
      description: 'WebGPU-based 3D visualization and physics system developed during a software engineering internship. Worked on collision detection, physics simulation, frontend/backend functionality, and interactive 3D walking tours, with performance optimization targeting approximately 60 FPS.',
      technologies: ['WebGPU', 'TypeScript', '3D Graphics', 'Physics Simulation'],
      challenges: ['Performance optimization targeting approximately 60 FPS', 'Collision detection implementation'],
      impact: 'Interactive high-fidelity 3D walking tour visualization system.',
      githubLink: '',
      demoLink: '',
    },
    {
      id: 'project-2',
      title: 'ASCII Vision Systems',
      description: 'Python-based ASCII rendering tool that converts images, GIFs, videos, and live camera input into ASCII output. Uses NumPy for array-based image processing and pixel calculations.',
      technologies: ['Python', 'NumPy', 'Image Processing', 'CLI'],
      githubLink: '',
      demoLink: '',
    },
    {
      id: 'project-3',
      title: 'UI/UX Application Prototype',
      description: 'Course project focused on designing and prototyping an application interface in Figma.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
      githubLink: '',
      demoLink: '',
    },
  ];

  return (
    <section className="mb-20 space-y-4">
      {projects.length === 0 ? (
        <p>No projects available yet.</p>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="border-b border-terminal-border last:border-none py-4 space-y-2">
      <h3 className="text-lg font-semibold text-primary">{project.title}</h3>

      <p className="text-sm mb-1 leading-relaxed whitespace-pre-wrap">{project.description}</p>

      {(project.technologies || []).length > 0 ? (
        <div className="space-y-1">
          <div className="text-xs text-terminal-muted font-medium uppercase tracking-wide">TECH</div>
          <span className="inline-flex flex-wrap gap-x-2 text-sm text-secondary">
            {project.technologies.map((t) => (
              <span key={t} className="hover:text-primary transition-colors">{t}</span>
            ))}
          </span>
        </div>
      ) : null}

      {(project.challenges || []).length > 0 ? (
        <div className="space-y-1">
          <div className="text-xs text-terminal-muted font-medium uppercase tracking-wide">KEY WORK</div>
          <ul className="text-sm text-secondary list-none px-4">
            {(project.challenges || []).map((c) => (
              <li key={c}>{`– ${c}`}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.impact ? (
        <div className="space-y-1">
          <div className="text-xs text-terminal-muted font-medium uppercase tracking-wide">RESULT</div>
          <p className="text-sm text-primary italic leading-relaxed">{project.impact}</p>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2 mt-1">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1 no-underline"
            title="View on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m8 6v-3.47A3.7 3.7 0 0 1 15.7 16h.02a3.7 3.7 0 0 1 .7-.76c2.2-1 2.42-5-2.5-5a3.7 3.7 0 0 1-1.5.1A3.7 3.7 0 0 1 10 13m4-3a4 4 0 0 1 4 4v6h-4v-6Z" />
            </svg>
            GitHub
          </a>
        )}

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1 no-underline"
            title="View demo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.08-7.08l-3 3a5 5 0 0 0 .54 7.54" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3-3a5 5 0 0 0 7.08 7.08l3-3a5 5 0 0 0-.54-7.54" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
