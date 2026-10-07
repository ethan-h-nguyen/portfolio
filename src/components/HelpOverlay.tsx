'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function HelpOverlay({ onClose }: { onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeBtnRef.current) {
      const previouslyFocused = document.activeElement as HTMLElement | null;
      closeBtnRef.current.focus();

      return () => {
        if (previouslyFocused && document.contains(previouslyFocused)) {
          previouslyFocused.focus();
        }
      };
    }
  }, []);

  const handleBackdropClick = (): void => {
    onClose();
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Tab') {
        event.preventDefault();
        closeBtnRef.current?.focus();
      }
    },
    []
  );

  useEffect(() => {
    const dialog = document.querySelector('[role="dialog"]') as HTMLElement | null;
    if (dialog) {
      dialog.addEventListener('keydown', handleKeyDown);
      return () => {
        dialog.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-dialog-title"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/80"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl min-h-[48vh] bg-surface border border-border flex flex-col p-4 sm:p-6 font-mono relative">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          type="button"
          aria-label="Close help dialog"
          className="absolute top-2 right-2 hover:text-fg transition-colors"
        >
          [ESC]
        </button>

        <h2
          id="help-dialog-title"
          className="text-xl font-bold tracking-tight text-fg mb-4 sm:mb-5 p-2"
          tabIndex={-1}
        >
          Help — Keyboard Shortcuts
        </h2>

        <div className="flex-1 overflow-y-auto terminal-scrollbar">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="text-muted border-b border-border">
                <th className="text-left py-2 pr-4">KEY</th>
                <th className="text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-1.5 pr-4 font-semibold text-fg">1</td>
                <td className="py-1.5">About</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-1.5 pr-4 font-semibold text-fg">2</td>
                <td className="py-1.5">Projects</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-1.5 pr-4 font-semibold text-fg">3</td>
                <td className="py-1.5">Skills</td>
              </tr>
               <tr className="border-b border-border">
                 <td className="py-1.5 pr-4 font-semibold text-fg">4</td>
                 <td className="py-1.5">Experience</td>
               </tr>
               <tr className="border-b border-border">
                 <td className="py-1.5 pr-4 font-semibold text-fg">5</td>
                 <td className="py-1.5">Info</td>
               </tr>
               <tr className="border-b border-border">
                 <td className="py-1.5 pr-4 font-semibold text-fg">?</td>
                <td className="py-1.5">Help</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-1.5 pr-4 font-semibold text-fg">Esc</td>
                <td className="py-1.5">Close Help</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
