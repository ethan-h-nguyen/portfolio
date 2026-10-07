'use client';

import { useEffect, useState } from 'react';
import HelpOverlay from './HelpOverlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Info from '@/components/Info';

type ViewKey = 'about' | 'projects' | 'skills' | 'experience' | 'info';

const VALID_VIEWS: ViewKey[] = [
  'about',
  'projects',
  'skills',
  'experience',
  'info',
];

const NAV_ITEMS: { key: ViewKey; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'experience', label: 'Experience' },
  { key: 'info', label: 'Info' },
];

function getViewFromHash(): ViewKey {
  if (typeof window === 'undefined') {
    return 'about';
  }

  const hash = window.location.hash.slice(1);

  return VALID_VIEWS.includes(hash as ViewKey)
    ? (hash as ViewKey)
    : 'about';
}

export default function AppShell() {
  const [activeView, setActiveView] = useState<ViewKey>('about');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  
  useEffect(() => {
    const syncViewFromHash = () => {
      setActiveView(getViewFromHash());
    };

    syncViewFromHash();

    window.addEventListener('hashchange', syncViewFromHash);

    return () => {
      window.removeEventListener('hashchange', syncViewFromHash);
    };
  }, []);

  function activeElementIsEditable(): boolean {
    const element = document.activeElement as HTMLElement | null;
    
    if (!element) {
      return false;
    }

    const tagName = element.tagName?.toLowerCase();
    
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
      return true;
    }

    if (tagName === 'button') {
      return true;
    }

    if (element.isContentEditable) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const key = event.key;
      const active = document.activeElement as HTMLElement | null;
      
      // Handle Help keys when open before other checks
      if (isHelpOpen && !event.ctrlKey && !event.altKey && !event.metaKey) {
        if (key === 'Escape' || key === '?') {
          setIsHelpOpen(false);
          return;
        }
        
        const keyNumber = parseInt(key, 10);
        if (keyNumber >= 1 && keyNumber <= 5) {
          setIsHelpOpen(false);
          
          const targetView: ViewKey = NAV_ITEMS[keyNumber - 1].key;
          
          setActiveView(targetView);
          
          const nextHash = `#${targetView}`;
          if (window.location.hash !== nextHash) {
            window.history.pushState(null, '', nextHash);
          }
          
          return;
        }
        
        return;
      }

      // Handle ? from Help trigger button - check before editable protection
      const isHelpTrigger = key === '?' && active?.hasAttribute('data-help-trigger') && !event.ctrlKey && !event.altKey && !event.metaKey;

      if (isHelpTrigger) {
        setIsHelpOpen(true);
        return;
      }

      // Handle numeric shortcuts 1–5 from Help trigger button - check before editable protection
      const n = parseInt(key, 10);
      const isNumericFromHelpTrigger = 
        n >= 1 && 
        n <= 5 && 
        active?.hasAttribute('data-help-trigger') && 
        !event.ctrlKey && 
        !event.altKey && 
        !event.metaKey;

      if (isNumericFromHelpTrigger) {
        const targetView: ViewKey = NAV_ITEMS[n - 1].key;
        setActiveView(targetView);
        const nextHash = `#${targetView}`;
        if (window.location.hash !== nextHash) {
          window.history.pushState(null, '', nextHash);
        }
        return;
      }

      // Check modifier keys and fall back to global ? toggle only for non-Help-trigger elements
      if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      // Toggle ? for non-help-trigger elements (editables already handled above)
      if (key === '?') {
        setIsHelpOpen((prev) => !prev);
        return;
      }

      // Global numeric handling for page focus only
      const globalN = parseInt(key, 10);
      if (isNaN(globalN) || globalN < 1 || globalN > 5) {
        return;
      }

      setIsHelpOpen(false);
      
      const targetView: ViewKey = NAV_ITEMS[globalN - 1].key;
      
      setActiveView(targetView);
      
      const nextHash = `#${targetView}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeElementIsEditable, isHelpOpen]);

  const switchView = (view: ViewKey) => {
    setActiveView(view);

    const nextHash = `#${view}`;

    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'info':
        return <Info />;
      case 'about':
      default:
        return <About />;
    }
  };

  return (
    <main className="h-screen bg-bg text-fg flex flex-col">
      <div className="flex-1 min-h-0 w-[90vw] mx-auto flex flex-col border border-border relative crt-scanlines">
        <header className="shrink-0 bg-bg">
          <div className="w-full px-4 py-4 border-b border-border">
            <div className="flex w-full flex-col gap-3 font-mono sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col">
                <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted">PORTFOLIO</div>

                <h1 className="text-2xl font-bold tracking-tight text-fg">
                  ehn<span className="text-muted">77</span>
                </h1>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-sm font-semibold text-fg">Computer Science Student</div>

                <div className="mt-0.5 text-xs text-muted">Full Stack Developer · ML Enthusiast</div>

                <div className="mt-1 text-xs text-muted">GPU/Graphics Researcher</div>
              </div>
            </div>
          </div>

          <nav
            className="max-w-6xl mx-auto px-0 sm:px-4 border-b border-border"
            aria-label="Portfolio navigation"
          >
            <div className="flex items-center overflow-hidden sm:overflow-x-auto">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeView === item.key;

                return (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={(event) => {
                      event.preventDefault();
                      switchView(item.key);
                    }}
                     aria-current={isActive ? 'page' : undefined}
                    className={`font-mono text-xs sm:text-sm whitespace-nowrap flex-1 sm:flex-none text-center px-1 sm:px-3 py-1.5 border-x border-transparent transition-colors ${
                      isActive
                        ? 'bg-hover text-bg font-semibold border-hover'
                        : 'text-muted hover:text-fg hover:bg-surface'
                    }`}
                  >
                    <span className="mr-1 opacity-70">({index + 1})</span>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        </header>

        <section
          className="flex-1 min-h-0 w-full max-w-6xl mx-auto px-4 py-6 overflow-y-auto terminal-scrollbar"
          aria-live="polite"
        >
          {renderActiveView()}
        </section>
      </div>

      <footer className={`shrink-0 block bg-surface border-t border-border`}>
        <div className="max-w-6xl mx-auto px-4 py-1 font-mono text-[11px] flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-4 text-muted">
  <span>@ehn77</span>
  <span>
    VIEW: <span className="text-fg">{activeView.toUpperCase()}</span>
  </span>
</div>

          <div className="flex items-center gap-4 text-muted">
            <button
              data-help-trigger
              onClick={() => setIsHelpOpen(true)}
              type="button"
              aria-label="Open help dialog"
              className="hover:text-fg transition-colors"
            >
              [?] help
            </button>
          </div>
        </div>
      </footer>

      {isHelpOpen && (
        <HelpOverlay onClose={() => setIsHelpOpen(false)} />
      )}
    </main>
  );
}
