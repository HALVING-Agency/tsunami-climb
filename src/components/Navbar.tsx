const links = [
  { label: 'nosotros', id: 'nosotros' },
  { label: 'vías', id: 'vias' },
  { label: 'actividades', id: 'actividades' },
  { label: 'contacto', id: 'contacto' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 left-0 right-0 px-6 md:px-10 pt-6 flex items-center justify-between gap-4 pointer-events-none">
      {/* Logo pill */}
      <div className="pointer-events-auto bg-neutral-900/90 backdrop-blur rounded-full px-5 py-2.5">
        <span className="text-white text-sm leading-none select-none">
          <span className="font-light">t</span><span className="font-bold tracking-wide">SUNAMI</span><span className="font-light text-white/60 ml-1.5">Climb</span>
        </span>
      </div>

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
    </nav>
  );
}
