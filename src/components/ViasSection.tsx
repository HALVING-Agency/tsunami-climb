import { useInView, anim } from '../hooks/useInView';

const levels = [
  { color: '#22C55E', name: 'Iniciación', grade: 'V0 – V2', desc: 'Primer contacto con la escalada. Movimientos básicos, pies y equilibrio.' },
  { color: '#3B82F6', name: 'Intermedio', grade: 'V3 – V5', desc: 'Consolidación técnica. Trabaja fuerza, coordinación y lectura de vías.' },
  { color: '#F97316', name: 'Avanzado', grade: 'V6 – V8', desc: 'Alto nivel técnico. Movimientos dinámicos, campus y resistencia.' },
  { color: '#EF4444', name: 'Élite', grade: 'V9+', desc: 'Máxima dificultad. Competición y proyectos de temporada.' },
];

export default function ViasSection() {
  const { ref, inView } = useInView();

  return (
    <section id="vias" className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="flex flex-col h-full justify-between">

        {/* Section label */}
        <div className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">02</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-white/30 text-xs tracking-widest uppercase">boulder & cuerdas</span>
        </div>

        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2
            className={`${anim(inView, 80).className} hero-title text-white font-medium text-[11vw] md:text-[8vw] leading-none`}
            style={anim(inView, 80).style}
          >
            vías &amp; boulder.
          </h2>

          {/* Levels grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {levels.map(({ color, name, grade, desc }, i) => (
              <div
                key={name}
                className={`${anim(inView, 160 + i * 80).className} border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-white/30 transition-colors`}
                style={anim(inView, 160 + i * 80).style}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-white/40 text-xs font-mono">{grade}</span>
                </div>
                <p className="text-white font-medium text-sm md:text-base">{name}</p>
                <p className="text-white/40 text-xs leading-relaxed hidden md:block">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Big stat */}
        <div className={`${anim(inView, 500).className} flex items-end justify-between border-t border-white/10 pt-5`} style={anim(inView, 500).style}>
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">altura máxima</p>
            <p className="text-white font-medium text-5xl md:text-7xl tracking-tight" style={{ letterSpacing: '-0.04em' }}>15m</p>
          </div>
          <p className="text-white/30 text-sm text-right max-w-[200px]">
            las vías artificiales más altas de la Comunidad de Madrid
          </p>
        </div>

      </div>
    </section>
  );
}
