import Link from 'next/link';

export default function SectionDivider({ 
  children, 
  id, 
  title 
}: { 
  children: React.ReactNode; 
  id?: string; 
  title: string; 
}) {
  return (
    <section 
      id={id || ''}
      className="mb-20 bg-accent/5"
    >
      <div className="container">
        <h2 className="scroll-mt-32 text-center mb-4 font-bold">{title}</h2>
        
        <div className="border-t border-primary py-6 max-w-xl mx-auto">
          {children}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-primary mt-8 flex-wrap">
          {[['GitHub', '#'], ['LinkedIn', '#'], ['Twitter/X', '#']].map(([platform, href]) => (
            <Link 
              key={platform} 
              href={href}
              className="text-secondary hover:text-primary transition-colors btn-text"
            >
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
