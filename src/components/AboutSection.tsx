import { useInView, anim } from '../hooks/useInView';

const pillars = [
  { label: 'Bloque', sub: 'zona libre' },
  { label: 'Vías de cuerda', sub: '15 metros' },
  { label: 'Silks aéreos', sub: 'nueva actividad' },
  { label: 'Escuela infantil', sub: '4 – 14 años' },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="nosotros" className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="flex flex-col h-full justify-between">

        {/* Section label */}
        <div {...anim(inView, 0)} className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">01</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center -mt-8">
          <h2
            {...anim(inView, 100)}
            className={`${anim(inView, 100).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none`}
            style={anim(inView, 100).style}
          >
            más que
          </h2>
          <h2
            {...anim(inView, 180)}
            className={`${anim(inView, 180).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none text-right md:text-right`}
            style={anim(inView, 180).style}
          >
            un rocódromo.
          </h2>

          {/* Description */}
          <div
            {...anim(inView, 280)}
            className={`${anim(inView, 280).className} mt-8 md:mt-10 max-w-lg`}
            style={anim(inView, 280).style}
          >
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              En Tsunami Climbing Gym encontrarás las vías artificiales más altas de la Comunidad de Madrid — <strong className="text-white">15 metros</strong> diseñados para que principiantes y escaladores experimentados se superen cada día.
            </p>
            <p className="text-white/40 text-sm mt-3">
              San Sebastián de los Reyes, Madrid
            </p>
          </div>
        </div>

        {/* Pillars bottom strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-white/10">
          {pillars.map(({ label, sub }, i) => (
            <div
              key={label}
              {...anim(inView, 350 + i * 70)}
              className={`${anim(inView, 350 + i * 70).className} pt-5 pb-2 pr-4`}
              style={anim(inView, 350 + i * 70).style}
            >
              <p className="text-white text-sm font-medium">{label}</p>
              <p className="text-white/40 text-xs mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
