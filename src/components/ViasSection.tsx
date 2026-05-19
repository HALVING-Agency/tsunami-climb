import { useEffect, useRef, useState } from 'react';

const levels = [
  { color: '#22C55E', name: 'Iniciación', grade: 'V0 – V2', desc: 'Primer contacto con la escalada. Movimientos básicos, pies y equilibrio.' },
  { color: '#3B82F6', name: 'Intermedio', grade: 'V3 – V5', desc: 'Consolidación técnica. Trabaja fuerza, coordinación y lectura de vías.' },
  { color: '#F97316', name: 'Avanzado', grade: 'V6 – V8', desc: 'Alto nivel técnico. Movimientos dinámicos, campus y resistencia.' },
  { color: '#EF4444', name: 'Élite', grade: 'V9+', desc: 'Máxima dificultad. Competición y proyectos de temporada.' },
];

export default function ViasSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll programático al centro de un paso — usado por las flechas en móvil
  const goToStep = (step: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const targetProgress = (step + 0.5) / 4;
    window.scrollTo({ top: elTop + targetProgress * scrollable, behavior: 'smooth' });
  };

  const activeStep = Math.min(3, Math.floor(progress * 4));
  const activeLevel = levels[activeStep];
  const trackPct = activeStep * (100 / 3);
  const showStat = progress >= 0.85;
  const showHint = progress < 0.72;

  return (
    <div id="vias" ref={sectionRef} style={{ height: '400vh' }}>
      <div className="relative sticky top-0 h-dvh overflow-hidden bg-black flex flex-col justify-between px-6 md:px-10 py-24">

        {/* Section label */}
        <div className="flex items-center gap-4">
          <span className="text-white/30 text-xs tracking-widest uppercase">02</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Headline */}
        <h2 className="hero-title text-white font-medium text-[11vw] md:text-[8vw] leading-none -mt-4">
          vías &amp; bloque.
        </h2>

        {/* Progress track */}
        <div className="relative flex flex-col gap-6">
          <div className="relative h-px bg-white/10 mx-4">
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${trackPct}%`,
                backgroundColor: activeLevel.color,
                transition: 'width 0.6s ease-in-out, background-color 0.4s ease',
              }}
            />
            {levels.map((level, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-2 h-2 rounded-full"
                style={{
                  left: `${i * (100 / 3)}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: i <= activeStep ? level.color : 'transparent',
                  borderColor: i <= activeStep ? level.color : 'rgba(255,255,255,0.2)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  transition: 'background-color 0.4s ease, border-color 0.4s ease',
                }}
              />
            ))}
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full shadow-lg"
              style={{
                left: `${trackPct}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: activeLevel.color,
                boxShadow: `0 0 10px ${activeLevel.color}80`,
                transition: 'left 0.6s ease-in-out, background-color 0.4s ease, box-shadow 0.4s ease',
              }}
            />
          </div>

          {/* Level names */}
          <div className="grid grid-cols-4 gap-2">
            {levels.map((level, i) => (
              <div
                key={i}
                className="text-center"
                style={{ opacity: i === activeStep ? 1 : 0.25, transition: 'opacity 0.4s ease' }}
              >
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: i === activeStep ? level.color : 'rgba(255,255,255,0.6)' }}
                >
                  {level.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Desktop: 4-col grid scroll-driven */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            {levels.map((level, i) => {
              const active = i === activeStep;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-5 flex flex-col gap-3 overflow-hidden"
                  style={{
                    border: `1px solid ${active ? level.color + '80' : 'rgba(255,255,255,0.08)'}`,
                    opacity: active ? 1 : 0.3,
                    transform: active ? 'scale(1)' : 'scale(0.97)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: level.color }} />
                    <span className="text-white/40 text-xs font-mono">{level.grade}</span>
                  </div>
                  <p className="text-white font-medium text-base">{level.name}</p>
                  <p
                    className="text-white/50 text-xs leading-relaxed"
                    style={{
                      maxHeight: active ? '4rem' : '0',
                      opacity: active ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.5s ease, opacity 0.4s ease',
                    }}
                  >
                    {level.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goToStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <div className="flex gap-1.5">
              {levels.map((level, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === activeStep ? activeLevel.color : 'rgba(255,255,255,0.2)',
                    transform: i === activeStep ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => goToStep(Math.min(3, activeStep + 1))}
              disabled={activeStep === 3}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>

          {/* Mobile: card activa a ancho completo */}
          <div className="md:hidden">
            <div
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-500"
              style={{ border: `1px solid ${activeLevel.color}80` }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: activeLevel.color }} />
                <span className="text-white/40 text-xs font-mono">{activeLevel.grade}</span>
              </div>
              <p className="text-white font-semibold text-lg">{activeLevel.name}</p>
              <p className="text-white/50 text-sm leading-relaxed">{activeLevel.desc}</p>
            </div>

            {/* Mini strip */}
            <div className="flex gap-2 mt-3">
              {levels.map((level, i) => i !== activeStep && (
                <div key={i} className="flex-1 rounded-xl p-3 border border-white/8 opacity-30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: level.color }} />
                    <span className="text-white text-[10px] font-medium truncate">{level.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Flechas de navegación */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <button
                onClick={() => goToStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              >
                ←
              </button>
              {/* Dots indicadores */}
              <div className="flex gap-1.5">
                {levels.map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: i === activeStep ? activeLevel.color : 'rgba(255,255,255,0.2)',
                      transform: i === activeStep ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => goToStep(Math.min(3, activeStep + 1))}
                disabled={activeStep === 3}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Sigue bajando hint */}
        <div
          className="absolute bottom-8 left-1/2 pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            opacity: showHint ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <div className="flex flex-col items-center gap-1.5 bg-black/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
            <span className="text-white/50 text-xs tracking-widest uppercase whitespace-nowrap">sigue bajando</span>
            <span className="text-white/30 text-sm leading-none">↓</span>
          </div>
        </div>

        {/* Bottom stat */}
        <div
          className="flex items-end justify-between border-t border-white/10 pt-5"
          style={{
            opacity: showStat ? 1 : 0,
            transform: showStat ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">altura máxima</p>
            <p className="text-white font-medium text-5xl md:text-7xl" style={{ letterSpacing: '-0.04em' }}>15m</p>
          </div>
          <p className="text-white/30 text-sm text-right max-w-[200px]">
            las vías artificiales más altas de la Comunidad de Madrid
          </p>
        </div>

      </div>
    </div>
  );
}
