export default function Info() {
  return (
    <section id="info" className="mb-20">
      <div className="mx-auto min-h-fit py-4">
        {/* INFO */}
        <h3 className="text-fg font-bold text-xs uppercase mb-1">Info</h3>

        <hr className="border-border mb-6 w-full inline-block" />

        <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
          <span className="text-fg font-bold text-xs whitespace-nowrap uppercase">GitHub</span>
          <a
            href="https://github.com/ethan-h-nguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-fg transition-colors sm:truncate no-underline"
          >
            github.com/ethan-h-nguyen
          </a>
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline mt-2">
          <span className="text-fg font-bold text-xs whitespace-nowrap uppercase">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/ehn-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-fg transition-colors sm:truncate no-underline"
          >
            linkedin.com/in/ehn-dev/
          </a>
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline mt-2">
          <span className="text-fg font-bold text-xs whitespace-nowrap uppercase">Resume</span>
          <a
            href="/Ethan_Resume_V4-3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-fg transition-colors sm:truncate no-underline"
          >
            View PDF Resume
          </a>
        </div>

        <hr className="border-border mb-6 w-full inline-block mt-6" />

        <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
          <span className="text-fg font-bold text-xs whitespace-nowrap uppercase">Email</span>
          <span className="text-secondary text-sm sm:truncate">ehn24@drexel.edu</span>
        </div>
      </div>
    </section>
  );
}