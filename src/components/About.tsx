export default function About() {
  return (
    <section className="mb-20">
      <div id="about" className="scroll-mt-32 mb-12 text-left" />

      <div className="mx-auto min-h-fit py-4">
        {/* PROFILE */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1">profile</h3>

        <hr className="border-border mb-6 w-full inline-block" />

        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
          <span className="text-fg font-bold text-xs whitespace-nowrap">Name</span>
          <span className="text-secondary text-sm">Ethan Nguyen</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mt-2">
          <span className="text-fg font-bold text-xs whitespace-nowrap">Education</span>
          <span className="text-secondary text-sm sm:truncate">Drexel University — BS Computer Science</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mt-2">
          <span className="text-fg font-bold text-xs whitespace-nowrap">Location</span>
          <span className="text-secondary text-sm sm:truncate">Philadelphia</span>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline mt-2">
          <span className="text-fg font-bold text-xs whitespace-nowrap">GPA</span>
          <span className="text-secondary text-sm truncate uppercase">3.39</span>
        </div>

        {/* RECENT EXPERIENCE */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1 mt-8">Recent Experience</h3>

        <hr className="border-border mb-6 w-full inline-block" />

        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
          <span className="text-fg font-bold text-xs whitespace-nowrap">Role</span>
          <span className="text-secondary text-sm sm:truncate">Co-op Software Engineer (Full-Stack) — Intealth | ECFMG</span>
        </div>

        {/* BIO */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1 mt-8">Bio</h3>

        <hr className="border-border mb-6 w-full inline-block" />

<div className="max-w-2xl prose prose-sm text-secondary text-sm leading-relaxed mb-4">
  Computer Science student focused on software engineering, computer graphics, and full-stack development. Interested in building performant systems, graphics applications, and thoughtful user interfaces.
</div>

        {/* INTERESTS */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1 mt-8">Interests</h3>

        <hr className="border-border mb-6 w-full inline-block" />

<div className="grid grid-cols-2 gap-4 max-w-2xl prose prose-sm text-secondary text-sm leading-relaxed mb-4">
  <div>Full-Stack Development</div>
  <div>Computer Graphics</div>
  <div>Graphics Programming</div>
</div>

        {/* ML & DATA SCIENCE */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1 mt-8">ML & Data Science</h3>

        <hr className="border-border mb-6 w-full inline-block" />

<div className="max-w-2xl prose prose-sm text-secondary text-sm leading-relaxed mb-4">
  Artificial Intelligence, Machine Learning, Data Science
</div>

        {/* SIDE PROJECTS */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1 mt-8">Side Projects</h3>

        <hr className="border-border mb-6 w-full inline-block" />

<div className="max-w-2xl prose prose-sm text-secondary text-sm leading-relaxed">
  Building ASCII-based image/video rendering tools and experimenting with graphics and simulation projects outside coursework.
</div>
      </div>
    </section>
  );
}
