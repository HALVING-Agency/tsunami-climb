import { useInView, anim } from '../hooks/useInView';

export default function ContactoSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contacto" className="relative h-dvh w-full bg-black flex flex-col justify-between px-6 md:px-10 py-24 overflow-hidden snap-start" style={{ scrollSnapStop: 'always' }}>
      <div ref={ref} className="flex flex-col h-full justify-between">

        {/* Section label */}
        <div className={`${anim(inView, 0).className} flex items-center gap-4`} style={anim(inView, 0).style}>
          <span className="text-white/30 text-xs tracking-widest uppercase">04</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Headline staggered */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className={`${anim(inView, 80).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none`}
            style={anim(inView, 80).style}
          >
            ¿listo para
          </h2>
          <h2
            className={`${anim(inView, 160).className} hero-title text-white font-medium text-[11vw] md:text-[9vw] leading-none text-right`}
            style={anim(inView, 160).style}
          >
            escalar?
          </h2>

          {/* Info row */}
          <div
            className={`${anim(inView, 280).className} mt-10 md:mt-14 flex flex-col md:flex-row gap-6 md:gap-16`}
            style={anim(inView, 280).style}
          >
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">ubicación</p>
              <p className="text-white text-sm">Avda. de Bruselas</p>
              <p className="text-white/60 text-sm">San Sebastián de los Reyes, Madrid</p>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">contacto</p>
              <p className="text-white text-sm">info@tsunamiclimb.com</p>
              <p className="text-white/60 text-sm">tsunamiclimb.com</p>
            </div>
          </div>

          {/* CTA button */}
          <div
            className={`${anim(inView, 380).className} mt-10`}
            style={anim(inView, 380).style}
          >
            <a
              href="https://www.tsunamiclimb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black text-base font-medium rounded-full px-10 py-4 hover:bg-neutral-200 transition-colors"
            >
              se apunta →
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div
          className={`${anim(inView, 480).className} border-t border-white/10 pt-5 flex items-center justify-between`}
          style={anim(inView, 480).style}
        >
          <div className="bg-white rounded-full px-3 py-1.5">
            <img src="/logo.jpg" alt="Tsunami Climbing Gym" className="h-6 w-auto" />
          </div>
          <p className="text-white/20 text-xs">© 2025 Tsunami Climbing Gym</p>
        </div>

      </div>
    </section>
  );
}
