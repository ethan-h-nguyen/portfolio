export default function Skills() {
  const categories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Shell/Bash'],
    },
    {
      category: 'Web Stack',
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Vercel'],
    },
    {
      category: 'Graphics & Compute',
      skills: ['WebGPU', 'WebGL', 'Three.js', 'Ray Tracing', 'Spatial Algorithms', 'Physics Simulation'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'VS Code'],
    },
    {
      category: 'Data Processing',
      skills: ['NumPy', 'pandas', 'SQL', 'Data Analysis'],
    },
  ];

  return (
    <section id="skills" className="mb-20">
      <div className="w-full">
        <div className="hidden sm:grid sm:grid-cols-[180px_1fr] border-b border-border pb-2 text-xs font-bold uppercase text-primary">
          <div>Category</div>
          <div>Technologies</div>
        </div>

        {categories.map((category) => (
          <div
            key={category.category}
            className="grid grid-cols-1 gap-2 border-b border-border py-3 sm:grid-cols-[180px_1fr] sm:gap-0"
          >
            <div className="text-sm font-semibold text-primary">
              {category.category}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-secondary">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
