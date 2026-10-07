'use client';

import { useEffect, useState } from 'react';

interface SectionElement {
  id: string;
  element: HTMLElement;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  
  const links = [
    { key: 'about', label: 'About', href: '#about' },
    { key: 'projects', label: 'Projects', href: '#projects' },
    { key: 'skills', label: 'Skills', href: '#skills' },
    { key: 'experience', label: 'Experience', href: '#experience' },
  ];

  useEffect(() => {
    const sections = links.map(link => ({
      id: link.key,
      element: document.getElementById(link.key) as HTMLElement
    })).filter(s => !!s.element);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px 0px 0px', threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section.element));

    return () => observer.disconnect();
  }, []);

  const getActiveLabel = () => {
    switch(activeSection) {
      case 'about': return 'About';
      case 'projects': return 'Projects';
      case 'skills': return 'Skills';
      case 'experience': return 'Experience';
      default: return 'About';
    }
  };

  const getActiveDisplay = () => {
    switch(activeSection) {
      case 'about': return 'About.';
      case 'projects': return ' Projects';
      case 'skills': return ' Skills';
      case 'experience': return ' Exp';
      default: return 'About.';
    }
  };

  const isActive = (key: string) => activeSection === key;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-terminal-border bg-terminal-bg">
      <div className="max-w-6xl mx-auto px-4 py-1 flex items-center gap-2">
        <span className={`font-mono font-semibold min-w-[80px] ${isActive('about') ? 'text-primary' : 'text-secondary'}`}>{getActiveDisplay()}</span>
        
        <nav className="flex items-center gap-1 hidden sm:flex">
          {links.map((link, index) => (
            <a 
              key={link.key}
              href={link.href}
              className={`px-2 py-0.5 rounded transition-colors ${isActive(link.key) ? 'text-dark font-semibold' : 'text-terminal-muted hover:bg-terminal-hover hover:text-terminal-fg'}`}
            >
              <span className="opacity-80 text-[9px] mr-0.5">{index + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile nav */}
      <div className="sm:hidden flex items-center gap-1">
        {links.map((link, index) => (
          <a 
            key={link.key}
            href={link.href}
            className={`px-2 py-0.5 rounded transition-colors border-l-2 ${isActive(link.key) ? 'text-dark font-semibold border-terminal-fg' : 'text-terminal-muted border-transparent hover:bg-terminal-hover'})`}
          >
            <span className="opacity-80 text-[9px] mr-0.5">{index + 1}.</span>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}