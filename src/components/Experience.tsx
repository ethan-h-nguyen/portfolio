'use client';

import React from 'react';

export default function Experience() {
  const experiences = [
    {
      startDate: 'Sept 2026 – Present',
      role: 'Co-op Software Engineer (Full-Stack)',
      company: 'Intealth | ECFMG',
      location: 'Remote',
      technologies: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'MongoDB'],
      description: 'Full-stack development on healthcare education platform using MERN stack. Integrating AI tools with GitHub Copilot for enhanced productivity.',
      keyResponsibilities: [
        'Developed frontend and backend features across full application lifecycle',
        'Applying SCRUM methodologies in collaborative agile team environment',
        'Participating in UX design and user feedback integration',
        'Refactoring code for efficiency and applying AI-assisted development practices',
      ],
    },
    {
      startDate: 'Sept 2024 – Sept 2026',
      role: 'Co-op Software Engineer',
      company: 'Colossum Studios',
      location: 'Remote | Austin, TX',
      technologies: ['WebGPU', 'React', 'TypeScript'],
      description: 'Contributed to Wavefront Platform, a GPU-accelerated system generating 3D Gaussian splat digital twins from video using computer vision pipelines during Colossum internship.',
      keyResponsibilities: [
        'Implemented real-time WebGPU collision detection and physics inspired by BabylonJS/Havok and NVIDIA research',
        'Developed angular momentum, friction, and placement correction systems for interactive 3D environments',
        'Performed GPU profiling, stress testing, and readback optimization to improve rendering performance',
        'Built React/TypeScript UI features including mobile layouts, file management tools, and iframe-based viewer synchronization',
      ],
    },
  ];

  const [expandedCards, setExpandedCards] = React.useState<boolean[]>(() =>
    new Array(experiences.length).fill(false)
  );

  return (
    <section id="experience" className="mb-20">
      <div className="w-full">
        <h2 id="experience" className="scroll-mt-32 mb-12 text-left font-bold uppercase tracking-widest">Experience</h2>

        {experiences.length === 0 ? (
          <p>No experience yet.</p>
        ) : (
          <div className="max-w-5xl mx-auto mt-4 space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} id={`experience-${index}`} className="border border-border bg-primary/5 rounded-none">
                <button
                  id={`experience-header-${index}`}
                  aria-expanded={expandedCards[index]}
                  aria-controls={`experience-details-${index}`}
                  onClick={() =>
                    setExpandedCards((prev) =>
                      prev.map((expanded, i) =>
                        i === index ? !expanded : expanded
                      )
                    )
                  }
                  className="w-full relative flex items-center justify-between p-6 group hover:bg-surface transition-colors focus:outline-none focus:border-surface"
                >
                  <h3 className="text-xl font-bold uppercase tracking-wide text-dark">{exp.role}</h3>
                  <span className={`text-lg font-mono text-primary ${expandedCards[index] ? 'text-secondary' : ''}`}>
                    {expandedCards[index] ? '[-]' : '[+]'}
                  </span>
                </button>

                {expandedCards[index] && (
                  <div id={`experience-details-${index}`} className="p-4 sm:p-6 border-t border-border space-y-4">
                    <div className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-baseline">
                        <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0">Date</span>
                        <p className="text-secondary">{exp.startDate}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-baseline">
                        <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0">Company</span>
                        <p>{exp.company}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-baseline">
                        <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0">Location</span>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-5">
                      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-baseline">
                        <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0">Stack</span>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-0.5 bg-primary/80 text-dark font-mono border border-primary/30 cursor-default">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <div className="mt-4 sm:mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3 items-baseline pb-3">
                          <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0">Summary</span>
                          <p className="text-secondary leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-4 sm:mt-5 space-y-1">
                      <span className="text-secondary uppercase text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0 pl-1">Responsibilities</span>
                      {(() => {
                        const items = [...(exp.keyResponsibilities || [])];
                        if (items.length === 0) return null;
                        return items.map((item, i) => (
                          <p key={i} className="text-secondary text-sm leading-relaxed">
                            &gt; {item}
                          </p>
                        ));
                      })()}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

