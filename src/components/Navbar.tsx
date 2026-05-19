import { useState } from 'react';

const links = [
  { label: 'nosotros', id: 'nosotros' },
  { label: 'vías', id: 'vias' },
  { label: 'actividades', id: 'actividades' },
  { label: 'reseñas', id: 'resenas' },
  { label: 'contacto', id: 'contacto' },
];

function getDocumentTop(el: HTMLElement): number {
  let top = 0;
  let curr: HTMLElement | null = el;
  while (curr) {
    top += curr.offsetTop;
    curr = curr.offsetParent as HTMLElement | null;
  }
  return top;
}

function jumpTo(top: number) {
  const html = document.documentElement;
  html.style.setProperty('scroll-snap-type', 'none');
  try {
    window.scrollTo({ top, behavior: 'instant' as ScrollBehavior });
  } catch {
    window.scrollTo(0, top);
  }
  setTimeout(() => { html.style.removeProperty('scroll-snap-type'); }, 100);
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  jumpTo(getDocumentTop(el));
}

function scrollToAfterClose(id: string) {
  // Let React re-render (close menu) + browser layout stabilize before scrolling
  requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(id)));
}

function scrollToTop() {
  const hero = document.getElementById('hero');
  if (!hero) { jumpTo(0); return; }
  const heroScrollable = hero.offsetHeight - window.innerHeight;
  const target = window.scrollY >= heroScrollable ? Math.round(0.85 * heroScrollable) : 0;
  jumpTo(target);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 px-6 md:px-10 pt-6 flex items-center justify-between gap-4 pointer-events-none">
      {/* Logo pill */}
      <button
        onClick={scrollToTop}
        className="pointer-events-auto bg-neutral-900/90 backdrop-blur rounded-full px-5 py-2.5 cursor-pointer"
      >
        <span className="text-white text-sm leading-none select-none">
          <span className="font-light">t</span><span className="font-bold tracking-wide">SUNAMI</span><span className="font-light text-white/60 ml-1.5">Climb</span>
        </span>
      </button>

      {/* Nav links pill (desktop only) */}
      <div className="pointer-events-auto hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
        {links.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile menu button + dropdown */}
      <div className="pointer-events-auto md:hidden relative">
        <button
          onClick={() => setOpen(v => !v)}
          className="bg-neutral-900/90 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-white text-base"
        >
          {open ? '✕' : '☰'}
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-2 bg-neutral-900/95 backdrop-blur-md rounded-2xl py-1.5 min-w-[160px] flex flex-col border border-white/10">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => { setOpen(false); scrollToAfterClose(id); }}
                className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-3 text-left"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
