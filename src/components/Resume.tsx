import Image from 'next/image';
import Link from 'next/link';

export default function Resume() {
  return (
    <section className="mb-20">
      <h2 id="resume" className="scroll-mt-32 mb-8 text-center">Resume</h2>

      <div className="max-w-4xl mx-auto bg-primary/30 rounded-xl p-6 border-2 border-secondary">
        <p className="text-center text-secondary mb-6">
          Download my full resume:
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto p-8 bg-accent/10 rounded-lg">
          {/* TODO: Add your resume PDF URL or upload to public/ folder */}
          
          {/* Option 1: Direct download */}
          <a 
            id="resume-link"
            href="/resume.pdf" 
            className="text-white group hover:text-primary transition-colors flex items-center gap-3 px-6 py-4 border-2 border-secondary rounded-lg w-full justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Download Resume
          </a>

          {/* Option 2: View in browser */}
          <Link 
            id="resume-view-link"
            href="./resume.pdf" 
            className="text-white group hover:text-primary transition-colors flex items-center gap-3 px-6 py-4 border-2 border-secondary rounded-lg w-full justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View Resume
          </Link>

          {/* Alternative: Google Drive/Dropbox embed */}
          {process.env.NEXT_PUBLIC_RESUME_DRIVE_URL && (
            <a 
              href={process.env.NEXT_PUBLIC_RESUME_DRIVE_URL}
              className="text-white group hover:text-primary transition-colors flex items-center gap-3 px-6 py-4 border-2 border-secondary rounded-lg w-full justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 9h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/>
                <polyline points="17 9 15 7 13 9"/>
                <line x1="9" y1="5" x2="9" y2="4.00996"/>
              </svg>
              View on Drive
            </a>
          )}
        </div>

        {/* Alternative download options */}
        <p className="text-xs text-secondary mt-4">
          Looking for something specific? I also have:
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs text-accent">
          {['Cover Letter (Word)', 'Academic CV', 'Research Interests'].map((doc) => (
            <span key={doc} className="hover:text-primary transition-colors cursor-not-allowed">
              {doc} 
              {/* Uncomment when available: → <Link href={`/${doc.toLowerCase().replace(' ', '')}.pdf`} download/> */}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
