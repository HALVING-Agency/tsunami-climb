import { useInView, anim } from '../hooks/useInView';

const row1 = [
  { text: 'Sitio increíble. Las vías son el punto, el ambiente es brutal y el personal super atento. Volveré mil veces.', author: 'Carlos M.' },
  { text: 'El bautismo de escalada fue una experiencia bestial. Brian y Víctor son unos máquinas. Muy recomendable.', author: 'Laura P.' },
  { text: 'Las instalaciones están top, muy bien cuidadas. Vías retadoras y hay para todos los niveles.', author: 'Marcos R.' },
  { text: 'Llevé a mis hijos al campamento y volvieron enamorados de la escalada. El equipo es genial.', author: 'Ana S.' },
];

const row2 = [
  { text: 'El rocódromo más chulo de Madrid Norte. 15 metros de vías, boulder y un ambiente de familia.', author: 'Diego F.' },
  { text: 'Fui con cero experiencia y salí queriendo volver al día siguiente. Los monitores son excepcionales.', author: 'Sofía G.' },
  { text: 'Gran espacio, muy limpio, vías de calidad y trato insuperable. Lo mejor de San Seba sin duda.', author: 'Javier T.' },
  { text: 'Empecé con el bono de 10 visitas y ya llevo 3 meses viniendo. Engancha un montón.', author: 'Marta V.' },
];

function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/15 rounded-2xl p-5 min-w-[300px] max-w-[300px] flex flex-col gap-3">
      <span className="text-xs tracking-wider" style={{ color: '#F59E0B' }}>★★★★★</span>
      <p className="text-white/80 text-sm leading-relaxed">{text}</p>
      <p className="text-white/30 text-xs">— {author}</p>
    </div>
  );
}

export default function ReviewsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="resenas" className="relative h-dvh w-full bg-black flex flex-col justify-between py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="px-6 md:px-10">
        {/* Section label */}
        <div className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">04</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Headline */}
      <div className="px-6 md:px-10 -mt-4">
        <h2
          className={`${anim(inView, 80).className} hero-title text-white font-medium text-[11vw] md:text-[8vw] leading-none`}
          style={anim(inView, 80).style}
        >
          lo que dicen.
        </h2>
        <div className={`${anim(inView, 160).className} mt-3 flex items-center gap-3`} style={anim(inView, 160).style}>
          <span className="text-white text-sm font-medium">★ 4.6</span>
          <span className="text-white/30 text-xs">·</span>
          <span className="text-white/40 text-xs">+200 reseñas en Google</span>
        </div>
      </div>

      {/* Marquee rows — full bleed */}
      <div className="flex flex-col gap-4 my-auto">
        <div className="overflow-hidden w-full">
          <div className="flex gap-4 w-max" style={{ animation: 'marquee-left 40s linear infinite' }}>
            {[...row1, ...row1].map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <div className="flex gap-4 w-max" style={{ animation: 'marquee-right 40s linear infinite' }}>
            {[...row2, ...row2].map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className={`${anim(inView, 280).className} px-6 md:px-10 border-t border-white/10 pt-4 flex items-center justify-between`} style={anim(inView, 280).style}>
        <p className="text-white/30 text-xs">valoración media</p>
        <a
          href="https://www.google.com/search?q=Tsunami+Climb+San+Sebastián+de+los+Reyes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 text-xs hover:text-white/60 transition-colors"
        >
          ver en Google →
        </a>
      </div>
    </section>
  );
}
